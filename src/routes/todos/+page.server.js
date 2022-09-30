/* +page.server.js file can export actions, which allow you to
 POST data to the server using the <form> element. */

import { error } from '@sveltejs/kit';
import { api } from './api';
import { addDoc, collection, updateDoc, deleteDoc, doc, onSnapshot, getFirestore} from 'firebase/firestore';
// import { browser } from '$app/environment';
// import { firebaseConfig } from "./firebase";
// import { getApp, getApps, initializeApp } from 'firebase/app';
import { db } from './firebase';

// export const firebaseApp =
//     browser &&
//     (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
// initializeApp(firebaseConfig);
// const db = getFirestore();
// let colRef = collection(db, "todos");

// const unsubscribe =
// browser &&
// onSnapshot(colRef, (querySnapshot) => {
// 	let fbTodos = [];
// 	querySnapshot.forEach((doc) => {
// 	let todo = { ...doc.data(), id: doc.id };
// 	fbTodos = [todo, ...fbTodos];
// 	});
// 	todos = fbTodos;
// });


/* Action is load. then the async ( ) ==> does the action with data. */
export const load = async ({ locals }) => {
	// locals.userid comes from src/hooks.js
	const response = await api('GET', `todos/${locals.userid}`);

	// Checking for error response status
	if (response.status === 404) {
		// User hasn't created a todo list, so start with an empty array
		return {
			todos: []
		};
	}

	// Otherwise, store the asycn call to get the response.json in todos
	if (response.status === 200) {
		return {
			todos: await response.json()
		};
	}

	throw error(response.status);
};

/* Instead of a default action, the page has many actions (add, 
	edit, etc), each with its own action.
  */
export const actions = {
	add: async ({ request, locals }) => {
		/* Read request body, return and store in form. */
		const form = await request.formData();

		// add a document into firebase collection 'todos' - with fields filled
		const docRef = await addDoc(collection(db, 'todos'), {
			task: form.get('text'),
			isComplete: false,
			createdAt: new Date(),
		});

		/* await for aysnchronous calls */
		await api('POST', `todos/${locals.userid}`, {
			text: form.get('text')
		});
	},
	edit: async ({ request, locals }) => {
		/* Read request body, return and store in form. */
		const form = await request.formData();

		// await updateDoc(doc(db, 'todos', form.get('uid')), {
		// 	text: form.get('text'),
		// });

		// PATCH partially modifies a resource, similar to update.
		await api('PATCH', `todos/${locals.userid}/${form.get('uid')}`, {
			text: form.get('text')
		});
	},
	toggle: async ({ request, locals }) => {
		const form = await request.formData();

		// await updateDoc(doc(db, `todos`, form.get('uid')), {
		// 	isComplete: !!form.get('done'),
		//   });

		await api('PATCH', `todos/${locals.userid}/${form.get('uid')}`, {
			done: !!form.get('done')
		});
	},
	delete: async ({ request, locals }) => {
		const form = await request.formData();

		// await deleteDoc(doc(db, 'todos', form.get('uid')));

		await api('DELETE', `todos/${locals.userid}/${form.get('uid')}`);
	}
};
