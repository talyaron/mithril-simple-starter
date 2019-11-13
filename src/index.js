import m from 'mithril';
import './style.css';
// importing img
// import img1 from './test.jpg'
// const newImg = new Image();
// newImg.src = img1;
import DB from './functions/firebase/config';

//components
import App from './views/App';
console.dir(App)

DB.collection('start').onSnapshot(startsDB => {
    console.log('new....')
    startsDB.forEach(startDB => {
        console.dir(startDB.data());
    })
})
const root=document.querySelector('#root');

m.mount(root, App)
// let rootImg = document.getElementById('image').innerHTML = `<img src=${img1} />` ;
// rootImg.appendChild(newImg);