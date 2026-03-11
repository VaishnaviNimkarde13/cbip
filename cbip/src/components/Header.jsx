import React from "react";
import {
  Box,
  Container,
  useTheme,
  useMediaQuery
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={styles.header}>
      <Container  sx={styles.container}>
        {/* Left Side */}
        <Box sx={{
          ...styles.left,
          flexDirection: isSmallMobile ? 'column' : 'row',
          alignItems: isSmallMobile ? 'flex-start' : 'center',
          width: isMobile ? '100%' : 'auto',
          mb: isMobile ? 1 : 0
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

        {/* Right Side */}
        <Box sx={{
          ...styles.right,
          flexDirection: isSmallMobile ? 'column' : 'row',
          width: isMobile ? '100%' : 'auto',
          gap: isSmallMobile ? 2 : 2
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: isSmallMobile ? 'column' : 'row',
            gap: 1,
            width: isSmallMobile ? '100%' : 'auto'
          }}>
            <Box
              component="a"
              href="https://www.cbippublication.org/"
              target="_blank"
              rel="noreferrer"
              sx={{
                ...styles.button,
                display: 'block',
                textAlign: 'center',
                width: isSmallMobile ? '100%' : 'auto'
              }}
            >
              Employee Login
            </Box>

            <Box
              component="a"
              href="https://www.cbippublication.org/"
              target="_blank"
              rel="noreferrer"
              sx={{
                ...styles.button,
                display: 'block',
                textAlign: 'center',
                width: isSmallMobile ? '100%' : 'auto'
              }}
            >
              Publication Login
            </Box>
          </Box>

          <Box sx={{
            ...styles.socials,
            marginLeft: isSmallMobile ? 0 : '10px',
            justifyContent: isSmallMobile ? 'center' : 'flex-start',
            width: isSmallMobile ? '100%' : 'auto'
          }}>
            <Box
              component="a"
              target="_blank"
              href="https://www.facebook.com/people/CBIP-KMS/100064174029044/?rdid=Y6vOb2XSJoXS1gQ9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16FHcTX77s%2F"
              sx={styles.socialIcon}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="16"
                height="16"
                fill="white"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </Box>
            <Box
              component="a"
              target="_blank"
              href="https://www.facebook.com/people/CBIP-KMS/100064174029044/?rdid=CjYPgngKOYcLWdad&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16FHcTX77s%2F"
              sx={styles.socialIcon}
            >
              <LinkedInIcon sx={styles.icon} />
            </Box>
            <Box
              component="a"
              target="_blank"
              href="https://www.facebook.com/people/CBIP-KMS/100064174029044/?rdid=y9a8fuN4zn6dNkob&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16FHcTX77s%2F"
              sx={styles.socialIcon}
            >
              <FacebookIcon sx={styles.icon} />
            </Box>
            <Box
              component="a"
              target="_blank"
              href="https://www.facebook.com/people/CBIP-KMS/100064174029044/?rdid=hDawqS5ofBuUJ84V&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16FHcTX77s%2F"
              sx={styles.socialIcon}
            >
              <InstagramIcon sx={styles.icon} />
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
    padding: "8px 0",
    fontSize: "14px",
  },

  container: {
    // maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "0 16px",
  },

  left: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },

  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "16px",
  },

  icon: {
    fontSize: "20px",
    color: "#ffffff",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontWeight: "bold",
  },

  button: {
    background: "#ffffff",
    color: "#333333",
    padding: "6px 14px",
    textDecoration: "none",
    borderRadius: "3px",
    fontSize: "15px",
    cursor: "pointer",
    '&:hover': {
      background: "#f0f0f0",
    },
  },

  socials: {
    display: "flex",
    gap: "10px",
    marginLeft: "10px",
  },

  socialIcon: {
    width: "36px",
    height: "36px",
    border: "1px solid white",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    '&:hover': {
      background: "rgba(255, 255, 255, 0.1)",
    },
  },
};

export default Header;