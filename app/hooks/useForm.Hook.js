import {useState} from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const reset = () => {
    setValues(initialState);
  };
  const handleInputChange = ({nativeEvent}, name) => {
    if (typeof values[name] === 'boolean') {
      setValues({
        ...values,
        [name]: !values[name],
      });
    } else {
      setValues({
        ...values,
        [name]: nativeEvent.text,
      });
    }
  };
  return [values, handleInputChange, reset];
};
