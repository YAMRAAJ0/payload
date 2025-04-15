import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import GridCardsSection from "./GridCardsSection";

const GridCardsServer = async () => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "grid-cards" });

  const sectionData = docs[0];
  return <GridCardsSection data={sectionData} />;
};

export default GridCardsServer;
