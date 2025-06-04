import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TbXboxXFilled } from "react-icons/tb";
import { TbCircleDotted } from "react-icons/tb";
import { MdOutlineArrowDropDown } from "react-icons/md";
export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isSeaching, setIsSeaching] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (query === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [query]);

  const handleSearch = () => {
    setIsSeaching(true);
    setTimeout(() => {
      setIsSeaching(false);
    }, 1000);
  };

  const handleInput = ({ target: { value } }) => {
    setQuery(value);
  };
  return (
    <div>
      <form className="flex items-center content-center gap-[20px]">
        <div className="flex items-center justify-center bg-[#8D27AE] rounded-sm pt-[10px] pb-[10px] pl-[15px] pr-[10px] text-white cursor-pointer font-medium">
          Menu
          <MdOutlineArrowDropDown size={30} />
        </div>
        <div className="flex items-center content-center gap-[8px] focus-within:border-1 focus-within:border-[#8D27AE] bg-[#F3F3F3] pt-[12px] pb-[12px] pl-[15px] pr-[15px] rounded-sm w-[500px] position: relative">
          <input
            placeholder="Find books here..."
            className="flex flex-1 outline-none text-[18px]"
            value={query}
            onChange={handleInput}
          />
          {!isEmpty && (
            <TbXboxXFilled
              size={16}
              className="cursor-pointer"
              onClick={() => setQuery("")}
            />
          )}
          <span className="w-[1px] h-[20px] bg-[#C4C4C4]"></span>
          {!isSeaching && (
            <CiSearch
              size={25}
              className="cursor-pointer"
              onClick={handleSearch}
            />
          )}
          {isSeaching && (
            <TbCircleDotted size={25} className="cursor-pointer animate-spin" />
          )}
        </div>
      </form>
    </div>
  );
}
