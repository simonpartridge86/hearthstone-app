"use client";

import { useEffect } from "react";

const PrelineInitiator = () => {
  useEffect(() => {
    require("preline");
  }, []);

  return <div id="preline-initiator" className="hidden" />;
};

export default PrelineInitiator;
