import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import { card1, card2 } from './styles/card.css';
import CatImg from './assets/cat.jpg';

const {div, a, img} = helpers(h);

const cat = img({src: CatImg})

const card = div({className: card2}, cat);

export default card
