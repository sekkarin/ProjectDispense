import axios from 'axios';

const URL =
  'https://dispenseapp-default-rtdb.asia-southeast1.firebasedatabase.app/';

export async function getUsers() {
  const respone = await axios.get(URL + 'User.json');
  const users = [];
  for (const key in respone.data) {
    const userObject = {
      id: key,
      username: respone.data[key].username,
      password: respone.data[key].password,
      tell: respone.data[key].tell,
      firstName: respone.data[key].firstName,
      lastName: respone.data[key].lastName,
      age: respone.data[key].age,
      weight: respone.data[key].weight,
      congenitalDisease: respone.data[key].congenitalDisease,
      drugAllergy: respone.data[key].drugAllergy,
    };
    users.push(userObject);
  }
  // console.log(respone._bodyBlob.data);
  console.log(users);
}
