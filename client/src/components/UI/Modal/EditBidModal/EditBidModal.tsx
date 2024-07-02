import Modal from "react-modal";
import { FormEvent, useState } from "react";
import "./styles.css";
import { useAppDispatch } from "../../../../../hooks/redux.ts";
import { editUserBid } from "../../../../../features/bidsUserSlice.ts";

interface EditBidModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  bid: {
    id: number;
    title: string;
    description: string;
    address: string;
  };
}

export default function EditBidModal({
  isOpen,
  onRequestClose,
  bid,
}: EditBidModalProps) {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState(bid.title);
  const [description, setDescription] = useState(bid.description);
  const [address, setAddress] = useState(bid.address);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(editUserBid({ id: bid.id, title, description, address }));
    onRequestClose();
  };
  return (
    <Modal
      className='ModalContent'
      overlayClassName='ModalOverlay'
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Редактировать заявку</h2>
      <form
        className={
          "drop-shadow-md flex flex-col bg-gray-100 p-6 w-96 rounded-xl gap-2 m-8 "
        }
        onSubmit={handleSubmit}
      >
        <label htmlFor={"title"}>Название:</label>
        <input
          id={"title"}
          autoFocus={true}
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor={"description"}>Описание:</label>
        <textarea
          id={"description"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor={"address"}>Адрес:</label>
        <input
          id={"address"}
          type={"text"}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type='submit'>Сохранить</button>
        <button type='button' onClick={onRequestClose}>
          Отмена
        </button>
      </form>
    </Modal>
  );
}
