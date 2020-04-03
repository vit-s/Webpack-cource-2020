import Post from '@models/Post';
// import json from './assets/json';
// import xml from './assets/xml';
// import csv from './assets/csv';
import '@/styles/styles.css';
import WebpackLogo from '@/assets/wp.png';



const post = new Post('Webpack post title', WebpackLogo);
// console.log('Post to String', post.toString());
// console.log('JSON: ', json.title);
// console.log('CSV: ', csv);