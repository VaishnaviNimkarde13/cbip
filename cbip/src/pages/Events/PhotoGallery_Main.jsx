import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import heroimg from "../../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";

// Import all downloaded images
// PGA images (new top section)
import pga1 from "../../assets/PGA1.jpg";
import pga2 from "../../assets/PGA2.jpg";
import pga3 from "../../assets/PGA3.jpg";
import pga4 from "../../assets/PGA4.jpg";
import pga5 from "../../assets/PGA5.jpg";
import pga6 from "../../assets/PGA6.jpg";

import nhpc1 from "../../assets/PG1.jpg";
import nhpc2 from "../../assets/PG2.jpg";
import nhpc3 from "../../assets/PG3.jpg";
import nhpc4 from "../../assets/PG4.jpg";
import nhpc5 from "../../assets/PG5.jpg";
import nhpc6 from "../../assets/PG6.jpg";

import hydrogen1 from "../../assets/PG7.jpg";
import hydrogen2 from "../../assets/PG8.jpg";
import hydrogen3 from "../../assets/PG9.jpg";
import hydrogen4 from "../../assets/PG10.jpg";
import hydrogen5 from "../../assets/PG11.jpg";
import hydrogen6 from "../../assets/PG12.jpg";

import hpsebl1 from "../../assets/PG13.jpg";
import hpsebl2 from "../../assets/PG14.jpg";
import hpsebl3 from "../../assets/PG15.jpg";

import induction1 from "../../assets/PG16.jpg";
import induction2 from "../../assets/PG17.jpg";
import induction3 from "../../assets/PG18.jpg";

import dtl1 from "../../assets/PG19.jpg";
import dtl2 from "../../assets/PG20.jpg";
import dtl3 from "../../assets/PG21.jpg";
import dtl4 from "../../assets/PG22.jpg";
import dtl5 from "../../assets/PG23.jpg";
import dtl6 from "../../assets/PG24.jpg";

import icold1 from "../../assets/PG25.jpg";
import icold2 from "../../assets/PG26.jpg";
import icold3 from "../../assets/PG27.jpg";
import icold4 from "../../assets/PG28.jpg";
import icold5 from "../../assets/PG29.jpg";
import icold6 from "../../assets/PG30.jpg";
import icold7 from "../../assets/PG31.jpg";
import icold8 from "../../assets/PG32.jpg";
import icold9 from "../../assets/PG33.jpg";
import icold10 from "../../assets/PG34.jpg";
import icold11 from "../../assets/PG35.jpg";
import icold12 from "../../assets/PG36.jpg";
import icold13 from "../../assets/PG37.jpg";
import icold14 from "../../assets/PG38.jpg";

// ── useInView hook ────────────────────────────────────────────────────────────
const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

