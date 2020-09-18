import { hash } from 'bcrypt';

import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const {
        name,
        email,
        password,
        telephone,
        latitude,
        longitude,
      } = req.body;

      const isUser = await User.findOne({ email });

      if (isUser) {
        return res
          .status(401)
          .json({ error: 'This email already exists, please try again' });
      }

      const passCrypt = await hash(password, 8);

      const user = await User.create({
        name,
        email,
        password: passCrypt,
        telephone,
        latitude,
        longitude,
      });

      return res.status(201).json(user);
    } catch {
      // continue regardless of error
    }
  }

  async update(req, res) {
    try {
      const { id, password } = req.body;

      const isUser = await User.findById(id, 'email');

      if (!isUser) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      const passCrypt = await hash(password, 8);

      req.body.password = passCrypt;
      const result = await User.findByIdAndUpdate(id, req.body, { new: true });

      delete result.password;

      return res
        .status(200)
        .json({ message: 'user update successfully', user: { result } });
    } catch {
      // continue regardless of error
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.body;

      await User.findByIdAndRemove(id);

      return res.status(200).json({ message: 'User deleted successfully' });
    } catch {
      // continue regardless of error
    }
  }
}

export default new UserController();
