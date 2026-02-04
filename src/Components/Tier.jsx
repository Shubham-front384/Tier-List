import { useState } from 'react';
import TierRow from './TierRow';
import ImgBox from './ImgBox';
import { DndContext } from '@dnd-kit/core';

const Tiers = [
  { titleName: 'S', colorName: 'from-yellow-400 to-yellow-600' },
  { titleName: 'A', colorName: 'from-green-400 to-green-600' },
  { titleName: 'B', colorName: 'from-blue-400 to-blue-600' },
  { titleName: 'C', colorName: 'from-purple-400 to-purple-600' },
  { titleName: 'D', colorName: 'from-red-400 to-red-600' },
];

const Tier = () => {
  const [imgData, setImgData] = useState([
    { id: 'img1', src: './GolemCard.png', container: "imageBox" },
    { id: 'img2', src: './MegaKnight.png', container: "imageBox" },
    { id: 'img3', src: './BabyDragonCard.png', container: "imageBox" },
    { id: 'img4', src: './BarbariansCard.png', container: "imageBox" },
    { id: 'img5', src: './BomberCard.png', container: "imageBox" },
    { id: 'img6', src: './DarkPrinceCard.png', container: "imageBox" },
    { id: 'img7', src: './ElixirGolemCard.png', container: "imageBox" },
    { id: 'img8', src: './MinerCard.png', container: "imageBox" },
    { id: 'img9', src: './PEKKACard.png', container: "imageBox" },
    { id: 'img10', src: './RagingPrinceCard.png', container: "imageBox" },
    { id: 'img11', src: './SkeletonsCard.png', container: "imageBox" },
    { id: 'img12', src: './ElectroDragonCard.png', container: "imageBox" },
    { id: 'img13', src: './GiantCard.png', container: "imageBox" },
    { id: 'img14', src: './GiantSkeletonCard.png', container: "imageBox" },
    { id: 'img15', src: './GuardsCard.png', container: "imageBox" },
    { id: 'img16', src: './HogRiderCard.png', container: "imageBox" },
    { id: 'img17', src: './KnightCard.png', container: "imageBox" },
    { id: 'img18', src: './RoyalGiantCard.png', container: "imageBox" },
  ]);

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (!over) return;

    setImgData((prev) =>
      prev.map((img) =>
        img.id === active.id ? { ...img, container: over.id } : img
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="wrapper">
        <TierRow tier="S" images={imgData.filter((img) => img.container === "S")} />
        
        <ImgBox images={imgData.filter((img) => img.container === "imageBox")} />
      </div>
    </DndContext>
  );
};

export default Tier;
