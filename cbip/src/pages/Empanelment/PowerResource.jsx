import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Paper,
  Grid,
} from "@mui/material";

import logo from "../../assets/empanelment-logo.jpg";

// ─── TAB BUTTON ──────────────────────────────────────────────────────────────
const TabButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: "38px",
      minWidth: { xs: "100px", sm: "130px" },
      padding: "0 16px",
      marginRight: { xs: "4px", sm: "8px" },
      marginBottom: { xs: "4px", sm: "0" },
      fontWeight: 700,
      fontSize: { xs: "12px", sm: "14px" },
      borderRadius: "4px",
      cursor: "pointer",
      boxSizing: "border-box",
      border: "2px solid",
      borderColor: active ? "#c0392b" : "#1a5276",
      background: active ? "#fff" : "#1a5276",
      color: active ? "#c0392b" : "#fff",
      transition: "background 0.15s, color 0.15s",
      outline: "none",
      whiteSpace: "nowrap",
      flex: { xs: 1, sm: "none" },
    }}
  >
    {label}
  </button>
);

// ─── FIELDSET SECTION ────────────────────────────────────────────────────────
const FieldSection = ({ title, children }) => (
  <Box
    component="fieldset"
    sx={{
      border: "1px solid #90caf9",
      borderRadius: "4px",
      mb: 3,
      px: { xs: 1.5, sm: 2 },
      pt: 0.5,
      pb: 2,
    }}
  >
    <legend>
      <Typography sx={{ 
        color: "#1565c0", 
        fontWeight: 600, 
        fontSize: { xs: "14px", sm: "16px" }, 
        px: 0.5 
      }}>
        {title}
      </Typography>
    </legend>
    {children}
  </Box>
);

// ─── MAIN DISCIPLINES ────────────────────────────────────────────────────────
const mainDisciplinesData = {
  "Thermal Power Generation": ["Coal Based Power Plants", "Gas Based Power Plants", "Oil Based Power Plants", "Combined Cycle Plants", "Boiler & Turbine Maintenance"],
  "Nuclear Power Generation": ["Nuclear Reactor Design", "Nuclear Safety Systems", "Radiation Protection", "Nuclear Waste Management"],
  "Hydro Power Generation": ["Dam Design & Construction", "Turbine & Generator Systems", "Small Hydro Projects", "Pumped Storage", "Hydrology Studies"],
  Transmission: ["HVDC Transmission", "EHV AC Transmission", "Substation Design", "Protection & Control", "Right of Way"],
  Distribution: ["Urban Distribution", "Rural Electrification", "Smart Grid", "Loss Reduction", "Distribution Automation"],
  "Renewable Energy": ["Solar PV", "Wind Energy", "Biomass Energy", "Geothermal", "Energy Storage"],
  "Power System Operation": ["Load Dispatch", "Grid Management", "Frequency Control", "Voltage Regulation"],
  "Research & Development": ["Energy Efficiency", "New Technologies", "Policy Research", "Material Science"],
  Academics: ["Curriculum Development", "Research Publications", "Technical Training", "Faculty Development"],
  Regulatory: ["Tariff Regulation", "Licensing", "Compliance", "Dispute Resolution"],
  HR: ["Talent Acquisition", "Training & Development", "Performance Management", "IR & Labour Laws"],
  "Power Trading": ["Short Term Trading", "Long Term PPA", "Power Exchange", "Cross Border Trading"],
  Finance: ["Project Finance", "Regulatory Finance", "Tariff Determination", "Financial Modeling"],
  Training: ["Technical Training", "Management Training", "Safety Training", "Operator Training"],
};
const mainDisciplinesList = Object.keys(mainDisciplinesData);

