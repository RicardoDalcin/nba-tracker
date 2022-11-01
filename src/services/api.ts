export function api<T>(url: string): Promise<T> {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': process.env.NEXT_PUBLIC_API_HOST || '',
      'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY || '',
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as T;
  });
}
