import React from "react";
import { orange } from "@material-ui/core/colors";

const ColorContext = React.createContext({
  color: orange[500]
});

export default ColorContext;
