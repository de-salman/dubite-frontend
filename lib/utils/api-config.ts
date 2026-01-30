/**
 * Get the base URL for the backend API
 */
export function getApiBaseUrl(): string {
  // In production, use environment variable
  // In development, default to localhost:5050 (backend port)
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050';
}
