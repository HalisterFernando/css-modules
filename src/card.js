import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import { card, cardBody, cardImage } from './styles/card-carousel.css';
import CatImg from './assets/cat.jpg';

const {div, a, img} = helpers(h);

const cat = img({src: CatImg, className: cardImage})
const body = div({className: cardBody})

const cardContainer = div({className: card}, cat);

export default cardContainer
