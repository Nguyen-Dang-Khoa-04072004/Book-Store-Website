import { Link } from "react-router";

export default function QuickLinksSection({ title, links }) {
  return (
    <div className="p-[30px]">
      <h1 className="text-[20px] font-[600] mb-[20px]">{title}</h1>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-[15px] text-[18px] text-[#89718F]">
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
