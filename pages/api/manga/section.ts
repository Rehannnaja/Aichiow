import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { type } = req.query

  let url = `https://api.mangadex.org/manga?limit=12&includes[]=cover_art&contentRating[]=safe`

  if (type === 'ongoing' || type === 'completed') {
    url += `&status[]=${type}&order[followedCount]=desc`
  } else if (type === 'top_rated') {
    url += `&order[rating]=desc`
  } else if (type === 'latest') {
    url += `&order[latestUploadedChapter]=desc`
  }

  try {
    const response = await axios.get(url)
    res.status(200).json(response.data.data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch manga section' })
  }
}
