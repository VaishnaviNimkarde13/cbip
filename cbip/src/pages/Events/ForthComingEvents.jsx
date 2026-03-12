import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// ── InView hook ───────────────────────────────────────────────────────────────
const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

// ── Event data ────────────────────────────────────────────────────────────────
const events = [
  {
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&auto=format&fit=crop",
    title: "International Immersion Program on Leadership Development and Innovation (Batch-II)",
    date: "07-15 September 2025",
    venue: "SDA Bocconi, Italy & Zurich, Switzerland",
    pdf: "https://cbipsite.cloudbin.in/wp-content/uploads/2025/08/Productivity-Motivation-28Aug-25-1.pdf",
  },
  {
    img: "https://images.unsplash.com/photo-1581092160607-ee22731c9c49?w=400&auto=format&fit=crop",
    title: "Training on Diagnostic and Condition Monitoring of Switchyard Equipment",
    date: "10-12 September 2025",
    venue: "Hitachi EnergyTEC, Hitachi Energy India Limited, Vadodara",
    pdf: "https://cbipsite.cloudbin.in/wp-content/uploads/2025/08/Switchyard-Equipment-10-12-September-2025-1.pdf",
  },
  {
    img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&auto=format&fit=crop",
    title: "National Conference on Role of Distribution Systems and Distributed Energy Resources – Planning for 2030 and Beyond",
    date: "09th-10th Oct. 2025",
    venue: "CBIP Conference Hall, New Delhi",
    pdf: "https://cbipsite.cloudbin.in/wp-content/uploads/2025/08/Distributed-Energy-21-22-Aug-2025.pdf",
  },
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&auto=format&fit=crop",
    title: "Workshop on Productivity, Motivation & Wellness in the New Normal",
    date: "28-29 August, 2025",
    venue: "CBIP, New Delhi",
    pdf: "https://cbipsite.cloudbin.in/wp-content/uploads/2025/08/Productivity-Motivation-28Aug-25-1.pdf",
  },
  {
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop",
    title: "Hands-on-Training Programme on Mastering Rock Slope Design and Analysis with Advanced Geotechnical Software Tools from Rocscience",
    date: "2nd - 3rd September 2025 (Tuesday & Wednesday)",
    venue: "CBIP, Malcha Marg, Chankyapuri New Delhi",
    pdf: "https://cbipsite.cloudbin.in/wp-content/uploads/2025/08/Mastering-Rock-Slope-2-Sept-2025-1.pdf",
  },
  {
    img: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400&auto=format&fit=crop",
    title: "National Conference on Sedimentation Management for Sustainable Water and Hydropower Development",
    date: "4th-5th September, 2025",
    venue: "Central Board of Irrigation & Power (CBIP), Malcha Marg, New Delhi",
    pdf: "https://cbipsite.cloudbin.in/wp-content/uploads/2025/08/Sedimentation-Management-Brochure-4-5-sep-25-4-2.pdf",
  },
  {
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&auto=format&fit=crop",
    title: "Training on Substation Automation System",
    date: "24th– 26th September 2025",
    venue: "Siemens Power Academy, Goa",
    pdf: "https://cbipsite.cloudbin.in/wp-content/uploads/2025/08/Substation-Automation-24-26-September-2025.pdf",
  },
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop",
    title: "Revenue Management and AT&C Loss Reduction Techniques",
    date: "03 Day Training Program",
    venue: "10 to 12 November 2025",
    pdf: "https://cbipsite.cloudbin.in/wp-content/uploads/2025/08/ATC-Loss-Reduction.pdf",
  },
  {
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&auto=format&fit=crop",
    title: "7th Best Practices Study Tour cum Training Program & International Workshop on Battery Storage for Grid Stability & Renewable Integration",
    date: "12th– 14th November 2025",
    venue: "Hyatt Hotel, Raipur, Magneto the Mall, N.H 6, Labhandi, Raipur, (C.G)-492001, India",
    pdf: "https://cbipsite.cloudbin.in/wp-content/uploads/2025/08/Information-Bulletin-Study-Tour-at-Raipur.pdf",
  },
];

// ── Single animated event card ────────────────────────────────────────────────
const EventCard = ({ event, index, inView }) => (
  <Card
    elevation={2}
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      borderRadius: "8px",
      overflow: "hidden",
      opacity: inView ? 1 : 0,
      animation: inView ? `fadeIn 0.6s ease ${0.1 + index * 0.1}s both` : "none",
      transition: "box-shadow 0.3s ease, transform 0.3s ease",
      "&:hover": {
        boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
        transform: "translateY(-4px)",
      },
    }}
  >
    <CardMedia
      component="img"
      image={event.img}
      alt={event.title}
      sx={{ height: 200, objectFit: "cover" }}
    />
    <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 700, color: "#1a1a1a", lineHeight: 1.45, mb: 1.5, fontSize: "0.95rem" }}
      >
        {event.title}
      </Typography>
      <Typography sx={{ color: "#555", fontSize: "0.85rem", lineHeight: 1.7 }}>
        <strong>Date:</strong> {event.date}
      </Typography>
      <Typography sx={{ color: "#555", fontSize: "0.85rem", lineHeight: 1.7 }}>
        <strong>Venue:</strong> {event.venue}
      </Typography>
    </CardContent>
    <CardActions sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
      <Button
        variant="contained"
        href={event.pdf}
        target="_blank"
        startIcon={<FileDownloadIcon />}
        size="small"
        sx={{
          background: "#1a3a8f",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.8rem",
          borderRadius: "5px",
          px: 2,
          transition: "transform 0.25s ease, background 0.25s ease",
          "&:hover": { background: "#142d72", transform: "scale(1.04)" },
        }}
      >
        Download Brochure
      </Button>
    </CardActions>
  </Card>
);

// ── Main page ─────────────────────────────────────────────────────────────────
const HERO_IMG =
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&auto=format&fit=crop";

export default function ForthcomingEvents() {
  const [gridRef, gridInView] = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
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
          Forthcoming Events
        </Typography>
      </Box>

      {/* ── EVENTS GRID ──────────────────────────────────────────────────── */}
      <Box sx={{ py: 8, background: "#f7f7f7" }}>
        <Container maxWidth="lg">

          {/* Section heading – fadeInDown */}
          <Typography
            variant="h5"
            sx={{
              color: "#1a3a8f",
              fontWeight: 700,
              mb: 4,
              opacity: gridInView ? 1 : 0,
              animation: gridInView ? "fadeInDown 0.8s ease both" : "none",
            }}
          >
            Upcoming Events &amp; Training Programs
          </Typography>

          <Grid ref={gridRef} container spacing={3}>
            {events.map((event, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <EventCard event={event} index={i} inView={gridInView} />
              </Grid>
            ))}
          </Grid>

        </Container>
      </Box>
    </>
  );
}