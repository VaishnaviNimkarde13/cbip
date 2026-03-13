import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Divider,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WarningIcon from "@mui/icons-material/Warning";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AssignmentIcon from "@mui/icons-material/Assignment";
import heroimg from "../../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";
import img1 from "../../assets/pastevent.png";

// ── InView hook ───────────────────────────────────────────────────────────────
const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

// ── Btn styles ────────────────────────────────────────────────────────────────
const btnBase = {
  textTransform: "none",
  fontWeight: 600,
  fontSize: "0.75rem",
  borderRadius: "4px",
  px: 1.5,
  py: 0.6,
  minWidth: "auto",
};

// ── Main page ─────────────────────────────────────────────────────────────────
export default function PastEvents() {
  const [cardRef, cardInView] = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── HERO ── */}
      <Box
        sx={{
          height: { xs: "200px", sm: "250px", md: "300px" },
          backgroundImage: `url(${heroimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.52)",
          }}
        />
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            position: "relative",
            fontWeight: 700,
            letterSpacing: 1,
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
            textAlign: "center",
            px: 2,
          }}
        >
     Past Events
        </Typography>
      </Box>

      {/* ── SINGLE CARD ── */}
      <Box sx={{ py: { xs: 5, md: 7 }, background: "#f7f7f7" }}>
        <Container maxWidth="lg">
          {/* Section heading */}
          <Typography
            variant="h6"
            sx={{
              color: "#1a3a8f",
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              opacity: cardInView ? 1 : 0,
              animation: cardInView ? "fadeInDown 0.7s ease both" : "none",
            }}
          >
            Past Event: Electrical and Fire Safety Seminar
          </Typography>

          {/* Single Card */}
          <Box
            ref={cardRef}
            sx={{
              bgcolor: "#fff",
              border: "1px solid #e0e0e0",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              mb: 4,
              opacity: cardInView ? 1 : 0,
              animation: cardInView ? "fadeInUp 0.8s ease both" : "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 2, sm: 0 },
                py: 3.5,
                px: { xs: 2, sm: 3 },
                bgcolor: "#fff",
                transition: "background 0.2s",
                "&:hover": { bgcolor: "#fafbff" },
              }}
            >
              {/* ── LEFT: Image ── */}
              <Box
                sx={{
                  flexShrink: 0,
                  width: { xs: "100%", sm: 280 },
                  height: { xs: 200, sm: 380 },
                  overflow: "hidden",
                  mr: { sm: 3 },
                  mb: { xs: 2, sm: 0 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <Box
                  component="img"
                  src={img1}
                  alt="Seminar"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    p: 1,
                  }}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/280x380/e8eaf6/1a3a8f?text=Seminar";
                  }}
                />
              </Box>

              {/* ── RIGHT: Content ── */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Title */}
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#1a3a8f",
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    lineHeight: 1.5,
                    mb: 1.25,
                  }}
                >
                  Past Events{" "}
                </Typography>

                {/* Date & Venue */}
                <Typography
                  sx={{
                    color: "#555",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    mb: 2,
                  }}
                >
                  <strong>Date:</strong> 23-24 June 2022 ·{" "}
                  <strong>Venue:</strong> National Skill Development Forum, The
                  Institution of Engineers (India), Shimla
                </Typography>

                {/* Download Buttons */}
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 3 }}
                >
                  <Button
                    variant="contained"
                    startIcon={
                      <FileDownloadIcon sx={{ fontSize: "15px !important" }} />
                    }
                    size="small"
                    sx={{
                      ...btnBase,
                      background: "#1a3a8f",
                      color: "#fff",
                      fontSize: "0.8rem",
                      "&:hover": { background: "#142d72" },
                    }}
                  >
                    Download Brochure
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={
                      <PhotoLibraryIcon sx={{ fontSize: "15px !important" }} />
                    }
                    size="small"
                    sx={{
                      ...btnBase,
                      background: "#2e7d32",
                      color: "#fff",
                      fontSize: "0.8rem",
                      "&:hover": { background: "#1e5a22" },
                    }}
                  >
                    Download Photographs
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={
                      <SlideshowIcon sx={{ fontSize: "15px !important" }} />
                    }
                    size="small"
                    sx={{
                      ...btnBase,
                      background: "#b85e00",
                      color: "#fff",
                      fontSize: "0.8rem",
                      "&:hover": { background: "#8e4a00" },
                    }}
                  >
                    Download Presentations
                  </Button>
                </Box>
              </Box>
            </Box>
            <Divider sx={{ borderColor: "#e0e0e0", borderBottomWidth: 2 }} />
          </Box>

          {/* Extra spacing */}
          <Box sx={{ height: { xs: 2, md: 4 } }} />
        </Container>
      </Box>
    </>
  );
}
