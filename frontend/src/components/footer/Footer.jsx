import FollowUsSection from "./FollowUsSection";
import IntroSection from "./IntroSection";
import QuickLinksSection from "./QuickLinksSection";
import SubcribeSection from "./SubcribeSection";

export default function Footer() {
  return (
    <div className="flex items-start justify-around gap-[20px] p-[50px]">
      <div className="flex flex-col gap-[30px] ">
        <IntroSection />
        <FollowUsSection />
      </div>
      <QuickLinksSection
        title="Quick Links"
        links={[
          {
            label: "About us",
            path: "/about-us",
          },
           {
            label: "Contact us",
            path: "/contact-us",
          },
          {
            label: "Products",
            path: "/books",
          },
          {
            label: "Login",
            path: "/login",
          },
          {
            label: "Sign up",
            path: "/signup",
          },
        ]}
      />
      <QuickLinksSection title="Customer Area" links={[
         {
            label: "My Account",
            path: "/my-account",
          },
           {
            label: "Orders",
            path: "/orders",
          },
          {
            label: "Whistle List",
            path: "/whistle",
          },
          {
            label: "Term",
            path: "/term",
          },
          {
            label: "Privacy",
            path: "/privacy",
          },
           {
            label: "FAQ",
            path: "/faq",
          },  
      ]}/>
      <SubcribeSection/>
    </div>
  );
}
