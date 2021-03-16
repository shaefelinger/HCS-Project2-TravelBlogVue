export default {
    login() {},
    async signup(context, payload) {
     const response = await fetch('https://aroundtheworld-blog-server.herokuapp.com/users', {
        method: 'POST',
        body: JSON.stringify({
            email: payload.email,
            name: payload.name,
            password: payload.password
        })
    })
    const responseData = await response.json();
         if (!response.ok) {
             console.log(response.data);
             const error = new Error(responseData.message || '❗️Failed to authenticate.');
             throw error;
         }
         console.log(responseData);
    }
}