const InputBox = ({ placeholders, getInput, isValue }) => {
  return (
    <div>
      <textarea
        className="resize-none z-50 absolute bg-[#ffff] font-medium py-2 w-80 h-32 px-3 text-sm rounded-lg outline outline-2 focus:outline-2"
        name="question"
        id="question"
        autoComplete="off"
        placeholder={placeholders}
        onChange={getInput}
        value={isValue}
        cols="30"
        rows="10"
      ></textarea>
      <textarea
        className="resize-none relative bg-[#fcc60c] font-medium py-2 w-[326px] h-[134px] px-3 text-sm rounded-lg outline outline-2 focus:outline-2"
        name="question"
        id="question"
        autoComplete="off"
        placeholder=""
        disabled={true}
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default InputBox;
