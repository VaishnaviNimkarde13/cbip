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

import hydrogen1 from "../../assets/PG8.jpg";
import hydrogen2 from "../../assets/PG7.jpg";

import hydrogen4 from "../../assets/PG10.jpg";
import hydrogen5 from "../../assets/PG11.jpg";
import hydrogen6 from "../../assets/PG12.jpg";

import hpsebl1 from "../../assets/PG13.jpg";
import hpsebl2 from "../../assets/PG14.jpg";
import hpsebl3 from "../../assets/PG15.jpg";
import hpsebl4 from "../../assets/PG16.jpg";
import hpsebl5 from "../../assets/PG17.jpg";
import hpsebl6 from "../../assets/PG18.jpg";

import dtl1 from "../../assets/PG19.jpg";
import dtl2 from "../../assets/PG20.jpg";
import dtl3 from "../../assets/PG21.jpg";
import dtl4 from "../../assets/PG22.jpg";
import dtl5 from "../../assets/PG23.jpg";
import dtl6 from "../../assets/PG24.jpg";
import dtl7 from "../../assets/PG25.jpg";
import dtl8 from "../../assets/PG26.jpg";
import dtl9 from "../../assets/PG27.jpg";
import dtl10 from "../../assets/PG28.jpg";
import dtl11 from "../../assets/PG29.jpg";
import dtl12 from "../../assets/PG30.jpg";
import dtl13 from "../../assets/PG31.jpg";
import dtl14 from "../../assets/PG32.jpg";
import dtl15 from "../../assets/PG33.jpg";

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
};

const galleryGroups = [
  {
    id: "pga",
    label: "Photo Gallery",
    title: "Advanced Management Program for Sr. Executives from NHPC",
    images: [pga1, pga2, pga3, pga4, pga5, pga6],
  },
  {
    id: "nhpc",
    label: "Photo Gallery",
    title: "1st International Conference on Hydrogen Energy",
    images: [nhpc1, nhpc2, nhpc3, nhpc4, nhpc5, nhpc6],
  },
  {
    id: "hydrogen",
    label: "Photo Gallery",
    title: "Onsite Training Program of Newly Recruited Jr. T/mates",
    images: [hydrogen1, hydrogen2],
  },
  {
    id: "renewable",
    label: "Photo Gallery",
    title: "12 Weeks Induction Training Program on Renewable Energy",
    images: [hydrogen4, hydrogen5, hydrogen6],
  },
  {
    id: "hpsebl",
    label: "Photo Gallery",
    title: "Promotional Linked Training Programs for Delhi Transco Ltd",
    images: [hpsebl1, hpsebl2, hpsebl3, hpsebl4, hpsebl5, hpsebl6],
  },
  {
    id: "icold",
    label: "Photo Gallery",
    title: "ICOLD Symposium – Sustainable Development of Dams",
    images: [
      dtl1, dtl2, dtl3, dtl4, dtl5,
      dtl6, dtl7, dtl8, dtl9, dtl10,
      dtl11, dtl12, dtl13, dtl14, dtl15
    ],
  },
];

const GalleryTile = ({ src, index, inView, onClick }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Box
      onClick={onClick}
      sx={{
        overflow: "hidden",
        cursor: "pointer",
        opacity: inView ? 1 : 0,
        animation: inView
          ? `fadeInUp 0.5s ease ${0.06 * index}s both`
          : "none",
        "&:hover img": { transform: "scale(1.05)" },
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Box
        component="img"
        src={src}
        sx={{
          width: "100%",
          height: { xs: 200, sm: 220, md: 240 },
          objectFit: "cover",
          transition: "transform 0.3s ease",
        }}
      />
    </Box>
  </Grid>
);

const GalleryGroup = ({ group }) => {
  const [ref, inView] = useInView();
  const [lightbox, setLightbox] = useState({ open: false, idx: 0 });

  const open = (idx) => setLightbox({ open: true, idx });
  const close = () => setLightbox({ open: false, idx: 0 });

  const prev = () =>
    setLightbox((s) => ({
      ...s,
      idx: (s.idx - 1 + group.images.length) % group.images.length,
    }));

  const next = () =>
    setLightbox((s) => ({
      ...s,
      idx: (s.idx + 1) % group.images.length,
    }));

  return (
    <Box sx={{ mb: { xs: 5, md: 7 } }}>
      <Typography sx={{ fontWeight: 700, color: "#1a3a8f" }}>
        {group.label}
      </Typography>

      <Typography sx={{ fontStyle: "italic", mb: 3 }}>
        {group.title}
      </Typography>

      <Grid
        ref={ref}
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
      >
        {group.images.map((img, i) => (
          <GalleryTile
            key={i}
            src={img}
            index={i}
            inView={inView}
            onClick={() => open(i)}
          />
        ))}
      </Grid>

      <Modal open={lightbox.open} onClose={close}>
        <Box
          sx={{
            position: "relative",
            width: "90vw",
            maxWidth: "900px",
            margin: "auto",
            mt: "5vh",
          }}
        >
          <IconButton
            onClick={close}
            sx={{ position: "absolute", top: -40, right: 0, color: "#fff" }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            component="img"
            src={group.images[lightbox.idx]}
            sx={{
              width: "100%",
              maxHeight: "80vh",
              objectFit: "contain",
              background: "#000",
            }}
          />

          <IconButton
            onClick={prev}
            sx={{
              position: "absolute",
              left: { xs: 5, sm: -40 },
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              bgcolor: "rgba(0,0,0,0.5)",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={next}
            sx={{
              position: "absolute",
              right: { xs: 5, sm: -40 },
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              bgcolor: "rgba(0,0,0,0.5)",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
};

export default function PhotoGallery() {
  return (
    <>
      <style>
        {`
        @keyframes fadeInUp{
          from{opacity:0;transform:translateY(20px)}
          to{opacity:1;transform:translateY(0)}
        }
      `}
      </style>

      <Box
        sx={{
          height: { xs: 180, md: 260 },
          backgroundImage: `url(${heroimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          }}
        />

        <Typography
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "3rem" },
            position: "relative",
          }}
        >
          Photo Gallery
        </Typography>
      </Box>

      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {galleryGroups.map((group) => (
            <GalleryGroup key={group.id} group={group} />
          ))}
        </Container>
      </Box>
    </>
  );
}