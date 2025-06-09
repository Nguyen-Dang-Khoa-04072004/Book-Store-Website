import { useState } from "react";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function UserInfo() {
  const [amount, setAmount] = useState(10);
  return (
    <div className="flex items-center justify-center gap-[30px]">
      <div className="relative cursor-pointer">
        <PiShoppingCartSimpleDuotone size={35} color="#8D27AE"/>
        {amount > 0 && (
          <span className="flex items-center justify-center absolute top-[-5px] right-[-5px] bg-[#8D27AE] text-[8px]  w-[20px] h-[20px] p-[2px] rounded-[50%] text-white">
            {amount}
          </span>
        )}
      </div>
      <div className="flex items-center justify-center gap-[10px] border-[2px] border-[#8D27AE] text-[#8D27AE] text-[15px] pt-[10px] pb-[10px] pl-[15px] pr-[15px] rounded-sm cursor-pointer">
        <FaCircleUser size={25}/>
        <span className="font-[600] text-center">Roberto Karlos</span>
        <MdOutlineArrowDropDown size={30}/>
      </div>
    </div>
  );
}
