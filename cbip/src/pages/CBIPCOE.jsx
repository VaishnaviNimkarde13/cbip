import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Slider from "react-slick";

import banner from "../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";
import { Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import g1 from "../assets/Group1.jpg";
import g2 from "../assets/Group2.jpg";
import g3 from "../assets/Group3.jpg";
import g4 from "../assets/Group4.jpg";

const CBIPCOE = () => {
  const images = [g1, g2, g3, g4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          height: 260,
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
          CBIP-COE
        </Typography>
      </Box>

      {/* MAIN CONTENT */}
      <Box sx={{ py: 6, background: "#ffffff" }}>
        <Container maxWidth="lg" sx={{ pl: { xs: 2, md: 8 } }}>
          {/* IMAGE SLIDER */}
          <Slider {...settings}>
            {images.map((img, index) => (
              <Box key={index}>
                <Box
                  component="img"
                  src={img}
                  sx={{
                    width: "100%",
                    height: { xs: 300, md: 500 },
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Slider>

          {/* TEXT CONTENT */}
          <Box sx={{ mt: 5 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, color: "#1a237e", mb: 2 }}
            >
              CBIP-Centre of Excellence (CoE)
            </Typography>
            <Divider
              sx={{
                width: "150px",
                my: 2,
                borderBottomWidth: 3,
                borderColor: "#1a237e",
              }}
            />

            <Typography variant="body2" sx={{ mb: 2, fontSize: 15.5 }}>
              Central Board of Irrigation and Power, is a Premier Institution
              set up by the Government of India in the year 1927. CBIP has been
              rendering dedicated services to the professional organization,
              engineers and individuals in the country related to Power, Water
              Resources and Renewable Energy Sectors for the last 97 years.
              Keeping in view the growth of training activities of the Board, a
              new branch of Training Institute “CBIP Centre of Excellence” had
              been opened in Gurugram (Haryana) starting from 26th July 2013.
            </Typography>

            <Typography variant="body2" sx={{ mb: 2, fontSize: 15.5 }}>
              CBIP, Centre of Excellence is Recognized as Category-1 Training
              Institute for providing training in the field of Hydro, Thermal,
              Transmission, Distribution, Renewable Energy and Power Management
              by Ministry of Power, Government of India.
            </Typography>

            <Typography variant="body2" sx={{ fontSize: 18, fontWeight: 500 }}>
              This centre has State-of-the-Art facilities which includes:
            </Typography>
            <Box sx={{ mt: 2 }}>
              {[
                "Four class rooms, having seating capacity of approx. 150 participants.",
                "Various established Labs like Electrical, SCADA, C&I & Mechanical Labs having various associated tools including testing equipment, working models etc.",
                "Computer Lab connected through LAN with WI-FI facilities",
              ].map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1,
                    mb: 1.5,
                  }}
                >
                 <Typography
                    sx={{
                      fontSize: "15.5px",
                      color: "#1a237e",
                      mt: "2px",
                      fontWeight: 600,
                    }}
                  >
                    ➔
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15.5px",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ mt: 5 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: "#1a237e", mb: 2 }}
              >
                Why CBIP-COE
              </Typography>

              <Divider
                sx={{
                  width: "150px",
                  my: 2,
                  borderBottomWidth: 3,
                  borderColor: "#1a237e",
                }}
              />

              {[
                "CBIP CoE has been providing various Consultancy services like Protection and Technical Audit of Substation, Training Need Identification (TNI) and Training Need Assessment (TNA), Conduction of Departmental and Recruitment Test and Other Misc. Consultancy Activities.",
                "Conducts Trainings as per the customized requirement for the organizations in Power Sector including Doorstep Training Program at sites.",
                "The Class room/ Practical Hands-on Training are designed as per the Training requirements specified in CEA Regulations and as per latest Standards applicable in Power Sector.",
                "CBIP is also a recognized training partner of National Skill Development Corporation (NSDC), Power Sector Skill Council (PSSC) and Skill Council for Green Jobs (SCGJ).",
                "Digital Recognition/ Certification of the Course which is recognized Nationally and Internationally.",
                "Has State-of-the-Art infrastructure facilities like digitized library, well equipped lab, classrooms, conference hall, dining hall etc.",
                "CBIP has also signed a Memorandum of Understanding (MoU) with Indian Electrical and Electronics Manufacturers Association (IEEMA).",
                "CBIP has MoU with Manufacturing companies like SIEMENS, ABB, Schneider, L&T etc.",
                "CBIP has a strong team of senior training officers, having in-depth knowledge of conducting various long term training programs related to Power sector.",
              ].map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.5,
                    mb: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15.5px",
                      color: "#1a237e",
                      mt: "2px",
                      fontWeight: 600,
                    }}
                  >
                    ➔
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15.5px",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CBIPCOE;
