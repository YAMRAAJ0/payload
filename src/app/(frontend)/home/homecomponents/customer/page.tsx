import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import CustomerClient from "./customer";
const customerServer = async () => {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "customer" });

  const Data = docs[0]; 
  return (
    <>
      <CustomerClient data={Data} />
    </>
  );
};

export default customerServer;
