import './style.css'
import PocketBase from 'pocketbase'
const pb = new PocketBase('http://192.53.122.178');

const authData = await pb.admins.authWithPassword('swordsmith793@gmail.com', 'ServerPass9236');

// after the above you can also access the auth data from the authStore
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model.id);

// "logout" the last authenticated account
pb.authStore.clear();

document.querySelector('#app').innerHTML = `
  <div>
    <p>${pb.authStore.isValid.toString()}</p>
  </div>
`

