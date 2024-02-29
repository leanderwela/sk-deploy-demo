import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$db/fake_auth';


// runs first
async function logger({ event, resolve }) {
    const start_time = Date.now();
    // console.log('start_time', start_time);
    const response = await resolve(event);


    console.log(`${Date.now() - start_time}ms ${event.request.method} ${event.url.pathname}`);
    return response;
}


// runs second
function authorize({ event, resolve }) {
    const user = auth();
    event.locals.user = user;
    return resolve(event);

}

export const handle = sequence(logger,authorize);


// //intercepting fetch
// export function handleFetch({ request, fetch }) {
//     return fetch(request)
// }


// //intercept errors
// export function handleError({ error, event }) {
//     return {
//         message: 'Oops, Im intercepting in a hook', 
//         code: error.code
//     };
// }