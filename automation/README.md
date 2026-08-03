# Automatización: Lead del sitio → WhatsApp a Papá

Cuando alguien llena el formulario de la web, tu papá recibe un mensaje de
WhatsApp al instante con los datos del cliente. Eso es lo que nos hace
diferentes: respondemos en minutos, no en días.

```
Formulario web  →  /api/leads  →  LEAD_WEBHOOK_URL (n8n Webhook)
                                        ↓
                              Formatear mensaje
                                        ↓
                        WhatsApp a Papá (y a Eduardo, opcional)
```

## Por qué CallMeBot para empezar

El flujo usa **CallMeBot**: una forma gratis de enviar un WhatsApp a un número
que ya autorizó recibir mensajes (perfecto para avisarle al *dueño*, o sea a
tu papá). Cero cuenta de Meta, cero aprobación de plantillas, funciona hoy.

> Más adelante, para **auto-responder al cliente** (no solo avisar a papá) se
> necesita la WhatsApp Business Cloud API o Twilio, ver la sección "Subir de
> nivel" abajo.

## Puesta en marcha (5 minutos)

### 1. Autorizar el número de tu papá en CallMeBot
Desde el WhatsApp de tu papá:
1. Agrega el contacto **+34 644 51 95 23** (número de CallMeBot).
2. Envíale el mensaje: **`I allow callmebot to send me messages`**
3. Te responde con un **apikey**. Guárdalo.

(Repite con tu propio número si quieres que a ti también te llegue.)

### 2. Importar el flujo en n8n
1. En n8n: **Workflows → Import from File**.
2. Selecciona `n8n-lead-to-whatsapp.json`.
3. Abre el nodo **"Notificar a Papá (WhatsApp)"** y reemplaza
   `TU_APIKEY_CALLMEBOT_PAPA` por el apikey del paso 1.
   (Verifica que `phone` sea `+59167766239`.)
4. (Opcional) Habilita el nodo **"Notificar a Eduardo"**, pon tu número y tu apikey.

### 3. Conectar el sitio con n8n
1. **Activa** el workflow en n8n (toggle arriba a la derecha).
2. Copia la **Production URL** del nodo Webhook
   (algo como `https://TU-n8n.com/webhook/lead-edifica`).
3. En el proyecto web, crea `.env.local` (copiando `.env.example`) y pon:
   ```
   LEAD_WEBHOOK_URL=https://TU-n8n.com/webhook/lead-edifica
   ```
4. Reinicia el sitio (`npm run dev`) o vuelve a desplegar en Vercel con esa
   variable de entorno.

### 4. Probar
Llena el formulario en la web (o desde la terminal):
```bash
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"Prueba","phone":"70011122","projectType":"Construcción de casa nueva","message":"Quiero cotizar"}'
```
Debe llegarle el WhatsApp a tu papá en segundos. ✅

## Subir de nivel (después)

- **Auto-responder al cliente** apenas envía el formulario ("Gracias, le
  contactaremos hoy"): requiere **WhatsApp Business Cloud API** (Meta) o
  **Twilio WhatsApp**. n8n tiene nodos nativos para ambos. Reemplaza el nodo
  HTTP de CallMeBot por el nodo correspondiente.
- **Guardar el lead en base de datos** (Supabase): agrega un nodo de Supabase
  entre "Formatear mensaje" y las notificaciones. Esto alimenta el futuro CRM
  (Fase 2).
- **Notificar por múltiples canales** (Telegram, email): agrega nodos en
  paralelo desde "Formatear mensaje".

## Notas

- El sitio **no depende** de este flujo: si n8n está caído, el lead igual se
  registra en los logs del servidor y el usuario ve el botón de WhatsApp. El
  webhook solo *agrega* la notificación instantánea.
- CallMeBot es ideal para avisar al dueño; no sirve para escribirle primero a
  un cliente que no autorizó (para eso, la Cloud API).
