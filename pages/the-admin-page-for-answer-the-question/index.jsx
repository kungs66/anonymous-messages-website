import { useState, useRef } from "react";
import Link from "next/link";
import { db } from "../../firebase";
import { ref, update, remove } from "firebase/database";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import useGetValue from "../../hooks/useGetValue";
import { fadeInUp } from "../../components/MontionComp";

const Dashboard = ({ onClick }) => {
  const [inputAnswer, setInputAnswer] = useState("");
  const [tempId, settempId] = useState("");
  const [tempIdButton, setTempIdButton] = useState("");
  const url = "the-admin-page-for-answer-the-question";
  const refs = useRef();

  const post = useGetValue("post").snapshot;

  if (post !== null) {
    var items = Object.values(post);
  }

  const handleAnswer = (items) => {
    settempId(items.id);
    items.answer;
  };

  const handleButton = (items) => {
    setTempIdButton(items.id);
  };

  const handleAnswerChange = () => {
    update(ref(db, `/post/${tempId}`), {
      answer: inputAnswer,
      id: tempId,
    });
    setInputAnswer("");
  };

  const removeAll = (id) => {
    remove(ref(db, `/post/${id}`));
  };
  const handleDelete = (id) => {
    if (confirm("Sure?, you will lose the messages")) {
      removeAll(id);
    } else return;
  };

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className="h-full justify-center items-center text-center text-slate-100"
      >
        <div className="sticky z-50 top-0 bg-[#2c2c2c] shadow-lg py-6 px-8 items-center">
          <h2 className="text-slate-100 text-center font-semibold text-xl">
            Answer The Question
          </h2>
        </div>

        <div className="flex justify-center items-center space-x-4 py-12 border-b mx-6">
          <span className="bg-[#2c2c2c] py-2 px-6 text-sm font-semibold rounded-sm">
            <Link href={`/${url}/Name`} ref={refs}>
              Edit Name
            </Link>
          </span>
          <span className="bg-[#2c2c2c] py-2 px-6 text-sm font-semibold rounded-sm">
            <Link href={`/${url}/Random`} ref={refs}>
              Edit Dice
            </Link>
          </span>
        </div>

        <div className="h-full">
          <div className="mx-8 py-8 flex flex-col-reverse xl:mx-[465px]">
            {items &&
              items.map((elm) => {
                return (
                  <div key={elm.id}>
                    <motion.div
                      variants={fadeInUp}
                      className="bg-[#3e3e3e] my-3 rounded-t-lg"
                    >
                      <h1 className="text-sm font-semibold py-3 ">
                        {elm.message}
                      </h1>

                      {elm.answer != "" ? (
                        <h1 className="text-sm bg-[#4e4e4e] py-3 ">
                          {elm.answer}
                        </h1>
                      ) : tempIdButton == elm.id ? (
                        <div
                          onClick={() => handleButton(elm)}
                          className="bg-[#4e4e4e] text-sm"
                        >
                          <input
                            className="bg-transparent py-4 w-80 text-center focus:outline-0"
                            placeholder="Answer Here (Click)"
                            type="text"
                            onClick={() => handleAnswer(elm)}
                            onChange={(event) =>
                              setInputAnswer(event.target.value)
                            }
                            value={inputAnswer}
                            autoComplete="off"
                          />
                        </div>
                      ) : (
                        <div
                          onClick={() => handleButton(elm)}
                          className="bg-[#4e4e4e] text-sm"
                        >
                          <input
                            type="text"
                            className="bg-transparent py-4 w-80 text-center focus:outline-0"
                            placeholder="Answer Here (Click)"
                            onClick={() => handleAnswer(elm)}
                            onChange={(event) =>
                              setInputAnswer(event.target.value)
                            }
                            autoComplete="off"
                          />
                        </div>
                      )}
                      <div className="flex justify-between items-center py-2">
                        <button
                          className="mx-2 text-red-600"
                          onClick={() => handleDelete(elm.id)}
                        >
                          <FaTrash size={16} />
                        </button>
                        <h1 className="bg-[#3e3e3e] text-xs mx-2 text-slate-200">
                          {elm.date}.{elm.month}.{elm.year}
                        </h1>
                      </div>
                      {elm.answer == "" ? (
                        <div className="bg-red-500 rounded-b-lg py-[1px]"></div>
                      ) : (
                        <div className="bg-green-500 rounded-b-lg py-[1px]"></div>
                      )}
                    </motion.div>
                    <AnimatePresence>
                      {tempIdButton == elm.id ? (
                        inputAnswer && (
                          <motion.button
                            whileTap={{ scale: 1.2 }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                            }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="text-slate-100 text-sm font-semibold border-2 border-white py-2 px-6 rounded-md"
                            onClick={() => handleAnswerChange()}
                          >
                            Send Messages
                          </motion.button>
                        )
                      ) : (
                        <div></div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Dashboard;
