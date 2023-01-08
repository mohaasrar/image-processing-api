import sharp, { Sharp } from 'sharp';
import path from 'path';

export const imageResize = async (
  fname: string | null,
  height: number | null,
  width: number | null
): Promise<Sharp> => {
  const imagepath = path.resolve(`assets/images/full/${fname}.jpg`);
  const resizedimage = await sharp(imagepath)
    .resize(width, height)
    .on('error', function (err) {
      console.log(err);
    });

  return resizedimage;
};

export default imageResize;
