const Card = ({ question, onData, answer, date, month, year }) => {
  return (
    <div>
      <div className="flex py-2">
        <div className="absolute z-50 w-80">
          <div className="border-2 bg-white border-black text-sm rounded-md py-1 px-3">
            <h1 className="font-semibold py-2 border-b border-black">
              {question}
            </h1>
            {onData != "" ? (
              <h2 className="py-2 border-b border-black">{answer}</h2>
            ) : (
              <h2 className="py-2 border-b border-black">
                Wait for his answer
              </h2>
            )}
            <p className="text-xs py-2 text-right">
              {date}.{month}.{year}
            </p>
          </div>
        </div>

        <div className="relative w-[326px]">
          <div className="border-2 bg-[#ff8788] border-black text-sm rounded-md py-[7px] px-[15px]">
            <h1 className="font-semibold py-2 border-b border-black">
              {question}
            </h1>
            {onData != "" ? (
              <h2 className="py-2 border-b border-black">{answer}</h2>
            ) : (
              <h2 className="py-2 border-b border-black">
                Wait for his answer
              </h2>
            )}
            <p className="text-xs py-2 text-right">
              {date}.{month}.{year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
