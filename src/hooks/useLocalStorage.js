import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  //intial value of the key
  const [value, setValue] = useState(() => {
    //intial value being provided by the function with try and catch
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;
