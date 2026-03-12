import React, { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Link,
} from "@mui/material";
import img from "../../assets/PGDC2022.png";
import tower from "../../assets/tower.png";

import prospectusPDF from "../../assets/pdf/Prospectus.pdf";
import pdf1 from "../../assets/pdf/UE1.pdf";
import pdf2 from "../../assets/pdf/UE2.pdf";
import pdf3 from "../../assets/pdf/UE3.pdf";
import pdf4 from "../../assets/pdf/UE4.pdf";
import pdf5 from "../../assets/pdf/UE5.pdf";

const CARD_HEIGHT = 420;

const events = [
  {
    title:
      "International Conference DAM SAFETY 2025 – Resilient Infrastructure for A Sustainable Future",
    pdf: pdf1,
  },
  {
    title: "Training Power System Protection",
    pdf: pdf2,
  },
  {
    title: "Training on Hybrid Switchgears – Plug & Switch System",
    pdf: pdf3,
  },
  {
    title:
      "National Conference Role of Artificial Intelligence (AI) in the Power and Water Resources Sectors",
    pdf: pdf4,
  },
  {
    title:
      "One Day Workshop on Unlocking the Power of Hydrokinetic Energy \u201cRiding the Current\u201d",
    pdf: pdf5,
  },
];

const EventSmallIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1e2a6e">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#e8eaf6" />
    <rect x="5" y="5" width="4" height="4" rx="0.5" fill="#1e2a6e" />
    <rect x="10" y="5" width="4" height="4" rx="0.5" fill="#1e2a6e" />
    <rect x="15" y="5" width="4" height="4" rx="0.5" fill="#1e2a6e" />
    <rect x="5" y="10" width="4" height="4" rx="0.5" fill="#1e2a6e" />
    <rect x="10" y="10" width="4" height="4" rx="0.5" fill="#1e2a6e" />
    <rect x="15" y="10" width="4" height="4" rx="0.5" fill="#1e2a6e" />
    <rect x="5" y="15" width="4" height="4" rx="0.5" fill="#1e2a6e" />
    <rect x="10" y="15" width="4" height="4" rx="0.5" fill="#1e2a6e" />
  </svg>
);

const CertIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M9 8h6M9 11h4" />
  </svg>
);

const EventHeaderIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

const UpcomingEvents = () => {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const totalHeightRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait for render then measure full scroll height of all items
    setTimeout(() => {
      totalHeightRef.current = track.scrollHeight;
    }, 100);

    const animate = () => {
      posRef.current += 0.5;
      // When all items have scrolled past, snap back to start
      if (posRef.current >= totalHeightRef.current) {
        posRef.current = 0;
      }
      track.style.transform = `translateY(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const stopScroll = () => cancelAnimationFrame(animRef.current);

  const startScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const animate = () => {
      posRef.current += 0.5;
      if (posRef.current >= totalHeightRef.current) posRef.current = 0;
      track.style.transform = `translateY(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
  };

  return (
    <Box sx={{ bgcolor: "#f0f0f0", py: { xs: 4, md: 5 }, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1200px !important",
          margin: "0 auto !important",
          px: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 0,
            alignItems: "flex-start",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          {/* LEFT - PGDC T&D */}
          <Box
            sx={{
              flex: { lg: "0 0 300px" },
              width: { xs: "100%", lg: "auto" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mb: { xs: 3, lg: 0 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  background: "#1e2a6e",
                  borderRadius: "6px",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <CertIcon />
              </Box>
              <Typography
                sx={{
                  background: "#1e2a6e",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "20px",
                  padding: "8px 20px",
                  borderRadius: "6px",
                }}
              >
                PGDC T&D
              </Typography>
            </Box>

            <Paper
              elevation={0}
              sx={{
                background: "#fff",
                borderRadius: "8px",
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1.5,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                height: CARD_HEIGHT,
                boxSizing: "border-box",
              }}
            >
              <Box
                component="img"
                src={img}
                alt="PGDC T&D"
                sx={{
                  width: "100%",
                  height: "220px",
                  objectFit: "contain",
                  borderRadius: "4px",
                  flexShrink: 0,
                }}
                onError={(e) => {
                  e.target.src = "https://placehold.co/260x220?text=PGDC+T%26D";
                }}
              />
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#111",
                  textAlign: "center",
                  lineHeight: 1.5,
                }}
              >
                CEA Approved Online Certification Course in Transmission and
                Distribution Systems with Automation SCADA/ DMS
              </Typography>

              <Button
                onClick={() => window.open(prospectusPDF, "_blank")}
                sx={{
                  background: "#e53935",
                  color: "#fff",
                  border: "none",
                  py: 1,
                  px: 2.5,
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: "auto",
                  "&:hover": {
                    background: "#c62828",
                  },
                }}
              >
                Download Prospectus &nbsp;📄
              </Button>
            </Paper>
          </Box>

          {/* MIDDLE - Image */}
          <Box
            sx={{
              flex: { lg: "0 0 340px" },
              width: { xs: "100%", lg: "auto" },
              overflow: "hidden",
              height: CARD_HEIGHT + 60,
              display: { xs: "none", md: "block" },
              mx: { lg: 0 },
            }}
          >
            <Box
              component="img"
              src={tower}
              alt="Power Infrastructure"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.target.src = "https://placehold.co/340x480?text=Power";
              }}
            />
          </Box>

          {/* RIGHT - Upcoming Events */}
          <Box
            sx={{
              flex: 1,
              width: { xs: "100%", lg: "auto" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
              pl: { lg: 5 },
              mt: { xs: 3, lg: 0 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  background: "#1e2a6e",
                  borderRadius: "6px",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <EventHeaderIcon />
              </Box>
              <Typography
                sx={{
                  background: "#1e2a6e",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "20px",
                  padding: "8px 20px",
                  borderRadius: "6px",
                }}
              >
                Upcoming Event
              </Typography>
            </Box>

            <Box
              sx={{
                overflow: "hidden",
                position: "relative",
                height: CARD_HEIGHT,
              }}
              onMouseEnter={stopScroll}
              onMouseLeave={startScroll}
            >
              <Box
                ref={trackRef}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {events.map((ev, i) => (
                  <Link
                    key={i}
                    href={ev.pdf}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                      py: 1.5,
                      borderBottom: "1px solid #ddd",
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#222",
                      "&:hover": {
                        color: "#1e2a6e",
                      },
                    }}
                  >
                    <Box sx={{ flexShrink: 0, mt: 0.5 }}>
                      <EventSmallIcon />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: 1.6,
                        color: "inherit",
                      }}
                    >
                      {ev.title}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UpcomingEvents;