import { Pagination } from "@mui/material";
import UserDonation from "./UserDonation";
import { IUserDonation } from "@/app/page";
import { FC, useState } from "react";
interface LeaderBoardProps {
  listUser: IUserDonation[];
}
const LeaderBoard: FC<LeaderBoardProps> = ({ listUser }) => {
  const limitPage = 8;
  const totalPage = Math.floor(listUser.length / limitPage);
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };
  const listUserCover = listUser.slice(page - 1, page * limitPage);
  return (
    <section id="section-donate" className="mt-20 text-center">
      <h1 className="text-white  text-2xl sm:text-4xl mb-16 font-bold ">
        Danh sách người ủng hộ
      </h1>
      <div className="max-w-screen-sm w-full mx-auto text-base text-left">
        {listUserCover.length > 0 &&
          listUserCover.map((user, index) => (
            <UserDonation user={user} key={index} />
          ))}

        {totalPage > 0 && (
          <div className="flex justify-center  rounded-full mt-8 py-4 text-white bg-white">
            <Pagination
              page={page}
              onChange={handleChange}
              count={totalPage}
              color="primary"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default LeaderBoard;
