import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const ImgItem = ({ id, src }) => {
  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({ id });

  return (
    <img
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      src={src}
      draggable={false}
      className="w-20 cursor-grab select-none"
      style={{
        transform: CSS.Translate.toString(transform),
      }}
    />
  );
};

export default ImgItem;
