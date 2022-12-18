import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import useSetValue from "../../hooks/useSetValue";
import useGetValue from "../../hooks/useGetValue";
import Button from "../../components/Button";

const Name = () => {
  const [inputNick, setInputNick] = useState("");
  const url = "/the-admin-page-for-answer-the-question";

  const setPost = useSetValue();
  const nick = useGetValue("nick").snapshot;

  if (nick !== null) {
    var showNick = Object.values(nick);
  }

  const addNick = async () => {
    const path = "nick";
    const value = {
      name: inputNick,
    };
    if (inputNick !== "") {
      await setPost.setValues(path, value);
    }

    setInputNick("");
  };

  return (
    <div>
      <div className="sticky z-50 top-0 bg-[#2c2c2c] text-slate-100 flex  shadow-lg py-6 px-8 items-center">
        <Link href={url}>
          <FaArrowLeft />
        </Link>
        <h2 className="ml-6 font-semibold text-xl">Edit Name</h2>
      </div>
      <div className="h-32 pt-2 px-1">
        <div className="text-base text-center font-medium border py-2 border-black">
          {showNick &&
            showNick.map((elmn, index) => {
              return (
                <div key={index}>
                  <h1 className="uppercase">send a anonymous messages to</h1>
                  <h2 className="text-xl font-bold">{elmn}</h2>
                </div>
              );
            })}
        </div>
      </div>
      <p className="text-sm text-center font-medium py-2">
        The name will appear as shown above
      </p>
      <div className="flex justify-center items-center">
        <div>
          <input
            className="bg-white outline outline-2 text-sm font-medium rounded-md mb-4 py-4 w-80 text-center focus:outline-2"
            placeholder="Your Name..."
            type="text"
            onChange={(event) => setInputNick(event.target.value)}
            value={inputNick}
            autoComplete="off"
          />
          <div className="flex justify-center">
            <Button nameOf="Change Name" isClick={() => addNick()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
