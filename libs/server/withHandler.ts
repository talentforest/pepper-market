import { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

interface ConfigType {
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}

type method = 'GET' | 'POST' | 'DELETE';

export default function withHandler({
  methods,
  handler,
  isPrivate = true,
}: ConfigType) {
  return function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method && !methods.includes(req.method as method)) {
      return res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: 'Plz login' });
    }
    try {
      handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
