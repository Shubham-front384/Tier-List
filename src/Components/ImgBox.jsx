import { useDroppable } from "@dnd-kit/core";
import ImgItem from "./ImgItem";

const ImgBox = ({ images }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "imageBox",
  });

  return (
    <div
      ref={setNodeRef}
      className={`image-box ${isOver ? "active" : ""}`}
    >
      {images.map((img) => (
        <ImgItem key={img.id} {...img} />
      ))}
    </div>
  )
}

export default ImgBox
