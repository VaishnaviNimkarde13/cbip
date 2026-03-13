import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

import historyImg1 from "../../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";
import historyImg2 from "../../assets/n.jpg";


import historypdf1 from "../../assets/pdf/historypdf1.pdf";
import historypdf2 from "../../assets/pdf/historypdf2.pdf";


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
          height: { xs: "200px", sm: "250px", md: "300px" },
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
          sx={{
            color: "#fff",
            position: "relative",
            fontWeight: 600,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.75rem" },
          }}
        >
          History
        </Typography>
      </Box>

      {/* MAIN SECTION */}
      <Box sx={{ py: { xs: 6, sm: 8, md: 11 }, background: "#f7f7f7" }}>
        <Container maxWidth="lg">
          <Grid
            ref={sectionRef}
            container
            spacing={{ xs: 3, sm: 4, md: 4 }}
            alignItems="center"
            sx={{
              mt: { xs: 0, sm: 1, md: 2 },
              flexDirection: { xs: "column", md: "row" },
              flexWrap: { xs: "wrap", md: "nowrap" }, // No wrap on laptop, wrap on mobile
            }}
          >
            {/* IMAGE - Left side on laptop and big screens, top on mobile/tablet */}
            <Grid item xs={12} md={6} sx={{ flexShrink: { md: 0 } }}>
              <Box
                sx={{
                  position: "relative",
                  opacity: sectionInView ? 1 : 0,
                  animation: sectionInView
                    ? "fadeInLeft 0.8s ease both"
                    : "none",
                  maxWidth: { xs: "100%", sm: "90%", md: "100%" },
                  marginLeft: { xs: "auto", md: 0 },
                  marginRight: { xs: "auto", md: 0 },
                  mb: { xs: 2, sm: 3, md: 0 },
                }}
              >
                {/* Shadow card */}
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: 5, sm: 8, md: 10 },
                    left: { xs: -5, sm: -8, md: -10 },
                    width: "100%",
                    height: "100%",
                    background: "#1f355e",
                    borderRadius: { xs: "20px", sm: "25px", md: "30px" },
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
                    maxHeight: { xs: "280px", sm: "320px", md: "380px" },
                    objectFit: "cover",
                    borderRadius: { xs: "20px", sm: "25px", md: "30px" },
                    position: "relative",
                    zIndex: 1,
                    display: "block",
                  }}
                />
              </Box>
            </Grid>

            {/* TEXT SIDE - Right side on laptop and big screens, bottom on mobile/tablet */}
            <Grid item xs={12} md={6} sx={{ flexGrow: { md: 1 } }}>
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
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                  justifyContent: {
                    xs: "center",
                    sm: "flex-start",
                    md: "flex-start",
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 35, sm: 38, md: 40 },
                    height: { xs: 35, sm: 38, md: 40 },
                    background: "#2f3e8f",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "6px",
                    mr: 1.5,
                  }}
                >
                  <DescriptionIcon
                    sx={{ color: "#fff", fontSize: { xs: 20, sm: 22, md: 24 } }}
                  />
                </Box>

                <Typography
                  sx={{
                    background: "#2f3e8f",
                    color: "#fff",
                    px: { xs: 1.5, sm: 2, md: 2 },
                    py: { xs: 0.3, sm: 0.4, md: 0.5 },
                    borderRadius: "6px",
                    fontWeight: 600,
                    fontSize: { xs: "18px", sm: "20px", md: "22px" },
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
                  textAlign: { xs: "justify", sm: "left", md: "left" },
                }}
              >
                <Typography
                  sx={{
                    color: "#555",
                    lineHeight: 1.3,
                    mb: 2,
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1rem" },
                  }}
                >
                  History of CBIP Central Board of Irrigation and Power, is a
                  Premier Institution set up by the Government of India in the
                  1927. CBIP has been rendering dedicated services to the
                  professional organization, engineers and individuals in the
                  country related to Power, Water Resources and Renewable Energy
                  Sectors for the last 90 years. CBIP has grown into an eminent
                  organization of international importance while serving the
                  nation equally with great distinction. CBIP is Indian chapter
                  for 10 international organizations related to Power & Water
                  resources sectors.
                </Typography>

                <Typography
                  sx={{
                    color: "#555",
                    lineHeight: 1.3,
                    mb: 2,
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1rem" },
                  }}
                >
                  Today, Central Board of Irrigation and Power presents a
                  shining example of a pioneer organization and has enabled
                  Indian industry to set higher benchmarks and attain
                  international standards in excellence by creating a unique
                  platform for growth and development of Power, water Resources
                  and Renewable Energy Sectors.
                </Typography>

                <Typography
                  sx={{
                    color: "#555",
                    lineHeight: 1.3,
                    mb: 3,
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1rem" },
                  }}
                >
                  It is a knowledge bank and an exchange for dissemination of
                  experience and technical knowledge.
                </Typography>
              </Box>

              {/* Buttons - fadeIn delay 1300ms */}
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 1.5, sm: 2, md: 2 },
                  opacity: sectionInView ? 1 : 0,
                  animation: sectionInView
                    ? "fadeIn 0.8s ease 1.3s both"
                    : "none",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "stretch", sm: "flex-start" },
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  variant="contained"
                  href={historypdf1}
                  target="_blank"
                  sx={{
                    background: "#333",
                    textTransform: "none",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.05)", background: "#333" },
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                    py: { xs: 0.8, sm: 0.6, md: 0.6 },
                    px: { xs: 2, sm: 2, md: 2 },
                  }}
                >
                  CBIP Brochure
                </Button>

                <Button
                  variant="contained"
                  href={historypdf2}
                  target="_blank"
                  sx={{
                    background: "#333",
                    textTransform: "none",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.05)", background: "#333" },
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                    py: { xs: 0.8, sm: 0.6, md: 0.6 },
                    px: { xs: 2, sm: 2, md: 2 },
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
