import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const ImgItem = ({ id, src }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  return (
    <img
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      src={src}
      className="image"
      style={{
        transform: CSS.Translate.toString(transform),
      }}
      draggable={false}
    />
  )
}

export default ImgItem
