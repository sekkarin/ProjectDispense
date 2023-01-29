<<<<<<< HEAD
import axios from 'axios';

const URL =
  'https://dispenseapp-default-rtdb.asia-southeast1.firebasedatabase.app/';
=======
// key = AIzaSyDM7gpl0aYik9VJi7xKvD0fbxny434Fe8o

// import Axios from 'react-native-axios/lib/core/Axios';
<<<<<<< HEAD

// const API_KEY = 'AIzaSyDM7gpl0aYik9VJi7xKvD0fbxny434Fe8o';
<<<<<<< HEAD

>>>>>>> 7617b5a (Revert "load login init start app")
=======
import axios from 'axios';
<<<<<<< HEAD
>>>>>>> 4a53367 (..)
=======
=======

// const API_KEY = 'AIzaSyDM7gpl0aYik9VJi7xKvD0fbxny434Fe8o';

>>>>>>> parent of 008352e (load login init start app)
>>>>>>> 68c5380 (Revert "load login init start app")
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
