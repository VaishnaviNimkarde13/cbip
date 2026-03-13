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
import PaymentIcon from "@mui/icons-material/Payment";
import SponsorIcon from "@mui/icons-material/EmojiEvents";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import heroimg from "../../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";

import img1 from "../../assets/event1.png";
import img2 from "../../assets/event2.png";
import img3 from "../../assets/event3.png";
import img4 from "../../assets/event4.png";
import img5 from "../../assets/event5.png";
import img6 from "../../assets/event6.png";

import pdf1 from "../../assets/pdf/eventpdf1.pdf";
import pdf2 from "../../assets/pdf/eventpdf2.pdf";
import pdf3 from "../../assets/pdf/eventpdf3.pdf";
import pdf4 from "../../assets/pdf/eventpdf4.pdf";
import pdf5 from "../../assets/pdf/eventpdf5.pdf";
import pdf6 from "../../assets/pdf/eventpdf6.pdf";
import pdf7 from "../../assets/pdf/eventpdf7.pdf";
import pdf8 from "../../assets/pdf/eventpdf8.pdf";

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

// ── Event data ────────────────────────────────────────────────────────────────
const events = [
  {
    img: img1,
    title:
      "Workshop cum Technical visit on Rock Mechanics : Principles, Practice and Engineering Applications",
    date: "23 & 24 March 2026 (Monday & Tuesday)",
    venue: "Bangalore",
    pdf: pdf1,
    registrationLink: null,
  },
  {
    img: img2,
    title: "Substation Automation System - Basic Fundamentals",
    date: "23-25 March 2026",
    venue: "Siemens Power Academy, Goa",
    pdf: pdf2,
    registrationLink:
      "https://pgpay.icicibank.com/pg/portal/pay/initiatePayOrder?merchantID=100000000385258",
  },
  {
    img: img3,
    title:
      "A Comprehensive Training on Leadership | Innovation | Global Best Practices International StudyTour: Presented by Central Board of Irrigation and Power & Tata Power-DDL Learning Centre",
    date: "11 Apr - 19 Apr 2026",
    venue: "International Study Tour South- EastAsia",
    pdf: pdf3,
    registrationLink: null,
  },
  {
    img: img4,
    title:
      "National Conference on Information Bulletin BEST PRACTICES IN O&M OF SUBSTATION EQUIPMENTS INCLUDING POWER TRANSFORMERS AND REACTORS",
    date: "23-24 APRIL 2026",
    venue: "NEW DELHI",
    pdf:pdf4,
    registrationLink: null,
  },
  {
    img: img5,
    title:
      "NATIONAL CONFERENCE On शाश्वत ऊर्जा - 'स्वच्छ ऊर्जा, हरित पर्यावरण, सुरक्षित भविष्य' Organized by Need Mission in association with CBIP",
    date: "02-03 July 2026",
    venue: "Gandhinagar, Gujarat",
    pdf: pdf5,
    registrationLink:
      "https://pgpay.icicibank.com/pg/portal/pay/initiatePayOrder?merchantID=100000000385258",
  },
  {
    img: img6,
    title: "WETEX 2026 – India Pavilion on Irrigation, Power & Sustainability",
    date: "20 - 22 OCTOBER 2026",
    venue: "Dubai International Convention & Exhibition Centre, Dubai",
    pdf: pdf6,
    registrationLink: null,
    hasMultipleActions: true,
    prices:pdf7,
    registrationForm: pdf8,
  },
];

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

