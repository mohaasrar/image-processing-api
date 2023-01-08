import express from 'express';
import path from 'path';
import { imageResize } from '../../utilities/resizeImage';
import { promises as fsPromises } from 'fs';
import fs from 'fs';

const images = express.Router();

images.get(
  '/',
  async (
    req: express.Request,
    res: express.Response
  ): Promise<void | string> => {
    try {
      const fname = req.query.fname as unknown as string;
      const height = req.query.height as unknown as string;
      const width = req.query.width as unknown as string;

      if (fname === undefined || height === undefined || width === undefined) {
        res.status(400).send('please enter all parameters');
        return;
      }

      const h = Number(height);
      if (isNaN(h)) {
        res.status(400).send('height must be number');
        return;
      }
      const w = Number(width);
      if (isNaN(w)) {
        res.status(400).send('width must be number');
        return;
      }
      const fileExists = path.resolve(
        __dirname,
        `../../../assets/images/full/${fname}.jpg`
      );

      if (!fs.existsSync(fileExists)) {
        res.status(400).send('file name does not exist');
        return;
      }

      const imagePath: string = `public/images/${fname}${h}x${w}.jpg`;

      if (!fs.existsSync(imagePath)) {
        const resizedImage = await imageResize(fname, h, w);
        await fsPromises.writeFile(imagePath, resizedImage);
      }
      res.sendFile(path.resolve(imagePath));
    } catch (err) {
      res.send('An error occurred please check the file name and parameters');
      return;
    }
  }
);

export default images;
