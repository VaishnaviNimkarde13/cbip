import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import bgimg from "../../assets/bg.png";

// Megaphone Icon
const MegaphoneIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 11v2a1 1 0 001 1h1l2 4h2l-1-4h8l3 3V4l-3 3H7L5 8H4a1 1 0 00-1 1v2z" />
  </svg>
);

const CBIPAnnouncement = () => {
  const leftItems = ["RE-Programs", "Training Partners"];
  const rightItems = ["Hydro Regulations", "Space for Rent", "Expert Registration"];

  const renderLabels = (items) => (
    <Box sx={{ width: "100%" }}>
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0 18px 0 0",
            border: "none",
            borderRadius: "50px",
            minHeight: "52px",
            marginBottom: "10px",
            background: "#2d3a8c",
            color: "#fff",
          }}
        >
          <Box
            sx={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginRight: "14px",
              background: "#1e2560",
            }}
          />
          <Typography sx={{ fontSize: "15px", fontWeight: 700 }}>
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundImage: `url(${bgimg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.70)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 4, md: 5 },
          px: { xs: 2, md: 3 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1200px !important",
            margin: "0 auto !important",
          }}
        >
          {/* Title Row */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.75 }}>
            <Box
              sx={{
                background: "#1e2a6e",
                borderRadius: "6px",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <MegaphoneIcon />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "22px", md: "26px" },
                fontWeight: 700,
                color: "#fff",
                m: 0,
              }}
            >
              CBIP Announcement
            </Typography>
          </Box>

          {/* Underline */}
          <Box
            sx={{
              width: "20%",
              height: "3px",
              background: "#fff",
              borderRadius: "2px",
              mb: 3.5,
              ml: "52px",
            }}
          />

          {/* Card with labels */}
          <Paper
            elevation={0}
            sx={{
              background: "rgba(255,255,255,0.97)",
              borderRadius: "14px",
              p: { xs: 2.5, sm: 3 },
              display: "flex",
              gap: { xs: 2, md: 3 },
              alignItems: "flex-start",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Left Column */}
            <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
              {renderLabels(leftItems)}
            </Box>

            {/* Right Column */}
            <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
              {renderLabels(rightItems)}
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default CBIPAnnouncement;