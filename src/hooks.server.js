/* The app's server hooks. Hooks are functions (app-wide) that SvelteKit 
calls in response to certain events. Allows the developer control over
the framework's behacvior. */
// This code runs when the application starts up.

// Handle function runs everytime request is made to SvelteKit server
export const handle = async ({ event, resolve }) => {
	// get the user id from cookies

	let userid = event.cookies.get('userid');

	if (!userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		userid = crypto.randomUUID();
		event.cookies.set('userid', userid, { path: '/' });
	}

	event.locals.userid = userid;

	return resolve(event);
};
