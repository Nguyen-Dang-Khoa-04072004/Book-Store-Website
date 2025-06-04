import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";

export default function Header() {
  return (
    <div className="flex items-center justify-around w-[100%] pt-[20px] pb-[20px]">
        <Logo/>
        <SearchBar/>
        <UserInfo/>
    </div>
  );
}
