/*  io.js
    vue 3 course hamburgcodingschool.com
    this file handles all interaction with the  backend
*/

// const url = "https://www.breakingbadapi.com/api/"
const url = "https://aroundtheworld-blog-server.herokuapp.com/"
// const url = "http://localhost:3000/"

export function getBlogposts() {
    return fetch(url + "blogposts");
}

export function getUsers() {
    return fetch(url + "users");
}


/*

The 'to' function is a helper function that abstracts away the handling of promises. 
It accepts a promise as an argument, i.e. returned from a call to the fetch api 
and 'thens' down into the json and the data content.

It returns a plain javascript object with two properties: data and error.

use this pattern:

... some code ...

const { data, error } = await to(fetch( -- arguments -- ))

if (error) {
    -- handle error, probably exit function
}

continue normally with data object extracted from backend response

... some code ...

*/

export function to(promise) {
    return promise.then(response => response.json())
        .then(data => ({ data, error: null }))
        .catch(error => ({ data: null, error }));
}