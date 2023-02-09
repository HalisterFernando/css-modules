import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import { card1, card2 } from './styles/card.css';

const {div, a, img} = helpers(h);

console.log(card2);
const card = div({className: card2}, 'teste');

export default card
