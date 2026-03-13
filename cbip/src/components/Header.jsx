import React from "react";
import {
  Box,
  Container,
  useTheme,
  useMediaQuery,
  IconButton,
  Stack,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={styles.header}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 2, md: 1 },
            py: 1,
          }}
        >
          {/* Contact Info */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 3 }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            width={{ xs: "100%", md: "auto" }}
          >
            <Box sx={styles.contactItem}>
              <PhoneIcon sx={styles.icon} />
              <span>+91-11-2611 6347</span>
            </Box>

            <Box sx={styles.contactItem}>
              <EmailIcon sx={styles.icon} />
              <a
                href="mailto:cbip@cbip.org"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                cbip@cbip.org
              </a>
            </Box>
          </Stack>

          {/* Right Section */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="center"
            width={{ xs: "100%", md: "auto" }}
          >
            {/* Buttons */}
            <Stack
              direction="row"
              spacing={1.5}
              flexWrap="wrap"
              justifyContent={{ xs: "flex-start", sm: "center" }}
            >
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
            </Stack>

            {/* Social Icons */}
            <Stack direction="row" spacing={1}>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={styles.socialIcon}
                size="small"
              >
                <XIcon fontSize="small" />
              </IconButton>

              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={styles.socialIcon}
                size="small"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>

              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={styles.socialIcon}
                size="small"
              >
                <FacebookIcon fontSize="small" />
              </IconButton>

              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={styles.socialIcon}
                size="small"
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
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
    fontSize: { xs: "14px", sm: "15px" },
  },

  icon: {
    fontSize: { xs: "16px", sm: "18px" },
  },

  button: {
    background: "#fff",
    color: "#333",
    padding: { xs: "5px 12px", sm: "6px 14px" },
    textDecoration: "none",
    borderRadius: "4px",
    fontSize: { xs: "12px", sm: "13px" },
    fontWeight: 600,
    "&:hover": {
      background: "#f1f1f1",
    },
  },

  socialIcon: {
    border: "1px solid white",
    borderRadius: "4px",
    color: "white",
    width: 30,
    height: 30,
  },
};

export default Header;
