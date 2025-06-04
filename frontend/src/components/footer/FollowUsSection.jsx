import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
const IconWrapper = ({ children , href}) => {
    const handleClick = () => {
        window.location.href = href
    }
  return <div onClick={handleClick} className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%] hover:bg-[#8D27AE] hover:text-white border-1 border-[#8D27AE] text-[#8D27AE] cursor-pointer">{children}</div>;
};

export default function FollowUsSection() {
  return (
    <div className="p-[15px]">
      <h1 className="text-[20px] font-[700]">Follow us</h1>
      <div className="flex gap-[15px] pt-[15px]">
        <IconWrapper href="https://lms.hcmut.edu.vn/my/courses.php">
          <TiSocialFacebook size={27}/>
        </IconWrapper>
        <IconWrapper href="https://lms.hcmut.edu.vn/my/courses.php">
          <TiSocialYoutube size={25}/>
        </IconWrapper>
        <IconWrapper href="https://lms.hcmut.edu.vn/my/courses.php">
          <FaTwitter size={25} />
        </IconWrapper>
        <IconWrapper href="https://lms.hcmut.edu.vn/my/courses.php">
          <FaLinkedin size={25}/>
        </IconWrapper>
        <IconWrapper href="https://lms.hcmut.edu.vn/my/courses.php">
          <RiInstagramFill size={30}/>
        </IconWrapper>
      </div>
    </div>
  );
}
