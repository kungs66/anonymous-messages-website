import { child, ref, set } from "firebase/database";
import { db } from "../firebase";
import { useRef, useState } from "react";

const useSetValue = () => {
  const [loading, setLoading] = useState(false);
  const error = useRef(null);
  const success = useRef(null);

  const setValues = async (path, value) => {
    setLoading(true);
    try {
      const rootRef = ref(db);
      const dbPath = child(rootRef, path);
      await set(dbPath, value);
      success.current = true;
    } catch (pushError) {
      error.current = pushError.message;
    }
    setLoading(false);
  };

  return { loading, error: error.current, success: success.current, setValues };
};

export default useSetValue;
