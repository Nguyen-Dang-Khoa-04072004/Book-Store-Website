import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

export default function ProductCard() {
  return (
    <div className="w-[400px] p-[20px]">
      <div className="w-[100%] rounded-lg">
        <img
          src="https://salt.tikicdn.com/cache/750x750/ts/product/17/4a/65/b4765d60127ee4cccf8fd551633fafd4.png"
          alt=""
          className="object-cover"
        />
      </div>
      <div className="pl-[60px] pt-[20px]">
        <div className="flex items-center gap-[10px] mb-[20px]">
          <FaStar color="#FE7B01" />
          <span className="font-[500]">4.1</span>
          <LuDot size={25} />
          <span>245 reviews</span>
        </div>
        <div>
          <h1 className="text-[#8D27AE] text-[16px] font-[600] mb-[10px]">
            Biography
          </h1>
          <h1 className="font-[700] text-[30px] truncate">
            Emily and the Backbone
          </h1>
          <h1 className="text-[#7F7F7F] mb-[20px]">Cloe Mamora</h1>
          <div className="flex items-center gap-[20px]">
            <span className="text-[20px] font-[700] ">$39,9</span>
            <span className="line-through text-[#89718F]">$45,0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
