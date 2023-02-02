import axios from 'axios';

const URL =
  'https://dispenseapp-default-rtdb.asia-southeast1.firebasedatabase.app/';

export async function createMedicine(MedicineObject) {
  return await axios.post(URL + 'Medicine.json', MedicineObject);
}
export async function createMedRecord(MedRecordObject) {
  return await axios.post(URL + 'MedRecord.json', MedRecordObject);
}
export async function getMedicineById(id) {
  return await axios.get(URL + 'Medicine/' + id + '.json');
}
export async function getTimeMedicine(id, MedicineObject) {
  return await axios.put(URL + 'MedRecord' + id + '.json', MedicineObject);
}

export async function getMedRecord() {
  return await axios.get(URL + 'MedRecord.json');
}
export async function getMedRecordByUser(userId) {
  return await axios.get(URL + 'MedRecord.json');
}
