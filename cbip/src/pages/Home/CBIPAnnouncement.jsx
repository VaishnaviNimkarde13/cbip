import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  Paper,
} from "@mui/material";
import bgimg from "../../assets/bg.png";

import pdf from "../../assets/pdf/REprogram.pdf";

// Import your downloaded images
import reProgramsImg from "../../assets/RE-program.png";
import partnersImg from "../../assets/Trainingpartners.png";
import hydroRegImg from "../../assets/Hydroregulation.jpg";
import spaceRentImg from "../../assets/Spaceforrent.jpg";
import expertRegImg from "../../assets/Expertregistration.jpg";

// Circle arrow icons
const ArrowCircleDown = () => (
  <svg
    viewBox="0 0 512 512"
    width="16"
    height="16"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z" />
  </svg>
);

const ArrowCircleUp = () => (
  <svg
    viewBox="0 0 512 512"
    width="16"
    height="16"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm143.6 28.9l72.4-75.5V392c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V209.4l72.4 75.5c9.3 9.7 24.8 9.9 34.3.4l10.9-11c9.4-9.4 9.4-24.6 0-33.9L273 107.7c-9.4-9.4-24.6-9.4-33.9 0L106.3 240.4c-9.4 9.4-9.4 24.6 0 33.9l10.9 11c9.6 9.5 25.1 9.3 34.4-.4z" />
  </svg>
);

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

// Items with downloaded images
const items = {
  left: [
    {
      id: "re-programs",
      label: "RE-Programs",
      content: (
        <Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "300px",
              height: "187px",
              overflow: "hidden",
              borderRadius: "5px",
              mb: 1.5,
              bgcolor: "#f5f5f5",
            }}
          >
            <img
              src={reProgramsImg}
              alt="RE Programs"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.target.src = "https://placehold.co/300x187?text=RE+Programs";
                e.target.style.objectFit = "contain";
              }}
            />
          </Box>
          <Typography sx={{ fontSize: "14px", color: "#222", lineHeight: 1.7, mb: 1 }}>
            Online Certification Course on Cyber Security
          </Typography>
          <Box
            component="a"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#ff6600",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "14px",
              display: "inline-block",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            For More Information Click Here
          </Box>
        </Box>
      ),
    },
    {
      id: "training-partners",
      label: "Training Partners",
      content: (
        <Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "318px",
              height: "45px",
              overflow: "hidden",
              mb: 1.5,
              bgcolor: "#f5f5f5",
            }}
          >
            <img
              src={partnersImg}
              alt="Training Partners"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.target.src = "https://placehold.co/318x45?text=Partners";
                e.target.style.objectFit = "contain";
              }}
            />
          </Box>
          <Typography sx={{ fontSize: "14px", color: "#222", lineHeight: 1.7, mb: 1 }}>
            CBIP Offers ONLINE PRACTICAL TRAINING
            <br />
            In collaboration with State of the Art Training Center for Skill
            Development of Professionals and Utilities in the Power Sector
          </Typography>
          <Box
            component="a"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mt: 1.5,
              background: "#2d2d2d",
              color: "#fff",
              border: "none",
              py: 1,
              px: 2.5,
              borderRadius: "5px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-block",
              textDecoration: "none",
              "&:hover": {
                background: "#404040",
              },
            }}
          >
            More Info
          </Box>
        </Box>
      ),
    },
  ],
  right: [
    {
      id: "hydro-regulations",
      label: "Hydro Regulations",
      content: (
        <Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "200px",
              height: "288px",
              overflow: "hidden",
              mb: 1.5,
              bgcolor: "#f5f5f5",
            }}
          >
            <img
              src={hydroRegImg}
              alt="Hydro Regulations"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.target.src = "https://placehold.co/200x288?text=Hydro+Reg";
                e.target.style.objectFit = "contain";
              }}
            />
          </Box>
          <Typography sx={{ fontSize: "14px", color: "#222", lineHeight: 1.7, mb: 1 }}>
            Compendium of Central &amp; State Government Policies and
            Regulations issued by Regulatory Commissions on Hydro Power.
          </Typography>
          <Box
            component="a"
            href="https://cbip.org/ExternalFile/Hydro_Regulations_Policies.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mt: 1.5,
              background: "#2d2d2d",
              color: "#fff",
              border: "none",
              py: 1,
              px: 2.5,
              borderRadius: "5px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-block",
              textDecoration: "none",
              "&:hover": {
                background: "#404040",
              },
            }}
          >
            More Info
          </Box>
        </Box>
      ),
    },
    {
      id: "space-for-rent",
      label: "Space for Rent",
      content: (
        <Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "300px",
              height: "176px",
              overflow: "hidden",
              mb: 1.5,
              bgcolor: "#f5f5f5",
            }}
          >
            <img
              src={spaceRentImg}
              alt="Space for Rent"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.target.src = "https://placehold.co/300x176?text=Space+for+Rent";
                e.target.style.objectFit = "contain";
              }}
            />
          </Box>
          <Typography sx={{ fontSize: "14px", color: "#222", lineHeight: 1.7, mb: 1 }}>
            Space Availabe for Rent - Plot No.09, Sector -32, Gurugram.
          </Typography>
          <Box
            component="a"
            href="https://cbip.org/ExternalFile/ad.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              mt: 1.5,
              background: "#2d2d2d",
              color: "#fff",
              border: "none",
              py: 1,
              px: 2.5,
              borderRadius: "5px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-block",
              textDecoration: "none",
              "&:hover": {
                background: "#404040",
              },
            }}
          >
            More Info
          </Box>
        </Box>
      ),
    },
    {
      id: "expert-registration",
      label: "Expert Registration",
      content: (
        <Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "250px",
              height: "178px",
              overflow: "hidden",
              mb: 1.5,
              bgcolor: "#f5f5f5",
            }}
          >
            <img
              src={expertRegImg}
              alt="Expert Registration"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.target.src = "https://placehold.co/250x178?text=Expert+Reg";
                e.target.style.objectFit = "contain";
              }}
            />
          </Box>
          <Typography sx={{ fontSize: "14px", color: "#222", lineHeight: 1.7, mb: 1 }}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1.5 }}>
            {[
              { href: "https://registration.cbip.org/hydro", label: "Hydro Power" },
              { href: "https://registration.cbip.org/", label: "Water Resource" },
              { href: "https://registration.cbip.org/power", label: "Power Sector" },
            ].map((link, index) => (
              <Box
                key={index}
                component="a"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: "#2d2d2d",
                  color: "#fff",
                  border: "none",
                  py: 1,
                  px: 2,
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  textAlign: "left",
                  textDecoration: "none",
                  display: "block",
                  "&:hover": {
                    background: "#404040",
                  },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Box>
        </Box>
      ),
    },
  ],
};

