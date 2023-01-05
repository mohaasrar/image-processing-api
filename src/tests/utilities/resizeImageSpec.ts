import { imageResize } from '../../utilities/resizeImage';

describe('Test image resizing functionality', () => {
  it('should return an error message if file does not exist', async () => {
    const fn = 'testimage';
    const h = 200;
    const w = 200;
    const resizePath = `./public/${fn}${w}x${h}.jpg`;
    const response = await imageResize(fn, h, w);
    response.toFile(resizePath, (err: Error) => {
      expect(err.message).toEqual('Input file is missing');
    });
  });

  it('shoud create a resized image', async () => {
    await expectAsync(imageResize('fjord', 300, 300)).toBeResolved();
  });
});
