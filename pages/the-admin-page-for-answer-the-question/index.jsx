import { useState, useRef } from "react";
import Link from "next/link";
import { db } from "../../firebase";
import { ref, update, remove } from "firebase/database";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import useGetValue from "../../hooks/useGetValue";
import { fadeInUp } from "../../components/MontionComp";
import CardAnswer from "../../components/CardAnswer";
import Button from "../../components/Button";

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
        <div className="sticky z-[999] top-0 bg-[#2c2c2c] shadow-lg py-6 px-8 items-center">
          <h2 className="text-slate-100 text-center font-semibold text-xl">
            Answer The Question
          </h2>
        </div>

        <div className="flex justify-center items-center space-x-4 py-12 border-b mx-6 text-black">
          <motion.div
            whileTap={{ scale: 1.1 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <div className="mt-4 absolute z-50 bg-[#ffff] text-sm font-medium py-2 px-6 rounded-md border-black border-2">
              <Link href={`/${url}/Name`} ref={refs}>
                Edit Name
              </Link>
            </div>
            <div className="mt-4 relative bg-[#1f9fae] text-sm font-medium py-[10px] px-[26px] rounded-md border-black border-2">
              <Link href={`/${url}/Name`} ref={refs}>
                Edit Name
              </Link>
            </div>
          </motion.div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <div className="mt-4 absolute z-50 bg-[#ffff] text-sm font-medium py-2 px-6 rounded-md border-black border-2">
              <Link href={`/${url}/Random`} ref={refs}>
                Edit Dice
              </Link>
            </div>
            <div className="mt-4 relative bg-[#1f9fae] text-sm font-medium py-[10px] px-[26px] rounded-md border-black border-2">
              <Link href={`/${url}/Random`} ref={refs}>
                Edit Dice
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="h-full flex justify-center">
          <div className="mx-8 py-8 flex flex-col-reverse xl:mx-[465px] text-black">
            {items &&
              items.map((elm) => {
                return (
                  <div key={elm.id}>
                    <CardAnswer
                      question={elm.message}
                      answer={elm.answer}
                      onData={elm.answer}
                      idOfElmn={elm.id}
                      onHandleAnswer={() => handleAnswer(elm)}
                      onHandleBtn={() => handleButton(elm)}
                      tempId={tempIdButton}
                      theInput={(e) => setInputAnswer(e.target.value)}
                      toDelete={() => handleDelete(elm.id)}
                      valueAnswer={inputAnswer}
                      date={elm.date}
                      month={elm.month}
                      year={elm.year}
                    />

                    <AnimatePresence>
                      {tempIdButton == elm.id ? (
                        inputAnswer && (
                          <div className="-mt-4 mb-4">
                            <Button
                              nameOf="Send Messages"
                              isClick={() => handleAnswerChange()}
                            />
                          </div>
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
