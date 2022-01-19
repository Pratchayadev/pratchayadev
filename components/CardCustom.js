import React from "react";
import { Box } from "@mui/system";
function CardCustom({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 3,
        marginTop: "2rem",
      }}
    >
      {children}
    </Box>
  );
}

export default CardCustom;
