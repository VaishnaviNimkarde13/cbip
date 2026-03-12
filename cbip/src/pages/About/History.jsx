import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

import historyImg1 from "../../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";
import historyImg2 from "../../assets/n.jpg";

// Hook to detect when element is in viewport
const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

const History = () => {
  const [sectionRef, sectionInView] = useInView();

  return (
    <>
      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      {/* HERO SECTION */}
      <Box
        sx={{
          height: "300px",
          backgroundImage: `url(${historyImg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }}
        />
        <Typography
          variant="h2"
          sx={{ color: "#fff", position: "relative", fontWeight: 600 }}
        >
          History
        </Typography>
      </Box>

      {/* MAIN SECTION */}
      <Box sx={{ py: 11, background: "#f7f7f7" }}>
        <Container maxWidth="lg">
          <Grid
            ref={sectionRef}
            container
            spacing={4}
            alignItems="center"
            sx={{
              mt: 2,
              flexWrap: "nowrap", // Prevent wrapping
            }}
          >
            {/* IMAGE - fadeInLeft */}
            <Grid item xs={12} md={6} sx={{ flexShrink: 0, maxWidth: "45%" }}>
              {" "}
              {/* Control image container width */}
              <Box
                sx={{
                  position: "relative",
                  opacity: sectionInView ? 1 : 0,
                  animation: sectionInView
                    ? "fadeInLeft 0.8s ease both"
                    : "none",
                  maxWidth: "100%", // Control image box width
                  marginLeft: "auto", // Optional: push to right
                  marginRight: "auto", // Optional: center horizontally
                }}
              >
                {/* Shadow card */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: -10,
                    width: "100%",
                    height: "100%",
                    background: "#1f355e",
                    borderRadius: "30px",
                    zIndex: 0,
                  }}
                />
                <Box
                  component="img"
                  src={historyImg2}
                  alt="History"
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "380px", // Control maximum height
                    objectFit: "cover", // Maintain aspect ratio
                    borderRadius: "30px",
                    position: "relative",
                    zIndex: 1,
                    display: "block",
                  }}
                />
              </Box>
            </Grid>

            {/* TEXT SIDE */}
            <Grid item xs={12} md={6} sx={{ flexGrow: 1 }}>
              {" "}
              {/* Allow text to grow */}
              {/* Icon + Heading - fadeInDown */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  opacity: sectionInView ? 1 : 0,
                  animation: sectionInView
                    ? "fadeInDown 0.8s ease both"
                    : "none",
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    background: "#2f3e8f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "6px",
                    mr: 1.5,
                  }}
                >
                  <DescriptionIcon sx={{ color: "#fff" }} />
                </Box>

                <Typography
                  sx={{
                    background: "#2f3e8f",
                    color: "#fff",
                    px: 2,
                    py: 0.5,
                    borderRadius: "6px",
                    fontWeight: 600,
                    fontSize: "22px",
                  }}
                >
                  History of CBIP
                </Typography>
              </Box>
              {/* Paragraphs - fadeIn delay 900ms */}
              <Box
                sx={{
                  opacity: sectionInView ? 1 : 0,
                  animation: sectionInView
                    ? "fadeIn 0.8s ease 0.9s both"
                    : "none",
                }}
              >
                <Typography sx={{ color: "#555", lineHeight: 1.3, mb: 2 }}>
                  Central Board of Irrigation and Power is a Premier Institution
                  set up by the Government of India in 1927. CBIP has been
                  rendering dedicated services to professional organizations,
                  engineers and individuals in the country related to Power,
                  Water Resources and Renewable Energy sectors for the last 90
                  years. CBIP is Indian chapter for 10 international
                  organizations related to Power & Water resources sectors.
                </Typography>

                <Typography sx={{ color: "#555", lineHeight: 1.3, mb: 2 }}>
                  Today, CBIP presents a shining example of a pioneer
                  organization and has enabled Indian industry to set higher
                  benchmarks and attain international standards in excellence by
                  creating a unique platform for growth and development of
                  Power, Water Resources and Renewable Energy Sectors.
                </Typography>

                <Typography sx={{ color: "#555", lineHeight: 1.3, mb: 3 }}>
                  It is a knowledge bank and an exchange for dissemination of
                  experience and technical knowledge.
                </Typography>
              </Box>
              {/* Buttons - fadeIn delay 1300ms */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  opacity: sectionInView ? 1 : 0,
                  animation: sectionInView
                    ? "fadeIn 0.8s ease 1.3s both"
                    : "none",
                }}
              >
                <Button
                  variant="contained"
                  href="http://cbipsite.cloudbin.in/wp-content/uploads/2025/02/Profile-A4-June-2021.pdf"
                  target="_blank"
                  sx={{
                    background: "#333",
                    textTransform: "none",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.05)", background: "#333" },
                  }}
                >
                  CBIP Brochure
                </Button>

                <Button
                  variant="contained"
                  href="https://cbip.org/CBIP_History_Book.pdf"
                  target="_blank"
                  sx={{
                    background: "#333",
                    textTransform: "none",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.05)", background: "#333" },
                  }}
                >
                  CBIP History Book
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default History;
