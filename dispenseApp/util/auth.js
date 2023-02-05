const URL =
  'https://dispenseapp-default-rtdb.asia-southeast1.firebasedatabase.app/';
import axios from 'axios';
export async function createUser(UserObject) {
  await fetch(URL + 'User.json', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(UserObject),
  });
}

export async function logIn(username, password) {
  const respone = await axios.get(URL + 'User.json');
  for (const key in respone.data) {
    const _username = respone.data[key].username;
    const _password = respone.data[key].password;

    if (_username === username && _password === password) {
      // console.log('true login', username, _username, password, _password, key);
      return {username: _username, password: _password, id: key};
    }
  }
  return false;
}
// export async function checkEmail(emailUser) {
//   const respone = await axios.get(URL + 'User.json');
//   for (const key in respone.data) {
//     const _username = respone.data[key].email;
//     // const _password = respone.data[key].password;

//     if (_username === emailUser ) {
//       // console.log('true login', username, _username, password, _password, key);
//       return {username: _username, password: _password, id: key};
//     }
//   }
//   return false;
// }
