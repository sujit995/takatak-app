import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'm7pye4bk',
  dataset: 'production',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});