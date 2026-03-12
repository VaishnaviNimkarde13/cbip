import React from "react";
import {
  Box,
  Container,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box sx={styles.header}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1400px !important',
          margin: '0 auto !important',
          px: { xs: 2, sm: 3 },
        }}
      >
        <Box sx={{
          display: "flex",
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 1.5, sm: 2 },
          py: { xs: 1.5, sm: 1 },
          height:"40px",
          margin:"0 60px"
        }}>
          {/* Left Side - Contact Info */}
          <Box sx={{
            display: "flex",
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 1, sm: 3 },
            width: { xs: '100%', sm: 'auto' },
          }}>
            <Box sx={styles.contactItem}>
              <PhoneIcon sx={styles.icon} />
              <span>91-11-2611 6347</span>
            </Box>

            <Box sx={styles.contactItem}>
              <EmailIcon sx={styles.icon} />
              <span>Cbip@cbip.org</span>
            </Box>
          </Box>

          {/* Right Side - Buttons and Social */}
          <Box sx={{
            display: "flex",
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: "center",
            gap: { xs: 1.5, sm: 2 },
            width: { xs: '100%', sm: 'auto' },
          }}>
            {/* Login Buttons */}
            <Box sx={{
              display: "flex",
              gap: 1.5,
              width: { xs: '100%', sm: 'auto' },
              justifyContent: { xs: 'center', sm: 'flex-end' },
            }}>
              <Box
                component="a"
                href="https://www.cbippublication.org/"
                target="_blank"
                rel="noreferrer"
                sx={styles.button}
              >
                Employee Login
              </Box>

              <Box
                component="a"
                href="https://www.cbippublication.org/"
                target="_blank"
                rel="noreferrer"
                sx={styles.button}
              >
                Publication Login
              </Box>
            </Box>

            {/* Social Icons - Only show on tablet and up, or in a row on mobile */}
            <Box sx={{
              display: "flex",
              gap: 1,
              justifyContent: { xs: 'center', sm: 'flex-end' },
              width: { xs: '100%', sm: 'auto' },
            }}>
              <IconButton
                component="a"
                target="_blank"
                href="https://twitter.com"
                sx={styles.socialIcon}
                size="small"
              >
                <XIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                component="a"
                target="_blank"
                href="https://linkedin.com"
                sx={styles.socialIcon}
                size="small"
              >
                <LinkedInIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                component="a"
                target="_blank"
                href="https://facebook.com"
                sx={styles.socialIcon}
                size="small"
              >
                <FacebookIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                component="a"
                target="_blank"
                href="https://instagram.com"
                sx={styles.socialIcon}
                size="small"
              >
                <InstagramIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const styles = {
  header: {
    width: "100%",
    background: "#273272",
    color: "white",
    fontSize: "14px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: { xs: "16px", sm: "17px" },
    whiteSpace: "nowrap",
  },

  icon: {
    fontSize: { xs: "16px", sm: "18px" },
    color: "#ffffff",
  },

  button: {
    background: "#ffffff",
    color: "#333333",
    padding: { xs: "4px 10px", sm: "6px 14px" },
    textDecoration: "none",
    borderRadius: "3px",
    fontSize: { xs: "12px", sm: "16px" },
    fontWeight: 600,
    cursor: "pointer",
    display: "inline-block",
    textAlign: "center",
    whiteSpace: "nowrap",
    '&:hover': {
      background: "#f0f0f0",
    },
  },

  socialIcon: {
    width: { xs: "28px", sm: "30px" },
    height: { xs: "28px", sm: "30px" },
    border: "1px solid white",
    borderRadius: "4px",
    color: "white",
    padding: "4px",
   
  },
};

export default Header;