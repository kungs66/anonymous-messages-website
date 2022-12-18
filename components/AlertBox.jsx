import { ImDice } from "react-icons/im";

const AlertBox = ({ isNick, isClick }) => {
  return (
    <>
      <div className="text-justify">
        <div className="bg-white absolute z-50 w-64 py-2 px-4 rounded-md border-black border-2">
          <p className="text-xs font-medium">
            {isNick} never know who sent the messages
          </p>
        </div>
        <div className="bg-[#fcc60c] relative w-[260px] py-[10px] px-[14px] rounded-md border-black border-2">
          <p className="text-xs font-medium">
            {isNick} never know who sent the messages
          </p>
        </div>
      </div>
      <div
        onClick={isClick}
        className="bg-[#fcc60c] ml-2 items-center rounded-md py-3 px-4 border-black border-2 cursor-pointer"
      >
        <ImDice size={26} />
      </div>
    </>
  );
};

export default AlertBox;
