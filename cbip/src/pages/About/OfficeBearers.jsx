import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Container } from "@mui/material";

import banner from "../../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";

import man1 from "../../assets/1man.png";
import man2 from "../../assets/2man.png";
import man3 from "../../assets/3man.png";
import man4 from "../../assets/4man.png";
import man5 from "../../assets/5man.png";
import man6 from "../../assets/6man.png";
import man7 from "../../assets/7man.png";
import man8 from "../../assets/8man.png";

const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

const PersonCard = ({ img, name, role, subRole, size = "md" }) => {
  const isLg = size === "lg";

  return (
    <Box
      sx={{
        background: "#fff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
        borderRadius: "6px",
        width: isLg ? "280px" : "240px",
        overflow: "hidden",
        textAlign: "center",
        flexShrink: 0,
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          width: "100%",
          height: isLg ? "300px" : "240px",
          objectFit: "cover",
          objectPosition: "top",
          display: "block",
        }}
      />
      <Box sx={{ p: "16px 14px 20px" }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: isLg ? "17px" : "15px",
            color: "#222",
            lineHeight: 1.3,
            mb: 0.8,
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: "#555",
            fontSize: isLg ? "14px" : "13px",
            lineHeight: 1.5,
          }}
        >
          {role}
        </Typography>
        {subRole && (
          <Typography
            sx={{
              color: "#777",
              fontSize: "12px",
              mt: 0.5,
              lineHeight: 1.5,
            }}
          >
            {subRole}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

const OfficeBearers = () => {
  const [titleRef, titleInView] = useInView();
  const [presidentRef, presidentInView] = useInView();
  const [vpTitleRef, vpTitleInView] = useInView();
  const [vpGridRef, vpGridInView] = useInView();
  const [secTitleRef, secTitleInView] = useInView();
  const [secGridRef, secGridInView] = useInView();

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

      {/* HERO SECTION */}
      <Box
        sx={{
          height: "250px",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }}
        />
        <Typography
          variant="h3"
          sx={{ color: "#fff", position: "relative", fontWeight: 600 }}
        >
          Office Bearers
        </Typography>
      </Box>

      {/* MAIN SECTION */}
      <Box sx={{ py: 8, background: "#f5f5f5" }}>
        <Container maxWidth="lg">

          {/* TITLE */}
          <Typography
            ref={titleRef}
            align="center"
            sx={{
              mb: 5,
              fontWeight: 700,
              fontSize: "24px",
              color: "#1a237e",
              opacity: titleInView ? 1 : 0,
              animation: titleInView ? "fadeInDown 0.8s ease both" : "none",
            }}
          >
            Office Bearers of Central Board of Irrigation &amp; Power
          </Typography>

          {/* PRESIDENT */}
          <Box
            ref={presidentRef}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 8,
              opacity: presidentInView ? 1 : 0,
              animation: presidentInView ? "fadeIn 0.8s ease 0.2s both" : "none",
            }}
          >
            <PersonCard
              img={man1}
              name="Shri Ghanshyam Prasad"
              role="President"
              subRole="Chairperson-Central Electricity Authority and Ex-officio Secretary to Govt. of India"
              size="lg"
            />
          </Box>

          {/* VICE PRESIDENTS TITLE */}
          <Typography
            ref={vpTitleRef}
            align="center"
            sx={{
              mb: 4,
              fontWeight: 700,
              fontSize: "24px",
              color: "#1a237e",
              opacity: vpTitleInView ? 1 : 0,
              animation: vpTitleInView ? "fadeInDown 0.8s ease both" : "none",
            }}
          >
            Vice Presidents
          </Typography>

          {/* VICE PRESIDENTS GRID */}
          <Box
            ref={vpGridRef}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
              mb: 8,
              opacity: vpGridInView ? 1 : 0,
              animation: vpGridInView ? "fadeIn 0.8s ease 0.2s both" : "none",
            }}
          >
            {[
              {
                img: man2,
                name: "Shri Bhopal Singh",
                role: "Member (D&R), Central Water Commission",
              },
              {
                img: man3,
                name: "Shri Sanjay Sharma",
                role: "Director (Solar), Solar Energy Corporation of India Limited",
              },
              {
                img: man4,
                name: "Shri Rajeev Kumar Vishnoi",
                role: "CMD, THDC India Ltd.",
              },
              {
                img: man5,
                name: "Shri Anil Kumar Pandey",
                role: "Managing Director, Jindal Power Limited",
              },
            ].map((person, index) => (
              <PersonCard
                key={index}
                img={person.img}
                name={person.name}
                role={person.role}
              />
            ))}
          </Box>

          {/* SECRETARY & DIRECTORS TITLE */}
          <Typography
            ref={secTitleRef}
            align="center"
            sx={{
              mb: 4,
              fontWeight: 700,
              fontSize: "24px",
              color: "#1a237e",
              opacity: secTitleInView ? 1 : 0,
              animation: secTitleInView ? "fadeInDown 0.8s ease both" : "none",
            }}
          >
            Secretary and Directors
          </Typography>

          {/* SECRETARY & DIRECTORS GRID */}
          <Box
            ref={secGridRef}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              flexWrap: "wrap",
              opacity: secGridInView ? 1 : 0,
              animation: secGridInView ? "fadeIn 0.8s ease 0.2s both" : "none",
            }}
          >
            {[
              { img: man6, name: "Shri A.K. Dinkar", role: "Secretary" },
              {
                img: man7,
                name: "Shri K.K. Singh",
                role: "Director - Water Resources",
              },
              {
                img: man8,
                name: "Shri Sanjeev Singh",
                role: "Director - Energy",
              },
            ].map((person, index) => (
              <PersonCard
                key={index}
                img={person.img}
                name={person.name}
                role={person.role}
              />
            ))}
          </Box>

        </Container>
      </Box>
    </>
  );
};

export default OfficeBearers;