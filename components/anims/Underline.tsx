import Link from "next/link";

const Underline = ({ href, children }: { href: string; children: string }) => {
  return (
    <Link href={href} className="group transition duration-300 inline-block">
      {children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
    </Link>
  );
};

export default Underline;
