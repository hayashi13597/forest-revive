import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <section id="history" className="text-base text-[#e0dfdf] text-center px-5">
      <h2 className="font-bold sm:text-5xl text-2xl mt-10">GIỚI THIỆU</h2>
      <figure className="flex justify-center">
        <Image
          width={100}
          height={100}
          className="my-4"
          alt="logo"
          src="/images/logologo.png"
        />
      </figure>
      <div className="grid grid-cols-3 gap-4">
        <article>
          <h3 className="sm:text-3xl text-2xl font-semibold">Dự Án</h3>
          <p className="mt-3">Website gây quỹ ủng hộ trồng cây xanh</p>
        </article>
        <article>
          <h3 className="sm:text-3xl text-2xl font-semibold">Mục tiêu dự án</h3>
          <p className="mt-3">
            Gây quỹ 2 triệu trong vòng 1 tháng <br />{" "}
            <strong className="text-sm">-(06/06/2023 -06/07/2023)-</strong>
          </p>
        </article>
        <article>
          <h3 className="sm:text-3xl text-2xl font-semibold">Thành viên</h3>
          <ul className="mt-3">
            <li>Phúc Lâm</li>
            <li>Khánh Trường </li>
            <li>Hoài Nam </li>
            <li>Duy Hải </li>
            <li>Văn Trường </li>
            <li>Quang Linh</li>
          </ul>
        </article>
      </div>
      <h2 className="font-bold sm:text-5xl text-2xl mt-10">
        Lịch sử hình thành
      </h2>
      <div className="grid md:grid-cols-3  grid-cols-1 gap-4 ">
        <article>
          <figure className="flex justify-center">
            <Image
              width={60}
              height={60}
              className="my-4"
              alt="logo"
              src="/images/intro1.png"
            />
          </figure>
          <h3 className="sm:text-3xl text-xl font-semibold mb-2">Ý tưởng</h3>
          <p className="text-justify">
            Bắt đầu từ anh trưởng nhóm cùng các thành viên thông qua việc quan
            sát và đọc những bài báo liên quan đến môi trường hiện nay đang ở
            nguy cơ thiếu hụt trầm trọng. Ông cha ta có câu
            <strong className="text-primary"> Rừng vàng biển bạc </strong> cho
            thấy vai trò của rừng nói chung và cây trồng nói riêng rất là quan
            trọng. Những người sáng lập mong muốn xây dựng được Website gây quỹ
            ủng hộ bằng cách ủng hộ qua hình thức trồng cây xanh, donate cây
            xanh tại website.{" "}
            <strong className="text-primary"> ForestRevive </strong> là nơi tập
            hợp những con người tâm huyết có cùng mong muốn tìm hiểu, nghiên cứu
            và phổ biến các giá trị của đa dạng sinh học đến cộng đồng người dân
            Việt Nam nhằm nâng cao hiểu biết, thúc đẩy hành động của cộng đồng
            trong việc bảo tồn đa dạng sinh học
          </p>
        </article>

        <article>
          <figure className="flex justify-center">
            <Image
              width={60}
              height={60}
              className="my-4"
              alt="logo"
              src="/images/intro2.png"
            />
          </figure>
          <h3 className="sm:text-3xl text-xl font-semibold mb-2">Khởi đầu</h3>
          <p className="text-justify">
            <strong className="text-primary"> ForestRevive </strong> gồm có 6
            thành viên khi tham gia dự án của môn học Phát triển cá nhân 2 của
            trường FPT Polytechnic. Nhóm đã chọn đề tài về xây dựng Website ủng
            hộ cây xanh quyên góp đến tổ chức GreenViet - một tổ chức trồng cây
            xanh bảo vệ môi trường ở miền Trung . Những ý tưởng ban đầu đã khởi
            nét hơn khi đã có sự giúp đỡ của giáo viên bộ môn tại lớp.
          </p>
        </article>

        <article>
          <figure className="flex justify-center">
            <Image
              width={60}
              height={60}
              className="my-4"
              alt="logo"
              src="/images/intro3.png"
            />
          </figure>
          <h3 className="sm:text-3xl text-xl font-semibold mb-2">Thành lập</h3>
          <p className="text-justify">
            <strong className="text-primary"> ForestRevive </strong> gồm có 6
            thành viên khi tham gia dự án của môn học Phát triển cá nhân 2 của
            trường FPT Polytechnic. Nhóm đã chọn đề tài về xây dựng Website ủng
            hộ cây xanh quyên góp đến tổ chức GreenViet - một tổ chức trồng cây
            xanh bảo vệ môi trường ở miền Trung . Những ý tưởng ban đầu đã khởi
            nét hơn khi đã có sự giúp đỡ của giáo viên bộ môn tại lớp.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Introduction;
