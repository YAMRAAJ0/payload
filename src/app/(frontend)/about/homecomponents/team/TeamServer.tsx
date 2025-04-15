import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import CardsSection from "./TeamSection";

const CardsServer = async () => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "team" });
  const Data = docs[0]; 
  return <>
  <CardsSection data={Data} />
  </>;
};

export default CardsServer;
