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
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import ArticleIcon from "@mui/icons-material/Article";

import heroimg from "../../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";
import img from "../../assets/membership.jpg";

// ── same hook as History ──────────────────────────────────────────────────────
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

const benefits = [
  "Each manual/ guidelines and other technical documents etc. brought out by CBIP",
  "Proceedings of each conference/seminar being organized by CBIP",
  "Special publications brought out by CBIP",
  "Monthly Issue of Water and Energy International Journal",
  "Complimentary copy of Monthly Issue of Water and Energy International Journal containing articles giving details on latest trends and Innovations, Technical data, News on Water and Power Sector.",
  "Preference to the experts from member organization in Membership of the experts committee constituted by CBIP from time to time.",
  "10% discount in registration fee for the events i.e. conferences, workshops etc. being organized by CBIP besides free invitation to the top management as special invitee.",
  "10% concession on purchase of addl. copy of CBIP publications.",
  "10% discount in publishing advertisement in the Journals & Publications of CBIP.",
  "Free use of CBIP library by officers/professionals of member organizations",
];

const HERO_IMG = heroimg;
const SECTION_IMG = img;

export default function Benefits() {
  const [sectionRef, sectionInView] = useInView();
  const [listRef,    listInView]    = useInView();

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

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
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
          Benefits
        </Typography>
      </Box>

      {/* ── SECTION 1 : image + text with image at left, text at right ────────────────── */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: "#f7f7f7" }}>
        <Container maxWidth="lg">
          <Grid
            ref={sectionRef}
            container
            spacing={{ xs: 4, md: 4 }}
            alignItems="center"
            direction={{ xs: "column-reverse", md: "row" }} // Image below text on mobile, image left on desktop
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" }, // Wrap on mobile, no wrap on desktop
            }}
          >
            {/* Image – fadeInLeft (LEFT SIDE ON DESKTOP, BOTTOM ON MOBILE) */}
            <Grid item xs={12} md={5} sx={{ width: "100%" }}>
              <Box
                sx={{
                  opacity: sectionInView ? 1 : 0,
                  animation: sectionInView ? "fadeInLeft 0.8s ease both" : "none",
                }}
              >
                <Box
                  component="img"
                  src={SECTION_IMG}
                  alt="Membership"
                  sx={{ 
                    width: "100%", 
                    borderRadius: "4px", 
                    display: "block" 
                  }}
                />
              </Box>
            </Grid>

            {/* Text – fadeInRight (RIGHT SIDE ON DESKTOP, TOP ON MOBILE) */}
            <Grid item xs={12} md={7} sx={{ width: "100%" }}>
              <Box
                sx={{
                  opacity: sectionInView ? 1 : 0,
                  animation: sectionInView ? "fadeInRight 0.8s ease 0.2s both" : "none",
                }}
              >
                {/* Body text 1 */}
                <Typography sx={{ color: "#555", lineHeight: 1.9, mb: 2, fontSize: "0.95rem" }}>
                  Executive committee headed by President CBIP (Present Chairperson, CEA), is the
                  highest body taking all the decision for the CBIP. We have at present 240 members
                  in the executive committee broadly comprises of the following organizations:
                </Typography>
                <Typography sx={{ color: "#555", lineHeight: 1.9, mb: 3, fontSize: "0.95rem" }}>
                  CPSUs; PSUs; State Electricity Board; State Power, Generation, Transmission and
                  Distribution Cos. and State Energy &amp; Water Resources departments.
                </Typography>

                {/* Sub-heading – fadeInDown */}
                <Box
                  sx={{
                    opacity: sectionInView ? 1 : 0,
                    animation: sectionInView ? "fadeInDown 0.8s ease 0.4s both" : "none",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#1a3a8f", fontWeight: 700, mb: 2, lineHeight: 1.4 }}
                  >
                    Membership of the Executive Committee of the Board.
                  </Typography>
                </Box>

                {/* Body text 2 – fadeInRight delay 900 ms */}
                <Box
                  sx={{
                    opacity: sectionInView ? 1 : 0,
                    animation: sectionInView ? "fadeInRight 0.8s ease 0.9s both" : "none",
                  }}
                >
                  <Typography sx={{ color: "#555", lineHeight: 1.9, fontSize: "0.95rem" }}>
                    The officers of the rank of Chief Engineer and above or equivalent from the member
                    organizations are the member of General Body of the CBIP. All general body members
                    are being updated about the latest information and Innovations in the Power and Water
                    Resources sectors through monthly issue of Water and Energy International Journal of CBIP.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── SECTION 2 : complimentary docs list ──────────────────────────────── */}
      <Box sx={{ py: { xs: 6, md: 8 }, background: "#f7f7f7" }}>
        <Container maxWidth="lg">
          <Box ref={listRef}>

            {/* Section heading – fadeInDown */}
            <Box
              sx={{
                opacity: listInView ? 1 : 0,
                animation: listInView ? "fadeInDown 0.8s ease both" : "none",
                mb: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#1a3a8f", fontWeight: 700, lineHeight: 1.5 }}
              >
                Complimentary copies of the following documents produced by CBIP are regularly
                sent to the top management of the member organizations.
              </Typography>
            </Box>

            {/* Repeated paragraph – fadeInLeft delay 900 ms */}
            <Box
              sx={{
                opacity: listInView ? 1 : 0,
                animation: listInView ? "fadeInLeft 0.8s ease 0.9s both" : "none",
                mb: 3,
              }}
            >
              <Typography sx={{ color: "#555", lineHeight: 1.9, fontSize: "0.95rem" }}>
                The officers of the rank of Chief Engineer and above or equivalent from the member
                organizations are the member of General Body of the CBIP. All general body members are
                being updated about the latest information and Innovations in the Power and Water Resources
                sectors through monthly issue of Water and Energy International Journal of CBIP.
              </Typography>
            </Box>

            {/* Benefits list – zoomIn with staggered delays */}
            <List dense disablePadding>
              {benefits.map((item, i) => (
                <ListItem
                  key={i}
                  disableGutters
                  sx={{
                    alignItems: "flex-start",
                    py: 0.6,
                    opacity: listInView ? 1 : 0,
                    animation: listInView
                      ? `zoomIn 0.5s ease ${0.1 + i * 0.08}s both`
                      : "none",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 32, mt: 0.3 }}>
                    <ArticleIcon sx={{ color: "#e53935", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: { color: "#444", fontSize: "0.92rem", lineHeight: 1.75 },
                    }}
                  />
                </ListItem>
              ))}
            </List>

          </Box>
        </Container>
      </Box>
    </>
  );
}