export const GET = async () => {
  const headers = { headers: { 'Content-Type': 'text/html' }}

  return new Response('<span>The returned HTML content! Check your network monitor.</span>', headers);
};