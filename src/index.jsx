import * as $ from 'jquery';
import Post from '@models/Post';
// import json from './assets/json';
// import xml from './assets/xml';
// import csv from './assets/csv';
import WebpackLogo from '@/assets/wp.png';
import React from 'react';
import {render} from 'react-dom';
import './babel';
import '@/styles/styles.css';
import '@/styles/less.less';
import '@/styles/scss.scss';



// const post = new Post('Webpack post title', WebpackLogo);
let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quidem.';
// $('pre').addClass('code').html(text);
const App = () => (
    <div className="container">
        <h1>Webpack Course</h1>
        <hr />
        <div className="logo"/>
        <hr />
        <pre>{text}</pre>
        <div className="box">
            <h2>Less</h2>
        </div>
        <div className="card">
            <h2>SCSS</h2>
        </div>
    </div>
);

render(<App />, document.getElementById('app'));
// console.log('Post to String', post.toStr());
// console.log('JSON: ', json.title);
// console.log('CSV: ', csv);