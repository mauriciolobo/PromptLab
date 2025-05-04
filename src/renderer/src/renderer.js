
document.addEventListener('DOMContentLoaded', async () => {
  const submitBtn = document.getElementById('submitBtn')
  const output = document.getElementById('output')
  const apiKeyInput = document.getElementById('groqApiKey')

  if (window.api && window.api.getApiKey) {
    const apiKey = await window.api.getApiKey()
    apiKeyInput.value = apiKey
  }

  submitBtn.addEventListener('click', async () => {
    // Disable the button and show loading
    submitBtn.disabled = true
    submitBtn.textContent = 'Loading...'
    output.value = 'Loading, please wait...'

    // Mimic 3s waiting
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Restore button and output placeholder
    submitBtn.disabled = false
    submitBtn.textContent = 'Submit'
    output.value = 'AI output will appear here...'
  })
})
