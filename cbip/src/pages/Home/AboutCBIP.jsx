import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import img from "../../assets/AKD.jpg";

const AboutCBIP = () => {
  return (
    <Box sx={{ width: "100%", py: { xs: 4, md: 6 } }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1200px !important",
          margin: "0 auto !important",
          px: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "center",
            gap: { xs: 4, md: 6 },
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          {/* Left Column - Profile */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: { xs: "auto", md: "180px" },
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                width: { xs: "150px", sm: "170px" },
                height: { xs: "190px", sm: "210px" },
              }}
            >
              <img
                src={img}
                alt="Shri A.K Dinkar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/170x210?text=Photo";
                }}
              />
            </Box>
            <Typography
              sx={{
                mt: 1.5,
                fontWeight: 700,
                fontSize: "16px",
                color: "#111",
                textAlign: "center",
              }}
            >
              Shri A.K Dinkar
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#555",
                textAlign: "center",
                mt: 0.5,
              }}
            >
              Secretary
            </Typography>
          </Box>

          {/* Right Column - Content */}
          <Box sx={{ flex: 1, width: "100%" }}>
            {/* Heading Row */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 0.75,
                flexWrap: { xs: "wrap", sm: "nowrap" },
              }}
            >
              <Box
                sx={{
                  background: "#1e2a6e",
                  borderRadius: "8px",
                  width: "46px",
                  height: "46px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </Box>
              <Typography
                sx={{
                  background: "#1e2a6e",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: { xs: "18px", sm: "20px", md: "22px" },
                  padding: "8px 22px",
                  borderRadius: "6px",
                  letterSpacing: "1px",
                }}
              >
                ABOUT CBIP
              </Typography>
            </Box>

            {/* Underline */}
            <Box
              sx={{
                width: "80px",
                height: "3px",
                background: "#1e2a6e",
                my: 1.5,
                borderRadius: "2px",
              }}
            />

            {/* Paragraphs */}
            <Typography
              sx={{
                fontSize: "15px",
                color: "#333",
                lineHeight: 1.85,
                textAlign: "justify",
                mb: 2,
              }}
            >
              Central Board of Irrigation and Power, is a Premier Institution set up by the Government
              of India in the 1927. CBIP has been rendering dedicated services to the professional
              organization, engineers and individuals in the country related to Power, Water Resources
              and Renewable Energy Sectors for the last 97 years. CBIP has grown into an eminent
              organization of international importance while serving the nation equally with great
              distinction. CBIP is Indian chapter for 10 international organizations related to Power
              &amp; Water resources sectors.
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",
                color: "#333",
                lineHeight: 1.85,
                textAlign: "justify",
                mb: 2,
              }}
            >
              Today, Central Board of Irrigation and Power presents a shining example of a pioneer
              organization and has enabled Indian industry to set higher benchmarks and attain
              international …
            </Typography>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 1.5,
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "stretch", sm: "center" },
              }}
            >
              <Button
                sx={{
                  background: "#2d2d2d",
                  color: "#fff",
                  border: "none",
                  py: 1.5,
                  px: 3,
                  fontSize: "15px",
                  fontWeight: 600,
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  textTransform: "none",
                  "&:hover": {
                    background: "#404040",
                  },
                }}
              >
                Learn More &nbsp;&#10140;
              </Button>
              <Button
                sx={{
                  background: "#2d2d2d",
                  color: "#fff",
                  border: "none",
                  py: 1.5,
                  px: 3,
                  fontSize: "15px",
                  fontWeight: 600,
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  textTransform: "none",
                  "&:hover": {
                    background: "#404040",
                  },
                }}
              >
                Documentry &nbsp;&#10140;
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutCBIP;