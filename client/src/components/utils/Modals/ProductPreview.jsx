import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
const ProductPreview = ({ isOpen, onClose, data }) => {
  if (!isOpen|| !data) return;
  
  const [selectedImage, setSelectedImage] = useState(data.Img || null);

  
  const handleImageSelection = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    onClose();
    setSelectedImage(data.Img || null); // Reset data when modal is closed
  };

  

  
  return (
    data && (
      <Modal
        isOpen={isOpen}
        blockScrollOnMount={true}
        onClose={handleCloseModal}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody width={"768px"} bg={"white"} borderRadius={"5px"}>
            <div className="wrapper-modal flex gap-5 flex-row p-4 w-full relative">
              <div className="closeBtn  p-2 border absolute right-0  rounded-full shadow-lg cursor-pointer" onClick={()=>handleCloseModal()}>
                <AiOutlineClose/>
              </div>
              <div className="Img-container flex gap-2 flex-col ">
                <Image
                  src={selectedImage}
                  className="w-[274px] aspect-square object-cover"
                ></Image>
                <div className="image-gallery">
                  <button
                    className="w-12 aspect-square p-0"
                    onClick={() => handleImageSelection(data.Img)}
                  >
                    <Image
                      className="w-full h-full object-cover"
                      src={data.Img}
                    />
                  </button>
                </div>
              </div>
              <div className="Product-info flex flex-col">
                <div className="heading flex flex-col gap-2 p-2">
                  <h1 className="text-2xl font-semibold">{data.Heading}</h1>
                  <p className="text-xl font-semibold">${data.price}.00</p>
                </div>
                <hr />
                <div className="varient flex flex-col gap-2 p-2">
                  <p className="flex gap-4 text-base font-semibold items-center">
                    Size
                    <span className="font-normal text-base text-center">
                      {data.size}
                    </span>
                  </p>
                  <p className="flex gap-4 text-base font-semibold items-center">
                    Color
                    <span
                      className={`w-8 h-8 border rounded-full border-black`}
                      style={{backgroundColor: data.color}}
                    ></span>
                  </p>
                </div>
                <button className="addtocart text-white px-4 py-3 rounded-3xl mt-16 bg-black">
                  <p className="capitalize font-normal flex items-center gap-2">add to cart<AiOutlineShoppingCart size={'24px'}/></p>
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    )
  );
};

export default ProductPreview;
