import axios from 'axios';

const URL =
  'https://dispenseapp-default-rtdb.asia-southeast1.firebasedatabase.app/';

export async function createMedicine(MedicineObject) {
  return await axios.post(URL + 'Medicine.json', MedicineObject);
}
export async function createMedRecord(MedRecordObject) {
  return await axios.post(URL + 'MedRecord.json', MedRecordObject);
}
export async function upDateMedRecord(medRec_id, MedRecordObject) {
  await axios.patch(URL + 'MedRecord/' + medRec_id + '.json', MedRecordObject);
}
export async function upDateMedicine(med_id, MedRecordObject) {
  return await axios.patch(
    URL + 'Medicine/' + med_id + '.json',
    MedRecordObject,
  );
}
export async function deleteMedicineAndMedRec(medRec_id, med_id) {
  console.log('delete ', med_id, medRec_id);
  await axios
    .delete(URL + 'Medicine/' + med_id + '.json')
    .then(res => {
      console.log(res.statusText);
    })
    .catch(err => console.log(err));
  await axios.delete(URL + 'MedRecord/' + medRec_id + '.json');
}
export async function getMedicineById(id) {
  return await axios.get(URL + 'Medicine/' + id + '.json');
}
export async function getTimeMedicine(id, MedicineObject) {
  // console.log(id);
  return await axios.patch(URL + 'MedRecord/' + id + '.json', MedicineObject);
}
export async function getMedRecord() {
  return await axios.get(URL + 'MedRecord.json');
}
export async function getMedRecordByUser(userId) {
  return await axios.get(URL + 'MedRecord.json');
}

