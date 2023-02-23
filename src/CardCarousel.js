import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import carousel from './styles/card-carousel.css';
import common from './styles/card-common.css';
import CatImg from './assets/cat.jpg';
import Avatar from './assets/avatar.png';
import Like from './assets/heart.png';
import Comment from './assets/chat.png';
import Share from './assets/share.png';
import global from './styles/card-global.css';
import Squares from './assets/squares.png';

const {div, a, img, h3, p} = helpers(h);

const photo = img({src: CatImg, className: common.cardImage});
const icon = img({src: Squares})
const iconContainer = div({className: carousel.cardIcon}, icon);
const photoContainer = div ({className: common.photoContainer}, [photo, iconContainer])
const avatar = img({src: Avatar, className: common.cardAvatar});
const name = h3('Isabela.Souza');
const user = div({className: common.cardUser}, [avatar, name])
const like = img({src: Like});
const comment = img({src: Comment});
const share = img({src: Share});
const actionIcons = div({className: common.cardActions}, [like, comment, share])
const contentHeader = div({className: common.cardHeader}, [user, actionIcons])
const text = p(' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque exercitationem vel, ad accusantium quod aut sit aliquid.')
const textContainer = div({classname: 'cardText'}, text);




const content = div({className: common.cardContent}, [contentHeader, textContainer]);

const cardContainer = div({className: 'card'}, [photoContainer, content]);

export default cardContainer
