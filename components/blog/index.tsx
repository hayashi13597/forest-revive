import React from "react";
import BlogItem from "./BlogItem";

const BlogContainer = () => {
  return (
    <div id="planting-projects" className="grid grid-cols-2 gap-2">
      <BlogItem
        title="Trung tâm bảo tồn đa dạng sinh học  Việt Nam"
        plant="Việt Trì , Hà nội"
        des="Trung tâm bảo tồn đa dạng sinh học Nước Việt Xanh (GreenViet) kêu gọi cộng đồng chung tay trồng 20.000 cây xanh đô thị, hướng đến tăng mật độ cây xanh tại các công viên, trường học, ký túc xá, đường giao thông…của các thành phố lớn. Sự đóng góp của mỗi cá nhân sẽ mang lại những thay đổi tích cực cho môi trường đô thị, từ mảng xanh thành phố đến không khí sạch và chống biến đổi khí hậu."
      />
      <BlogItem
        title=" GreenViet "
        plant="Cồ Chí Minh"
        des="Trong gần 3 năm qua thực hiện chương trình, với sự góp sức của cộng đồng và nhà tài trợ, GreenViet đã trồng hơn 32.000 cây xanh trên 72 điểm của các thành phố lớn. Với chương trình MTIC, trung tâm GreenViet đã lan tỏa thông điệp trồng cây xanh bảo vệ môi trường đến với cộng đồng, đoàn thể, doanh nghiệp... Song song với việc huy động nguồn lực trồng cây xanh, GreenViet đã phát triển dự án I-tree tại Việt Nam để quản lý, đánh giá lợi ích cây xanh và không gian xanh đô thị đối với các vấn đề môi trường, kinh tế và các tác động đến sức khỏe con người."
      />
      <BlogItem
        title=" GreenViet "
        plant="Cồ Chí Minh"
        des="GreenViet đang thực hiện các nỗ lực để bảo tồn các quần thể chà vá chân nâu, chân xám, chân đen và các hệ sinh thái quan trọng của chúng tại khu vực miền Trung – Tây Nguyên. Từ năm 2019, GreenViet phát triển chương trình Một triệu cây xanh đô thị Việt Nam (MTIC) và Dự án hỗ trợ các tổ chức CSO trong lĩnh vực môi trường và bảo tồn thiên nhiên (F4CSO) trong khu vực."
      />
      <BlogItem
        title=" GreenViet "
        plant="Cồ Chí Minh"
        des="GreenViet đang thực hiện các nỗ lực để bảo tồn các quần thể chà vá chân nâu, chân xám, chân đen và các hệ sinh thái quan trọng của chúng tại khu vực miền Trung – Tây Nguyên. Từ năm 2019, GreenViet phát triển chương trình Một triệu cây xanh đô thị Việt Nam (MTIC) và Dự án hỗ trợ các tổ chức CSO trong lĩnh vực môi trường và bảo tồn thiên nhiên (F4CSO) trong khu vực."
      />
    </div>
  );
};

export default BlogContainer;
