import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <CopyrightIcon />
      <Typography fontWeight={"bold"}>
        2022 Live USA, Inc. All rights reserved.
      </Typography>
    </footer>
  );
}
