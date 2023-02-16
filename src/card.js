import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import { card, cardContent, cardImage, cardAvatar, cardActions, cardText, cardHeader, cardUser } from './styles/card-carousel.css';
import CatImg from './assets/cat.jpg';
import Avatar from './assets/avatar.png';
import Like from './assets/heart.png';
import Comment from './assets/chat.png';
import Share from './assets/share.png';

const {div, a, img, h3, p} = helpers(h);

const photo = img({src: CatImg, className: cardImage});
const avatar = img({src: Avatar, className: cardAvatar});
const name = h3('Isabela.Souza');
const user = div({className: cardUser}, [avatar, name])
const like = img({src: Like});
const comment = img({src: Comment});
const share = img({src: Share});
const actionIcons = div({className: cardActions}, [like, comment, share])
const contentHeader = div({className: cardHeader}, [user, actionIcons])
const text = p(' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque exercitationem vel, ad accusantium quod aut sit aliquid.')
const textContainer = div({classname: cardText}, text);




const content = div({className: cardContent}, [contentHeader, textContainer]);

const cardContainer = div({className: card}, [photo, content]);

export default cardContainer
