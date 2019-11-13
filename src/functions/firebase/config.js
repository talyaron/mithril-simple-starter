import * as firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyC5IOE7PMNjNohc5qDcEfbvPhYFgYRSZcs',
	authDomain: 'fir-dev-1a3fb.firebaseapp.com',
	databaseURL: 'https://fir-dev-1a3fb.firebaseio.com',
	projectId: 'fir-dev-1a3fb',
	storageBucket: 'fir-dev-1a3fb.appspot.com',
	messagingSenderId: '1001883121466',
	appId: '1:1001883121466:web:3892e06a5811e783f90203',
	measurementId: 'G-ZEMSN79VKS'
};

firebase.initializeApp(config);

const DB = firebase.firestore();

export default DB;
