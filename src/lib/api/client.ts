export async function apiFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      cache: 'no-store', // avoid stale data for dynamic pages
    })

    if (!res.ok) {
      const message = await res.text()
      throw new Error(`API Error ${res.status}: ${message}`)
    }

    return (await res.json()) as T
  } catch (err) {
    console.error('apiFetch error:', err)
    throw err
  }
}