import { useAppDispatch, useAppSelector } from "../../../../hooks/redux.ts";
import { useEffect } from "react";
import ProfilePage from "../../ProfilePage/ProfilePage.tsx";
import BidResponse from "../../Bid/BidResponse.tsx";
import { getResponses } from "../../../../features/userResponseSlice.ts";

export default function ResponsesPage() {
  const dispatch = useAppDispatch();
  const responses = useAppSelector(state => state.responseBid.bids)
  const userId: string | null = localStorage.getItem('userId'); // TODO: можно попробовать вынести в отдельный файл.

  useEffect(() => {
    dispatch(getResponses())
  }, [dispatch])

  return (
    <>
      <ProfilePage/>
      <div className={'flex flex-col gap-2 mt-10'}>
        {responses && responses.length ?
          responses.map((response) => (<BidResponse key={response.id} response={response} userId={userId}/>))
          :
          <div>Вы еще не откликнулись на заявки!</div>
        }
      </div>
    </>
  )
}