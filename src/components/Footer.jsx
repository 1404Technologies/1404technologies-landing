import { contact } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/[0.11] py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-6 flex-wrap">
        <a href="#">
          <img
            src="/logos/1404_logo_dark.svg"
            alt="1404 Technologies"
            className="h-16 w-auto"
          />
        </a>
        <div className="text-[13px] text-[#7BAAC8] text-right">
          <div>© {new Date().getFullYear()} 1404 Technologies Limited. All rights reserved.</div>
          <div>HQ: London · U.S. · Nigeria</div>
          <div>{contact.website}</div>
        </div>
      </div>
    </footer>
  );
}
