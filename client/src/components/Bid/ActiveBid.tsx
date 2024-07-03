import { useAppDispatch } from "../../../hooks/redux.ts";
import { Bid, deleteUserBid } from "../../../features/bidsUserSlice.ts";
import EditBidModal from "../UI/Modal/EditBidModal/EditBidModal.tsx";
import { useState } from "react";

export default function ActiveBid({ bid }: { bid: Bid }) {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem("userId"); // TODO: можно попробовать вынести в отдельный файл.

  const deleteHandler = () => {
    dispatch(deleteUserBid({ bidId: bid.id, userId }));
  };

  return (
    <>
 <div
        className={
          "start-bid rounded-md bg-white p-3 text-left hover:scale-[1.02] transition duration-300 pl-8 shadow-md "
        }
      >
        <h3 className={"text-lg font-semibold tracking-wide leading-8"}>
          {bid.title}
        </h3>
        <div className={"flex gap-x-2"}>
          <img className={"w-4"} src={"/svg/Vector.svg"} alt={bid.title} />
          <p
            className={
              "text-sm font-sans tracking-wide leading-8 text-gray-500"
            }
          >
            {bid.address}
          </p>
        </div>
        <div className={"flex justify-between items-baseline"}>
          <button onClick={() => setEditModalOpen(true)}>Редактировать</button>
          <button onClick={deleteHandler}>Удаление</button>
        </div>
      </div>

      <EditBidModal
        isOpen={isEditModalOpen}
        onRequestClose={() => setEditModalOpen(false)}
        bid={bid}
      />
    </>
  )
}