// see https://alligator.io/js/async-functions/

function yayOrNay() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() * 1); // 0 or 1, at random

        val ? resolve('Lucky!!') : reject('Nope 😠');
    });
}

async function msg() {
    try {
        const msg = await yayOrNay();
        console.log(msg);
    } catch(err) {
        console.log(err);
    }
}

msg(); // Lucky!!
msg(); // Lucky!!
msg(); // Lucky!!
msg(); // Nope 😠
msg(); // Lucky!!
msg(); // Nope 😠
msg(); // Nope 😠
msg(); // Nope 😠
msg(); // Nope 😠
msg(); // Lucky!!

/* also has example code for fetch */

const fetch = require('node-fetch');
async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);
  let data = await res.json();

  data = data.map(user => user.username);

  console.log(data);
}

fetchUsers('https://jsonplaceholder.typicode.com/users');