// ── Single list-row card ──────────────────────────────────────────────────────
const EventRow = ({ event, index, inView }) => (
  <Box
    sx={{
      opacity: inView ? 1 : 0,
      animation: inView ? `fadeInUp 0.5s ease ${0.08 * index}s both` : "none",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 2, sm: 0 },
        py: 3.5, // Increased from 2.5 to 3.5
        px: { xs: 2, sm: 3 }, // Increased padding
        bgcolor: "#fff",
        transition: "background 0.2s",
        "&:hover": { bgcolor: "#fafbff" },
      }}
    >
      {/* ── LEFT: Image ── */}
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: "100%", sm: 280 }, // Increased from 240 to 280
          height: { xs: 200, sm: 380 }, // Increased from 180/350 to 200/380
          overflow: "hidden",
          mr: { sm: 3 }, // Increased margin right
          mb: { xs: 2, sm: 0 }, // Added bottom margin for mobile
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f8f9fa", // Light background for images
        
        }}
      >
        <Box
          component="img"
          src={event.img}
          alt={event.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            p: 1, // Padding inside image container
          }}
          onError={(e) => {
            e.target.src =
              "https://placehold.co/280x380/e8eaf6/1a3a8f?text=CBIP";
          }}
        />
      </Box>

      {/* ── RIGHT: Content ── */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontWeight: 700,
            color: "#1a3a8f",
            fontSize: { xs: "1rem", sm: "1.1rem" }, // Increased font size
            lineHeight: 1.5,
            mb: 1.25, // Increased margin bottom
            cursor: "default",
          }}
        >
          {event.title}
        </Typography>

        {/* Date & Venue */}
        <Typography
          sx={{
            color: "#555",
            fontSize: "0.9rem", // Increased font size
            lineHeight: 1.6,
            mb: 2, // Increased margin bottom
          }}
        >
          <strong>Date:</strong> {event.date} · <strong>Venue:</strong> {event.venue}
        </Typography>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}> {/* Increased gap */}
          {/* Brochure */}
          <Button
            variant="contained"
            href={event.pdf}
            target="_blank"
            startIcon={
              <FileDownloadIcon sx={{ fontSize: "15px !important" }} />
            }
            size="small"
            sx={{
              ...btnBase,
              background: "#1a3a8f",
              color: "#fff",
              fontSize: "0.8rem", // Slightly larger font
              "&:hover": { background: "#142d72" },
            }}
          >
            Download Brochure
          </Button>

          {/* Register & Pay */}
          {event.registrationLink && (
            <Button
              variant="outlined"
              href={event.registrationLink}
              target="_blank"
              startIcon={<PaymentIcon sx={{ fontSize: "15px !important" }} />}
              size="small"
              sx={{
                ...btnBase,
                color: "#1a3a8f",
                borderColor: "#1a3a8f",
                fontSize: "0.8rem", // Slightly larger font
                "&:hover": {
                  background: "rgba(26,58,143,0.05)",
                  borderColor: "#142d72",
                },
              }}
            >
              Register &amp; Pay
            </Button>
          )}

          {/* WETEX extras */}
          {event.hasMultipleActions && (
            <>
              <Button
                variant="outlined"
                href={event.prices}
                target="_blank"
                startIcon={
                  <AttachMoneyIcon sx={{ fontSize: "15px !important" }} />
                }
                size="small"
                sx={{
                  ...btnBase,
                  color: "#1a3a8f",
                  borderColor: "#1a3a8f",
                  fontSize: "0.8rem", // Slightly larger font
                  "&:hover": { background: "rgba(26,58,143,0.05)" },
                }}
              >
                Prices
              </Button>
              <Button
                variant="outlined"
                href={event.registrationForm}
                target="_blank"
                startIcon={<SponsorIcon sx={{ fontSize: "15px !important" }} />}
                size="small"
                sx={{
                  ...btnBase,
                  color: "#1a3a8f",
                  borderColor: "#1a3a8f",
                  fontSize: "0.8rem", // Slightly larger font
                  "&:hover": { background: "rgba(26,58,143,0.05)" },
                }}
              >
                Registration Form
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>

    <Divider sx={{ borderColor: "#e0e0e0", borderBottomWidth: 5 }} /> {/* Thicker divider */}
  </Box>
);

// ── Main page ─────────────────────────────────────────────────────────────────
export default function ForthcomingEvents() {
  const [listRef, listInView] = useInView(0.05);

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
          }}
        >
          Forthcoming Events
        </Typography>
      </Box>

      {/* ── LIST ── */}
      <Box sx={{ py: { xs: 5, md: 7 }, background: "#f7f7f7" }}> {/* Increased vertical padding */}
        <Container maxWidth="lg"> {/* Changed from "md" to "lg" for wider container */}
          {/* Section heading */}
          <Typography
            variant="h6"
            sx={{
              color: "#1a3a8f",
              fontWeight: 700,
              mb: 3, // Increased margin bottom
              fontSize: { xs: "1.1rem", md: "1.25rem" }, // Larger font
              opacity: listInView ? 1 : 0,
              animation: listInView ? "fadeInDown 0.7s ease both" : "none",
            }}
          >
            Upcoming Events &amp; Training Programs
          </Typography>

          {/* List container with margin bottom for spacing from footer */}
          <Box
            ref={listRef}
            sx={{
              bgcolor: "#fff",
              border: "1px solid #e0e0e0",
            
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)", // Add subtle shadow
              mb: 4, // Added margin bottom to separate from footer
            }}
          >
            <Divider sx={{ borderColor: "#e0e0e0" }} />
            {events.map((event, i) => (
              <EventRow key={i} event={event} index={i} inView={listInView} />
            ))}
          </Box>
          
          {/* Extra spacing at bottom */}
          <Box sx={{ height: { xs: 2, md: 4 } }} />
        </Container>
      </Box>
    </>
  );
}