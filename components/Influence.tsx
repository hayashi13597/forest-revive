import Image from "next/image";
import React from "react";

const Influence = () => {
  return (
    <>
      <section className="grid sm:grid-cols-2  px-10 grid-cols-1 text-base bg-white text-black w-screen h-[1100px] sm:h-screen mt-[40px] py-20">
        <div className="pt-10">
          <h1 className="md:text-4xl text-2xl  font-medium">
            Công nghệ có thể đã gây ra biến đổi khí hậu, nhưng nó cũng có thể
            giải quyết nó.
          </h1>
          <p className="text-lg mt-20 font-medium text-[#808080]">
            Đây là kết quả của những nỗ lực của chúng tôi để trồng lại hành
            tinh.
          </p>
          <div className="grid grid-cols-2 px-12">
            <ul>
              <li className="mt-4 text-left text-base font-semibold">
                <p>30.772.623</p>
                <p>Cây trồng</p>
              </li>
              <li className="mt-4 text-left text-base font-semibold">
                <p>30.772.623</p>
                <p>Thành viên nhóm Net Zero</p>
              </li>
              <li className="mt-4 text-left text-base font-semibold">
                <p>30.772.623</p>
                <p>Cây được trồng qua Api</p>
              </li>
            </ul>
            <ul>
              <li className="mt-4 text-left text-base font-semibold">
                <p>30.772.623</p>
                <p>
                  Tấn Co <sub>2</sub> bù đắp
                </p>
              </li>
              <li className="mt-4 text-left text-base font-semibold">
                <p>30.772.623</p>
                <p>Sản phẩm không có mạng</p>
              </li>
              <li className="mt-4 text-left text-base font-semibold">
                <p>30.772.623</p>
                <p>Đã gửi email quà tặng</p>
              </li>
            </ul>
            <div></div>
          </div>
        </div>
        <figure>
          <Image
            alt="Earth"
            className="sm:mt-0 my-4 object-cover w-[80%] ml-[10%] mb-4  "
            width={500}
            height={500}
            src="/images/earth.png"
          />
        </figure>
      </section>
    </>
  );
};

export default Influence;
