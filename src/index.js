import m from 'mithril';
import './style.css';
// import img1 from './test.jpg'
// const newImg = new Image();
// newImg.src = img1;
import DB from './functions/firebase/config';

DB.collection('start').onSnapshot(startsDB => {
    console.log('new....')
    startsDB.forEach(startDB => {
        console.dir(startDB.data());
    })
})
const root=document.querySelector('#root');

m.render(root, m("h1", "My first app"))
// let rootImg = document.getElementById('image').innerHTML = `<img src=${img1} />` ;
// rootImg.appendChild(newImg);