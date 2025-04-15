import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import FooterClient from "./Footer";

const FooterServer = async () => {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({ collection: "footer1" });
  return <FooterClient footerItems={docs} />;
};

export default FooterServer;