const CBIPAnnouncement = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  const renderCol = (colItems) =>
    colItems.map((item) => {
      const isOpen = openId === item.id;
      return (
        <Box key={item.id} sx={{ width: "100%" }}>
          <Box
            component="button"
            onClick={() => toggle(item.id)}
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 18px 0 0",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 700,
              textAlign: "left",
              overflow: "hidden",
              minHeight: "52px",
              marginBottom: "10px",
              background: isOpen ? "#2d3a8c" : "#3a3a3a",
              color: "#fff",
              "&:hover": {
                opacity: 0.95,
              },
            }}
          >
            <Box
              sx={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginRight: "14px",
                background: isOpen ? "#1e2560" : "#2a2a2a",
              }}
            />
            <Typography sx={{ flex: 1, fontSize: "15px", fontWeight: 700 }}>
              {item.label}
            </Typography>
            <Box
              sx={{
                flexShrink: 0,
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isOpen ? <ArrowCircleUp /> : <ArrowCircleDown />}
            </Box>
          </Box>
          {isOpen && (
            <Box
              sx={{
                padding: "14px 4px 8px 4px",
                fontSize: "14px",
                color: "#333",
                lineHeight: 1.7,
              }}
            >
              {item.content}
            </Box>
          )}
        </Box>
      );
    });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundImage: `url(${bgimg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.70)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 4, md: 5 },
          px: { xs: 2, md: 3 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1200px !important",
            margin: "0 auto !important",
          }}
        >
          {/* Title Row */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.75 }}>
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
                color: "#fff",
                m: 0,
              }}
            >
              CBIP Announcement
            </Typography>
          </Box>

          {/* Underline */}
          <Box
            sx={{
              width: "20%",
              height: "3px",
              background: "#fff",
              borderRadius: "2px",
              mb: 3.5,
              ml: "52px",
            }}
          />

          {/* Accordion Card */}
          <Paper
            elevation={0}
            sx={{
              background: "rgba(255,255,255,0.97)",
              borderRadius: "14px",
              p: { xs: 2.5, sm: 3 },
              display: "flex",
              gap: { xs: 2, md: 3 },
              alignItems: "flex-start",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Left Column */}
            <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
              {renderCol(items.left)}
            </Box>

            {/* Right Column */}
            <Box sx={{ flex: 1, width: { xs: "100%", md: "auto" } }}>
              {renderCol(items.right)}
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default CBIPAnnouncement;