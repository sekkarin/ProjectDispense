import axios from 'axios';

const URL =
  'https://dispenseapp-default-rtdb.asia-southeast1.firebasedatabase.app/';

export async function addMedicine(MedicineObject) {
  await axios.post(URL + 'Medicine.json', MedicineObject);
}
