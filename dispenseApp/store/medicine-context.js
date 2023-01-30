import {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MedicineContext = createContext({
  medicine: [],
  addMedicine: () => {},
  deleteMedicine: () => {},
});

function MedicineContextProvider({children}) {
  const [medicine, setMedicine] = useState([]);

  function addMedicine() {}

  const value = {};
  return (
    <MedicineContext.Provider value={value}>
      {children}
    </MedicineContext.Provider>
  );
}
export default MedicineContextProvider;
