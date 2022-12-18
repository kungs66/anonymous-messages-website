import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSetValue from "../hooks/useSetValue";
import useGetValue from "../hooks/useGetValue";
import { fadeInUp, stagger } from "../components/MontionComp";
import AlertBox from "../components/AlertBox";
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import InputBox from "../components/InputBox";

const Home = () => {
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState("");
  const tanggal = new Date().getDate().toString();
  const bulan = new Date().getMonth().toString();
  const tahun = new Date().getFullYear().toString();

  const setPost = useSetValue();
  const post = useGetValue("post").snapshot;
  const dadu = useGetValue("dadu").snapshot;
  const name = useGetValue("nick").snapshot;

  const addMessage = async () => {
    const id = new Date().getTime().toString();
    const path = `/post/${id}`;
    const value = {
      message: inputData,
      answer: "",
      date: tanggal,
      month: bulan,
      year: tahun,
      id,
    };
    if (inputData !== "") {
      await setPost.setValues(path, value);
    } else {
      setError("Tulis pesannya dulu dek!");
    }
    setInputData("");
    setTimeout(() => {
      setError("");
    }, 4000);
  };

  if (post !== null) {
    var items = Object.values(post);
  }
  if (name !== null) {
    var nick = Object.values(name);
  }
  if (dadu !== null) {
    var random = Object.values(dadu);
  }

  var string = "";
  function randomInt(limits) {
    return Math.floor(Math.random() * Math.floor(limits));
  }

  const catchRandom = (choices) => {
    var index = randomInt(choices.length);
    return choices[index];
  };

  const getRandom = () => {
    setInputData(
      (string += catchRandom(random && random.map((elm) => [elm[0]])))
    );
  };

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className="h-full justify-center items-center text-center "
      >
        <div className="text-center mx-auto mt-8 h-20 -space-y-1">
          <h1 className="text-lg font-semibold uppercase">
            Send Anonymous Messages To
          </h1>
          {nick &&
            nick.map((elmn, index) => {
              return (
                <div key={index}>
                  <h2 className="font-bold text-2xl">{elmn}</h2>
                </div>
              );
            })}
        </div>
        <div className="justify-center flex items-center pt-1">
          <InputBox
            isValue={inputData}
            getInput={(e) => setInputData(e.target.value)}
            placeholders="Messages Here..."
          />
        </div>
        <div className="flex py-2 justify-center items-center">
          <AlertBox
            isClick={getRandom}
            isNick={nick && nick.map((elm) => [elm])}
          />
        </div>
        <div className="mb-10 flex justify-center items-center">
          <Button isClick={() => addMessage()} nameOf="Send Messages" />
        </div>
        <div>
          <div className="py-4 bg-white min-h-[320px] rounded-t-3xl outline outline-2">
            <h3 className="font-bold text-center py-2">Messages Below</h3>
            <div className="justify-center text-center flex items-center">
              <motion.div
                variants={stagger}
                className="mx-8 py-2 flex flex-col-reverse xl:mx-[465px]"
              >
                {items &&
                  items.map((elm) => {
                    return (
                      <motion.div variants={fadeInUp} key={elm.id}>
                        <Card
                          question={elm.message}
                          answer={elm.answer}
                          onData={elm.answer}
                          date={elm.date}
                          month={elm.month}
                          year={elm.year}
                        />
                      </motion.div>
                    );
                  })}
              </motion.div>
            </div>
            <Footer />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
