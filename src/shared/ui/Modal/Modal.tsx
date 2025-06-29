import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}
const Modal = ({ children, onClose }: ModalProps) => {
  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={closeModal} className="fixed inset-0 bg-black/60 flex justify-center items-center z-[9999] px-4">
      <button className="absolute top-4 right-4" onClick={onClose}>
        <IoClose size={28} />
      </button>
      <div className="bg-black w-full md:w-[75%]  ">{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
