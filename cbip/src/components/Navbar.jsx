

import React, { useState } from "react";
import { Button, Menu, MenuItem, Box, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (event, index) => {
    setAnchorEl(event.currentTarget);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setActiveIndex(null);
  };

  const menuItems = [
    { label: "HOME" },
    { label: "ABOUT US", submenu: ["History", "Activities", "Executive Committee", "Office Bearers"] },
    { label: "MEMBERSHIP", submenu: ["Benefits", "Category and Fee"] },
    { label: "EVENT", submenu: ["Forthcoming", "Past Events"] },
    { label: "LIBRARY", submenu: ["Publication", "Member Login"] },
    { label: "CONSULTANCY" },
    { label: "EMPANELMENT", submenu: ["Hydro Resource", "Power Resource", "Water Resource"] },
    { label: "CBIP-COE" },
  ];

  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box>
            <img
              src="https://cbipsite.cloudbin.in/wp-content/uploads/2025/02/logo-2-1.png"
              alt="logo"
              style={{ height: "90px" }}
            />
          </Box>

          {/* Navbar */}
          <Box
            sx={{
              background: "#3a3a3a",
              borderRadius: "15px",
              padding: "8px 15px",
              display: "flex",
              gap: "5px",
              alignItems: "center",
            }}
            onMouseLeave={handleMouseLeave}
          >
            {menuItems.map((item, index) => (
              <Box key={index}>
                <Button
                  onMouseEnter={(e) => item.submenu && handleMouseEnter(e, index)}
                  endIcon={item.submenu && <ExpandMoreIcon />}
                  sx={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: 600,
                    padding: "8px 10px",
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": {
                      color: "#c6ff00",
                      background: "transparent",
                    },
                  }}
                >
                  {item.label}
                </Button>

                {item.submenu && (
                  <Menu
                    anchorEl={anchorEl}
                    open={activeIndex === index}
                    onClose={handleMouseLeave}
                    MenuListProps={{
                      onMouseLeave: handleMouseLeave,
                    }}
                    anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                    transformOrigin={{ horizontal: "left", vertical: "top" }}
                    sx={{
                      "& .MuiPaper-root": {
                        background: "#3a3a3a",
                        color: "white",
                        borderRadius: "4px",
                        minWidth: "230px",
                        marginTop: "0px",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                      },
                      pointerEvents: "none",
                      "& .MuiList-root": {
                        pointerEvents: "auto",
                      },
                    }}
                  >
                    {item.submenu.map((subItem, i) => (
                      <MenuItem
                        key={i}
                        onClick={handleMouseLeave}
                        sx={{
                          fontSize: "15px",
                          padding: "12px 18px",
                          borderBottom:
                            i !== item.submenu.length - 1
                              ? "1px solid rgba(255,255,255,0.15)"
                              : "none",
                          "&:hover": {
                            background: "#3a3a3a",
                            color: "#c6ff00",
                          },
                        }}
                      >
                        {subItem}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
