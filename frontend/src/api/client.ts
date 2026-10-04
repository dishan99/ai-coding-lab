const API_BASE_URL = "http://127.0.0.1:8000"

export async function getApiInfo() {
  const response = await fetch(
    `${API_BASE_URL}/api/info`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch API information")
  }

  return response.json()
}