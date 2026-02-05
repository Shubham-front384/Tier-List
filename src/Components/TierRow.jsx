import { useDroppable } from "@dnd-kit/core";
import ImgItem from "./ImgItem";

const TierRow = ({ tier, color, images }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: tier,
  });

  return (
    <div className="flex min-h-[80px] rounded-xl overflow-hidden border border-gray-600">
      {/* LABEL */}
      <div
        className={`w-14 flex items-center justify-center font-bold text-white bg-gradient-to-b ${color}`}
      >
        {tier}
      </div>

      {/* DROP ZONE */}
      <div
        ref={setNodeRef}
        className={`flex flex-1 flex-wrap gap-2 p-2 transition ${
          isOver ? "bg-gray-700" : "bg-gray-800"
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
