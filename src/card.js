import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import { card, cardBody, cardImage } from './styles/card-carousel.css';
import CatImg from './assets/cat.jpg';
import Avatar from './assets/avatar.png';
import Like from './assets/heart.png';
import Comment from './assets/chat.png';
import Share from './assets/share.png';

const {div, a, img, h3} = helpers(h);

const photo = img({src: CatImg, className: cardImage});
const avatar = img({src: Avatar, className: cardAvatar});
const name = h3('Isabela.Souza');
const like = img({src: Like});
const comment = img({src: Comment});
const share = img({src: Share});
const text = p(' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque exercitationem vel, ad accusantium quod aut sit aliquid.')
const textContainer = div({classname: textContainer}, text);


const actionIcons = div({className: cardActions}, [like, comment, share])


const content = div({className: cardBody}, [avatar, name, actionIcons, textContainer]);

const cardContainer = div({className: card}, [photo, content]);

export default cardContainer
