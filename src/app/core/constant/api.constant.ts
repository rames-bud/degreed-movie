import { environment } from 'src/environments/environment';

const apiPath = environment.apiPath;
const apiKey = environment.apiKey;

export const APIConstant = {
  basePath: `${apiPath}/?apiKey=${apiKey}`
};
