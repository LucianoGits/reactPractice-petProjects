import { useState } from 'react';

// eslint-disable-next-line react/display-name
const addStorage = Component => props => {
     const [isAvailable, setIsAvailable] = useState(false);

     const isStorageAvailable = () => {
          try {
               if (!isAvailable) {
                    localStorage.setItem('_isStorageAvailable', '0');
                    localStorage.removeItem('_isStorageAvailable');
                    setIsAvailable(true);
               }
               return true;
          } catch {
               setIsAvailable(false);
               console.log('LocalStorage is not available!');
               return false;
          }
     };

     const onRead = key => {
          if (isStorageAvailable()) {
               const getItem = localStorage.getItem(key);
               return getItem ? JSON.parse(getItem) : [];
          }
          return [];
     };

     const onSave = (key, item) => {
          if (isStorageAvailable()) {
               localStorage.setItem(key, JSON.stringify(item));
               return true;
          }
          return false;
     };

     return <Component {...props} save={onSave} read={onRead} />;
};

export default addStorage;
