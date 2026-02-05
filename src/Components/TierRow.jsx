import { useDroppable } from "@dnd-kit/core";
import ImgItem from "./ImgItem";

const TierRow = ({ tier, color, images }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: tier,
  });

  return (
    <div className="flex min-h-[90px] border">
      {/* Tier Label */}
      <div
        className={`w-14 flex items-center justify-center font-bold text-white bg-gradient-to-b ${color}`}
      >
        {tier}
      </div>

      {/* Drop Area */}
      <div
        ref={setNodeRef}
        className={`flex flex-1 flex-wrap gap-2 p-2 ${
          isOver ? "bg-gray-200" : "bg-gray-100"
        }`}
      >
        {images.map((img) => (
          <ImgItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};

export default TierRow;
