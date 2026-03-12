import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import heroimg from "../../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";
import img from "../../assets/feeimg.jpg";
import pdf from "../../assets/pdf/BENEFITSTOMEMBERS.pdf";

const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

const objectives = [
  "Dissemination of technical knowledge through publication of journals, manuals, technical reports, guidelines, organizing conferences/ seminars etc. We have published till date about 1500 important publications for the development of these sectors.",
  "Established a Centre of Excellence at Gurgaon for providing training for skill upgrade.",
  "CBIP undertakes consultancy jobs for Manpower Planning, Preparation of O&M Manuals.",
  "Undertake contract for Recruitment of technical and non-technical staff.",
  "Consultancy for setting up Solar Power Plants.",
  "Executing Projects linked with CSR on behalf of various PSU's.",
];

const HERO_IMG =heroimg;
 
const BANNER_IMG =img;

// CentOS-style star icon as SVG
const StarIcon = () => (
  <svg
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: 18, height: 18, fill: "#d9251c" }}
  >
    <path d="M289.6 97.5l31.6 31.7-76.3 76.5V97.5zm-162.4 31.7l76.3 76.5V97.5h-44.7zm41.5-41.6h44.7v127.9l10.8 10.8 10.8-10.8V87.6h44.7L224.2 32zm26.2 168.1l-10.8-10.8H55.5v-44.8L0 255.7l55.5 55.6v-44.8h128.6l10.8-10.8zm79.3-20.7h107.9v-44.8l-31.6-31.7zm173.3 20.7L392 200.1v44.8H264.3l-10.8 10.8 10.8 10.8H392v44.8l55.5-55.6zM65.4 176.2l32.5-31.7 90.3 90.5h15.3v-15.3l-90.3-90.5 31.6-31.7H65.4zm316.7-78.7h-78.5l31.6 31.7-90.3 90.5V235h15.3l90.3-90.5 31.6 31.7zM203.5 413.9V305.8l-76.3 76.5 31.6 31.7h44.7zM65.4 235h108.8l-76.3-76.5-32.5 31.7zm316.7 100.2l-31.6 31.7-90.3-90.5h-15.3v15.3l90.3 90.5-31.6 31.7h78.5zm0-58.8H274.2l76.3 76.5 31.6-31.7zm-60.9 105.8l-76.3-76.5v108.1h44.7zM97.9 352.9l76.3-76.5H65.4v44.8zm181.8 70.9H235V295.9l-10.8-10.8-10.8 10.8v127.9h-44.7l55.5 55.6zm-166.5-41.6l90.3-90.5v-15.3h-15.3l-90.3 90.5-32.5-31.7v78.7h79.4z" />
  </svg>
);

export default function CategoryFee() {
  const [sec1Ref, sec1InView] = useInView();
  const [sec2Ref, sec2InView] = useInView();

  return (
    <>
      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(60px); }
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
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <Box
        sx={{
          height: "300px",
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.52)" }} />
        <Typography
          variant="h2"
          sx={{ color: "#fff", position: "relative", fontWeight: 700, letterSpacing: 1 }}
        >
          Category and Fee
        </Typography>
      </Box>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <Box sx={{ py: 8, background: "#f7f7f7" }}>
        <Container maxWidth="lg">
          <Box ref={sec1Ref}>

            {/* "CBIP Membership" heading – fadeInDown */}
            <Box
              sx={{
                opacity: sec1InView ? 1 : 0,
                animation: sec1InView ? "fadeInDown 0.8s ease both" : "none",
                mb: 3,
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#1a3a8f", fontWeight: 700 }}
              >
                CBIP Membership
              </Typography>
            </Box>

            {/* Banner image – fadeIn */}
            <Box
              sx={{
                opacity: sec1InView ? 1 : 0,
                animation: sec1InView ? "fadeIn 0.8s ease 0.2s both" : "none",
                mb: 4,
              }}
            >
              <Box
                component="img"
                src={BANNER_IMG}
                alt="CBIP Banner"
                sx={{ width: "100%", maxHeight: 320, objectFit: "cover", display: "block", borderRadius: "4px" }}
              />
            </Box>

            {/* Benefits heading – fadeInDown */}
            <Box
              sx={{
                opacity: sec1InView ? 1 : 0,
                animation: sec1InView ? "fadeInDown 0.8s ease 0.3s both" : "none",
                mb: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#d9251c", fontWeight: 700, lineHeight: 1.5, textTransform: "uppercase" }}
              >
                Benefits for Becoming Institutional Member Organisation of Central Board of
                Irrigation &amp; Power
              </Typography>
            </Box>

            {/* Description paragraph – fadeInLeft delay 900ms */}
            <Box
              sx={{
                opacity: sec1InView ? 1 : 0,
                animation: sec1InView ? "fadeInLeft 0.8s ease 0.9s both" : "none",
                mb: 4,
              }}
            >
              <Typography sx={{ color: "#555", lineHeight: 1.9, fontSize: "0.95rem" }}>
                The Central Board of Irrigation &amp; Power (CBIP) created by Government of India in
                1927, is a Premier Institution has been rendering dedicated services to professional
                organizations, engineers and individuals in the country and abroad for the last more
                than 89 years, resulting in accelerated development in the disciplines of Power,
                Renewable Energy and Water Resources Sectors in the country and abroad. It is a
                knowledge bank and exchange for dissemination of technical knowledge &amp; professional
                experiences to help Indian Engineers/ professionals to update their knowledge and gain
                practical know-how.
              </Typography>
            </Box>

          </Box>

          {/* ── OBJECTIVES ─────────────────────────────────────────────── */}
          <Box ref={sec2Ref}>

            {/* "Main objectives" heading – fadeInDown */}
            <Box
              sx={{
                opacity: sec2InView ? 1 : 0,
                animation: sec2InView ? "fadeInDown 0.8s ease both" : "none",
                mb: 0,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#1a3a8f", fontWeight: 700 }}
              >
                The main objectives of CBIP
              </Typography>
            </Box>

            {/* Objectives list – staggered zoomIn */}
            <List dense disablePadding sx={{ mb: 4 }}>
              {objectives.map((item, i) => (
                <ListItem
                  key={i}
                  disableGutters
                  sx={{
                    alignItems: "flex-start",
                    py: 0,
                    
                    opacity: sec2InView ? 1 : 0,
                    animation: sec2InView
                      ? `zoomIn 0.5s ease ${0.1 + i * 0.1}s both`
                      : "none",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32, mt: 0.4 }}>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: { color: "#333333", fontSize: "0.92rem",fontWeight:"bold", lineHeight: 1.8 },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            {/* CTA Button – fadeIn delay 1300ms */}
            <Box
              sx={{
                opacity: sec2InView ? 1 : 0,
                animation: sec2InView ? "fadeIn 0.8s ease 1.3s both" : "none",
              }}
            >
              <Button
                variant="contained"
                href={pdf}
                target="_blank"
                startIcon={<ArrowCircleRightIcon />}
                sx={{
                  background: "#333333",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderRadius: "6px",
                  transition: "transform 0.3s ease, background 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    // background: "#142d72",
                  },
                }}
              >
                Benefit for Member
              </Button>
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  );
}