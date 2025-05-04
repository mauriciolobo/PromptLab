import { Groq } from 'groq-sdk'

document.addEventListener('DOMContentLoaded', async () => {
  const submitBtn = document.getElementById('submitBtn')
  const output = document.getElementById('output')
  const apiKeyInput = document.getElementById('groqApiKey')
  const systemPromptInput = document.getElementById('systemPrompt')
  const userPromptInput = document.getElementById('userPrompt')

  if (window.api && window.api.getApiKey) {
    const apiKey = await window.api.getApiKey()
    apiKeyInput.value = apiKey
  }

  submitBtn.addEventListener('click', async () => {
    // Disable the button and show loading
    submitBtn.disabled = true
    submitBtn.textContent = 'Loading...'
    output.textContent = 'Loading, please wait...'

    try {
      const systemPrompt = systemPromptInput.value
      const userPrompt = userPromptInput.value
      const result = await get_output(systemPrompt, userPrompt)
      output.textContent = result
    } catch (err) {
      output.textContent = 'Error: ' + err.message
    }

    // Restore button and output placeholder
    submitBtn.disabled = false
    submitBtn.textContent = 'Submit'
  })
})

async function get_output(systemPrompt, userPrompt) {
  const groq = new Groq({
    apiKey: document.getElementById('groqApiKey').value,
    dangerouslyAllowBrowser: true
  })
  let result = ''
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: systemPrompt
      },
      {
        role: 'user',
        content: userPrompt
      }
    ],
    model: 'meta-llama/llama-4-scout-17b-16e-instruct',
    temperature: 1,
    max_completion_tokens: 1024,
    top_p: 1,
    stream: true,
    stop: null
  })

  for await (const chunk of chatCompletion) {
    result += chunk.choices[0]?.delta?.content || ''
  }

  console.log(chatCompletion)

  return result
}
