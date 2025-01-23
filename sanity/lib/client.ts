import { createClient } from 'next-sanity';
import { NextApiRequest, NextApiResponse } from 'next';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_TOKEN, // Use environment variable for the token
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await client.fetch('*[_type == "post"]');
      res.status(200).json(data);
    } catch (error) {
      // Narrow the type of error
      if (error instanceof Error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
      } else {
        res.status(500).json({ message: 'An unknown error occurred' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
