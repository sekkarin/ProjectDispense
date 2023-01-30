import axios from 'axios';

const URL =
  'https://dispenseapp-default-rtdb.asia-southeast1.firebasedatabase.app/';

export async function createMedicine(MedicineObject) {
  return await axios.post(URL + 'Medicine.json', MedicineObject);
}
export async function createMedRecord(MedRecordObject) {
  return await axios.post(URL + 'MedRecord.json', MedRecordObject);
}
