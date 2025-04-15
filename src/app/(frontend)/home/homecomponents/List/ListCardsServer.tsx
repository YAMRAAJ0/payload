import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import ListCardsSection from "./ListCardsSection";

const GridCardsServer = async () => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "list" });

  const sectionData = docs[0];

  return <ListCardsSection data={sectionData} />;
};

export default GridCardsServer;
