import Post from './Post';
import json from './assets/json';
import './styles/styles.css';
import WebpackLogo from './assets/wp.png';
const post = new Post('Webpack post title', WebpackLogo);
console.log('Post to String', post.toString());

console.log('JSON: ', json.title);