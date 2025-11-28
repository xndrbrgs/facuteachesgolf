import { Link } from "next-view-transitions";

const Underline = ({
  href,
  children,
  bg,
}: {
  href: string;
  children: string;
  bg?: string;
}) => {
  return (
    <Link href={href} className="group transition duration-300 inline-block">
      {children}
      <span
        className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-px ${
          bg ? bg : "bg-[black]"
        }`}
      ></span>
    </Link>
  );
};

export default Underline;
