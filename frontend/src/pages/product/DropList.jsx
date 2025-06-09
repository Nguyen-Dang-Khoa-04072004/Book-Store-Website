import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export default function DropList({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(items[0].id)
  return (
    <div>
      <div className="flex items-center flex-1 justify-between cursor-pointer">
        <h1 className="text-[20px] font-[700]">{title}</h1>
        {isOpen ? (
          <RiArrowDropDownLine size={30} color="#8D27AE" onClick={() => setIsOpen(!isOpen)}/>
        ) : (
          <RiArrowDropUpLine size={30} color="#8D27AE" onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>
      {isOpen && (
        <div className="p-[20px]">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-start gap-[15px] mb-[10px]">
                <input type="radio" onChange={() => setIsSelected(item.id)} checked={isSelected === item.id}/>
                <label className={isSelected === item.id ? "text-[#8D27AE] font-[600]" : " text-[#878787]font-[500]"}>{item.name}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
