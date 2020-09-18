import { verify } from 'jsonwebtoken';

export default function auth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    const [, token] = authHeader.split(' ');

    verify(token, process.env.MY_SECRET_JWT);

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid jwt token' });
  }
}
