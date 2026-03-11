import React, { useEffect, useRef } from "react";
import { Box, Container, Typography, useTheme, useMediaQuery } from "@mui/material";

const Slider = () => {
  const videoRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play was prevented:", error);
      });
    }
  }, []);

  // Adjust height based on screen size
  const sliderHeight = isMobile ? "300px" : isTablet ? "400px" : "500px";

  return (
    <Box
      sx={{
        width: "100%",
        height: sliderHeight,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <Box
        component="video"
        ref={videoRef}
        src="https://files.cbip.org/video6.mp4"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      {/* Gradient Overlay */}
     

    
    </Box>
  );
};

export default Slider;