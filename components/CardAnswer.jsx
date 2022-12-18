import { FaTrash } from "react-icons/fa";

const CardAnswer = ({
  question,
  onData,
  answer,
  date,
  month,
  year,
  tempId,
  idOfElmn,
  onHandleBtn,
  onHandleAnswer,
  theInput,
  valueAnswer,
  toDelete,
}) => {
  return (
    <div>
      <div className="flex py-2">
        <div className="absolute z-50 w-80">
          <div className="border-2 bg-white border-black text-sm rounded-md py-1 px-3">
            <h1 className="font-semibold py-2 border-b border-black">
              {question}
            </h1>
            {onData != "" ? (
              <h1 className="text-sm py-2 border-b border-black">{answer}</h1>
            ) : tempId == idOfElmn ? (
              <div
                onClick={onHandleBtn}
                className="text-sm border-b border-black"
              >
                <input
                  className="bg-transparent py-2 w-full text-center focus:outline-0 cursor-pointer"
                  placeholder="Answer Here (Click)"
                  type="text"
                  onClick={onHandleAnswer}
                  onChange={theInput}
                  value={valueAnswer}
                  autoComplete="off"
                />
              </div>
            ) : (
              <div
                onClick={onHandleBtn}
                className="text-sm border-b border-black"
              >
                <input
                  type="text"
                  className="bg-transparent py-2 w-full text-center focus:outline-0 cursor-pointer"
                  placeholder="Answer Here (Click)"
                  onClick={onHandleAnswer}
                  onChange={theInput}
                  autoComplete="off"
                />
              </div>
            )}
            <div className="flex justify-between py-2 items-center">
              <button className="mx-2 text-red-600" onClick={toDelete}>
                <FaTrash size={14} />
              </button>
              <p className="text-xs text-right">
                {date}.{month}.{year}
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-[326px]">
          <div
            className={`border-2 ${
              answer != "" ? "bg-[#8bff87]" : "bg-[#ff8788]"
            } border-black text-sm rounded-md py-[7px] px-[15px]`}
          >
            <h1 className="font-semibold py-2 border-b border-black">
              {question}
            </h1>
            {onData != "" ? (
              <h1 className="text-sm py-2 border-b border-black">{answer}</h1>
            ) : tempId == idOfElmn ? (
              <div onClick={onHandleBtn} className="text-sm">
                <input
                  className="bg-transparent py-2 w-full text-center focus:outline-0 cursor-pointer"
                  placeholder="Answer Here (Click)"
                  type="text"
                  onClick={onHandleAnswer}
                  onChange={theInput}
                  value={valueAnswer}
                  autoComplete="off"
                />
              </div>
            ) : (
              <div onClick={onHandleBtn} className="text-sm">
                <input
                  type="text"
                  className="bg-transparent py-2 w-full text-center focus:outline-0 cursor-pointer"
                  placeholder="Answer Here (Click)"
                  onClick={onHandleAnswer}
                  onChange={theInput}
                  autoComplete="off"
                />
              </div>
            )}
            <div className="flex justify-between py-2 items-center">
              <button className="mx-2 text-red-600" onClick={toDelete}>
                <FaTrash size={14} />
              </button>
              <p className="text-xs text-right">
                {date}.{month}.{year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAnswer;
