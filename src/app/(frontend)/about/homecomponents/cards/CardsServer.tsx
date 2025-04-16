import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import CardsSection from "./CardsSection";

const CardsServer = async () => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "cards" });
  const Data = docs[1]; 

  return <>
  <CardsSection data={Data} />
  </>;
};

export default CardsServer;
