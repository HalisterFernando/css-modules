import h from 'hyperscript';
import helpers from 'hyperscript-helpers';
import info from './styles/card-info.css';
import bell from './assets/bell.png';
import common from './styles/card-common.css'


const {div, a, img, h3, p, span, button} = helpers(h);

const icon = img({src: bell, className: info.icon});
const badge = span('7')
const iconContainer = div({className: info.iconContainer}, [badge, icon]);
const title = h3('Ative as notificações')
const text = p(' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque exercitationem vel, ad accusantium quod aut sit aliquid.')
const actionButton = button({className: info.actionButton}, 'Ativar')
const textContainer = div({className: info.cardText}, [title, text]);




const content = div({className: common.cardContent}, [textContainer, actionButton]);

const cardContainer = div({className: `card ${info.cardInfo}`}, [iconContainer, content]);

export default cardContainer
