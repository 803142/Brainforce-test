import { importAll } from '../helper';

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const data = { images };

export default data;
