import { ThumbnailPipe } from './thumbnail.pipe';

describe('ThumbnailPipe', () => {
  it('should return image url with thumbnail suffix', () => {
    const pipe = new ThumbnailPipe();
    const result = pipe.transform('test-string.jpg');
    expect(result).toBe('test-string-thumbnail.jpg');
  });

  it('should throw an error if the value is undefined', () => {
    const pipe = new ThumbnailPipe();
    const result = pipe.transform(undefined);
    expect(result).toThrowError('ThumbnailPipe value is undefined');
  });
});
