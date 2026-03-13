import React, { useEffect, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";

// Import your 11 icons (replace with your actual paths)
import icon1 from "../../assets/AB1.png";
import icon2 from "../../assets/AB2.png";
import icon3 from "../../assets/AB3.png";
import icon4 from "../../assets/AB4.png";
import icon5 from "../../assets/AB5.png";
import icon6 from "../../assets/AB6.png";
import icon7 from "../../assets/AB7.png";
import icon8 from "../../assets/AB8.png";
import icon9 from "../../assets/AB9.png";
import icon10 from "../../assets/AB10.png";
import icon11 from "../../assets/AB11.png";
import icon12 from "../../assets/AB12.png";

// Dummy links for each icon
const iconLinks = [
  "https://www.cigreindia.org/",
  "https://tai.org.in/",
  "https://incold.co.in/",
  "https://nhai.gov.in/",
  "https://cbip.org/iash/iash.html",
  "https://spe-india.org/",
  "https://www.iwra.org/",
  "https://example.com/8",
  "https://geosyntheticsindia.org/",
  "https://cbip.org/cired/cired.html",
  "https://www.cbip.org/ISRM-2022/index.html",
  "https://cbip.org/aaro/aaro.html"
];

const icons = [
  { src: icon1, alt: "Icon 1", link: iconLinks[0] },
  { src: icon2, alt: "Icon 2", link: iconLinks[1] },
  { src: icon3, alt: "Icon 3", link: iconLinks[2] },
  { src: icon4, alt: "Icon 4", link: iconLinks[3] },
  { src: icon5, alt: "Icon 5", link: iconLinks[4] },
  { src: icon6, alt: "Icon 6", link: iconLinks[5] },
  { src: icon7, alt: "Icon 7", link: iconLinks[6] },
  { src: icon8, alt: "Icon 8", link: iconLinks[7] },
  { src: icon9, alt: "Icon 9", link: iconLinks[8] },
  { src: icon10, alt: "Icon 10", link: iconLinks[9] },
  { src: icon11, alt: "Icon 11", link: iconLinks[10] },
  { src: icon12, alt: "Icon 12", link: iconLinks[11] },
];

const MegaphoneIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 11v2a1 1 0 001 1h1l2 4h2l-1-4h8l3 3V4l-3 3H7L5 8H4a1 1 0 00-1 1v2z" />
  </svg>
);

// Duplicate icons for seamless infinite scroll
const duplicatedIcons = [...icons, ...icons, ...icons];

const AssociatedBodies = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    const animate = () => {
      positionRef.current += 0.5; // Slow speed

      // Reset position when half of the duplicated content has scrolled
      if (positionRef.current >= scroll.scrollWidth / 3) {
        positionRef.current = 0;
      }

      scroll.style.transform = `translateX(-${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleIconClick = (link) => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, md: 5 },
        bgcolor: "#f8f9fa",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1200px !important",
          margin: "0 auto !important",
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Heading */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <Box
            sx={{
              background: "#1e2a6e",
              borderRadius: "6px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <MegaphoneIcon />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "22px", md: "26px" },
              fontWeight: 700,
              color: "#1e2a6e",
              m: 0,
            }}
          >
            Associated Bodies
          </Typography>
        </Box>

        {/* Underline */}
        <Box
          sx={{
            width: "20%",
            height: "5px",
            background: "#1e2a6e",
            borderRadius: "2px",
            mb: 3.5,
            ml: "52px",
          }}
        />

        {/* Sliding Container */}
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
            py: 3,
          }}
        >
          {/* Gradient Overlays for fade effect */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "80px",
              height: "100%",
              background:
                "linear-gradient(90deg, #f8f9fa 0%, transparent 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "80px",
              height: "100%",
              background:
                "linear-gradient(270deg, #f8f9fa 0%, transparent 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Sliding Track */}
          <Box
            ref={scrollRef}
            className="sliding-track"
            sx={{
              display: "flex",
              gap: { xs: 4, md: 5 },
              width: "fit-content",
              cursor: "pointer",
            }}
          >
            {duplicatedIcons.map((icon, index) => (
              <Box
                key={index}
                onClick={() => handleIconClick(icon.link)}
                sx={{
                  width: { xs: "180px", sm: "200px", md: "220px" },
                  height: { xs: "120px", sm: "130px", md: "140px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    pointerEvents: "none",
                  }}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/220x140?text=Icon`;
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AssociatedBodies;