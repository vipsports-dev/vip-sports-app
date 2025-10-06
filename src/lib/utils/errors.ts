export function handleError(err: unknown): { message: string } {
  if (err instanceof Error) {
    console.error(err)
    return { message: err.message }
  }
  console.error('Unknown error:', err)
  return { message: 'An unexpected error occurred' }
}