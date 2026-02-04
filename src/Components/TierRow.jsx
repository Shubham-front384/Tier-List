import { useDroppable } from "@dnd-kit/core"
import ImgItem from "./ImgItem";

const TierRow = ({ tier, images }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: tier
  });

  return (
    <div className="tier-row">
      <div className="tier-label">
        {tier}
      </div>

      <div ref={setNodeRef} className={`tier-drop ${isOver ? "active" : ""}`}>
        {
          images.map((img) => (
            <ImgItem key={img.id} {...img} />
          ))
        }
      </div>
    </div>
  )
}

export default TierRow
