import express from 'express';
import path from 'path';
import { imageResize } from '../../utilities/resizeImage';
import { promises as fsPromises } from 'fs';
import fs from 'fs';

const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const fname = req.query.fname as unknown as string;
    const h = parseInt(req.query.height as unknown as string);
    const w = parseInt(req.query.width as unknown as string);

    if (fname === undefined || fname === undefined || fname === undefined) {
      res.status(400).send('please enter all parameters');
      return;
    }

    const ishnum = Number(h);
    if (!ishnum) {
      res.status(400).send('height must be number');
      return;
    }
    const iswnum = Number(w);
    if (!iswnum) {
      res.status(400).send('width must be number');
      return;
    }
    const imagePath: string = `public/images/${fname}${h}x${w}.jpg`;

    if (!fs.existsSync(imagePath)) {
      const resizedImage = await imageResize(fname, h, w);
      console.log(resizedImage);
      await fsPromises.writeFile(imagePath, resizedImage);
    }
    res.sendFile(path.resolve(imagePath));
  } catch (err) {
    res.send('An error occurred please check the file name and parameters');
  }
});

export default images;
