import React, { useState } from "react";
import "./styles/gu_fab.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function () {
  const [scrollY, setScrollY] = useState<number>(0);

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return scrollY ? (
    <a href="#navbar" className="goUpFab">
      <KeyboardArrowUpIcon />
    </a>
  ) : null;
}
