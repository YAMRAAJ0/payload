import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import NavbarClient from "./Navbar"; 

const NavbarServer = async () => {
  const payload = await getPayload({ config });

  const findResult = await payload.find({ collection: "navbar" });

  const sortedNavItems = findResult?.docs?.sort((a, b) => a.order - b.order) || [];

  return <NavbarClient navItems={sortedNavItems} />;
};

export default NavbarServer;





