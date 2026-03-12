import { useState } from "react";
import logo from "../../assets/empanelment-logo.jpg";
import { useNavigate, useLocation } from "react-router-dom";

// ─── Sub-disciplines data per main discipline ─────────────────────────────────
const subDisciplinesMap = {
  "Thermal Power Generation": [
    "Coal Based Power Plants", "Gas Based Power Plants", "Oil Based Power Plants",
    "Combined Cycle Power Plants", "Co-generation Plants", "Boiler & Auxiliaries",
    "Turbine & Auxiliaries", "Electrical Systems", "I&C Systems", "Environmental Systems",
  ],
  "Nuclear Power Generation": [
    "Pressurized Water Reactors", "Boiling Water Reactors", "Heavy Water Reactors",
    "Nuclear Safety Systems", "Radiation Protection",
  ],
  "Hydro Power Generation": [
    "Run-of-River Plants", "Storage Based Plants", "Pumped Storage Plants",
    "Small Hydro", "Micro Hydro", "Turbine & Auxiliaries", "Governor Systems", "Dam & Civil Structures",
  ],
  Transmission: [
    "EHV Transmission Lines", "HVDC Systems", "Substations (AIS)", "Substations (GIS)",
    "Power Transformers", "Reactive Power Compensation", "Protection & Control", "Grid Communication",
  ],
  Distribution: [
    "HV/MV Distribution", "LV Distribution", "Distribution Transformers",
    "Distribution Automation", "Smart Metering", "Loss Reduction", "Rural Electrification",
  ],
  "Renewable Energy": [
    "Solar PV", "Solar Thermal", "Wind Energy", "Biomass/Bioenergy",
    "Waste to Energy", "Hybrid Systems", "Energy Storage", "Green Hydrogen",
  ],
  "Power System Operation": [
    "Load Dispatch", "Grid Management", "Frequency Control",
    "Voltage Control", "System Protection", "Islanding", "Restoration",
  ],
  "Research & Development": [
    "Power Electronics", "Smart Grid Technologies", "Energy Storage Research",
    "Advanced Materials", "Digital Twin", "AI/ML in Power Sector",
  ],
  Academics: [
    "Electrical Engineering", "Power Systems", "Control Systems", "Renewable Energy", "Energy Policy",
  ],
  Regulatory: [
    "Tariff Regulation", "Grid Codes", "Open Access",
    "Electricity Act", "Renewable Energy Regulations", "Consumer Protection",
  ],
  HR: [
    "HR Management", "Training & Development", "Labour Laws", "Safety Management", "Performance Management",
  ],
  "Power Trading": [
    "Short Term Trading", "Long Term PPAs", "Power Exchange", "Cross-border Trading", "Trading Regulations",
  ],
  Finance: [
    "Project Finance", "Tariff Determination", "Cost Accounting", "Audit & Compliance", "Financial Modelling",
  ],
  Training: [
    "Technical Training", "Management Training", "Safety Training", "Simulation & Modelling", "E-Learning",
  ],
};

const mainDisciplines = Object.keys(subDisciplinesMap);

const preferredRolesOptions = [
  "Speaker", "Consultant", "Trainer", "Manual Preparation", "Auditor", "Other (Specify)",
];

// ─── TAB BUTTON ───────────────────────────────────────────────────────────────
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
      fontSize: "13px",
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

// ─── FIELD BOX (labeled border) ───────────────────────────────────────────────
const FieldBox = ({ label, children }) => (
  <fieldset
    style={{
      border: "1.5px solid #90caf9",
      borderRadius: "6px",
      padding: "12px 16px 14px",
      marginBottom: "16px",
    }}
  >
    <legend style={{ color: "#1565c0", fontWeight: 600, fontSize: "14px", padding: "0 6px" }}>
      {label}
    </legend>
    {children}
  </fieldset>
);

// ─── TEXT INPUT ───────────────────────────────────────────────────────────────
const Input = ({ placeholder, value, onChange, type = "text", style = {} }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    style={{
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "8px 12px",
      fontSize: "13px",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      ...style,
    }}
  />
);

