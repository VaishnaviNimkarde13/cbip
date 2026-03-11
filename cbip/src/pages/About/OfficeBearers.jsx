import React from "react";
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

const OfficeBearers = () => {
  return (
    <>
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
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
          }}
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

          {/* PRESIDENT */}
          <Typography align="center" sx={{ mb: 3, fontWeight: 600 }}>
            Office Bearers of Central Board of Irrigation & Power
          </Typography>

          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Box
              component="img"
              src={man1}
              sx={{
                width: "150px",
                height: "180px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />

            <Typography sx={{ mt: 2, fontWeight: 600 }}>
              Shri Chairman Name
            </Typography>

            <Typography variant="body2">
              President
            </Typography>
          </Box>

          {/* VICE PRESIDENTS */}
          <Typography align="center" sx={{ mb: 3, fontWeight: 600 }}>
            Vice Presidents
          </Typography>

          <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
            {[man2, man3, man4, man5].map((img, index) => (
              <Grid item md={3} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    component="img"
                    src={img}
                    sx={{
                      width: "120px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />

                  <Typography sx={{ mt: 1, fontWeight: 600 }}>
                    Name Here
                  </Typography>

                  <Typography variant="body2">
                    Vice President
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* SECRETARY & DIRECTORS */}
          <Typography align="center" sx={{ mb: 3, fontWeight: 600 }}>
            Secretary and Directors
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[man6, man7, man8].map((img, index) => (
              <Grid item md={3} key={index}>
                <Box sx={{ textAlign: "center" }}>
                  <Box
                    component="img"
                    src={img}
                    sx={{
                      width: "120px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />

                  <Typography sx={{ mt: 1, fontWeight: 600 }}>
                    Name Here
                  </Typography>

                  <Typography variant="body2">
                    Director
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

export default OfficeBearers;