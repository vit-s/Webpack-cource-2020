import Post from './Post';
import json from './assets/json';
import './styles/styles.css';
const post = new Post('Webpack post title');
console.log('Post to String', post.toString());

console.log('JSON: ', json.title);