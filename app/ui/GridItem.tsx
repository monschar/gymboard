import { useState } from "react";
import Modal from "./Modal";

type GridItem = {
  name: string;
  tips: string;
  link: string;
};
export default function GridItem(item: GridItem) {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const ModalVideo = (
    <iframe
      src={item.link + "&danmaku=0&mute=0"}
      className="h-[80vh] w-full object-cover object-center lg:h-[80vh] lg:w-full"
    ></iframe>
  );
  return (
    <>
      <div
        key={item.name}
        className="group relative cursor-pointer"
        onClick={openModal}
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <iframe
            className="w-full h-full object-cover object-center lg:h-full lg:w-full"
            src={item.link + "&autoplay=0&poster=1"}
            
          ></iframe>
        </div>
        <div className="mt-4 flex justify-between ">
          <div>
            <h3 className="text-sm text-gray-700 group-hover:text-indigo-500">
              <span aria-hidden="true" className="absolute inset-0 " />
              {item.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500 group-hover:text-indigo-300">
              {item.tips}
            </p>
          </div>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        modalContent={ModalVideo}
      />
    </>
  );
}
