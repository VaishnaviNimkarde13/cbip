import React from "react";
import { Box, Container, Typography, IconButton, useTheme, useMediaQuery, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PrintIcon from "@mui/icons-material/Print";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Social media links
  const socialLinks = [
    { icon: XIcon, url: "https://twitter.com/cbipofficial", label: "Twitter" },
    { icon: LinkedInIcon, url: "https://www.linkedin.com/company/cbip", label: "LinkedIn" },
    { icon: YouTubeIcon, url: "https://www.youtube.com/@cbipofficial", label: "YouTube" },
    { icon: InstagramIcon, url: "https://www.instagram.com/cbip_official", label: "Instagram" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#273272',
        color: 'white',
        pt: 2,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Container 
        maxWidth={false}
        sx={{
          maxWidth: '1200px !important',
          margin: '0 auto !important',
          px: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Address Column */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 2.5,
                fontSize: { xs: '24px', md: '28px' },
                fontWeight: 'bold',
              }}
            >
              Address
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <LocationOnIcon sx={{ fontSize: 25, mt: 0.3, flexShrink: 0 }} />
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }}>
                Central Board of Irrigation and Power Malcha Marg,
                Chanakyapuri, New Delhi 110021.
              </Typography>
            </Box>

            <Typography
              variant="h6"
              sx={{
                mt: 4,
                mb: 2,
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              Get in Social
            </Typography>

            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    border: '1px solid white',
                    borderRadius: '4px',
                    p: 1,
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  <social.icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Contact Column */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 2.5,
                fontSize: { xs: '24px', md: '28px' },
                fontWeight: 'bold',
              }}
            >
              Contact Details
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <LocationOnIcon sx={{ fontSize: 25, mt: 0.3, flexShrink: 0 }} />
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }}>
                +91-11-2611 5984, 2611 1294, 2687 6229,
                2611 6567, 2687 5017, 2410 2437
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <MailOutlineIcon sx={{ fontSize: 25, mt: 0.3, flexShrink: 0 }} />
              <Box>
                <Link
                  href="mailto:cbip@cbip.org"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'block',
                    lineHeight: 1.6,
                    fontSize: '16px',
                   
                  }}
                >
                  cbip@cbip.org
                </Link>
                <Link
                  href="mailto:cbip.cbip@gmail.com"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'block',
                    lineHeight: 1.6,
                    fontSize: '16px',
                   
                  }}
                >
                  cbip.cbip@gmail.com
                </Link>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <PrintIcon sx={{ fontSize: 25, mt: 0.3, flexShrink: 0 }} />
              <Typography sx={{ lineHeight: 1.6, fontSize: '16px' }}>
                91-11-2611 6347
              </Typography>
            </Box>
          </Box>

          {/* Location Column */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                mb: 2.5,
                fontSize: { xs: '24px', md: '28px' },
                fontWeight: 'bold',
              }}
            >
              Location
            </Typography>

            <Box
              component="iframe"
              title="map"
              src="https://maps.google.com/maps?q=Central%20Board%20of%20Irrigation%20and%20Power%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              sx={{
                width: '100%',
                height: 200,
                border: 'none',
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Copyright */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          textAlign: 'center',
          py: 2.5,
          px: 2,
          mt: 1,
          fontSize: '14px',
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1200px !important',
            margin: '0 auto !important',
          }}
        >
          <Typography sx={{ fontSize: '14px' }}>
            Copyright © 2025 by Central Board Of Irrigation and Power | All rights reserved
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;