import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../utils/firebase';

type Data = {
  total: number;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const uri = req.query.category + '/' + req.query.slug;

  if (req.method === 'POST') {
    const ref = db.ref('/views').child(uri);

    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) return 1;
      return currentViews + 1;
    });

    const views = snapshot.val();

    return res.status(200).json({
      total: views,
    });
  }
  if (req.method === 'GET') {
    const snapshot = await db.ref('/views').child(uri).once('value');

    const views = snapshot.val();
    return res.status(200).json({ total: views });
  }
};
