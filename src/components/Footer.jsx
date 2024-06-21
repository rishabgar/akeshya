import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="px-64 h-24 flex items-center justify-between mt-10 shadow-footer-shadow">
      <div>
        <p>
          © Copyright <strong>Akeshya</strong>. All Rights Reserved
        </p>
      </div>
      <ul className="flex gap-x-7 text-[#14279b]">
        <li>
          <Link href="https://akeshya.com/Terms%20and%20conditions.pdf">
            Terms And Conditions
          </Link>
        </li>
        <li>
          <Link href="https://akeshya.com/Refund%20policy.pdf">
            Refund Policy
          </Link>
        </li>
        <li>
          <Link href="https://akeshya.com/Privacy%20policy.pdf">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