// ── Gallery Data (exact headings & subheadings as per images) ─────────────────
const galleryGroups = [
  // NEW TOP SECTION - PGA images with all 6 images
  {
    id: "pga",
    label: "Photo Gallery",
    title: "Advanced Management Program for Sr. Executives from NHPC",
    images: [
      { src: pga1, caption: "Advanced Management Program - Inaugural Session" },
      { src: pga2, caption: "Advanced Management Program - Keynote Address" },
      { src: pga3, caption: "Advanced Management Program - Session View 1" },
      { src: pga4, caption: "Advanced Management Program - Session View 2" },
      { src: pga5, caption: "Advanced Management Program - Group Discussion" },
      { src: pga6, caption: "Advanced Management Program - Certificate Distribution" },
    ],
  },
  {
    id: "nhpc",
    label: "Photo Gallery",
    title: "Advanced Management Program for Sr. Executives from NHPC",
    images: [
      { src: nhpc1, caption: "Advanced Management Program Session" },
      { src: nhpc2, caption: "Group Photo with NHPC Senior Executives" },
      { src: nhpc3, caption: "Training Session in Progress" },
      { src: nhpc4, caption: "Interactive Session" },
      { src: nhpc5, caption: "Certificate Distribution" },
      { src: nhpc6, caption: "Valedictory Session" },
    ],
  },
  {
    id: "hydrogen",
    label: "1st International Conference on Hydrogen Energy",
    title: "2nd International Conference on Hydrogen Energy — 383rd International Conference on Hydrogen Energy",
    images: [
      { src: hydrogen1, caption: "Inaugural Session" },
      { src: hydrogen2, caption: "Keynote Address" },
      // { src: hydrogen3, caption: "Panel Discussion" },
      { src: hydrogen4, caption: "Technical Session" },
      { src: hydrogen5, caption: "Delegate Interaction" },
      { src: hydrogen6, caption: "Valedictory Function" },
    ],
  },
  {
    id: "hpsebl",
    label: "Photo Gallery",
    title: "Onsite Training Program of Newly Recruited Jr. T/mates and Jr. Helpers of HPSEBL",
    images: [
      { src: hpsebl1, caption: "Group Photos of Trainees headed by Faculty Member, Shri Devendra Kumar, Ex CGM, NFL during Site visit" },
      { src: hpsebl2, caption: "Group Photos of Trainees headed by Faculty Member, Shri C.P. Sharma, Ex Executive Director, UPCL during Site visit" },
      { src: hpsebl3, caption: "Technical Training Session" },
    ],
  },
  {
    id: "induction",
    label: "12 Weeks Induction Training Program of Executive Trainees On Renewable Energy Development including Energy Storage System",
    title: "Shri A.K Dinkar, Secretary CBIP and CBIP Centre of Excellence, Gurgaon welcoming Shri Jatindra Nath Swain (IAS), Ex CMD, SECI",
    images: [
      { src: induction1, caption: "Shri A.K Dinkar, Secretary CBIP and CBIP Centre of Excellence, Gurgaon welcoming Shri Jatindra Nath Swain (IAS), Ex CMD, SECI" },
      { src: induction2, caption: "Shri Sanjeev Singh, Director (E), CBIP welcoming Shri C. Kannan, Director (Finance), SECI" },
      { src: induction3, caption: "View of the participant" },
    ],
  },
  {
    id: "dtl",
    label: "Promotional Linked Training Programs for the Technical and Non Technical Officials of Delhi Transco Ltd. (DTL)",
    title: "View during Session at CBIP Conference Hall, New Delhi",
    images: [
      { src: dtl1, caption: "View during Session at CBIP Conference Hall, New Delhi" },
      { src: dtl2, caption: "Group Photo at CBIP Conference Hall" },
      { src: dtl3, caption: "View during Session at CBIP Conference Hall, New Delhi" },
      { src: dtl4, caption: "A view during written test at CBIP Hall No. 1" },
      { src: dtl5, caption: "Group Photo at CBIP Conference Hall" },
      { src: dtl6, caption: "View during Session at CBIP Conference Hall, New Delhi" },
    ],
  },
  {
    id: "icold",
    label: "ICOLD Symposium - Sustainable Development of Dams and River Basin 2020",
    title: "ICOLD Symposium – Sustainable Development of Dams and River Basin 2020",
    images: [
      { src: icold1, caption: "Inaugural Ceremony" },
      { src: icold2, caption: "Technical Session" },
      { src: icold3, caption: "Delegate Registration" },
      { src: icold4, caption: "Panel Discussion" },
      { src: icold5, caption: "Technical Presentation" },
      { src: icold6, caption: "Group Photo" },
      { src: icold7, caption: "Exhibition Area" },
      { src: icold8, caption: "Networking Session" },
      { src: icold9, caption: "Technical Visit" },
      { src: icold10, caption: "Cultural Program" },
      { src: icold11, caption: "Award Ceremony" },
      { src: icold12, caption: "Valedictory Session" },
      { src: icold13, caption: "Closing Remarks" },
      { src: icold14, caption: "Group Photo of Delegates" },
    ],
  },
];

