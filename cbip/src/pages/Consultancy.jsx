import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import BoltIcon from "@mui/icons-material/Bolt";
import heroimg from "../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";

import consultancyServiceImg from "../assets/consultancy-service.png";
import consultancyImg from "../assets/consultancy.jpg";
import executiveImg from "../assets/consultancy3.jpg";

// Hook to detect when element is in viewport
const useInView = (threshold = 0.15) => {
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

const Consultancy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Animation refs
  const [headingRef, headingInView] = useInView(0.3);
  const [section1Ref, section1InView] = useInView(0.2);
  const [section2Ref, section2InView] = useInView(0.2);
  const [section3Ref, section3InView] = useInView(0.2);
  const [section4Ref, section4InView] = useInView(0.2);
  const [listRef, listInView] = useInView(0.2);

  return (
    <>
      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* HERO SECTION */}
      <Box
        sx={{
          height: { xs: "200px", sm: "250px", md: "300px" },
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${heroimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
          }}
        />
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            position: "relative",
            fontWeight: 700,
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
            textAlign: "center",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Consultancy
        </Typography>
      </Box>

      {/* CONSULTANCY SERVICES HEADING */}
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Box>
            {/* Elementor style animation - First heading with fadeInDown */}
            <Box
              className="elementor-element elementor-element-6a85f9e animated-slow"
              ref={headingRef}
              sx={{
                opacity: headingInView ? 1 : 0,
                animation: headingInView ? "fadeInDown 0.8s ease both" : "none",
                textAlign: "center",
                mb: 1,
              }}
            >
              <Typography
                variant="h2"
                className="elementor-heading-title elementor-size-default"
                sx={{
                  fontSize: { xs: "28px", sm: "32px", md: "36px" },
                  fontWeight: 700,
                  color: "#1e2a6e",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                CONSULTANCY SERVICES
              </Typography>
            </Box>

            {/* Elementor style animation - Second heading with fadeInDown */}
            <Box
              className="elementor-element elementor-element-72bb7c1 animated-slow"
              ref={headingRef}
              sx={{
                opacity: headingInView ? 1 : 0,
                animation: headingInView ? "fadeInDown 0.8s 0.2s both" : "none",
                textAlign: "center",
                mb: 4,
              }}
            >
              <Typography
                variant="h3"
                className="elementor-heading-title elementor-size-default"
                sx={{
                  fontSize: { xs: "20px", sm: "22px", md: "24px" },
                  fontWeight: 500,
                  color: "#444",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Membership of the Executive Committee of the Board.
              </Typography>
            </Box>
          </Box>

          {/* SECTION 1 - Image Left, Text Right */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ mb: { xs: 4, md: 6 } }}
            ref={section1Ref}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  opacity: section1InView ? 1 : 0,
                  animation: section1InView
                    ? "fadeInLeft 0.8s ease both"
                    : "none",
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src={consultancyServiceImg}
                  alt="Consultancy Service"
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "100%", md: "600px" },
                    height: "auto",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x300/1e2a6e/white?text=Consultancy+Service";
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  opacity: section1InView ? 1 : 0,
                  animation: section1InView
                    ? "fadeInRight 0.8s ease both"
                    : "none",
                }}
              >
                <Typography
                  sx={{
                    color: "#333333",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    fontFamily: "'Inter', sans-serif",
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  The history of providing consultancy services by the Central
                  Board of Irrigation & Power is as old as its inception since
                  the year 1927. This could be ascertained from the fact that
                  not only the projects, requiring under the rules, to be
                  submitted to the Govt, of India (GOI) were to be referred to a
                  subcommittee of the Board, but it was opened to any provincial
                  govt, to ask for a subcommittee (of the Board) to advise on
                  any difficult technical question connected with the irrigation
                  project under preparation even though the project might not
                  require, under the rules to be submitted to the Govt, of
                  India.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* SECTION 2 - Text Left, Image Right */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ mb: { xs: 4, md: 6 } }}
            ref={section2Ref}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  opacity: section2InView ? 1 : 0,
                  animation: section2InView
                    ? "fadeInLeft 0.8s ease both"
                    : "none",
                }}
              >
                <Typography
                  sx={{
                    color: "#333333",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    fontFamily: "'Inter', sans-serif",
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  The Central Board of Irrigation (now Central Board of
                  Irrigation & Power) was created with the very objective of,
                  not only, enabling the provincial governments to obtain a
                  second opinion in regard to irrigation projects, but also to
                  give the Govt, of India authoritative advise in regard to the
                  settlement of disputes between provinces arising out of the
                  claims to the same source of supply. The consulting engineer
                  to the Govt, of India and all the Chief Engineers for
                  irrigation in the provinces were members of the Board. The
                  Board worked through subcommittees consisting of those
                  engineers with recent experience of works akin to those to be
                  discussed. These subcommittees would be convened by GOI at the
                  instance of local govt, concerned when a new project was about
                  to be sanctioned or when a province found itself in difficulty
                  for any technical matter. The constitution of the Central
                  Board of Irrigation resulted in the benefit of the experience
                  gained in one province being placed at the disposal of other
                  provinces.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  opacity: section2InView ? 1 : 0,
                  animation: section2InView
                    ? "fadeInRight 0.8s ease both"
                    : "none",
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src={consultancyImg}
                  alt="Consultancy"
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "100%", md: "500px" },
                    height: "auto",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/500x350/1e2a6e/white?text=Consultancy";
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* SINGLE PARAGRAPH SECTION */}
          <Box sx={{ mb: { xs: 4, md: 6 } }} ref={section3Ref}>
            <Typography
              sx={{
                color: "#333333",
                lineHeight: 1.7,
                fontSize: { xs: "0.95rem", md: "1rem" },
                fontFamily: "'Inter', sans-serif",
                textAlign: { xs: "justify", md: "center" },
                opacity: section3InView ? 1 : 0,
                animation: section3InView
                  ? "fadeInDown 0.8s 0.2s both"
                  : "none",
              }}
            >
              Hence, the fore-goings give us clear indications of the extent to
              which the job of providing consultancy by the Board has been given
              importance and since inception, it has been very closely involved
              giving recommendations for all technical matters of various
              irrigation projects of the country.
            </Typography>
          </Box>

          {/* SECTION 3 - Image Left, Text Right */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ mb: { xs: 4, md: 6 } }}
            ref={section4Ref}
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  opacity: section4InView ? 1 : 0,
                  animation: section4InView
                    ? "fadeInLeft 0.8s ease both"
                    : "none",
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src={executiveImg}
                  alt="Executive"
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "100%", md: "500px" },
                    height: "auto",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/500x350/1e2a6e/white?text=Executive+Committee";
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  opacity: section4InView ? 1 : 0,
                  animation: section4InView
                    ? "fadeInRight 0.8s 0.2s both"
                    : "none",
                }}
              >
                <Typography
                  sx={{
                    color: "#333333",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    fontFamily: "'Inter', sans-serif",
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  At present also consultancy is one of the thrust areas of CBIP
                  and it undertakes consultancy jobs in various areas such as
                  Power, Water Resources and Renewable Energy. CBIP has a strong
                  knowledge base including database of various case studies, a
                  good collection of books in its Library, a strong base of its
                  own updated technical manuals on various thrust areas along
                  with a layer of very senior in-house officers and a strong
                  base of more than 3000 members in the rank of Chief Engineers
                  and above from reputed organizations (public & private) having
                  rich and in-depth experience in various sub disciplines of
                  these sectors i.e. Generation (hydro & thermal), Transmission,
                  Distribution, Renewable, Irrigation, RCC dams Technology, Rock
                  mechanics, Geosynthetics, Training, the man power planning
                  etc. It is quite capable of providing consultancy services to
                  various utilities & organizations as per their requirements on
                  various broad based and challenging issues. Some of the
                  indicative areas where CBIP provides consultancy are indicated
                  below:
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* LIST SECTION */}
          <Box ref={listRef} sx={{ mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "22px", sm: "24px", md: "26px" },
                fontWeight: 600,
                color: "#1e2a6e",
                textAlign: "center",
                mb: 3,
                fontFamily: "'Inter', sans-serif",
                opacity: listInView ? 1 : 0,
                animation: listInView ? "fadeInDown 0.8s ease both" : "none",
              }}
            >
              Identification of hydro projects in states and clearance of PFR's
              & DPR's for Hydro Power and Thermal Power Projects
            </Typography>

            <List
              sx={{
                mb: 3,
                opacity: listInView ? 1 : 0,
                animation: listInView ? "zoomIn 0.8s 0.2s both" : "none",
              }}
            >
              {[
                "Manpower planning, training need assessment and Development of Training Schedule for O&M personnel.",
                "Technical auditors of Hydro & Thermal Power Projects.",
                "Preparation of operation and maintenance manuals.",
                "Recruitment of technical and non technical staff for power and water resources projects on turnkey basis.",
                "Preparation of DPR/setting and establishment of training institute in any discipline of power sector.",
                "Consultancy for setting up Solar Power Plants.",
              ].map((text, index) => (
                <ListItem
                  key={index}
                  sx={{
                    py: 1,
                    px: { xs: 0, md: 2 },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: { xs: 36, md: 40 } }}>
                    <BoltIcon
                      sx={{ color: "#d9251c", fontSize: { xs: 20, md: 24 } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: { xs: "0.95rem", md: "1rem" },
                        fontFamily: "'Inter', sans-serif",
                        color: "#333333",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Box
              sx={{
                opacity: listInView ? 1 : 0,
                animation: listInView ? "fadeInLeft 0.8s 0.4s both" : "none",
              }}
            >
              <Typography
                sx={{
                  color: "#333333",
                  lineHeight: 1.7,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontFamily: "'Inter', sans-serif",
                  textAlign: { xs: "justify", md: "left" },
                  mb: 2,
                  fontWeight: "bold",
                }}
              >
                CBIP being a think tank, with a back up support of experts in
                each narrow area of the three aforesaid sectors. CBIP also acts
                as guide to educational institutes, professionals for problem
                solving.
              </Typography>
              <Typography
                sx={{
                  color: "#333333",
                  lineHeight: 1,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontFamily: "'Inter', sans-serif",
                  textAlign: { xs: "justify", md: "left" },
                  mb: 2,
                  fontWeight: "bold",
                }}
              >
                CBIP also provides free consultancy to the students.
              </Typography>
              <Typography
                sx={{
                  color: "#333333",
                  lineHeight: 1.7,
                  fontWeight: "bold",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontFamily: "'Inter', sans-serif",
                  textAlign: { xs: "justify", md: "left" },
                }}
              >
                In the recent past, CBIP has provided consultancy services to
                TATAs, KPCL, WPC Australia, APSEB, TNEB, IREDA, India Canada
                Environment Facility (ICEF), CPRI, US Hydro Power Council for
                International Development, PTC India Ltd., Indraprastha Power
                Generation Company Ltd. (IPGCL)/Pragati Power Company Ltd.,
                Tenughat Vidyut Nigam Ltd. (TVNL), DTL etc.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Consultancy;