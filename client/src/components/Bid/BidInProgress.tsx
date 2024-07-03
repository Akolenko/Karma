import { Bid, completeUserBids } from "../../../features/bidsUserSlice.ts";
import { useAppDispatch } from "../../../hooks/redux.ts";
import { NavLink } from "react-router-dom";

// export type bidId = object

export default function BidProgress({ bid }: { bid: Bid }) {
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem("userId");
  const completeHandler = () => {
    dispatch(completeUserBids({ bidId: bid.id, userId }));
  };

  return (
    <>
      <div
        className={
          "start-bid rounded-md bg-white text-left hover:scale-[1.02] transition duration-300 pl-8 shadow-md p-5"
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
        <div className={"flex flex-row justify-between items-baseline -mt-2"}>
          <p className={"font-serif"}>{"Исполнитель: Имя исполнителя"}</p>
          <div>
            <div className={"flex justify-between items-end gap-x-2"}>
              <NavLink to={`/chat/?chat=${bid.id}&choise=${true}`}>
                <img
                  className={"w-10"}
                  src={"/svg/MailOutlined.svg"}
                  alt='logo'
                />
              </NavLink>
              <button
                className={
                  "focus:outline-none size-26 text-sm transition duration-300 mt-3 rounded-md" +
                  " shadow-md border-lime-600 hover:bg-lime-600 hover:text-white" +
                  " bg-white text-lime-600"
                }
                onClick={completeHandler}
              >
                Помощь оказана
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}