import React, { useState, useEffect } from "react"; // Added useEffect
import {
  Button,
  Menu,
  MenuItem,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link, useLocation } from "react-router-dom"; // Added useLocation

import pdf from "../assets/pdf/ExecutiveCommittee.pdf";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  
  // Get current location for active state
  const location = useLocation();
  const currentPath = location.pathname;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Auto-open mobile menu if current path matches any submenu
  useEffect(() => {
    const newOpenMenus = {};
    menuItems.forEach((item, index) => {
      if (item.submenu) {
        const hasActiveSubmenu = item.submenu.some(
          subItem => !subItem.isPdf && subItem.path === currentPath
        );
        if (hasActiveSubmenu) {
          newOpenMenus[index] = true;
        }
      }
    });
    setMobileOpenMenus(newOpenMenus);
  }, [currentPath]);

  const handleMouseEnter = (event, index) => {
    setAnchorEl(event.currentTarget);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setActiveIndex(null);
  };

  // const toggleDrawer = (open) => (event) => {
  //   setDrawerOpen(open);
  // };


  const toggleDrawer = (open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }
  setDrawerOpen(open);
};
  const toggleMobileMenu = (index) => {
    setMobileOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Check if a menu item is active
  const isActive = (path, isPdf) => {
    if (isPdf) return false; // PDF links don't have active state
    return path === currentPath;
  };

  // Check if any submenu item is active
  const isSubmenuActive = (submenu) => {
    return submenu?.some(item => !item.isPdf && item.path === currentPath);
  };

  const menuItems = [
    { label: "HOME", path: "/" },
    {
      label: "ABOUT US",
      submenu: [
        { label: "History", path: "/history" },
        { label: "Activities", path: "/activities" },
        { 
          label: "Executive Committee", 
          path: "/executive-committee",
        
        },
        { label: "Office Bearers", path: "/office-bearers" },
      ],
    },
    { 
      label: "MEMBERSHIP", 
      submenu: [
        { label: "Benefits", path: "/benefits" },
        { label: "Category and Fee", path: "/category-fee" }
      ] 
    },
    { 
      label: "EVENT", 
      submenu: [
        { label: "Forthcoming Event", path: "/forthcoming-events" },
        { label: "Past Events", path: "/past-events" },
        { label: "Photo Gallery", path: "/photo-gallery" }
      ] 
    },
    { 
      label: "LIBRARY", 
      submenu: [
        { label: "Publication", path: "/library/publication" },
        { label: "Member Login", path: "/library/member-login" }
      ] 
    },
    { label: "CONSULTANCY", path: "/consultancy" },
    {
      label: "EMPANELMENT",
      submenu: [
        { label: "Hydro Resource", path: "/empanelment/hydro" },
        { label: "Power Resource", path: "/empanelment/power" },
        { label: "Water Resource", path: "/empanelment/water" }
      ],
    },
    { label: "CBIP-COE", path: "/cbip-coe" },
  ];

  const handleMenuItemClick = (item) => {
    if (item.isPdf) {
      window.open(item.path, '_blank', 'noopener,noreferrer');
    } else if (item.path) {
      // Use Link component for navigation, but we need to close drawer
      // The actual navigation will be handled by Link
    }
    setDrawerOpen(false);
  };

  // Mobile Drawer Content
  const drawerContent = (
    <Box sx={{ width: 300, bgcolor: "#ffffff", height: "100%" }}>
      {/* Logo Section */}
      <Box sx={{ p: 3, pb: 2, display: "flex", justifyContent: "center" }}>
        <img
          src={logo}
          alt="CBIP Logo"
          style={{
            height: "80px",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Box>

      <Divider sx={{ borderColor: "#e0e0e0", mb: 2 }} />

      {/* Close Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, mb: 1 }}>
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{
            color: "#666",
            p: 0.5,
            "&:hover": {
              bgcolor: "#f5f5f5",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Items */}
      <List sx={{ px: 2 }}>
        {menuItems.map((item, index) => {
          const hasActiveSubmenu = isSubmenuActive(item.submenu);
          const isItemActive = !item.submenu && isActive(item.path, item.isPdf);
          
          return (
            <Box key={index}>
              <ListItem disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={!item.submenu && !item.isPdf ? Link : 'div'}
                  to={!item.submenu && !item.isPdf ? item.path : undefined}
                  onClick={() => {
                    if (item.submenu) {
                      toggleMobileMenu(index);
                    } else {
                      handleMenuItemClick(item);
                    }
                  }}
                  sx={{
                    borderRadius: "4px",
                    py: 1,
                    px: 2,
                    backgroundColor: isItemActive || hasActiveSubmenu ? '#3a3a3a' : 'transparent',
                    color: isItemActive || hasActiveSubmenu ? '#c6ff00' : '#333',
                    "&:hover": {
                      bgcolor: isItemActive || hasActiveSubmenu ? '#3a3a3a' : '#f0f0f0',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: {
                        fontWeight: 600,
                        fontSize: "16px",
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      },
                    }}
                  />
                  {item.submenu &&
                    (mobileOpenMenus[index] ? (
                      <ExpandLess sx={{ color: "#666", fontSize: "20px" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#666", fontSize: "20px" }} />
                    ))}
                </ListItemButton>
              </ListItem>

              {item.submenu && (
                <Collapse
                  in={mobileOpenMenus[index]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding sx={{ pl: 2 }}>
                    {item.submenu.map((subItem, i) => {
                      const isSubItemActive = isActive(subItem.path, subItem.isPdf);
                      
                      return (
                        <ListItemButton
                          key={i}
                          component={!subItem.isPdf ? Link : 'a'}
                          to={!subItem.isPdf ? subItem.path : undefined}
                          href={subItem.isPdf ? subItem.path : undefined}
                          target={subItem.isPdf ? "_blank" : undefined}
                          rel={subItem.isPdf ? "noopener noreferrer" : undefined}
                          onClick={() => setDrawerOpen(false)}
                          sx={{
                            pl: 3,
                            py: 0.75,
                            borderRadius: "4px",
                            backgroundColor: isSubItemActive ? '#3a3a3a' : 'transparent',
                            color: isSubItemActive ? '#c6ff00' : '#555',
                            "&:hover": {
                              bgcolor: isSubItemActive ? '#3a3a3a' : '#f0f0f0',
                            },
                          }}
                        >
                          <ListItemText
                            primary={subItem.label}
                            primaryTypographyProps={{
                              sx: {
                                fontSize: "15px",
                                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                              },
                            }}
                          />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ py: isMobile ? 1 : 2 }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1400px !important",
          margin: "0 auto !important",
          px: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "row", md: "row" },
            gap: { xs: 2, md: 0 },
          }}
        >
          {/* Logo */}
          <Box>
            <img
              src={logo}
              alt="logo"
              style={{ height: isMobile ? "70px" : "90px", maxWidth: "100%" }}
            />
          </Box>

          {/* Desktop Navbar */}
          {!isMobile && (
            <Box
              sx={{
                background: "#3a3a3a",
                borderRadius: "15px",
                padding: "8px 15px",
                display: "flex",
                gap: "5px",
                alignItems: "center",
                flexWrap: { xs: "wrap", md: "nowrap" },
                justifyContent: "center",
                width: { xs: "100%", md: "auto" },
              }}
              onMouseLeave={handleMouseLeave}
            >
              {menuItems.map((item, index) => {
                const hasActiveSubmenu = isSubmenuActive(item.submenu);
                const isItemActive = !item.submenu && isActive(item.path, item.isPdf);
                
                return (
                  <Box key={index}>
                    {item.submenu ? (
                      // With submenu
                      <Button
                        onMouseEnter={(e) => handleMouseEnter(e, index)}
                        endIcon={<ExpandMoreIcon />}
                        sx={{
                          color: isItemActive || hasActiveSubmenu ? '#c6ff00' : 'white',
                          fontSize: { xs: "13px", md: "14px" },
                          fontWeight: 600,
                          padding: { xs: "6px 8px", md: "8px 10px" },
                          borderRadius: "8px",
                          textTransform: "none",
                          whiteSpace: "nowrap",
                          "&:hover": {
                            color: "#c6ff00",
                            background: "transparent",
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    ) : (
                      // Without submenu
                      <Button
                        component={item.isPdf ? "a" : Link}
                        to={!item.isPdf ? item.path : undefined}
                        href={item.isPdf ? item.path : undefined}
                        target={item.isPdf ? "_blank" : undefined}
                        rel={item.isPdf ? "noopener noreferrer" : undefined}
                        sx={{
                          color: isItemActive ? '#c6ff00' : 'white',
                          fontSize: { xs: "13px", md: "14px" },
                          fontWeight: 600,
                          padding: { xs: "6px 8px", md: "8px 10px" },
                          borderRadius: "8px",
                          textTransform: "none",
                          whiteSpace: "nowrap",
                          "&:hover": {
                            color: "#c6ff00",
                            background: "transparent",
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    )}

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
                            borderRadius: "0px",
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
                        {item.submenu.map((subItem, i) => {
                          const isSubItemActive = isActive(subItem.path, subItem.isPdf);
                          
                          return (
                            <MenuItem
                              key={i}
                              component={subItem.isPdf ? "a" : Link}
                              to={!subItem.isPdf ? subItem.path : undefined}
                              href={subItem.isPdf ? subItem.path : undefined}
                              target={subItem.isPdf ? "_blank" : undefined}
                              rel={subItem.isPdf ? "noopener noreferrer" : undefined}
                              onClick={handleMouseLeave}
                              sx={{
                                fontSize: "15px",
                                padding: "12px 18px",
                                color: isSubItemActive ? '#c6ff00' : 'white',
                                borderBottom: i !== item.submenu.length - 1
                                  ? "1px solid rgba(255,255,255,0.15)"
                                  : "none",
                                "&:hover": {
                                  background: "#3a3a3a",
                                  color: "#c6ff00",
                                },
                              }}
                            >
                              {subItem.label}
                            </MenuItem>
                          );
                        })}
                      </Menu>
                    )}
                  </Box>
                );
              })}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={toggleDrawer(true)}
              sx={{
                bgcolor: "#3a3a3a",
                color: "white",
                borderRadius: "5px",
                "&:hover": {
                  bgcolor: "#4a4a4a",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            bgcolor: "#ffffff",
            width: 300,
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Navbar;