export const prerender = true;

import { json } from '@sveltejs/kit';

export const GET = async () => {
  return json({
    id: 1,
    summary: 'Fetch the external JSON content when it is revealed.',
    content: 'The returned JSON content! Check your network monitor.'
  });
};