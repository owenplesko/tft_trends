import type { NextApiRequest, NextApiResponse } from 'next'
import { getAugmentStatGameVersions } from '~/database/augmentStats'
 
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string[]>
) {
    const gameVersions = await getAugmentStatGameVersions()
    res.status(200).json(gameVersions)
}
