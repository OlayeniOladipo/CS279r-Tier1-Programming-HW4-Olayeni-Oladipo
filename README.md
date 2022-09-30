[Tier 1] Programming HW4: Make a To-Do App with Svelte and Firebase <br />
Olayeni Oladipo <br />
September 30, 2022 <br />

**Reflection:** What are the significant software concepts that this combination of technologies has that each previous set of technologies did not? Or that they handle significantly differently?

Instead of other frameworks doing work in the browser, Svelte is a front-end compiler that does its bulk of the work in the compilation stage. Svelte makes changes to the document when the app state changes. Firebase is a hosting service of databases, content, authentication and more. Firestore is a scalable database that can sync with apps with realtime listeners. Firestore is similar to MongoDB, but firebase has more capabilities suited for app development. Svelte does contain HTML and mardown and CSS chunks within the styler section. The files with .js are also javascript, similar to the HTML/CSS/JS mix. After the developer codes in HTML/CSS/JS in Svelte, then it compiles to javascript modules and makes minimal work have to be done in the browser. Svelte is different than Flutter in that it doesn't offer cross-platform development.

**Important files to view:** 
- src/lib/header/Header.svelte
- src/app.css and src/app.html
- src/routes/+layout.svelte
- src/routes/todos folder entirely

**Instructions** to launch prototype:

1) Clone or download this repo, saving the files to a directory
2) Open terminal and CD into the directory of the downloaded files.
This might not be optional:
3) Go on Firebase website, create a web application, and copy and paste your firebase website key credentials into the firebaseConfig strcut in routes/firebase.js
Next,
4) Enter the following line into your terminal (If it doesn't work enter this line first then try again: npm i):
> npm run dev
4) Open the link (similar to localhost:5173) that pops up in your terminal
5) Press the TODOS tab at the top of web browser.

On the link, play around with the following features: <br />
1) Add a to-do list item by pressing where it says "+ tap to add a todo" and typing in a task and pressing your enter key.
2) Check off the to-do list item by pressing the todo circle to the left of the item.
3) Edit the text of the todo item by pressing the text, then editing 
3) Press the trash icon to delete thetodo item.
4) Firebase:
    -  I was only able to get the adding to work in the firebase database. I have the code commented out in todo/page.server files that would make the edit and delete and markCompleted fields change in the database, but given I started with a different tutorial, it was harder to get things working (specially the doc per todo item in the database had a document key/path that I couldn't seem to access.)

Worked off the code from the following sources:
- https://github.com/fireship-io/182-svelte-firebase<br/>
- https://www.youtube.com/watch?v=_TTlatg865k <br/>
- https://github.com/sharu725/sveltekit-firebase-9-todo <br/>
- https://blog.logrocket.com/building-crud-application-svelte-firebase/ <br/>

Comments informed by the following:
- https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient <br />U
- https://developer.mozilla.org/en-US/docs/Web/CSS/inherit#:~:text=The%20inherit%20CSS%20keyword%20causes,needed%20to%20override%20another%20rule. <br />
- https://www.w3schools.com/cssref/css_units.asp <br />
- https://www.w3schools.com/cssref/css3_pr_box-shadow.asp <br />
- https://svelte.dev/docs <br />
- https://svelte.dev/tutorial/each-blocks  <br />
- https://kit.svelte.dev/docs/form-actions  <br />
- https://kit.svelte.dev/docs/hooks <br />
- https://www.mongodb.com/firebase-vs-mongodb <br/>