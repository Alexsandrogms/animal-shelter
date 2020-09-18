import { compare } from 'bcrypt';
import * as dotenv from 'dotenv';
import { sign } from 'jsonwebtoken';
import User from '../models/User';

dotenv.config();

class AuthController {
  async authenticate(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(404)
          .json({ message: 'Incorrect email or password!' });
      }
      const matchPass = await compare(password, user.password);

      if (!matchPass) {
        return res
          .status(404)
          .json({ message: 'Incorrect email or password!' });
      }

      const token = sign({ password }, process.env.MY_SECRET_JWT, {
        expiresIn: '1d',
      });

      delete user.password;

      return res.status(202).json({ user, token });
    } catch {
      // continue regardless of error
    }
  }
}

export default new AuthController();
