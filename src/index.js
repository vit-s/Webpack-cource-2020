import * as $ from 'jquery';
import Post from '@models/Post';
// import json from './assets/json';
// import xml from './assets/xml';
// import csv from './assets/csv';
import '@/styles/styles.css';
import WebpackLogo from '@/assets/wp.png';



const post = new Post('Webpack post title', WebpackLogo);
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quidem.';
$('pre').addClass('code').html(text);

console.log('Post to String', post.toStr());
// console.log('JSON: ', json.title);
// console.log('CSV: ', csv);