import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const ImgItem = ({ id, src, isOverlay }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({ id });

  return (
    <img
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      src={src}
      draggable={false}
      className={`w-12 select-none ${
        isOverlay
          ? "cursor-grabbing scale-110"
          : "cursor-grab"
      }`}
      style={{
        transform: CSS.Translate.toString(transform),
        opacity: isDragging && !isOverlay ? 0.3 : 1,
      }}
    />
  );
};

export default ImgItem;
