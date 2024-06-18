import { Link } from "react-router-dom";

export default function BidList() {
  return (
    <>
      <div className={'flex gap-x-96'}>
        <h1>Заявки</h1>
        <Link to={'/bid-form'}>
          <button>+ Cоздать заявку</button>
        </Link>
      </div>
    </>
  )
}