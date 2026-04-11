const N8N_WEBHOOK_BASE = process.env.N8N_WEBHOOK_BASE_URL

interface WebhookPayload {
  [key: string]: unknown
}

export async function triggerWorkflow(webhookPath: string, payload: WebhookPayload) {
  if (!N8N_WEBHOOK_BASE) {
    throw new Error('N8N_WEBHOOK_BASE_URL is not configured')
  }

  const res = await fetch(`${N8N_WEBHOOK_BASE}/${webhookPath}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    throw new Error(`n8n webhook failed: ${res.status}`)
  }

  return res.json()
}
