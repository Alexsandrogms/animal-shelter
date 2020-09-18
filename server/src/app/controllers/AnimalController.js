import Animal from '../models/Animal';

class AnimalController {
  async store(req, res) {
    const { avatar, breed, gender, deficiency, name } = req.body;

    await Animal.create({ avatar, breed, gender, deficiency, name });

    return res.status(201).json({ message: 'Animal create successfully' });
  }

  async show(req, res) {
    const animals = await Animal.find();

    if (!animals) {
      return res.status(404).json({ message: 'No animals were found' });
    }

    return res.status(200).json(animals);
  }
}

export default new AnimalController();
