import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import CardsSection from "./CardsSection";
import CardsSection2 from "./CardsSection2";
const CardsServer = async () => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "cards" });
  const Data = docs[2]; 
  const Data2 = docs[0]; 
  console.log("0000000000000000000000",Data2)
  return <>
  <CardsSection data={Data} />
  <CardsSection2 data={Data2} />
  </>;
};

export default CardsServer;