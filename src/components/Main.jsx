import React from "react";
import Image from "next/image";

function Main() {
  return (
    <main className="border-2 border-solid border-black w-full flex justify-center items-center h-32">
      <Image
        src={"/images/png/client1.png"}
        alt="test"
        // layout="responsive"
        width={50}
        height={50}
        className="grayscale hover:grayscale-0"
        data-aos="zoom-in"
        data-aos-delay="100"
      />
      <Image
        src={"/images/png/client-2.png"}
        alt=""
        // layout="responsive"
        width={100}
        height={100}
        className="grayscale hover:grayscale-0"
        data-aos="zoom-in"
        data-aos-delay="200"
      />
      <Image
        src={"/images/png/client-3.png"}
        alt=""
        // layout="responsive"
        width={100}
        height={100}
        data-aos="zoom-in"
        data-aos-delay="300"
        // className="grayscale"
      />
      <Image
        src={"/images/png/client-4.png"}
        alt=""
        // layout="responsive"
        width={100}
        height={100}
        className="grayscale hover:grayscale-0"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <Image
        src={"/images/png/client-5.png"}
        alt=""
        // layout="responsive"
        width={100}
        height={100}
        className="grayscale hover:grayscale-0"
        data-aos="zoom-in"
        data-aos-delay="500"
      />
      <Image
        src={"/images/png/client-6.png"}
        alt=""
        // layout="responsive"
        width={100}
        height={100}
        data-aos="zoom-in"
        data-aos-delay="600"
      />
    </main>
  );
}

export default Main;
