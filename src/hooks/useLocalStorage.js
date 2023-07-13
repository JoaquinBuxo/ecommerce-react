import { useState, useEffect } from 'react';

const EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour in milliseconds

const getSavedValue = (key, initialValue) => {
  const savedValue = localStorage.getItem(key);

  if (savedValue !== null) {
    const { value, timestamp } = JSON.parse(savedValue);
    const expirationTime = timestamp + EXPIRATION_TIME;
    if (Date.now() < expirationTime) {
      return value;
    } else {
      localStorage.removeItem(key);
    }
  }
  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    const savedValue = JSON.stringify({ value, timestamp: Date.now() });
    localStorage.setItem(key, savedValue);
  }, [key, value]);

  return [value, setValue];
};