// ─── TEXTAREA ─────────────────────────────────────────────────────────────────
const Textarea = ({ placeholder, value, onChange, rows = 3 }) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    rows={rows}
    style={{
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "8px 12px",
      fontSize: "13px",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      resize: "vertical",
    }}
  />
);

// ─── MAIN FORM ────────────────────────────────────────────────────────────────
const WaterResources = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Derive active tab from current URL path
  const getActiveTab = () => {
    if (location.pathname.includes("/hydro")) return "hydro";
    if (location.pathname.includes("/power")) return "power";
    return "water";
  };

  const activeTab = getActiveTab();

  // Personal
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  // Professional
  const [orgDesignation, setOrgDesignation] = useState("");
  const [briefProfile, setBriefProfile] = useState("");

  // Expertise
  const [selectedMains, setSelectedMains] = useState([]);
  const [pendingSubDisciplines, setPendingSubDisciplines] = useState([]);
  const [confirmedSelections, setConfirmedSelections] = useState([]);
  const [activeDisciplineForSub, setActiveDisciplineForSub] = useState(null);

  // Experience
  const [yearsExp, setYearsExp] = useState("");
  const [affiliations, setAffiliations] = useState("");

  // Major Contributions
  const [majorContributions, setMajorContributions] = useState("");

  // Preferred Roles
  const [preferredRoles, setPreferredRoles] = useState({});

  // Additional Notes
  const [additionalNotes, setAdditionalNotes] = useState("");

  // Files
  const [passportFile, setPassportFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  const wordCount = briefProfile.trim() ? briefProfile.trim().split(/\s+/).length : 0;

  const handleMainDisciplineClick = (discipline) => {
    if (selectedMains.includes(discipline)) {
      setSelectedMains(selectedMains.filter((d) => d !== discipline));
      if (activeDisciplineForSub === discipline) setActiveDisciplineForSub(null);
    } else {
      if (selectedMains.length >= 3) {
        alert("You can select a maximum of 3 Main Disciplines.");
        return;
      }
      setSelectedMains([...selectedMains, discipline]);
      setActiveDisciplineForSub(discipline);
      setPendingSubDisciplines([]);
    }
  };

  const handleSubDisciplineClick = (sub) => {
    if (pendingSubDisciplines.includes(sub)) {
      setPendingSubDisciplines(pendingSubDisciplines.filter((s) => s !== sub));
    } else {
      if (pendingSubDisciplines.length >= 5) {
        alert("You can select a maximum of 5 Sub-Disciplines.");
        return;
      }
      setPendingSubDisciplines([...pendingSubDisciplines, sub]);
    }
  };

  const handleOK = () => {
    if (!activeDisciplineForSub) return;
    const existing = confirmedSelections.filter((s) => s.discipline !== activeDisciplineForSub);
    const newEntries = pendingSubDisciplines.map((sub) => ({ discipline: activeDisciplineForSub, sub }));
    setConfirmedSelections([...existing, ...newEntries]);
    setPendingSubDisciplines([]);
    setActiveDisciplineForSub(null);
  };

  const handlePreferredRoleToggle = (role) => {
    setPreferredRoles((prev) => ({ ...prev, [role]: !prev[role] }));
  };

  const handleSubmit = () => {
    if (!name || !email || !mobile || !address) {
      alert("Please fill in all required Personal Information fields.");
      return;
    }
    if (!orgDesignation || !briefProfile) {
      alert("Please fill in all required Professional Information fields.");
      return;
    }
    alert("Form submitted successfully!");
  };

  const tabTitles = {
    hydro: "Registration For Hydro Power",
    water: "Registration For Water Resources",
    power: "Registration For Power Sector",
  };

  const currentSubs = activeDisciplineForSub ? subDisciplinesMap[activeDisciplineForSub] || [] : [];

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", padding: "16px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>

        {/* TAB BUTTONS */}
        <div style={{ marginBottom: "16px" }}>
          <TabButton label="Hydro Power"     active={activeTab === "hydro"}  onClick={() => navigate("/empanelment/hydro")} />
          <TabButton label="Water Resources" active={activeTab === "water"}  onClick={() => navigate("/empanelment/water")} />
          <TabButton label="Power Sector"    active={activeTab === "power"}  onClick={() => navigate("/empanelment/power")} />
        </div>

        {/* MAIN CARD */}
        <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "4px", padding: "0" }}>

          {/* HEADER ROW */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "16px 24px", borderBottom: "1px solid #eee", flexWrap: "wrap", gap: "12px" }}>
            <img src={logo} alt="CBIP Logo" style={{ width: "80px", height: "80px", objectFit: "contain" }} />

            <div style={{ textAlign: "center", flex: "1", minWidth: "200px" }}>
              <div style={{ fontSize: "22px", fontWeight: 800, color: "#000", letterSpacing: "1px" }}>
                CENTRAL BOARD OF IRRIGATION AND POWER
              </div>
              <div style={{ fontSize: "14px", color: "#444" }}>An ISO 9001 - 2015 Organisation</div>
            </div>

            <div style={{ textAlign: "center", fontSize: "13px", lineHeight: "1.6" }}>
              <strong>Central Board of</strong><br />
              <strong>Irrigation &amp; Power</strong><br />
              Malcha Marg, Chanakyapuri,<br />
              New Delhi 1100021<br />
              Phone no:<br />
              01126115984,26116567,24102437<br />
              E-mail: <a href="mailto:cbip@cbip.org" style={{ color: "#1565c0" }}>cbip@cbip.org</a><br />
              Website: <a href="https://www.cbip.org" style={{ color: "#1565c0" }}>www.cbip.org</a>
            </div>

            <div style={{ fontSize: "13px", minWidth: "180px" }}>
              <div style={{ fontWeight: 700, marginBottom: "6px" }}>Upload Passport Image</div>
              <input type="file" accept="image/*" onChange={(e) => setPassportFile(e.target.files[0])} style={{ fontSize: "12px" }} />
              <div style={{ fontWeight: 700, margin: "10px 0 6px" }}>Upload Resume</div>
              <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResumeFile(e.target.files[0])} style={{ fontSize: "12px" }} />
              <div style={{ fontSize: "11px", color: "#555", marginTop: "6px" }}>
                Passport Size Photograph must be maximum 20 kb
              </div>
            </div>
          </div>

          {/* FORM BODY */}
          <div style={{ padding: "20px 24px" }}>

            {/* Registration Title */}
            <div style={{ color: "#c0392b", fontWeight: 700, fontSize: "16px", marginBottom: "16px" }}>
              {tabTitles[activeTab]}
            </div>

            {/* PERSONAL INFORMATION */}
            <FieldBox label="Personal Information">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <Input placeholder="Name of the Expert/Specialist *" value={name} onChange={(e) => setName(e.target.value)} />
                <Input placeholder="Address *" value={address} onChange={(e) => setAddress(e.target.value)} />
                <Input placeholder="E-Mail ID *" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder="Mobile No *" value={mobile} onChange={(e) => setMobile(e.target.value)} />
              </div>
            </FieldBox>

            {/* PROFESSIONAL INFORMATION */}
            <FieldBox label="Professional Information">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <Input placeholder="Organization/Designation *" value={orgDesignation} onChange={(e) => setOrgDesignation(e.target.value)} />
                <div>
                  <Textarea placeholder="Brief Professional Profile *" value={briefProfile} onChange={(e) => setBriefProfile(e.target.value)} rows={3} />
                  <div style={{ fontSize: "11px", color: "#666", textAlign: "right" }}>{wordCount}/200 words Max. 200 words</div>
                </div>
              </div>
            </FieldBox>

            {/* AREAS OF EXPERTISE */}
            <FieldBox label="Areas of Expertise">
              <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "4px" }}>Domain Area of Expertise:</div>
              <div style={{ fontSize: "12px", color: "#444", marginBottom: "14px" }}>
                Main Disciplines (Max 3 selections) with Sub-Disciplines (Max 5 selections)
              </div>

              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                {/* Main Disciplines */}
                <div style={{ flex: "1", minWidth: "300px" }}>
                  <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "10px" }}>Main Disciplines</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
                    {mainDisciplines.map((disc) => (
                      <label key={disc} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          checked={selectedMains.includes(disc)}
                          onChange={() => handleMainDisciplineClick(disc)}
                          style={{ cursor: "pointer" }}
                        />
                        {disc}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sub-Disciplines */}
                <div style={{ flex: "1", minWidth: "260px" }}>
                  <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "10px" }}>Sub-Disciplines</div>
                  <div style={{ border: "1px solid #ccc", borderRadius: "4px", minHeight: "180px", padding: "10px", fontSize: "13px", color: currentSubs.length === 0 ? "#999" : "#333", background: "#fafafa" }}>
                    {currentSubs.length === 0 ? (
                      <span>Select a Main Discipline to view Sub-Disciplines.</span>
                    ) : (
                      currentSubs.map((sub) => (
                        <label key={sub} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px", cursor: "pointer" }}>
                          <input type="checkbox" checked={pendingSubDisciplines.includes(sub)} onChange={() => handleSubDisciplineClick(sub)} />
                          {sub}
                        </label>
                      ))
                    )}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "12px" }}>
                <span style={{ fontSize: "13px", color: "#1565c0", marginRight: "12px" }}>Click One by One &amp; Press OK</span>
                <button
                  onClick={handleOK}
                  style={{ background: "#1976d2", color: "#fff", border: "none", borderRadius: "4px", padding: "6px 18px", fontWeight: 700, fontSize: "13px", cursor: "pointer" }}
                >
                  OK
                </button>
              </div>

              <div style={{ border: "1px solid #ccc", borderRadius: "4px", minHeight: "100px", padding: "10px", marginTop: "12px", fontSize: "13px", background: "#fafafa" }}>
                {confirmedSelections.length === 0 ? (
                  <span style={{ color: "#999" }}>No selections confirmed yet.</span>
                ) : (
                  confirmedSelections.map((sel, i) => (
                    <div key={i} style={{ marginBottom: "4px" }}>
                      <strong>{sel.discipline}</strong>: {sel.sub}
                    </div>
                  ))
                )}
              </div>
            </FieldBox>

            {/* EXPERIENCE AND AFFILIATIONS */}
            <FieldBox label="Experience and Affiliations">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <Input placeholder="Years of Experience *" value={yearsExp} onChange={(e) => setYearsExp(e.target.value)} />
                <Textarea placeholder="Affiliations/Certifications" value={affiliations} onChange={(e) => setAffiliations(e.target.value)} rows={2} />
              </div>
            </FieldBox>

            {/* MAJOR CONTRIBUTIONS */}
            <FieldBox label="Major Contributions">
              <Textarea placeholder="Major Projects/Contributions *" value={majorContributions} onChange={(e) => setMajorContributions(e.target.value)} rows={3} />
            </FieldBox>

            {/* PREFERRED ROLES */}
            <FieldBox label="Preferred Roles">
              <div style={{ fontWeight: 700, fontSize: "13px", marginBottom: "10px" }}>*Preferred Roles (Please Tick)</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 40px" }}>
                {preferredRolesOptions.map((role) => (
                  <label key={role} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", cursor: "pointer" }}>
                    <input type="checkbox" checked={!!preferredRoles[role]} onChange={() => handlePreferredRoleToggle(role)} style={{ width: "16px", height: "16px", cursor: "pointer" }} />
                    {role}
                  </label>
                ))}
              </div>
            </FieldBox>

            {/* ADDITIONAL NOTES */}
            <FieldBox label="Additional Notes">
              <Textarea placeholder="Additional Information" value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)} rows={3} />
            </FieldBox>

            {/* SUBMIT */}
            <div style={{ textAlign: "center", paddingTop: "8px", paddingBottom: "16px" }}>
              <button
                onClick={handleSubmit}
                style={{ background: "#1976d2", color: "#fff", border: "none", borderRadius: "4px", padding: "10px 40px", fontWeight: 700, fontSize: "14px", cursor: "pointer", letterSpacing: "1px" }}
              >
                SUBMIT
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterResources;