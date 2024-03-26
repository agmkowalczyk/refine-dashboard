const customFetch = async (url: string, options: RequestInit) => {
  const accesToken = localStorage.getItem('access_token')

  const headers = options.headers as Record<string, string>

  return await fetch(url, {
    ...options,
    headers: {
      ...headers,
      Authorization: headers?.Authorization || `Bearer ${accesToken}`,
      'Content-Type': 'application/json',
      'Apollo-Require-Preflight': 'true',
    },
  })
}