// ── 1. GalleryTile ────────────────────────────────────────────────────────────
const GalleryTile = ({ src, caption, index, inView, onClick }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Box
      onClick={onClick}
      sx={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        opacity: inView ? 1 : 0,
        animation: inView ? `fadeInUp 0.5s ease ${0.06 * index}s both` : "none",
        "&:hover img": { transform: "scale(1.05)" },
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={caption || "Gallery image"}
        sx={{
          width: "100%",
          height: { xs: 200, sm: 220, md: 240 },
          objectFit: "cover",
          display: "block",
          transition: "transform 0.3s ease",
        }}
        onError={(e) => { 
          e.target.src = "https://via.placeholder.com/400x280?text=Image+Not+Found"; 
        }}
      />
    </Box>
  </Grid>
);

// ── 2. GalleryGroup ───────────────────────────────────────────────────────────
const GalleryGroup = ({ group }) => {
  const [ref, inView] = useInView(0.08);
  const [lightbox, setLightbox] = useState({ open: false, idx: 0 });

  const open  = (idx) => setLightbox({ open: true, idx });
  const close = ()    => setLightbox({ open: false, idx: 0 });
  const prev  = ()    => setLightbox((s) => ({ ...s, idx: (s.idx - 1 + group.images.length) % group.images.length }));
  const next  = ()    => setLightbox((s) => ({ ...s, idx: (s.idx + 1) % group.images.length }));

  useEffect(() => {
    const handler = (e) => {
      if (!lightbox.open) return;
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox.open, lightbox.idx]);

  return (
    <Box sx={{ mb: { xs: 5, md: 7 } }}>
      {/* Section header: exact subheading above title matches image descriptions */}
      <Box
        sx={{
          opacity: inView ? 1 : 0,
          animation: inView ? "fadeInDown 0.6s ease both" : "none",
          mb: 3,
        }}
      >
        {/* Main heading (bold, blue) */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#1a3a8f",
            fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.4rem" },
            fontFamily: "'Inter', sans-serif",
            mb: 0.5,
          }}
        >
          {group.label}
        </Typography>
        <Box sx={{ width: 36, height: 3, bgcolor: "#e53935", borderRadius: 2, mb: 1 }} />
        {/* Subheading / detailed title */}
        <Typography
          sx={{
            color: "#333",
            fontSize: { xs: "0.82rem", sm: "0.88rem", md:"0.95rem" },
            fontFamily: "'Inter', sans-serif",
            fontStyle: "italic",
          }}
        >
          {group.title}
        </Typography>
      </Box>

      {/* Image grid - exactly 3 per row on desktop */}
      <Grid ref={ref} container spacing={2}>
        {group.images.map((img, i) => (
          <GalleryTile
            key={i}
            src={img.src}
            caption={img.caption}
            index={i}
            inView={inView}
            onClick={() => open(i)}
          />
        ))}
      </Grid>

      {/* Lightbox Modal */}
      <Modal
        open={lightbox.open}
        onClose={close}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: { xs: "95vw", md: "80vw" },
            maxHeight: "90vh",
            outline: "none",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <IconButton
            onClick={close}
            sx={{ position: "absolute", top: -44, right: 0, color: "#fff", zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            component="img"
            src={group.images[lightbox.idx]?.src}
            alt=""
            sx={{
              width: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
              display: "block",
              backgroundColor: "#000",
            }}
          />

          {group.images[lightbox.idx]?.caption && (
            <Box sx={{ bgcolor: "rgba(0,0,0,0.7)", px: 2, py: 1 }}>
              <Typography sx={{ color: "#fff", fontSize: "0.8rem", textAlign: "center" }}>
                {group.images[lightbox.idx].caption}
              </Typography>
            </Box>
          )}

          <IconButton
            onClick={prev}
            sx={{
              position: "absolute", left: { xs: -16, sm: -48 }, top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(0,0,0,0.55)", color: "#fff",
              "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={next}
            sx={{
              position: "absolute", right: { xs: -16, sm: -48 }, top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(0,0,0,0.55)", color: "#fff",
              "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>

          <Typography
            sx={{
              position: "absolute", bottom: -32, left: "50%",
              transform: "translateX(-50%)",
              color: "#fff", fontSize: "0.8rem",
            }}
          >
            {lightbox.idx + 1} / {group.images.length}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

// ── 3. Main Page ──────────────────────────────────────────────────────────────
export default function PhotoGallery() {
  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* HERO */}
      <Box
        sx={{
          height: { xs: "180px", sm: "220px", md: "280px" },
          backgroundImage: `url(${heroimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            position: "relative",
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
            letterSpacing: 1,
          }}
        >
          Photo Gallery
        </Typography>
      </Box>

      {/* GALLERY GROUPS - all groups with exact headings/subheadings */}
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          {galleryGroups.map((group) => (
            <GalleryGroup key={group.id} group={group} />
          ))}
        </Container>
      </Box>
    </>
  );
}