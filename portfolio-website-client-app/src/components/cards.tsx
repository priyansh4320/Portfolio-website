import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <Box
      sx={{
        border: "solid 2px black",
        width: "350px",
        height: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
        color: "grey",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px white",


      }}
    >
      <Box
        sx={{
          width: "64px",
          height: "64px",
          backgroundImage: `url('${icon}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
          marginBottom: "12px",
        }}
      ></Box>
      <Typography variant="h6" sx={{ color: "#6DECB9", marginBottom: "8px" }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center", color: "#FFFFFF" }}>
        {description}
      </Typography>
    </Box>
  );
};

export default Card;