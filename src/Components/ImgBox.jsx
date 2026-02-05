import { useDroppable } from "@dnd-kit/core";
import ImgItem from "./ImgItem";

const ImgBox = ({ images }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "imageBox",
  });

  return (
    <div
      ref={setNodeRef}
      className={`mt-4 flex flex-wrap justify-center gap-3 border-2 p-4 ${
        isOver ? "bg-gray-200" : "bg-gray-100"
      }`}
    >
      {images.map((img) => (
        <ImgItem key={img.id} {...img} />
      ))}
    </div>
  );
};

export default ImgBox;
