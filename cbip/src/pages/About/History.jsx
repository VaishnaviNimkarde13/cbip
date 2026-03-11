import React from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

import historyImg1 from "../../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";
import historyImg2 from "../../assets/n.jpg";

const History = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          height: "300px",
          backgroundImage: `url(${historyImg1})`,
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
            background: "rgba(0, 0, 0, 0.5)",
          }}
        />

        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            position: "relative",
            fontWeight: 600,
          }}
        >
          History
        </Typography>
      </Box>

      {/* MAIN SECTION */}
      <Box sx={{ py: 11, background: "#f7f7f7" }}>
        <Container maxWidth="lg">
          {/* FIRST SECTION (IMAGE LEFT + TEXT RIGHT) */}
<Grid
  container
  spacing={4}
  alignItems="center"
  sx={{ mt: 2 }}
>

  {/* IMAGE */}
  <Grid item xs={12} md={6}>
    <Box sx={{ position: "relative" }}>
      
      {/* Shadow card */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: -10,
          width: "100%",
          height: "100%",
          background: "#1f355e",
          borderRadius: "30px",
          zIndex: 0,
        }}
      />

      {/* Image */}
      <Box
        component="img"
        src={historyImg2}
        alt="History"
        sx={{
          width: "100%",
          borderRadius: "30px",
          position: "relative",
          zIndex: 1,
        }}
      />
    </Box>
  </Grid>

  {/* TEXT */}
  <Grid item xs={12} md={6}>
    
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      
      <Box
        sx={{
          width: 40,
          height: 40,
          background: "#2f3e8f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          mr: 1.5,
        }}
      >
        <DescriptionIcon sx={{ color: "#fff" }} />
      </Box>

      <Typography
        sx={{
          background: "#2f3e8f",
          color: "#fff",
          px: 2,
          py: 0.5,
          borderRadius: "6px",
          fontWeight: 600,
          fontSize: "22px",
         
        }}
      >
        History of CBIP
      </Typography>
    </Box>

    <Typography sx={{ color: "#555", lineHeight: 1.9, mb: 2 }}>
      Central Board of Irrigation and Power is a Premier Institution set up
      by the Government of India in 1927. CBIP has been rendering dedicated
      services to professional organizations, engineers and individuals in
      the country related to Power, Water Resources and Renewable Energy
      sectors for the last 90 years.
    </Typography>

    <Typography sx={{ color: "#555", lineHeight: 1.9, mb: 2 }}>
      Today, CBIP presents a shining example of a pioneer organization and
      has enabled Indian industry to set higher benchmarks and attain
      international standards in excellence by creating a unique platform
      for growth and development.
    </Typography>

    <Typography sx={{ color: "#555", lineHeight: 1.9, mb: 3 }}>
      It is a knowledge bank and an exchange for dissemination of experience
      and technical knowledge.
    </Typography>

    <Box sx={{ display: "flex", gap: 2 }}>
      <Button variant="contained" sx={{ background: "#333", textTransform: "none" }}>
        CBIP Brochure
      </Button>

      <Button variant="contained" sx={{ background: "#333", textTransform: "none" }}>
        CBIP History Book
      </Button>
    </Box>

  </Grid>

</Grid>
          
        </Container>
      </Box>
    </>
  );
};

export default History;
