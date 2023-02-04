import axios from 'axios';
const URL =
  'https://dispenseapp-default-rtdb.asia-southeast1.firebasedatabase.app/';
export async function editUser(id, userObj) {
  await axios.patch(URL + 'User/' + id + '.json', userObj);
}
