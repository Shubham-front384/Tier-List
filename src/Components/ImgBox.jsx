import { useDroppable } from "@dnd-kit/core";
import ImgItem from "./ImgItem";

const ImgBox = ({ images }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "imageBox",
  });

  return (
    <div
      ref={setNodeRef}
      className={`rounded-xl flex flex-wrap justify-center gap-3 p-4 transition border border-gray-600 ${
        isOver ? "bg-gray-700" : "bg-gray-800"
      }`}
    >
      {images.map((img) => (
        <ImgItem key={img.id} {...img} />
      ))}
    </div>
  );
};

export default ImgBox;
