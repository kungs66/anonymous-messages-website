import { useState, useRef } from "react";
import Link from "next/link";
import { db } from "../../firebase";
import { FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ref, remove } from "firebase/database";
import { FaTrash } from "react-icons/fa";
import useSetValue from "../../hooks/useSetValue";
import useGetValue from "../../hooks/useGetValue";
import Button from "../../components/Button";

const Random = () => {
  const [inputData, setInputData] = useState("");
  const refs = useRef();
  const url = "/the-admin-page-for-answer-the-question";

  const setPost = useSetValue();
  const dadu = useGetValue("dadu").snapshot;

  const addRandom = () => {
    const id = new Date().getTime().toString();
    const path = `/dadu/${id}`;
    const value = [inputData, id];
    if (inputData !== "") {
      setPost.setValues(path, value);
    }

    setInputData("");
  };

  if (dadu !== null) {
    var items = Object.values(dadu);
  }

  const removeAll = (id) => {
    remove(ref(db, `/dadu/${id}`));
  };
  const handleDelete = (id) => {
    if (confirm("Yakin untuk menghapus?")) {
      removeAll(id);
    } else return;
  };

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="sticky z-50 top-0 bg-[#2c2c2c] text-slate-100 flex  shadow-lg py-6 px-8 items-center">
        <Link href={url} ref={refs}>
          <FaArrowLeft />
        </Link>
        <h2 className="ml-6 font-semibold text-xl">Edit Dice</h2>
      </div>
      <div className="text-slate-100 py-4">
        <h2 className="text-center text-base py-2 font-semibold">
          Text in the current dice
        </h2>
        <div className="space-y-2">
          {items &&
            items.map((elm, i) => {
              return (
                <div
                  className="bg-[#3e3e3e] w-80 justify-between flex mx-auto items-center py-2 rounded-md"
                  key={i}
                >
                  <p className="text-sm mx-4">{elm[0]}</p>
                  <button
                    className="mx-2 text-red-600"
                    onClick={() => handleDelete(elm[1])}
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      <div className="text-center py-4 ">
        <input
          className="bg-white text-sm rounded-md font-medium mb-4 py-4 w-80 text-center outline outline-2 focus:outline-2"
          placeholder="Add Text Here..."
          type="text"
          onChange={(event) => setInputData(event.target.value)}
          value={inputData}
          autoComplete="off"
        />
        <Button nameOf="Add Text" isClick={() => addRandom()} />
      </div>
    </motion.div>
  );
};

export default Random;