// ─── POWER SECTOR PAGE ───────────────────────────────────────────────────────
const PowerResource = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Derive active tab from current URL path
  const getActiveTab = () => {
    if (location.pathname.includes("/water")) return "water";
    if (location.pathname.includes("/hydro")) return "hydro";
    return "power";
  };

  const activeTab = getActiveTab();

  // Personal Details
  const [expertName, setExpertName] = useState("");
  const [dob, setDob] = useState("");

  // Contact Details
  const [email, setEmail] = useState("");
  const [officeNo, setOfficeNo] = useState("");
  const [residenceLandline, setResidenceLandline] = useState("");
  const [mobileNo, setMobileNo] = useState("+91");
  const [postalAddress, setPostalAddress] = useState("");

  // Technical Qualification
  const [diploma, setDiploma] = useState("");
  const [graduation, setGraduation] = useState("");
  const [postGraduation, setPostGraduation] = useState("");
  const [phd, setPhd] = useState("");
  const [otherQualification, setOtherQualification] = useState("");

  // Work Experience (2 rows)
  const [workExp, setWorkExp] = useState([
    { designation: "", organization: "", from: "", to: "", jobResp: "" },
    { designation: "", organization: "", from: "", to: "", jobResp: "" },
  ]);
  const [superannuatedPost, setSuperannuatedPost] = useState("");

  // Experience in Power Sector (disciplines)
  const [selectedMainDisciplines, setSelectedMainDisciplines] = useState([]);
  const [selectedSubDisciplines, setSelectedSubDisciplines] = useState([]);
  const [confirmedSelections, setConfirmedSelections] = useState([]);

  // Other Achievements
  const [achievements, setAchievements] = useState("");
  const [consultancyProjects, setConsultancyProjects] = useState([
    { name: "", organization: "", year: "" },
    { name: "", organization: "", year: "" },
  ]);

  // Honorary Post
  const [honoraryPosts, setHonoraryPosts] = useState([
    { post: "", organization: "", from: "", to: "" },
    { post: "", organization: "", from: "", to: "" },
    { post: "", organization: "", from: "", to: "" },
  ]);
  const [membershipOrgs, setMembershipOrgs] = useState(["", "", ""]);
  const [nationals, setNationals] = useState("");
  const [internationals, setInternationals] = useState("");

  // Availability as Faculty
  const [facultyYes, setFacultyYes] = useState(false);
  const [facultyNo, setFacultyNo] = useState(true);

  // File uploads
  const [passportImg, setPassportImg] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  // ── Discipline handlers ──
  const toggleMainDiscipline = (d) => {
    setSelectedMainDisciplines((prev) => {
      if (prev.includes(d)) {
        setSelectedSubDisciplines((s) =>
          s.filter((sub) => !(mainDisciplinesData[d] || []).includes(sub))
        );
        return prev.filter((x) => x !== d);
      }
      if (prev.length >= 3) return prev;
      return [...prev, d];
    });
  };

  const toggleSubDiscipline = (sub) => {
    setSelectedSubDisciplines((prev) => {
      if (prev.includes(sub)) return prev.filter((s) => s !== sub);
      if (prev.length >= 5) return prev;
      return [...prev, sub];
    });
  };

  const availableSubs = selectedMainDisciplines.flatMap((d) => mainDisciplinesData[d] || []);

  const handleOK = () => {
    if (!selectedMainDisciplines.length) return;
    const summary = selectedMainDisciplines.map((d) => {
      const subs = selectedSubDisciplines.filter((s) => (mainDisciplinesData[d] || []).includes(s));
      return subs.length ? `${d}: ${subs.join(", ")}` : d;
    });
    setConfirmedSelections(summary);
  };

  const handleWorkExpChange = (i, field, val) => {
    const updated = [...workExp];
    updated[i] = { ...updated[i], [field]: val };
    setWorkExp(updated);
  };

  const handleConsultancyChange = (i, field, val) => {
    const updated = [...consultancyProjects];
    updated[i] = { ...updated[i], [field]: val };
    setConsultancyProjects(updated);
  };

  const handleHonoraryChange = (i, field, val) => {
    const updated = [...honoraryPosts];
    updated[i] = { ...updated[i], [field]: val };
    setHonoraryPosts(updated);
  };

  const handleMembershipChange = (i, val) => {
    const updated = [...membershipOrgs];
    updated[i] = val;
    setMembershipOrgs(updated);
  };

  const handleFacultyYes = () => { setFacultyYes(true); setFacultyNo(false); };
  const handleFacultyNo  = () => { setFacultyNo(true);  setFacultyYes(false); };

  const handleSubmit = () => alert("Form submitted successfully!");

  return (
    <Box sx={{ background: "#f5f5f5", minHeight: "100vh", py: { xs: 2, sm: 3 } }}>
      <Container maxWidth="lg">

        {/* ── TABS ── */}
        <Box sx={{ 
          display: "flex", 
          mb: { xs: 2, sm: 3 }, 
          flexWrap: "wrap", 
          gap: { xs: 0.5, sm: 1 },
          justifyContent: { xs: "center", sm: "flex-start" }
        }}>
          <TabButton label="Hydro Power"     active={activeTab === "hydro"}  onClick={() => navigate("/empanelment/hydro")} />
          <TabButton label="Water Resources" active={activeTab === "water"}  onClick={() => navigate("/empanelment/water")} />
          <TabButton label="Power Sector"    active={activeTab === "power"}  onClick={() => navigate("/empanelment/power")} />
        </Box>

        {/* ── MAIN CARD ── */}
        <Paper 
          elevation={3} 
          sx={{ 
            borderRadius: { xs: "8px", sm: "4px" }, 
            background: "#fff", 
            p: { xs: "16px", sm: "20px 24px 30px" },
            overflow: "hidden"
          }}
        >

          {/* ── TOP HEADER ── */}
          <Box sx={{ 
            display: "flex", 
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between", 
            alignItems: { xs: "center", md: "flex-start" }, 
            mb: 3, 
            gap: 3 
          }}>
            {/* Logo and Title */}
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
              textAlign: { xs: "center", sm: "left" }
            }}>
              <Box component="img" src={logo} alt="CBIP Logo" sx={{ 
                width: { xs: 70, sm: 90 }, 
                height: { xs: 70, sm: 90 }, 
                objectFit: "contain", 
                flexShrink: 0 
              }} />
              <Box>
                <Typography sx={{ 
                  fontWeight: 800, 
                  fontSize: { xs: "16px", sm: "18px", md: "20px" }, 
                  color: "#1a237e", 
                  lineHeight: 1.3 
                }}>
                  CENTRAL BOARD OF IRRIGATION AND POWER
                </Typography>
                <Typography sx={{ 
                  fontSize: { xs: "12px", sm: "13px" }, 
                  color: "#555", 
                  mt: 0.5 
                }}>
                  An ISO 9001 – 2015 Organisation
                </Typography>
              </Box>
            </Box>

            {/* Contact Info */}
            <Box sx={{ 
              textAlign: { xs: "center", md: "right" },
              minWidth: { md: "200px" }
            }}>
              <Typography sx={{ 
                fontWeight: 700, 
                fontSize: { xs: "13px", sm: "14px" }, 
                lineHeight: 1.6 
              }}>
                Central Board of<br />Irrigation &amp; Power
              </Typography>
              <Typography sx={{ 
                fontSize: { xs: "11px", sm: "12px" }, 
                color: "#333", 
                lineHeight: 1.7 
              }}>
                Malcha Marg, Chanakyapuri,<br />
                New Delhi 1100021<br />
                Phone no: 01126115984,26116567,24102437<br />
                E-mail: <Box component="a" href="mailto:cbip@cbip.org" sx={{ color: "#1565c0" }}>cbip@cbip.org</Box><br />
                Website: <Box component="a" href="http://www.cbip.org" target="_blank" sx={{ color: "#1565c0" }}>www.cbip.org</Box>
              </Typography>
            </Box>
          </Box>

          {/* Uploads Section - Separate for better mobile layout */}
          <Box sx={{ 
            display: "flex", 
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "stretch", sm: "center" },
            gap: 2,
            mb: 3,
            p: 2,
            bgcolor: "#f8f9fa",
            borderRadius: "4px"
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 0.5 }}>Upload Passport Image</Typography>
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => setPassportImg(e.target.files[0])} 
                style={{ 
                  fontSize: "12px",
                  width: "100%",
                  padding: "4px"
                }} 
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 0.5 }}>Upload Resume</Typography>
              <input 
                type="file" 
                accept=".pdf,.doc,.docx" 
                onChange={(e) => setResumeFile(e.target.files[0])} 
                style={{ 
                  fontSize: "12px",
                  width: "100%",
                  padding: "4px"
                }} 
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "11px", color: "#666" }}>
                Passport Size Photograph must be maximum 20 kb
              </Typography>
            </Box>
          </Box>

          {/* ── TITLE ── */}
          <Typography sx={{ 
            fontWeight: 700, 
            fontSize: { xs: "16px", sm: "18px" }, 
            color: "#c0392b", 
            mb: 3, 
            borderBottom: "1px solid #e0e0e0", 
            pb: 1 
          }}>
            Registration For Power Sector Specialists
          </Typography>

          {/* Eligibility */}
          <Box sx={{ 
            mb: 3, 
            p: 2, 
            bgcolor: "#e3f2fd", 
            borderRadius: "4px",
            fontSize: { xs: "12px", sm: "13px" }
          }}>
            <Typography sx={{ mb: 0.5 }}>
              <Box component="span" sx={{ color: "#1565c0", fontWeight: 700 }}>Eligibility Criteria</Box>
              {" "}- SE/DGM and above working in Govt or Pvt. Power utilities/institute/research organizations
            </Typography>
            <Typography>
              <Box component="span" sx={{ color: "#1565c0", fontWeight: 700 }}>Minimum Experience</Box>
              {" "}- 25 Years and Above
            </Typography>
          </Box>

          {/* ── PERSONAL DETAILS ── */}
          <FieldSection title="Personal Details">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Name of the Expert/Specialist *" 
                  size="small" 
                  fullWidth 
                  value={expertName} 
                  onChange={(e) => setExpertName(e.target.value)} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Date of Birth *" 
                  size="small" 
                  type="date" 
                  fullWidth 
                  value={dob} 
                  onChange={(e) => setDob(e.target.value)} 
                  InputLabelProps={{ shrink: true }} 
                />
              </Grid>
            </Grid>
          </FieldSection>

          {/* ── CONTACT DETAILS ── */}
          <FieldSection title="Contact Details">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="E-Mail ID *" 
                  size="small" 
                  fullWidth 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Office No *" 
                  size="small" 
                  fullWidth 
                  value={officeNo} 
                  onChange={(e) => setOfficeNo(e.target.value)} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Residence Land Line No" 
                  size="small" 
                  fullWidth 
                  value={residenceLandline} 
                  onChange={(e) => setResidenceLandline(e.target.value)} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Mobile No *" 
                  size="small" 
                  fullWidth 
                  value={mobileNo} 
                  onChange={(e) => setMobileNo(e.target.value)} 
                  InputLabelProps={{ shrink: true }} 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  label="Postal Address For Communication *" 
                  size="small" 
                  fullWidth 
                  multiline 
                  rows={3} 
                  value={postalAddress} 
                  onChange={(e) => setPostalAddress(e.target.value)} 
                />
              </Grid>
            </Grid>
          </FieldSection>

          {/* ── TECHNICAL QUALIFICATION ── */}
          <FieldSection title="Technical Qualification">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Diploma" 
                  size="small" 
                  fullWidth 
                  value={diploma} 
                  onChange={(e) => setDiploma(e.target.value)} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Graduation" 
                  size="small" 
                  fullWidth 
                  value={graduation} 
                  onChange={(e) => setGraduation(e.target.value)} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Post Graduation" 
                  size="small" 
                  fullWidth 
                  value={postGraduation} 
                  onChange={(e) => setPostGraduation(e.target.value)} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Ph.D." 
                  size="small" 
                  fullWidth 
                  value={phd} 
                  onChange={(e) => setPhd(e.target.value)} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  label="Any Other/Professional Qualification" 
                  size="small" 
                  fullWidth 
                  value={otherQualification} 
                  onChange={(e) => setOtherQualification(e.target.value)} 
                />
              </Grid>
            </Grid>
          </FieldSection>

          {/* ── WORK EXPERIENCE ── */}
          <FieldSection title="Work Experience, starting from the current (Max 200 words for each post)">
            {workExp.map((row, i) => (
              <Paper 
                key={i} 
                elevation={1} 
                sx={{ 
                  p: { xs: 1.5, sm: 1 }, 
                  mb: 2,
                  backgroundColor: "#fafafa"
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: { xs: "block", sm: "none" } }}>
                  Experience {i + 1}
                </Typography>
                <Grid container spacing={1.5}>
                  <Grid item xs={12} sm={6} md={2.4}>
                    <TextField 
                      label="Designation" 
                      size="small" 
                      fullWidth
                      value={row.designation} 
                      onChange={(e) => handleWorkExpChange(i, "designation", e.target.value)} 
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={2.4}>
                    <TextField 
                      label="Organization" 
                      size="small" 
                      fullWidth
                      value={row.organization} 
                      onChange={(e) => handleWorkExpChange(i, "organization", e.target.value)} 
                    />
                  </Grid>
                  <Grid item xs={6} sm={3} md={1.8}>
                    <TextField 
                      label="From" 
                      size="small" 
                      type="date" 
                      fullWidth
                      value={row.from} 
                      onChange={(e) => handleWorkExpChange(i, "from", e.target.value)} 
                      InputLabelProps={{ shrink: true }} 
                    />
                  </Grid>
                  <Grid item xs={6} sm={3} md={1.8}>
                    <TextField 
                      label="To" 
                      size="small" 
                      type="date" 
                      fullWidth
                      value={row.to} 
                      onChange={(e) => handleWorkExpChange(i, "to", e.target.value)} 
                      InputLabelProps={{ shrink: true }} 
                    />
                  </Grid>
                  <Grid item xs={12} md={3.6}>
                    <TextField 
                      label="Job Responsibility" 
                      size="small" 
                      fullWidth
                      value={row.jobResp} 
                      onChange={(e) => handleWorkExpChange(i, "jobResp", e.target.value)} 
                    />
                  </Grid>
                </Grid>
              </Paper>
            ))}
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 1 }}>
                If Superannuated, last post held &amp; Organization
              </Typography>
              <TextField 
                size="small" 
                fullWidth 
                value={superannuatedPost} 
                onChange={(e) => setSuperannuatedPost(e.target.value)} 
              />
            </Box>
          </FieldSection>

          {/* ── EXPERIENCE IN POWER SECTOR ── */}
          <FieldSection title="Experience in Power Sector">
            <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 0.3 }}>Domain Area of Expertise:</Typography>
            <Typography sx={{ fontSize: "12px", color: "#555", mb: 2 }}>
              Main Disciplines (Max 3 selections) with Sub-Disciplines (Max 5 selections)
            </Typography>

            <Grid container spacing={3}>
              {/* Main Disciplines */}
              <Grid item xs={12} md={6}>
                <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 1.5 }}>Main Disciplines</Typography>
                <Box sx={{ 
                  display: "grid", 
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 1,
                  maxHeight: { md: "400px" },
                  overflowY: { md: "auto" },
                  pr: { md: 1 }
                }}>
                  {mainDisciplinesList.map((d) => (
                    <FormControlLabel
                      key={d}
                      control={<Checkbox size="small" checked={selectedMainDisciplines.includes(d)} onChange={() => toggleMainDiscipline(d)} sx={{ p: 0.5 }} />}
                      label={<Typography sx={{ fontSize: "13px" }}>{d}</Typography>}
                      sx={{ m: 0, alignItems: "center" }}
                    />
                  ))}
                </Box>
              </Grid>

              {/* Sub-Disciplines */}
              <Grid item xs={12} md={6}>
                <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 1.5 }}>Sub-Disciplines</Typography>
                <Box sx={{ 
                  border: "1px solid #bdbdbd", 
                  borderRadius: "4px", 
                  p: 1.5, 
                  minHeight: { xs: "200px", md: "300px" }, 
                  maxHeight: { xs: "300px", md: "400px" },
                  overflowY: "auto",
                  background: "#fafafa" 
                }}>
                  {availableSubs.length === 0 ? (
                    <Typography sx={{ fontSize: "13px", color: "#999" }}>
                      Select a Main Discipline to view Sub-Disciplines.
                    </Typography>
                  ) : (
                    availableSubs.map((sub) => (
                      <FormControlLabel
                        key={sub}
                        control={<Checkbox size="small" checked={selectedSubDisciplines.includes(sub)} onChange={() => toggleSubDiscipline(sub)} sx={{ p: 0.5 }} />}
                        label={<Typography sx={{ fontSize: "13px" }}>{sub}</Typography>}
                        sx={{ m: 0, display: "flex", alignItems: "center", mb: 0.5 }}
                      />
                    ))
                  )}
                </Box>
              </Grid>
            </Grid>

            {/* OK Button */}
            <Box sx={{ 
              mt: 2, 
              display: "flex", 
              flexDirection: { xs: "column", sm: "row" }, 
              alignItems: { xs: "stretch", sm: "center" }, 
              gap: 2 
            }}>
              <Typography sx={{ fontSize: "13px", color: "#1565c0" }}>Click One by One &amp; Press OK</Typography>
              <Button 
                variant="contained" 
                onClick={handleOK}
                sx={{ 
                  backgroundColor: "#1565c0", 
                  color: "#fff", 
                  fontWeight: 700, 
                  px: 3, 
                  py: 0.6, 
                  fontSize: "13px",
                  width: { xs: "100%", sm: "auto" },
                  "&:hover": { 
                    backgroundColor: "#0d47a1" 
                  }
                }}>
                OK
              </Button>
            </Box>

            {/* Confirmed Selections */}
            <Box sx={{ 
              border: "1px solid #bdbdbd", 
              borderRadius: "4px", 
              p: 1.5, 
              mt: 2, 
              minHeight: "120px", 
              maxHeight: "200px",
              overflowY: "auto",
              background: "#fafafa" 
            }}>
              {confirmedSelections.length === 0 ? (
                <Typography sx={{ fontSize: "13px", color: "#999" }}>No selections confirmed yet.</Typography>
              ) : (
                confirmedSelections.map((s, i) => (
                  <Typography key={i} sx={{ fontSize: "13px", lineHeight: 1.8 }}>• {s}</Typography>
                ))
              )}
            </Box>
          </FieldSection>

          {/* ── OTHER ACHIEVEMENTS ── */}
          <FieldSection title="Other Achievements/Highlights">
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 1 }}>
                Outstanding Professional Achievements/Awards/Rewards Won (Maximum 200 Words)
              </Typography>
              <TextField 
                multiline 
                rows={4} 
                fullWidth 
                size="small" 
                value={achievements}
                onChange={(e) => {
                  const words = e.target.value.trim().split(/\s+/).filter(Boolean);
                  if (words.length <= 200) setAchievements(e.target.value);
                }}
              />
            </Box>

            <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 1.5 }}>Consultancy Projects Executed:</Typography>
            {consultancyProjects.map((row, i) => (
              <Paper 
                key={i} 
                elevation={1} 
                sx={{ 
                  p: { xs: 1.5, sm: 1 }, 
                  mb: 2,
                  backgroundColor: "#fafafa"
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: { xs: "block", sm: "none" } }}>
                  Project {i + 1}
                </Typography>
                <Grid container spacing={1.5}>
                  <Grid item xs={12} md={4}>
                    <TextField 
                      label="Name Of the Project" 
                      size="small" 
                      fullWidth 
                      value={row.name} 
                      onChange={(e) => handleConsultancyChange(i, "name", e.target.value)} 
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField 
                      label="Organization for which Executed" 
                      size="small" 
                      fullWidth 
                      value={row.organization} 
                      onChange={(e) => handleConsultancyChange(i, "organization", e.target.value)} 
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField 
                      label="Year in which Executed" 
                      size="small" 
                      fullWidth 
                      value={row.year} 
                      onChange={(e) => handleConsultancyChange(i, "year", e.target.value)} 
                    />
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </FieldSection>

          {/* ── HONORARY POST ── */}
          <FieldSection title="Honorary Post Held/Membership">
            {/* Header - Hidden on mobile */}
            <Box sx={{ 
              display: { xs: "none", md: "flex" }, 
              gap: 2, 
              mb: 1 
            }}>
              <Typography sx={{ flex: 1, fontWeight: 700, fontSize: "13px" }}>Post</Typography>
              <Typography sx={{ flex: 1, fontWeight: 700, fontSize: "13px" }}>Organization</Typography>
              <Typography sx={{ flex: 1, fontWeight: 700, fontSize: "13px" }}>From</Typography>
              <Typography sx={{ flex: 1, fontWeight: 700, fontSize: "13px" }}>To</Typography>
            </Box>

            {honoraryPosts.map((row, i) => (
              <Paper 
                key={i} 
                elevation={1} 
                sx={{ 
                  p: { xs: 1.5, sm: 1 }, 
                  mb: 2,
                  backgroundColor: "#fafafa"
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 600, mb: 1, display: { xs: "block", md: "none" } }}>
                  Honorary Post {i + 1}
                </Typography>
                <Grid container spacing={1.5}>
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField 
                      label="Post" 
                      size="small" 
                      fullWidth 
                      value={row.post} 
                      onChange={(e) => handleHonoraryChange(i, "post", e.target.value)} 
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <TextField 
                      label="Organization" 
                      size="small" 
                      fullWidth 
                      value={row.organization} 
                      onChange={(e) => handleHonoraryChange(i, "organization", e.target.value)} 
                    />
                  </Grid>
                  <Grid item xs={6} sm={3} md={3}>
                    <TextField 
                      label="From" 
                      size="small" 
                      type="date" 
                      fullWidth 
                      value={row.from} 
                      onChange={(e) => handleHonoraryChange(i, "from", e.target.value)} 
                      InputLabelProps={{ shrink: true }} 
                    />
                  </Grid>
                  <Grid item xs={6} sm={3} md={3}>
                    <TextField 
                      label="To" 
                      size="small" 
                      type="date" 
                      fullWidth 
                      value={row.to} 
                      onChange={(e) => handleHonoraryChange(i, "to", e.target.value)} 
                      InputLabelProps={{ shrink: true }} 
                    />
                  </Grid>
                </Grid>
              </Paper>
            ))}

            <Typography sx={{ fontWeight: 700, fontSize: "13px", mt: 2, mb: 1 }}>
              Membership of Professional Organizations:
            </Typography>
            <Grid container spacing={1.5} sx={{ mb: 3 }}>
              {membershipOrgs.map((val, i) => (
                <Grid item xs={12} sm={4} key={i}>
                  <TextField 
                    label={`Organization ${i + 1}`}
                    size="small" 
                    fullWidth 
                    value={val} 
                    onChange={(e) => handleMembershipChange(i, e.target.value)} 
                  />
                </Grid>
              ))}
            </Grid>

            <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 1.5 }}>
              No of Papers Published in National &amp; International Journals and Conferences
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontSize: "13px", mb: 0.5 }}>1. Nationals</Typography>
                <TextField 
                  size="small" 
                  fullWidth 
                  value={nationals} 
                  onChange={(e) => setNationals(e.target.value)} 
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontSize: "13px", mb: 0.5 }}>2. Internationals</Typography>
                <TextField 
                  size="small" 
                  fullWidth 
                  value={internationals} 
                  onChange={(e) => setInternationals(e.target.value)} 
                  type="number"
                />
              </Grid>
            </Grid>
          </FieldSection>

          {/* ── AVAILABILITY AS FACULTY ── */}
          <FieldSection title="Availability as Faculty">
            <Typography sx={{ fontSize: "13px", mb: 1.5 }}>
              Your Availability as Faculty in the areas (i.e., in column 14) main disciplines
            </Typography>
            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              <FormControlLabel
                control={<Checkbox size="small" checked={facultyYes} onChange={handleFacultyYes} sx={{ p: 0.5 }} />}
                label={<Typography sx={{ fontSize: "13px", fontWeight: 600 }}>YES</Typography>}
                sx={{ m: 0 }}
              />
              <FormControlLabel
                control={<Checkbox size="small" checked={facultyNo} onChange={handleFacultyNo} sx={{ p: 0.5 }} />}
                label={<Typography sx={{ fontSize: "13px", fontWeight: 600 }}>NO</Typography>}
                sx={{ m: 0 }}
              />
            </Box>
          </FieldSection>

          {/* ── SUBMIT ── */}
          <Box sx={{ textAlign: "center", mt: 2, mb: 1 }}>
            <Button 
              variant="contained" 
              onClick={handleSubmit}
              sx={{ 
                backgroundColor: "#1565c0", 
                color: "#fff", 
                fontWeight: 700, 
                px: { xs: 4, sm: 6 }, 
                py: { xs: 1, sm: 1.2 }, 
                fontSize: { xs: "14px", sm: "15px" }, 
                letterSpacing: 1, 
                borderRadius: "4px",
                width: { xs: "100%", sm: "auto" },
                "&:hover": { 
                  backgroundColor: "#0d47a1" 
                }
              }}>
              SUBMIT
            </Button>
          </Box>

          {/* ── INSTRUCTION ── */}
          <Typography sx={{ 
            textAlign: "center", 
            fontSize: { xs: "12px", sm: "13px" }, 
            mt: 1.5,
            p: 1.5,
            bgcolor: "#fff3cd",
            border: "1px solid #ffeeba",
            borderRadius: "4px"
          }}>
            <Box component="span" sx={{ color: "#c0392b", fontWeight: 700 }}>Instruction : </Box>
            <Box component="span" sx={{ fontWeight: 700 }}>
              After you Submit your Form, Press CTRL+P and Save/Print the Form as Pdf Format
            </Box>
          </Typography>

        </Paper>
      </Container>
    </Box>
  );
};

export default PowerResource;