import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
} from "@mui/material";

import logo from "../../assets/empanelment-logo.jpg";

// ─── TAB BUTTON ──────────────────────────────────────────────────────────────
const TabButton = ({ label, active, onClick }) => (
  <Button
    onClick={onClick}
    variant="outlined"
    sx={{
      textTransform: "none",
      fontWeight: 600,
      fontSize: "14px",
      borderRadius: "4px",
      px: 2.5,
      py: 0.8,
      mr: 1,
      ...(active
        ? {
            backgroundColor: "#fff",
            color: "#c0392b",
            border: "2px solid #c0392b",
            "&:hover": { backgroundColor: "#fdf2f2" },
          }
        : {
            backgroundColor: "#1a5276",
            color: "#fff",
            border: "2px solid #1a5276",
            "&:hover": { backgroundColor: "#154360" },
          }),
    }}
  >
    {label}
  </Button>
);

// ─── SECTION HEADER ──────────────────────────────────────────────────────────
const SectionHeader = ({ children }) => (
  <Box
    sx={{
      background: "linear-gradient(90deg, #2980b9, #5dade2)",
      color: "#fff",
      fontWeight: 700,
      fontSize: "15px",
      py: 1.2,
      px: 2,
      mb: 2,
      textAlign: "center",
    }}
  >
    {children}
  </Box>
);

// ─── WORK EXPERIENCE ROW ─────────────────────────────────────────────────────
const WorkExpRow = ({ index, data, onChange }) => (
  <Box
    sx={{
      display: "flex",
      gap: 1.5,
      mb: 1.5,
      flexWrap: { xs: "wrap", md: "nowrap" },
    }}
  >
    <TextField
      label="Designation"
      size="small"
      value={data.designation}
      onChange={(e) => onChange(index, "designation", e.target.value)}
      sx={{ flex: 2, minWidth: "130px" }}
    />
    <TextField
      label="Organization"
      size="small"
      value={data.organization}
      onChange={(e) => onChange(index, "organization", e.target.value)}
      sx={{ flex: 2, minWidth: "130px" }}
    />
    <TextField
      label="From"
      size="small"
      type="date"
      value={data.from}
      onChange={(e) => onChange(index, "from", e.target.value)}
      InputLabelProps={{ shrink: true }}
      sx={{ flex: 1, minWidth: "130px" }}
    />
    <TextField
      label="To"
      size="small"
      type="date"
      value={data.to}
      onChange={(e) => onChange(index, "to", e.target.value)}
      InputLabelProps={{ shrink: true }}
      sx={{ flex: 1, minWidth: "130px" }}
    />
    <TextField
      label="Job Responsibility"
      size="small"
      value={data.jobResp}
      onChange={(e) => onChange(index, "jobResp", e.target.value)}
      sx={{ flex: 3, minWidth: "150px" }}
    />
  </Box>
);

// ─── EXPERTISE ITEMS ─────────────────────────────────────────────────────────
const hydroExpertiseItems = [
  "Checking of healthiness of the power plant equipment viz Generator (Stator Winding & Core, Generator Guide Bearings, Thrust Bearings, Excitation System, Brakes & Jack Assembly, Records of Alignment, Balancing & Vibrations etc.)",
  "Turbine (Turbine Guide Bearings, Servo Motors, Operating Mechanism, Butterfly Valve/MIV etc.)",
  "Governor System",
  "Control and Protection System (Control & Protection Panels, Protection Schemes/Record of Protective Relay's functioning, Auto System etc.)",
  "Transformers (Power Transformers, Unit Auxiliary Transformers, Station Service Transformers etc.)",
  "Switchyard equipment (Circuit Breakers, CTs, PTs, LAs, Earth Switches, 132 /220 / 400 kV feeders equipment within switchyard area and safety aspects etc.)",
  "Checking of healthiness of Drainage and Dewatering System: (pumps, motors, pipe lines, valves)",
  "Checking of healthiness of Cooling Water System : (pumps, motors , pipe lines, valves)",
  "Checking of healthiness of D.C. Batteries & D.C Distribution Boards",
  "Checking of healthiness of Oil Pressure Units, pump, motors etc.",
  "Checking of healthiness of HP & LP Compressors",
  "Checking of healthiness of Air condition Units",
  "Checking of healthiness of D.G. Sets etc.",
  "Check the Earthing system of Power House, Switchyard Area and power plant equipment.",
  "Civil Structures: water conductor system (Dam, Power House and Allied Structures)",
  "Hydro mechanical equipments: Gates (Intake, Draft Tube), hoists (Mechanical & Hydraulic) etc.",
  "Fire safety equipment and adoption of mandatory CEA Regulations:",
  "Reviewing of standard Operating Procedures (SOP) of important auxiliaries and suggestions for its improvement.",
  "Inspection of storage of spares and upkeep of the power station.",
  "Checking the preservation of records in paper or electronic format, concerning the operation and maintenance of a Generating Assets, Viz History sheet of each equipment, Relay testing Records, machine wise annual and major maintenance record, Daily/weekly, quarterly, half yearly,& yearly maintenance records specifications, warranties and logbooks, O & M Manual, Safety Manual, Store Manual etc.",
  "Checking record of any modification to a drawing/document and the original drawing/document, the modified entry, the date of the modification, the person who made or authorized the modification, and the reasons for the modification",
  "Checking/Review of the audits conducted by the third party such as Labour Inspector, Fire Inspector, Energy Auditor or other technical audits, if any, for ensuring compliance.",
  "Conducting technical evaluation for loss of generation, loss of revenue, accident etc.",
];

