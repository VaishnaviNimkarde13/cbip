import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import banner from "../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";
import { Divider } from "@mui/material";
import g1 from "../assets/Group1.jpg";
import g2 from "../assets/Group2.jpg";
import g3 from "../assets/Group3.jpg";
import g4 from "../assets/Group4.jpg";

// Hook to detect when element is in viewport
const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

const CBIPCOE = () => {
  const images = [g1, g2, g3, g4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation refs
  const [headingRef, headingInView] = useInView(0.3);
  const [subHeadingRef, subHeadingInView] = useInView(0.3);
  const [para1Ref, para1InView] = useInView(0.3);
  const [para2Ref, para2InView] = useInView(0.3);
  const [facilitiesRef, facilitiesInView] = useInView(0.3);
  const [facilitiesListRef, facilitiesListInView] = useInView(0.3);
  const [whyHeadingRef, whyHeadingInView] = useInView(0.3);
  const [whyListRef, whyListInView] = useInView(0.3);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

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
          sx={{ 
            color: "#fff", 
            position: "relative", 
            fontWeight: 600,
           
          }}
        >
          CBIP-COE
        </Typography>
      </Box>

      {/* MAIN CONTENT */}
      <Box sx={{ py: 6, background: "#ffffff" }}>
        <Container maxWidth="lg" sx={{ pl: { xs: 2, md: 8 } }}>
          {/* IMAGE SLIDER with fadeIn animation */}
          <Box 
            sx={{ 
              position: "relative", 
              mb: 4,
             
            }}
          >
            {/* Main Slider Container */}
            <Box
              sx={{
                width: "100%",
                height: { xs: 300, md: 500 },
                overflow: "hidden",
                position: "relative",
                borderRadius: 2,
              }}
            >
              {/* Images Container */}
              <Box
                sx={{
                  display: "flex",
                  transition: "transform 0.5s ease-in-out",
                  transform: `translateX(-${currentIndex * 100}%)`,
                  height: "100%",
                }}
              >
                {images.map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      minWidth: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt={`Slide ${index + 1}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                ))}
              </Box>

              {/* Dots Indicator */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: 1.5,
                  zIndex: 2,
                }}
              >
                {images.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => goToSlide(index)}
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      bgcolor: currentIndex === index ? "#1a237e" : "rgba(255,255,255,0.7)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "#1a237e",
                        transform: "scale(1.2)",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          {/* TEXT CONTENT */}
          <Box sx={{ mt: 5 }}>
            {/* Main Heading */}
            <Box ref={headingRef}>
              <Typography
                variant="h4"
                sx={{ 
                  fontWeight: 600, 
                  color: "#1a237e", 
                  mb: 2,
                  opacity: headingInView ? 1 : 0,
                  animation: headingInView ? "fadeInDown 0.8s ease both" : "none",
                }}
              >
                CBIP-Centre of Excellence (CoE)
              </Typography>
            </Box>

            {/* Divider with animation */}
            <Box ref={subHeadingRef}>
              <Divider
                sx={{
                  width: "150px",
                  my: 2,
                  borderBottomWidth: 3,
                  borderColor: "#1a237e",
                  opacity: subHeadingInView ? 1 : 0,
                  animation: subHeadingInView ? "fadeInLeft 0.8s 0.2s both" : "none",
                }}
              />
            </Box>

            {/* First Paragraph */}
            <Box ref={para1Ref}>
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 2, 
                  fontSize: 15.5,
                  opacity: para1InView ? 1 : 0,
                  animation: para1InView ? "fadeInRight 0.8s 0.3s both" : "none",
                }}
              >
                Central Board of Irrigation and Power, is a Premier Institution
                set up by the Government of India in the year 1927. CBIP has been
                rendering dedicated services to the professional organization,
                engineers and individuals in the country related to Power, Water
                Resources and Renewable Energy Sectors for the last 97 years.
                Keeping in view the growth of training activities of the Board, a
                new branch of Training Institute "CBIP Centre of Excellence" had
                been opened in Gurugram (Haryana) starting from 26th July 2013.
              </Typography>
            </Box>

            {/* Second Paragraph */}
            <Box ref={para2Ref}>
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 2, 
                  fontSize: 15.5,
                  opacity: para2InView ? 1 : 0,
                  animation: para2InView ? "fadeInLeft 0.8s 0.4s both" : "none",
                }}
              >
                CBIP, Centre of Excellence is Recognized as Category-1 Training
                Institute for providing training in the field of Hydro, Thermal,
                Transmission, Distribution, Renewable Energy and Power Management
                by Ministry of Power, Government of India.
              </Typography>
            </Box>

            {/* Facilities Subheading */}
            <Box ref={facilitiesRef}>
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: 18, 
                  fontWeight: 500,
                  opacity: facilitiesInView ? 1 : 0,
                  animation: facilitiesInView ? "fadeInUp 0.8s 0.5s both" : "none",
                }}
              >
                This centre has State-of-the-Art facilities which includes:
              </Typography>
            </Box>

            {/* Facilities List */}
            <Box 
              ref={facilitiesListRef} 
              sx={{ 
                mt: 2,
                opacity: facilitiesListInView ? 1 : 0,
                animation: facilitiesListInView ? "slideInUp 0.8s 0.6s both" : "none",
              }}
            >
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
                    animation: facilitiesListInView ? `fadeInRight 0.8s ${0.7 + index * 0.1}s both` : "none",
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

            {/* Why CBIP-COE Section */}
            <Box sx={{ mt: 5 }}>
              {/* Why Heading */}
              <Box ref={whyHeadingRef}>
                <Typography
                  variant="h4"
                  sx={{ 
                    fontWeight: 600, 
                    color: "#1a237e", 
                    mb: 2,
                    opacity: whyHeadingInView ? 1 : 0,
                    animation: whyHeadingInView ? "fadeInDown 0.8s 0.8s both" : "none",
                  }}
                >
                  Why CBIP-COE
                </Typography>
              </Box>

              {/* Why Divider */}
              <Box ref={whyHeadingRef}>
                <Divider
                  sx={{
                    width: "150px",
                    my: 2,
                    borderBottomWidth: 3,
                    borderColor: "#1a237e",
                    opacity: whyHeadingInView ? 1 : 0,
                    animation: whyHeadingInView ? "fadeInLeft 0.8s 0.9s both" : "none",
                  }}
                />
              </Box>

              {/* Why List */}
              <Box 
                ref={whyListRef}
                sx={{
                  opacity: whyListInView ? 1 : 0,
                  animation: whyListInView ? "zoomIn 0.8s 1s both" : "none",
                }}
              >
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
                      animation: whyListInView ? `fadeInRight 0.8s ${1.1 + index * 0.1}s both` : "none",
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
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CBIPCOE;