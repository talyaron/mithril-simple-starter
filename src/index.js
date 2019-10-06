import m from 'mithril';
import './style.css';
// import img1 from './test.jpg'
// const newImg = new Image();
// newImg.src = img1;



const root=document.querySelector('#root');

m.render(root, m("h1", "My first app"))
// let rootImg = document.getElementById('image').innerHTML = `<img src=${img1} />` ;
// rootImg.appendChild(newImg);