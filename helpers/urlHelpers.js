import {baseUrl} from '../common/config';

export const buildImageUri = imagePath => {
  return baseUrl + imagePath;
};
