import { NextResponse } from "next/server";

/**
 * Lead intake endpoint: the heart of "El Motor de Clientes".
 *
 * Flow:
 *   1. Validate the incoming lead.
 *   2. Forward it to an automation webhook (n8n) if LEAD_WEBHOOK_URL is set.
 *      n8n then handles: store in DB (Supabase) + send WhatsApp notification
 *      to Eduardo and Dad. This keeps the app deployment-simple and lets the
 *      automation evolve without redeploying the site.
 *   3. Always log server-side so no lead is silently lost.
 *
 * When the webhook isn't configured yet, the form still "succeeds" for the
 * user (they also get the WhatsApp fallback in the UI), and the lead is logged.
 */

type Lead = {
  name?: string;
  phone?: string;
  projectType?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Lead;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.toString().trim();
  const phone = body.phone?.toString().trim();

  if (!name || !phone) {
    return NextResponse.json(
      { error: "El nombre y el teléfono son obligatorios." },
      { status: 400 },
    );
  }

  const lead = {
    name,
    phone,
    projectType: body.projectType?.toString().trim() ?? "",
    message: body.message?.toString().trim() ?? "",
    source: "website",
    createdAt: new Date().toISOString(),
  };

  // Server-side record (visible in hosting logs) so leads are never lost.
  console.log("[LEAD]", JSON.stringify(lead));

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      // Don't fail the user's submission if the automation is down:
      // the lead is still logged above and the UI offers WhatsApp.
      console.error("[LEAD] webhook forward failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
