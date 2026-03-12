import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

import banner from "../../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";

import img1 from "../../assets/1s.jpg";
import img2 from "../../assets/2s.jpg";
import img3 from "../../assets/3s.jpg";
import img4 from "../../assets/Solar-Energy-Storage-System-623-x-320-px.png";

const Activities = () => {
 const activities = [
  { img: img1, title: "RESEARCH ACTIVITIES" },

  { 
    img: img2, 
    title: (
      <>
        DISSEMINATION OF <br/>
        TECHNICAL KNOWLEDGE <br/>
        THROUGH PUBLICATIONS
      </>
    )
  },

  { 
    img: img3, 
    title: (
      <>
        DISSEMINATION OF <br/>
        KNOWLEDGE THROUGH <br/>
        NATIONAL / INTERNATIONAL <br/>
        CONFERENCES
      </>
    )
  },

  { 
    img: img4, 
    title: (
      <>
        CONDUCTION OF AUDIT OF POWER <br/>
        STATION AND SUBSTATION
      </>
    )
  }
];
  return (
    <>
      {/* Banner */}
      <Box
        sx={{
          height: "300px",
          backgroundImage: `url(${banner})`,
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
            background: "rgba(0,0,0,0.5)",
          }}
        />

        <Typography
          variant="h2"
          sx={{ color: "#fff", position: "relative", fontWeight: 600 }}
        >
          Activities
        </Typography>
      </Box>

      {/* Activities */}
      <Box sx={{ py: 8, background: "#f6f6f6" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {activities.map((item, index) => (
              <Grid item md={3} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  
                  {/* <Box
                    component="img"
                    src={item.img}
                    alt=""
                    sx={{
                        width:"270px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  /> */}

                  <Box
  component="img"
  src={item.img}
  alt=""
  sx={{
    width: "270px",
    height: "150px",
    objectFit: "cover",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(0.9)",
      animationDuration: ".3s",
      animationTimingFunction: "ease-in-out",
    },
  }}
/>

                  <Typography
                    sx={{
                      mt: 2,
                      fontWeight: 600,
                      fontSize: "13px",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      color: "red",
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                  >
                    Read More
                  </Typography>

                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Activities;