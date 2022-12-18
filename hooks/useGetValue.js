import { useState, useRef, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";

const useGetValue = (path, initialLoad = true) => {
  const [isLoading, setIsLoading] = useState(initialLoad);
  const isEmpty = useRef(false);
  const [value, setValue] = useState([]);

  useEffect(() => {
    onValue(ref(db, path), (snapshot) => {
      setValue([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((elm) => {
          setValue((oldArray) => [...oldArray, elm]);
        });
      } else {
        isEmpty.current = true;
      }
      setIsLoading(false);
    });
  }, []);

  return {
    isLoading,
    snapshot: value,
    isEmpty: isEmpty.current,
  };
};

export default useGetValue;
