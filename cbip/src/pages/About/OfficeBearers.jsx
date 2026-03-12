import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

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
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};



const PersonCard = ({ img, name, role, subRole, size = "md" }) => {
  const imgSize = size === "lg" ? "200px" : "100%";
  const cardWidth = size === "lg" ? "280px" : "100%";

  return (
    <Box
      sx={{
        background: "#fff",
        
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        mx: "auto",
        width: cardWidth,
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Image fills full width */}
      <Box
        component="img"
        src={img}
        sx={{
          width: size === "lg" ? imgSize : "100%",
          height: size === "lg" ? "200px" : "160px",
          objectFit: "cover",
          objectPosition: "top",
          display: "block",
          mx: "auto",
        }}
      />

      {/* Text section below image */}
      <Box sx={{ p: "10px 8px 12px" }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "13px",
            color: "#222",
            lineHeight: 1.3,
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#555",
            fontSize: "12px",
            mt: 0.5,
            lineHeight: 1.4,
          }}
        >
          {role}
        </Typography>

        {subRole && (
          <Typography
            variant="body2"
            sx={{
              color: "#777",
              fontSize: "11px",
              mt: 0.4,
              lineHeight: 1.4,
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
          {/* TITLE - fadeInDown */}
          <Typography
            ref={titleRef}
            align="center"
            sx={{
              mb: 3,
              fontWeight: 600,
              fontSize: "20px",
              opacity: titleInView ? 1 : 0,
              animation: titleInView ? "fadeInDown 0.8s ease both" : "none",
            }}
          >
            Office Bearers of Central Board of Irrigation &amp; Power
          </Typography>

          {/* PRESIDENT - fadeIn delay 200ms */}
          {/* <Box
            ref={presidentRef}
            sx={{
              textAlign: "center",
              mb: 6,
              opacity: presidentInView ? 1 : 0,
              animation: presidentInView
                ? "fadeIn 0.8s ease 0.2s both"
                : "none",
            }}
          >
            <PersonCard
              img={man1}
              name="Shri Ghanshyam Prasad"
              role="President"
              subRole="Chairperson-Central Electricity Authority and Ex-officio Secretary to Govt. of India"
              size="lg"
            />
          </Box> */}


          <Box
  ref={presidentRef}
  sx={{
    display: "flex",
    justifyContent: "center",
    mb: 6,
    opacity: presidentInView ? 1 : 0,
    animation: presidentInView ? "fadeIn 0.8s ease 0.2s both" : "none",
  }}
>
  <Box sx={{ width: "280px" }}>
    <PersonCard
      img={man1}
      name="Shri Ghanshyam Prasad"
      role="President"
      subRole="Chairperson-Central Electricity Authority and Ex-officio Secretary to Govt. of India"
      size="lg"
    />
  </Box>
</Box>

          {/* VICE PRESIDENTS TITLE - fadeInDown */}
          <Typography
            ref={vpTitleRef}
            align="center"
            sx={{
              mb: 3,
              fontWeight: 600,
              fontSize: "20px",
              opacity: vpTitleInView ? 1 : 0,
              animation: vpTitleInView ? "fadeInDown 0.8s ease both" : "none",
            }}
          >
            Vice Presidents
          </Typography>

          {/* VICE PRESIDENTS GRID - fadeIn delay 200ms */}
          <Grid
            ref={vpGridRef}
            container
            spacing={4}
            justifyContent="center"
            sx={{
              mb: 6,
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
              // <Grid item xs={6} md={3} key={index}>
              //   <PersonCard
              //     img={person.img}
              //     name={person.name}
              //     role={person.role}
              //   />
              // </Grid>

              <Grid item xs={6} md={3} key={index}>
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <PersonCard img={person.img} name={person.name} role={person.role} />
  </Box>
</Grid>
            ))}
          </Grid>

          {/* SECRETARY & DIRECTORS TITLE - fadeInDown */}
          <Typography
            ref={secTitleRef}
            align="center"
            sx={{
              mb: 3,
              fontWeight: 600,
              fontSize: "20px",
              opacity: secTitleInView ? 1 : 0,
              animation: secTitleInView ? "fadeInDown 0.8s ease both" : "none",
            }}
          >
            Secretary and Directors
          </Typography>

          {/* SECRETARY & DIRECTORS GRID - fadeIn delay 200ms */}
          <Grid
            ref={secGridRef}
            container
            spacing={4}
            justifyContent="center"
            sx={{
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
              <Grid item xs={6} md={3} key={index}>
                <PersonCard
                  img={person.img}
                  name={person.name}
                  role={person.role}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default OfficeBearers;