const waterExpertiseItems = [
  "Planning and design of irrigation projects (canals, dams, barrages)",
  "Construction and maintenance of water distribution systems",
  "Flood management and drainage systems",
  "Water quality monitoring and treatment",
  "Groundwater assessment and management",
  "Hydrology and water resources assessment",
  "Environmental impact assessment for water projects",
  "Dam safety inspection and rehabilitation",
  "River basin management",
  "Watershed management and conservation",
];

const powerExpertiseItems = [
  "Thermal Power Plant Operation & Maintenance",
  "Electrical transmission and distribution systems",
  "Renewable energy systems (Solar, Wind)",
  "Power system protection and control",
  "Energy audit and conservation",
  "Load dispatch and grid management",
  "Substation design and maintenance",
  "Power quality monitoring",
  "Smart grid technologies",
  "Electrical safety and compliance",
];

// ─── FORM CONTENT ─────────────────────────────────────────────────────────────
const FormContent = ({ tab }) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    mobile: "",
    postalAddress: "",
    lastRetiredAs: "",
    dateOfRetirement: "",
    seriousHealthCondition: "",
    willingToTravel: "",
  });

  const [workExp, setWorkExp] = useState([
    { designation: "", organization: "", from: "", to: "", jobResp: "" },
    { designation: "", organization: "", from: "", to: "", jobResp: "" },
    { designation: "", organization: "", from: "", to: "", jobResp: "" },
    { designation: "", organization: "", from: "", to: "", jobResp: "" },
  ]);

  const [expertise, setExpertise] = useState({});
  const [experienceTechnical, setExperienceTechnical] = useState("");
  const [experienceSafety, setExperienceSafety] = useState("");
  const [experienceOM, setExperienceOM] = useState("");
  const [cvFile, setCvFile] = useState(null);

  const expertiseItems =
    tab === "hydro"
      ? hydroExpertiseItems
      : tab === "water"
      ? waterExpertiseItems
      : powerExpertiseItems;

  const handleFieldChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleWorkExpChange = (index, field, value) => {
    const updated = [...workExp];
    updated[index] = { ...updated[index], [field]: value };
    setWorkExp(updated);
  };

  const handleExpertiseChange = (index) =>
    setExpertise((prev) => ({ ...prev, [index]: !prev[index] }));

  const handleSubmit = () => alert("Form submitted successfully!");

  const tabTitles = {
    hydro: "HYDRO POWER",
    water: "WATER RESOURCES",
    power: "POWER SECTOR",
  };

  const experienceLabel =
    tab === "hydro"
      ? "Experience in O&M / Planning, Designing / Construction of Hydro Power Stations:"
      : tab === "water"
      ? "Experience in O&M / Planning, Designing / Construction of Water Resources Projects:"
      : "Experience in O&M / Planning, Designing / Construction of Power Sector Projects:";

  return (
    <Box sx={{ border: "1px solid #ccc", borderRadius: "4px", overflow: "hidden", background: "#fff" }}>

      {/* ── HEADER ── */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: "16px 24px", borderBottom: "1px solid #e0e0e0" }}>
        <Box component="img" src={logo} alt="CBIP Logo" sx={{ width: 90, height: 90, objectFit: "contain" }} />
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontWeight: 800, fontSize: { xs: "15px", md: "20px" }, color: "#7d6608", letterSpacing: 1, lineHeight: 1.5 }}>
            EMPANELMENT OF EXPERTS
          </Typography>
          <Typography sx={{ fontWeight: 800, fontSize: { xs: "15px", md: "20px" }, color: "#7d6608", letterSpacing: 1 }}>
            {tabTitles[tab]}
          </Typography>
        </Box>
        <Box component="img" src={logo} alt="CBIP Logo" sx={{ width: 90, height: 90, objectFit: "contain" }} />
      </Box>

      {/* ── INTRO TEXT ── */}
      <Box sx={{ background: "#d6eaf8", border: "2px solid #2980b9", m: "16px 16px 20px", p: "12px 16px" }}>
        <Typography sx={{ fontSize: "13px", fontWeight: 600, lineHeight: 1.8 }}>
          Central Board of Irrigation &amp; Power (CBIP) has been successfully conducting technical audits of various{" "}
          {tab === "hydro" ? "hydro power stations" : tab === "water" ? "water resources projects" : "power sector projects"}{" "}
          of renowned organizations like NHPC, BBMB, SJVNL, UJVNL, JSW etc. through a panel of experts on{" "}
          {tab === "hydro" ? "Hydro Power" : tab === "water" ? "Water Resources" : "Power Sector"}.
          CBIP intends to empanel suitable experts in this area of expertise. Therefore, CBIP invites willingness from
          technical experts of good health who wish to associate with CBIP for conducting Safety/Technical audits of{" "}
          {tab === "hydro" ? "hydro power stations" : tab === "water" ? "water resources projects" : "power sector projects"}{" "}
          on an honorarium basis. Willing Experts are requested to kindly submit the below form duly filled.
        </Typography>
      </Box>

      {/* ── PERSONAL DETAILS ── */}
      <Box sx={{ px: "16px", mb: 3 }}>
        <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
          <TextField label="Name" size="small" fullWidth value={formData.name} onChange={(e) => handleFieldChange("name", e.target.value)} />
          <TextField label="Date of Birth" size="small" type="date" fullWidth value={formData.dob} onChange={(e) => handleFieldChange("dob", e.target.value)} InputLabelProps={{ shrink: true }} />
        </Box>
        <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
          <TextField label="E-Mail ID" size="small" fullWidth value={formData.email} onChange={(e) => handleFieldChange("email", e.target.value)} />
          <TextField label="Mobile No." size="small" fullWidth value={formData.mobile} onChange={(e) => handleFieldChange("mobile", e.target.value)} />
        </Box>
        <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
          <TextField label="Postal Address" size="small" fullWidth value={formData.postalAddress} onChange={(e) => handleFieldChange("postalAddress", e.target.value)} />
          <TextField label="Last Retired as" size="small" fullWidth value={formData.lastRetiredAs} onChange={(e) => handleFieldChange("lastRetiredAs", e.target.value)} />
        </Box>
        <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
          <TextField label="Date of Retirement" size="small" type="date" fullWidth value={formData.dateOfRetirement} onChange={(e) => handleFieldChange("dateOfRetirement", e.target.value)} InputLabelProps={{ shrink: true }} />
          <TextField label="Serious Health Condition (if any)" size="small" fullWidth value={formData.seriousHealthCondition} onChange={(e) => handleFieldChange("seriousHealthCondition", e.target.value)} />
        </Box>

        {/* Willing to travel */}
        <Box sx={{ mb: 1 }}>
          <Typography sx={{ fontSize: "14px", mb: 0.5 }}>Willing to travel and work in remote areas</Typography>
          <RadioGroup row value={formData.willingToTravel} onChange={(e) => handleFieldChange("willingToTravel", e.target.value)}>
            <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
            <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
          </RadioGroup>
        </Box>
      </Box>

      {/* ── WORK EXPERIENCE ── */}
      <Box sx={{ px: "16px", mb: 3 }}>
        <SectionHeader>Work Experience (Last 15 years only in reverse chronology)</SectionHeader>
        {workExp.map((row, i) => (
          <WorkExpRow key={i} index={i} data={row} onChange={handleWorkExpChange} />
        ))}
      </Box>

      {/* ── EXPERTISE TABLE ── */}
      <Box sx={{ px: "16px", mb: 3 }}>
        <SectionHeader>Choose from the following areas your areas of expertise</SectionHeader>

        {/* Table with borders exactly like the reference */}
        <Box sx={{ border: "1px solid #b0bec5", borderBottom: "none" }}>
          {/* Table Header */}
          <Box
            sx={{
              display: "flex",
              background: "#d6eaf8",
              borderBottom: "1px solid #b0bec5",
            }}
          >
            <Box sx={{ width: "60px", flexShrink: 0, borderRight: "1px solid #b0bec5", py: 1, px: 1.5 }}>
              <Typography sx={{ fontWeight: 700, fontSize: "13px" }}>S.No</Typography>
            </Box>
            <Box sx={{ flex: 1, py: 1, px: 1.5 }}>
              <Typography sx={{ fontWeight: 700, fontSize: "13px" }}>
                Pl. Tick &amp; Tick Appropriate Area of Expertise
              </Typography>
            </Box>
          </Box>

          {/* Table Rows */}
          {expertiseItems.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                borderBottom: "1px solid #b0bec5",
                "&:hover": { background: "#f0f8ff" },
              }}
            >
              {/* S.No cell */}
              <Box
                sx={{
                  width: "60px",
                  flexShrink: 0,
                  borderRight: "1px solid #b0bec5",
                  py: 1,
                  px: 1.5,
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  pt: 1.2,
                }}
              >
                <Typography sx={{ fontSize: "13px", fontWeight: 500 }}>{i + 1}</Typography>
              </Box>

              {/* Checkbox + Text cell */}
              <Box sx={{ flex: 1, py: 0.8, px: 1.5, display: "flex", alignItems: "flex-start", gap: 1 }}>
                <Checkbox
                  size="small"
                  checked={!!expertise[i]}
                  onChange={() => handleExpertiseChange(i)}
                  sx={{ p: 0, mt: 0.4, flexShrink: 0 }}
                />
                <Typography sx={{ fontSize: "13px", lineHeight: 1.7 }}>{item}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── EXPERIENCE TEXTAREAS ── */}
      <Box sx={{ px: "16px", mb: 2 }}>
        <Typography sx={{ fontWeight: 700, fontSize: "14px", mb: 1 }}>
          Experience in Conducting Technical Audit:
        </Typography>
        <TextField multiline rows={3} fullWidth size="small" value={experienceTechnical} onChange={(e) => setExperienceTechnical(e.target.value)} sx={{ mb: 3 }} />

        <Typography sx={{ fontWeight: 700, fontSize: "14px", mb: 1 }}>
          Experience in Conducting Safety Audit:
        </Typography>
        <TextField multiline rows={3} fullWidth size="small" value={experienceSafety} onChange={(e) => setExperienceSafety(e.target.value)} sx={{ mb: 3 }} />

        <Typography sx={{ fontWeight: 700, fontSize: "14px", mb: 1 }}>
          {experienceLabel}
        </Typography>
        <TextField multiline rows={3} fullWidth size="small" value={experienceOM} onChange={(e) => setExperienceOM(e.target.value)} sx={{ mb: 3 }} />
      </Box>

      {/* ── UPLOAD CV ── */}
      <Box sx={{ px: "16px", mb: 3 }}>
        <Typography sx={{ fontWeight: 700, fontSize: "14px", mb: 1 }}>Upload CV</Typography>
        <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setCvFile(e.target.files[0])} />
      </Box>

      {/* ── SUBMIT ── */}
      <Box sx={{ textAlign: "center", pb: 4 }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#2980b9",
            color: "#fff",
            fontWeight: 700,
            px: 6,
            py: 1.2,
            fontSize: "15px",
            letterSpacing: 1,
            borderRadius: "4px",
            "&:hover": { backgroundColor: "#1a5276" },
          }}
        >
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
const HydroResource = () => {
  const [activeTab, setActiveTab] = useState("hydro");

  return (
    <Box sx={{ background: "#f5f5f5", minHeight: "100vh", py: 3 }}>
      <Container maxWidth="lg">
        {/* TAB BUTTONS */}
        <Box sx={{ display: "flex", mb: 3, flexWrap: "wrap", gap: 1 }}>
          <TabButton label="Hydro Power"     active={activeTab === "hydro"}  onClick={() => setActiveTab("hydro")}  />
          <TabButton label="Water Resources" active={activeTab === "water"}  onClick={() => setActiveTab("water")}  />
          <TabButton label="Power Sector"    active={activeTab === "power"}  onClick={() => setActiveTab("power")}  />
        </Box>

        {/* FORM */}
        <FormContent key={activeTab} tab={activeTab} />
      </Container>
    </Box>
  );
};

export default HydroResource;