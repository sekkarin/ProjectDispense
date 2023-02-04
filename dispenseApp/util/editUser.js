// key = AIzaSyDM7gpl0aYik9VJi7xKvD0fbxny434Fe8o

// import Axios from 'react-native-axios/lib/core/Axios';

// const API_KEY = 'AIzaSyDM7gpl0aYik9VJi7xKvD0fbxny434Fe8o';
import axios from 'axios';
export async function editUser(UserObject) {
  await fetch(URL + 'User.json', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(UserObject),
  });
}

export async function edit(
  firstName,
  lastName,
  age,
  weight,
  congenitalDisease,
  drugAllergy,
) {
  const respone = await axios.put(URL + 'User.json');
  for (const key in respone.data) {
    const _id = key;
    const _firstName = respone.data[key].firstName;
    const _lastName = respone.data[key].lastName;
    const _age = respone.data[key].age;
    const _weight = respone.data[key].weight;
    const _congenitalDisease = respone.data[key].congenitalDisease;
    const _drugAllergy = respone.data[key].drugAllergy;

    if (_id) {
      // console.log('true login', username, _username, password, _password, key);
      return {id: key};
    }
  }
  return false;
}
