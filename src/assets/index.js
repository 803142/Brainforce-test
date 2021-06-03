import { importAll } from '../helper';

import { baseData, keys } from './base.data';

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

export { images, baseData, keys };
