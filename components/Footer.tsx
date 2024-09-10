import Image from "next/image";

import Logo from "@/public/Logo.png";
import ContactDetails from "./ContactDetails";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800">
      <div className="section flex flex-col gap-4 items-center py-4">
        <div className="flex items-center gap-2">
          <Image src={Logo} width={45} height={45} alt="الشعار" />
          <h3>
            متجر <b>بن علي</b>
          </h3>
        </div>
        <ContactDetails />
        <p className="text-sm text-center">
          جميع الحقوق محفوظة · تم التطوير بواسطة{" "}
          <a href="https://www.facebook.com/asaber.25" className="normal">
            عبد الرحمن صابر
          </a>{" "}
          والتصميم بواسطة{" "}
          <a href="https://yosefbeder.vercel.app/" className="normal">
            يوسف بدير
          </a>
        </p>
      </div>
    </footer>
  );
}
