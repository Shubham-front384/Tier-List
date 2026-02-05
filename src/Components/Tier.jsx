import { useState } from "react";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";

import TierRow from "./TierRow";
import ImgBox from "./ImgBox";
import ImgItem from "./ImgItem";

const TIERS = [
  { title: "S", color: "from-yellow-400 to-yellow-600" },
  { title: "A", color: "from-green-400 to-green-600" },
  { title: "B", color: "from-blue-400 to-blue-600" },
  { title: "C", color: "from-purple-400 to-purple-600" },
  { title: "D", color: "from-red-400 to-red-600" },
];

const Tier = () => {
  const [imgData, setImgData] = useState([
    { id: "img1", src: "./GolemCard.png", container: "imageBox" },
    { id: "img2", src: "./MegaKnight.png", container: "imageBox" },
    { id: "img3", src: "./BabyDragonCard.png", container: "imageBox" },
    { id: "img4", src: "./BarbariansCard.png", container: "imageBox" },
    { id: "img5", src: "./BomberCard.png", container: "imageBox" },
    { id: "img6", src: "./DarkPrinceCard.png", container: "imageBox" },
    { id: "img7", src: "./ElixirGolemCard.png", container: "imageBox" },
    { id: "img8", src: "./MinerCard.png", container: "imageBox" },
    { id: "img9", src: "./PEKKACard.png", container: "imageBox" },
    { id: "img10", src: "./RagingPrinceCard.png", container: "imageBox" },
    { id: "img11", src: "./SkeletonsCard.png", container: "imageBox" },
    { id: "img12", src: "./ElectroDragonCard.png", container: "imageBox" },
    { id: "img13", src: "./GiantCard.png", container: "imageBox" },
    { id: "img14", src: "./GiantSkeletonCard.png", container: "imageBox" },
    { id: "img15", src: "./GuardsCard.png", container: "imageBox" },
    { id: "img16", src: "./HogRiderCard.png", container: "imageBox" },
    { id: "img17", src: "./KnightCard.png", container: "imageBox" },
    { id: "img18", src: "./RoyalGiantCard.png", container: "imageBox" },
  ]);

  const [activeId, setActiveId] = useState(null);

  // Desktop + Mobile sensors
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 200, tolerance: 5 },
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) {
      setActiveId(null);
      return;
    }

    setImgData((prev) =>
      prev.map((img) =>
        img.id === active.id
          ? { ...img, container: over.id }
          : img
      )
    );

    setActiveId(null);
  };

  const activeImage = imgData.find((img) => img.id === activeId);

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="min-h-screen bg-[#1A1A1A] p-4 flex flex-col justify-between gap-4">
        {/* TIERS */}
        <div className="flex flex-col gap-3">
          {TIERS.map((tier) => (
            <TierRow
              key={tier.title}
              tier={tier.title}
              color={tier.color}
              images={imgData.filter(
                (img) => img.container === tier.title
              )}
            />
          ))}
        </div>

        {/* IMAGE BOX */}
        <ImgBox
          images={imgData.filter(
            (img) => img.container === "imageBox"
          )}
        />

        {/* DRAG OVERLAY */}
        <DragOverlay>
          {activeImage ? (
            <ImgItem {...activeImage} isOverlay />
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
};

export default Tier;
