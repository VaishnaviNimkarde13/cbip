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
      minWidth: "130px",
      padding: "0 20px",
      marginRight: "8px",
      fontWeight: 700,
      fontSize: "14px",
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
      px: 2,
      pt: 0.5,
      pb: 2,
    }}
  >
    <legend>
      <Typography sx={{ color: "#1565c0", fontWeight: 600, fontSize: "16px", px: 0.5 }}>
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
    <Box sx={{ background: "#f5f5f5", minHeight: "100vh", py: 3 }}>
      <Container maxWidth="lg">

        {/* ── TABS ── */}
        <Box sx={{ display: "flex", mb: 3, flexWrap: "wrap", gap: 1 }}>
          <TabButton label="Hydro Power"     active={activeTab === "hydro"}  onClick={() => navigate("/empanelment/hydro")} />
          <TabButton label="Water Resources" active={activeTab === "water"}  onClick={() => navigate("/empanelment/water")} />
          <TabButton label="Power Sector"    active={activeTab === "power"}  onClick={() => navigate("/empanelment/power")} />
        </Box>

        {/* ── MAIN CARD ── */}
        <Box sx={{ border: "1px solid #ccc", borderRadius: "4px", background: "#fff", p: "20px 24px 30px" }}>

          {/* ── TOP HEADER ── */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3, flexWrap: { xs: "wrap", md: "nowrap" }, gap: 2 }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box component="img" src={logo} alt="CBIP Logo" sx={{ width: 90, height: 90, objectFit: "contain", flexShrink: 0 }} />
              <Box>
                <Typography sx={{ fontWeight: 800, fontSize: { xs: "14px", md: "18px" }, color: "#1a237e", lineHeight: 1.3 }}>
                  CENTRAL BOARD OF IRRIGATION AND POWER
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#555", mt: 0.5 }}>
                  An ISO 9001 – 2015 Organisation
                </Typography>
              </Box>
            </Box>

            {/* Contact */}
            <Box sx={{ textAlign: "center", minWidth: "200px" }}>
              <Typography sx={{ fontWeight: 700, fontSize: "14px", lineHeight: 1.6 }}>
                Central Board of<br />Irrigation &amp; Power
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "#333", lineHeight: 1.7 }}>
                Malcha Marg, Chanakyapuri,<br />
                New Delhi 1100021<br />
                Phone no: 01126115984,26116567,24102437<br />
                E-mail: <Box component="a" href="mailto:cbip@cbip.org" sx={{ color: "#1565c0" }}>cbip@cbip.org</Box><br />
                Website: <Box component="a" href="http://www.cbip.org" target="_blank" sx={{ color: "#1565c0" }}>www.cbip.org</Box>
              </Typography>
            </Box>

            {/* Uploads */}
            <Box sx={{ minWidth: "180px" }}>
              <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 0.5 }}>Upload Passport Image</Typography>
              <input type="file" accept="image/*" onChange={(e) => setPassportImg(e.target.files[0])} style={{ marginBottom: "12px", display: "block" }} />
              <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 0.5 }}>Upload Resume</Typography>
              <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResumeFile(e.target.files[0])} style={{ marginBottom: "6px", display: "block" }} />
              <Typography sx={{ fontSize: "11px", color: "#666", mt: 0.5 }}>
                Passport Size Photograph must be maximum 20 kb
              </Typography>
            </Box>
          </Box>

          {/* ── TITLE ── */}
          <Typography sx={{ fontWeight: 700, fontSize: "18px", color: "#c0392b", mb: 3, borderBottom: "1px solid #e0e0e0", pb: 1 }}>
            Registration For Power Sector Specialists
          </Typography>

          {/* Eligibility */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: "13px", mb: 0.5 }}>
              <Box component="span" sx={{ color: "#1565c0", fontWeight: 700 }}>Eligibility Criteria</Box>
              {" "}- SE/DGM and above working in Govt or Pvt. Power utilities/institute/research organizations
            </Typography>
            <Typography sx={{ fontSize: "13px" }}>
              <Box component="span" sx={{ color: "#1565c0", fontWeight: 700 }}>Minimum Experience</Box>
              {" "}- 25 Years and Above
            </Typography>
          </Box>

          {/* ── PERSONAL DETAILS ── */}
          <FieldSection title="Personal Details">
            <Box sx={{ display: "flex", gap: 2, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
              <TextField label="Name of the Expert/Specialist *" size="small" fullWidth value={expertName} onChange={(e) => setExpertName(e.target.value)} />
              <TextField label="Date of Birth *" size="small" type="date" fullWidth value={dob} onChange={(e) => setDob(e.target.value)} InputLabelProps={{ shrink: true }} />
            </Box>
          </FieldSection>

          {/* ── CONTACT DETAILS ── */}
          <FieldSection title="Contact Details">
            <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
              <TextField label="E-Mail ID *" size="small" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField label="Office No *" size="small" fullWidth value={officeNo} onChange={(e) => setOfficeNo(e.target.value)} />
            </Box>
            <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
              <TextField label="Residence Land Line No" size="small" fullWidth value={residenceLandline} onChange={(e) => setResidenceLandline(e.target.value)} />
              <TextField label="Mobile No *" size="small" fullWidth value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} InputLabelProps={{ shrink: true }} />
            </Box>
            <TextField label="Postal Address For Communication *" size="small" fullWidth multiline rows={3} value={postalAddress} onChange={(e) => setPostalAddress(e.target.value)} />
          </FieldSection>

          {/* ── TECHNICAL QUALIFICATION ── */}
          <FieldSection title="Technical Qualification">
            <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
              <TextField label="Diploma" size="small" fullWidth value={diploma} onChange={(e) => setDiploma(e.target.value)} />
              <TextField label="Graduation" size="small" fullWidth value={graduation} onChange={(e) => setGraduation(e.target.value)} />
            </Box>
            <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
              <TextField label="Post Graduation" size="small" fullWidth value={postGraduation} onChange={(e) => setPostGraduation(e.target.value)} />
              <TextField label="Ph.D." size="small" fullWidth value={phd} onChange={(e) => setPhd(e.target.value)} />
            </Box>
            <TextField label="Any Other/Professional Qualification" size="small" sx={{ width: { xs: "100%", sm: "calc(50% - 8px)" } }} value={otherQualification} onChange={(e) => setOtherQualification(e.target.value)} />
          </FieldSection>

          {/* ── WORK EXPERIENCE ── */}
          <FieldSection title="Work Experience, starting from the current (Max 200 words for each post)">
            {workExp.map((row, i) => (
              <Box key={i} sx={{ display: "flex", gap: 1.5, mb: 1.5, flexWrap: { xs: "wrap", md: "nowrap" } }}>
                <TextField label="Designation" size="small" value={row.designation} onChange={(e) => handleWorkExpChange(i, "designation", e.target.value)} sx={{ flex: 2, minWidth: "120px" }} />
                <TextField label="Organization" size="small" value={row.organization} onChange={(e) => handleWorkExpChange(i, "organization", e.target.value)} sx={{ flex: 2, minWidth: "120px" }} />
                <TextField label="From" size="small" type="date" value={row.from} onChange={(e) => handleWorkExpChange(i, "from", e.target.value)} InputLabelProps={{ shrink: true }} sx={{ flex: 1, minWidth: "130px" }} />
                <TextField label="To" size="small" type="date" value={row.to} onChange={(e) => handleWorkExpChange(i, "to", e.target.value)} InputLabelProps={{ shrink: true }} sx={{ flex: 1, minWidth: "130px" }} />
                <TextField label="Job Responsibility" size="small" value={row.jobResp} onChange={(e) => handleWorkExpChange(i, "jobResp", e.target.value)} sx={{ flex: 3, minWidth: "140px" }} />
              </Box>
            ))}
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 1 }}>If Superannuated, last post held &amp; Organization</Typography>
              <TextField size="small" fullWidth value={superannuatedPost} onChange={(e) => setSuperannuatedPost(e.target.value)} />
            </Box>
          </FieldSection>

          {/* ── EXPERIENCE IN POWER SECTOR ── */}
          <FieldSection title="Experience in Power Sector">
            <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 0.3 }}>Domain Area of Expertise:</Typography>
            <Typography sx={{ fontSize: "12px", color: "#555", mb: 2 }}>
              Main Disciplines (Max 3 selections) with Sub-Disciplines (Max 5 selections)
            </Typography>

            <Box sx={{ display: "flex", gap: 4, flexWrap: { xs: "wrap", md: "nowrap" } }}>
              {/* Main Disciplines */}
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 1.5 }}>Main Disciplines</Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: 1 }}>
                  {mainDisciplinesList.map((d) => (
                    <FormControlLabel
                      key={d}
                      control={<Checkbox size="small" checked={selectedMainDisciplines.includes(d)} onChange={() => toggleMainDiscipline(d)} sx={{ p: 0.5 }} />}
                      label={<Typography sx={{ fontSize: "13px" }}>{d}</Typography>}
                      sx={{ m: 0, alignItems: "center" }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Sub-Disciplines */}
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 1.5 }}>Sub-Disciplines</Typography>
                <Box sx={{ border: "1px solid #bdbdbd", borderRadius: "4px", p: 1.5, minHeight: "220px", background: "#fafafa" }}>
                  {availableSubs.length === 0 ? (
                    <Typography sx={{ fontSize: "13px", color: "#999" }}>Select a Main Discipline to view Sub-Disciplines.</Typography>
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
              </Box>
            </Box>

            {/* OK Button */}
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: "13px", color: "#1565c0", mb: 1 }}>Click One by One &amp; Press OK</Typography>
              <Button variant="contained" onClick={handleOK}
                sx={{ backgroundColor: "#1565c0", color: "#fff", fontWeight: 700, px: 3, py: 0.6, fontSize: "13px", "&:hover": { backgroundColor: "#0d47a1" } }}>
                OK
              </Button>
            </Box>

            {/* Confirmed Selections */}
            <Box sx={{ border: "1px solid #bdbdbd", borderRadius: "4px", p: 1.5, mt: 2, minHeight: "120px", maxWidth: "420px", background: "#fafafa" }}>
              {confirmedSelections.length === 0 ? (
                <Typography sx={{ fontSize: "13px", color: "#999" }}>No selections confirmed yet.</Typography>
              ) : (
                confirmedSelections.map((s, i) => (
                  <Typography key={i} sx={{ fontSize: "13px", lineHeight: 1.8 }}>{s}</Typography>
                ))
              )}
            </Box>
          </FieldSection>

          {/* ── OTHER ACHIEVEMENTS ── */}
          <FieldSection title="Other Achievements/Highlights">
            <Box sx={{ display: "flex", gap: 3, mb: 3, flexWrap: { xs: "wrap", sm: "nowrap" }, alignItems: "flex-start" }}>
              <Typography sx={{ fontWeight: 700, fontSize: "13px", minWidth: "260px", lineHeight: 1.6 }}>
                Outstanding Professional Achievements/Awards/Rewards Won (Maximum 200 Words)
              </Typography>
              <TextField multiline rows={3} fullWidth size="small" value={achievements}
                onChange={(e) => {
                  const words = e.target.value.trim().split(/\s+/).filter(Boolean);
                  if (words.length <= 200) setAchievements(e.target.value);
                }}
              />
            </Box>

            <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 1.5 }}>Consultancy Projects Executed:</Typography>
            {consultancyProjects.map((row, i) => (
              <Box key={i} sx={{ display: "flex", gap: 2, mb: 1.5, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
                <TextField label="Name Of the Project" size="small" fullWidth value={row.name} onChange={(e) => handleConsultancyChange(i, "name", e.target.value)} />
                <TextField label="Organization for which Executed" size="small" fullWidth value={row.organization} onChange={(e) => handleConsultancyChange(i, "organization", e.target.value)} />
                <TextField label="Year in which Executed" size="small" fullWidth value={row.year} onChange={(e) => handleConsultancyChange(i, "year", e.target.value)} />
              </Box>
            ))}
          </FieldSection>

          {/* ── HONORARY POST ── */}
          <FieldSection title="Honorary Post Held/Membership">
            <Box sx={{ display: "flex", gap: 2, mb: 1, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
              <Typography sx={{ flex: 1, fontWeight: 700, fontSize: "13px" }}>Post</Typography>
              <Typography sx={{ flex: 1, fontWeight: 700, fontSize: "13px" }}>Organization</Typography>
              <Typography sx={{ flex: 1, fontWeight: 700, fontSize: "13px" }}>From</Typography>
              <Typography sx={{ flex: 1, fontWeight: 700, fontSize: "13px" }}>To</Typography>
            </Box>

            {honoraryPosts.map((row, i) => (
              <Box key={i} sx={{ display: "flex", gap: 2, mb: 1.5, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
                <TextField size="small" fullWidth value={row.post} onChange={(e) => handleHonoraryChange(i, "post", e.target.value)} sx={{ flex: 1 }} />
                <TextField size="small" fullWidth value={row.organization} onChange={(e) => handleHonoraryChange(i, "organization", e.target.value)} sx={{ flex: 1 }} />
                <TextField size="small" type="date" fullWidth value={row.from} onChange={(e) => handleHonoraryChange(i, "from", e.target.value)} InputLabelProps={{ shrink: true }} sx={{ flex: 1 }} />
                <TextField size="small" type="date" fullWidth value={row.to} onChange={(e) => handleHonoraryChange(i, "to", e.target.value)} InputLabelProps={{ shrink: true }} sx={{ flex: 1 }} />
              </Box>
            ))}

            <Typography sx={{ fontWeight: 700, fontSize: "13px", mt: 2, mb: 1 }}>Membership of Professional Organizations:</Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
              {membershipOrgs.map((val, i) => (
                <TextField key={i} size="small" fullWidth value={val} onChange={(e) => handleMembershipChange(i, e.target.value)} />
              ))}
            </Box>

            <Typography sx={{ fontWeight: 700, fontSize: "13px", mb: 1.5 }}>
              No of Papers Published in National &amp; International Journals and Conferences
            </Typography>
            <Box sx={{ display: "flex", gap: 4, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: "13px", mb: 0.5 }}>1. Nationals</Typography>
                <TextField size="small" fullWidth value={nationals} onChange={(e) => setNationals(e.target.value)} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: "13px", mb: 0.5 }}>2. Internationals</Typography>
                <TextField size="small" fullWidth value={internationals} onChange={(e) => setInternationals(e.target.value)} />
              </Box>
            </Box>
          </FieldSection>

          {/* ── AVAILABILITY AS FACULTY ── */}
          <FieldSection title="Availability as Faculty">
            <Typography sx={{ fontSize: "13px", mb: 1.5 }}>
              Your Availability as Faculty in the areas (i.e., in column 14) main disciplines
            </Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
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
            <Button variant="contained" onClick={handleSubmit}
              sx={{ backgroundColor: "#1565c0", color: "#fff", fontWeight: 700, px: 6, py: 1.2, fontSize: "15px", letterSpacing: 1, borderRadius: "4px", "&:hover": { backgroundColor: "#0d47a1" } }}>
              SUBMIT
            </Button>
          </Box>

          {/* ── INSTRUCTION ── */}
          <Typography sx={{ textAlign: "center", fontSize: "13px", mt: 1.5 }}>
            <Box component="span" sx={{ color: "#c0392b", fontWeight: 700 }}>Instruction : </Box>
            <Box component="span" sx={{ fontWeight: 700 }}>
              After you Submit your Form, Press CTRL+P and Save/Print the Form as Pdf Format
            </Box>
          </Typography>

        </Box>
      </Container>
    </Box>
  );
};

export default PowerResource;