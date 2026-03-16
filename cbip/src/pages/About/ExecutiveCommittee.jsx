import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import heroimg from "../../assets/hitachi-energy-transmission-towers-2436x810_64-25.webp";

// ── Theme tokens ──────────────────────────────────────────────────────────────
const T = {
  primary:   "#2f3e8f",
  accent:    "#ffffff",
  bg:        "#f8fafc",
  cardBg:    "#ffffff",
  textMain:  "#1e293b",
  textMuted: "#64748b",
  border:    "#e2e8f0",
};

// ── Data ──────────────────────────────────────────────────────────────────────
const categories = [
  {
    id: "honorary",
    title: "Honorary Members",
    layout: "3col",
    members: [
      "Central Electricity Authority, New Delhi",
      "Central Water Commission, New Delhi",
      "Central Electricity Regulatory Commission, New Delhi",
    ],
  },
  {
    id: "water",
    title: "PSUs & State Govts (Water Resources)",
    layout: "default",
    members: [
      "Andhra Pradesh - Irrigation and CAD Department",
      "Telangana State – Irrigation and CAD Department",
      "Assam - Irrigation Department, Guwahati",
      "Bihar – Irrigation Department",
      "Goa - Water Resources Deptt.",
      "Sardar Sarovar Narmada Nigam Ltd.",
      "Haryana - Irrigation Deptt",
      "Himachal Pradesh - Irrigation and Public Health Department",
      "J&K - PHE Irrigation and Flood Control Deptt.",
      "Karnataka - Water Resources Deptt.",
      "Kerala - Water Resources Deptt., Thiruvananthapuram",
      "Narmada Valley Development Authority, M.P",
      "Maharashtra - Water Resources Department, Mumbai",
      "Manipur - Irrigation & Flood Control Deptt.",
      "Mizoram - Public Health Engineering Department",
      "Nagaland - Irrigation & Flood Control",
      "National Water Development Agency (NWDA)",
      "Orissa - Water Resources Deptt",
      "Punjab - Irrigation",
      "Rajasthan - Irrigation Department",
      "Sri Lanka - Irrigation Department",
      "Tamil Nadu - Public Works Department",
      "Tripura – Water Resources Department",
      "Uttar Pradesh - Irrigation Department",
      "Uttarakhand - Irrigation Department",
      "West Bengal - Water Resources, Investigation and Development",
      "Gujarat Engineering Research Institute",
      "Tungabhadra Board",
    ],
  },
  {
    id: "energy",
    title: "PSUs & State Govts (Energy)",
    layout: "default",
    members: [
      "A.P. Power Generation Corp. Ltd.",
      "Transmission Corporation of Andhra Pradesh Ltd.",
      "Assam Power Generation Co. Ltd.",
      "Bhakra Beas Management Board",
      "Bharat Heavy Electricals Ltd.",
      "Bihar State Hydroelectric Power Co. Ltd.",
      "Bihar State Power Holding Co. Ltd.",
      "Chhattisgarh State Power Transmission Company Ltd.",
      "Dakshin Gujarat Vij Co. Ltd.",
      "Dakshin Haryana Bijli Vitran Nigam Ltd.",
      "Damodar Valley Corporation",
      "Delhi TRANSCO Ltd.",
      "Department of Power, Nagaland",
      "Druk Green Power Corpn. Ltd., Bhutan",
      "Manipur State Power Company Limited",
      "GRIDCO LIMITED",
      "Gujarat Energy Transmission Co. Ltd.",
      "Gujarat State Electricity Corporation Ltd.",
      "Gujarat Urja Vikas Nigam",
      "H.P.State Electricity Board",
      "Haryana Power Generation Co. Ltd.",
      "Haryana Vidyut Prasaran Nigam Ltd",
      "Himachal Pradesh Power Co. Ltd.",
      "Hydro Power Development co. of Arunachal Pradesh",
      "Indian Renewable Energy Development Agency Ltd. (IREDA)",
      "Jaipur Vidyut Vitran Nigam Ltd",
      "Jharkhand Urja Vikas Nigam Ltd.",
      "Jodhpur Vidyut Vitran Nigam Ltd.",
      "Karnataka Power Corporation Ltd.",
      "Karnataka Power Transmission Corpn. Ltd.",
      "Kerala State Electricity Board",
      "M.P. Madhya Kshetra Vidyut Vitran Co. Ltd.",
      "M.P. Paschim Kshetra Vidyut Vitran Co. Ltd.",
      "M.P. Poorv Kshetra Vidyut Vitran Co. Ltd",
      "M.P. Power Transmission Co. Ltd.",
      "M. P. Power Generating Co. Ltd.",
      "Madhya Gujarat Vij Co. Ltd.",
      "Maharashtra State Elecy. Distribution Co. Ltd.",
      "Maharashtra State Elecy. Transmission Co. Ltd.",
      "Maharashtra State Power Gen. Co. Ltd.",
      "Mangdechhu Hydroelectric Project Authority, Bhutan",
      "Meghalaya Energy Corporation Ltd.",
      "National Power Training Institute",
      "NLC Limited",
      "New Delhi Municipal Council",
      "NHDC Ltd., Bhopal",
      "NHPC. Ltd",
      "North Eastern Electric Power Corp. Ltd., (NEEPCO)",
      "NTPC Ltd.",
      "Odisha Hydro Power Corporation Ltd.",
      "Orissa Power Generation Corporation Ltd.",
      "Paschim Gujarat Vij Co. Ltd.",
      "Power Development Department, Jammu",
      "Power Finance Corporation, New Delhi",
      "Power Grid Corporation of India Ltd.",
      "Grid Controller of India Limited",
      "Power Trading Corporation of India Ltd.",
      "Punatsangchu-I Hydroelectric Project Authority, Bhutan",
      "Punjab State Power Corporation Ltd",
      "Rajasthan Rajya Vidyut Prasarn Nigam Ltd.",
      "Rajasthan Rajya Vidyut Utpadan Nigam Ltd.",
      "REC Ltd.",
      "SJVN Ltd., Shimla",
      "Tamil Nadu Generation and Distribution Corporation Ltd.",
      "Tenughat Vidyut Nigam Ltd",
      "Telangana State Power Generation Corp. Ltd.",
      "Telangana State Power Transmission Corp. Ltd",
      "THDC Ltd.",
      "U.P. Rajya Vidyut Utpadan Nigam Ltd.",
      "U.P. Power Corporation Ltd.",
      "Uttar Gujarat Vij Co. Ltd.",
      "Uttar Haryana Bijli Vitran Nigam Ltd.",
      "Uttarakhand Jal Vidyut Nigam Ltd.",
      "Uttarakhand Power Corp. Ltd.",
      "West Bengal State Electricity Distribution Co. Ltd.",
      "Uttarakhand Electricity Regulatory Commission",
      "Bihar Electricity Regulatory Commission",
      "Assam Electricity Regulatory Commission",
      "Maharashtra Electricity Regulatory Commission",
      "Karnataka Electricity Regulatory Commission",
      "Jharkhand Electricity Regulatory Commission",
      "Odisha Power Transmission Corporation Ltd.",
      "Joint Electricity Regulatory Commission (Goa & UT)",
      "Arunachal Pradesh State Electricity Regulatory Commission",
      "Sikkim State Electricity Regulatory Commission",
      "Tripura State Electricity Corporation Ltd",
      "Chhatisgarh State Electricity Regulatory Commission",
      "J & K State Electricity Regulatory Commission",
      "Gujarat Electricity Regulatory Commission",
      "Haryana Electricity Regulatory Commission",
      "Joint Electricity Regulatory Commission (Manipur & Mizoram)",
      "Rajasthan Electricity Regulatory Commission",
      "Tamil Nadu Electricity Regulatory Commission",
      "Andhra Pradesh Electricity Regulatory Commission",
      "Uttar Pradesh Electricity Regulatory Commission",
      "HP State Electricity Regulatory Commission",
      "Delhi Electricity Regulatory Commission",
      "Odisha Electricity Regulatory Commission",
      "Punjab State Electricity Regulatory Commission",
      "BESCOM, Bengaluru",
      "H.P. Transmission Corporation Ltd.",
      "Assam Electricity Grid Corporation Ltd.",
      "Power Transmission Corporation of Uttarakhand Limited",
      "Kerala State Electricity Regulatory Commission",
      "West Bengal Electricity Regulatory Commission",
      "Solar Energy Corporation of India Limited",
      "Southern Power Distribution Company of A.P. Limited",
      "Rail Infrastructure Development Company (Karnataka)",
      "Indian Institute of Roorkee",
      "Sikkim Power Transmission Limited",
      "Sikkim Urja Limited",
      "North – East Transmission Co. Ltd.",
      "Engineering Staff College of India",
    ],
  },
  {
    id: "private",
    title: "Private Organisations",
    layout: "default",
    members: [
      "Afcons Infrastructure Ltd.",
      "GE T&D India Ltd.",
      "Angelique International Ltd.",
      "C & S Electric Limited",
      "Desein Pvt. Ltd.",
      "Herrenknecht India Pvt. Ltd.",
      "Hindustan Construction Co. Ltd.",
      "HPL Electric and Power Pvt. Ltd.",
      "Jyoti Ltd.",
      "Kalpataru Projects International Ltd.",
      "KEC International Ltd.",
      "Larsen & Toubro Limited",
      "Mahinenfabrik Reinhausen GmbH",
      "McNally Bharat Engineering Co. Ltd.",
      "Tata Power Delhi Distribution Co. Ltd.",
      "Taurus Powertronics Pvt. Ltd.",
      "Torrent Power Ltd.",
      "Transformer & Rectifiers (India) Ltd.",
      "Toshiba Transmission & Distribution Systems (I) Pvt. Limited",
      "Voith Siemens Hydro Pvt. Ltd.",
      "Electrical Research and Development Association (ERDA)",
      "FLIR Systems India Pvt. Ltd.",
      "Skipper Ltd.",
      "Fortum India Pvt. Ltd.",
      "Suzlon Global Services Ltd.",
      "BSES Rajdhani Power Limited",
      "M&I Materials India Pvt. Ltd.",
      "SCOPE T&M Pvt. Limited",
      "Sicame India Connectors Private Limited",
      "Sterilite Power Transmission Limited",
      "Adani Electricity Mumbai Limited",
      "Ashida Electronics Pvt. Limited",
      "JSW Energy Limited",
      "Asia Institute of Power Management",
      "Bajaj Electricals Limited",
      "Chenab Valley Power Projects (P) Ltd.",
      "ZIV Automation India Limited",
      "Secure Meters Limited",
      "Motwane Manufacturing Co. Pvt. Ltd.",
      "UE Systems IMENA Pvt. Limited",
      "EASUN - MR TAP CHANGERS (P) LIMITED",
      "Andritz Hydro Private Limited",
      "TATA Steel Limited",
      "Electronics Technology Parks - Kerala (TECHNOPAK)",
      "Atandra Energy Private Limited",
      "Rodic Consultants Pvt. Ltd",
      "ETP Earthing & LPS Solution Pvt. Ltd.",
      "OMICRON Energy Solution Pvt. Ltd.",
      "ReNew Power Limited",
      "GIG-IRM Glass Insulators Private Limited",
      "Yokogawa India Ltd.",
      "Association of Power Producers",
      "Development Consultants private limited",
      "Surya Urja Company of Rajasthan Limited",
      "Arunachal Pradesh Power Corporation Pvt. Ltd.",
      "ICRA Limited",
      "Noida Power Company Ltd.",
      "Jhajjar Power Limited",
      "Indigrid Ltd.",
      "Megger India Private Limited",
      "Sonel Instruments India Private Limited",
      "Bajaj Reinforcement Pvt. Ltd.",
      "Transcon Industries",
      "TD Power System Limited",
      "Energy Infratech Pvt. Ltd.",
      "Esennar Transformers Pvt. Ltd.",
      "Tractebel Engineering Pvt. Ltd.",
      "Kalpana Industries",
      "Indo Tech Transformers Ltd.",
      "Exide Industries Limited",
      "Greenko Energies Pvt. Ltd.",
      "Navitus Controls & Equipments Pvt. Ltd.",
      "Godrej & Boyce Mfg. Co. Ltd.",
      "Hindalco Industries Limited.",
      "Adani Infrastructure Management Services Limited",
      "Kamath Transformers Pvt. Ltd.",
      "The Tata Power Co. LTD.",
      "Encardio Rite Electronics Pvt. Ltd.",
      "Vijay Transmission Pvt. Ltd.",
      "Concrete Udyog Limited",
      "GNA Energy Private Limited.",
      "Transrail Lighting Limited",
      "Indiana group",
      "Hammond Power Solution",
    ],
  },
  {
    id: "lifeGovt",
    title: "Life Members (Govt)",
    layout: "life",
    members: [
      "Central Power Research Institute",
      "Madhya Pradesh - Water Resources Department",
      "WAPCOS Ltd.",
      "Gujarat - Water Resources Deptt.",
    ],
  },
  {
    id: "lifePrivate",
    title: "Life Members (Private)",
    layout: "life",
    members: [
      "BSES Yamuna Power Ltd.",
      "CTR Manufacturing Industries Ltd.",
      "Jindal Power Limited",
      "CESC Limited",
      "Hitachi Energy India Limited",
      "SIEMENS Ltd",
      "Cargil India Pvt. Limited.",
      "Reliance Industries Limited",
      "Vendere Sales Services (India) Pvt. Ltd.",
    ],
  },
];

// ── MemberCard ────────────────────────────────────────────────────────────────
const MemberCard = ({ index, name }) => (


<Box
  sx={{
    height: "100%",
    bgcolor: T.cardBg,
    border: `1px solid ${T.border}`,
    borderRadius: "12px",
    p: "14px 18px",
    display: "flex",
    alignItems: "flex-start",
    gap: 1.5,
    transition: "all 0.2s ease",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0,51,102,0.12)",
      borderColor: T.primary,
    },
  }}
>
    <Box
      sx={{
        minWidth: 32,
        height: 32,
        bgcolor: "#f1f5f9",
        color: T.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        fontSize: "0.8125rem",
        fontWeight: 700,
        flexShrink: 0,
      }}
    >
      {index}
    </Box>
    <Typography
      sx={{
        fontSize: "0.9375rem",
        fontWeight: 500,
        color: T.textMain,
        lineHeight: 1.45,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {name}
    </Typography>
  </Box>
);

// ── CategorySection ───────────────────────────────────────────────────────────
const CategorySection = ({ category }) => {


const colConfig = { xs: 12, sm: 6, md: 4 };

  return (
    <Box sx={{ mb: 5 }}>
      {/* Category header bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: T.cardBg,
          borderLeft: `5px solid ${T.primary}`,
          borderRadius: "8px",
          px: 2.5,
          py: 1.5,
          mb: 2,
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
            color: T.primary,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {category.title}
        </Typography>
        <Chip
          label={category.members.length}
          size="small"
          sx={{
            bgcolor: T.primary,
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.8rem",
            height: 28,
            borderRadius: "14px",
          }}
        />
      </Box>

      {/* Member grid */}
    

      <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
    },
    gridAutoRows: "1fr",

    gap: 2,
   
  }}
>
  {category.members.map((name, i) => (
    <MemberCard key={i} index={i + 1} name={name} />
  ))}
</Box>
    </Box>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
export default function ExecutiveCommittee() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      `}</style>

      {/* HERO */}
      <Box
        sx={{
          height: { xs: "180px", sm: "220px", md: "280px" },
          backgroundImage: `url(${heroimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            position: "relative",
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
            letterSpacing: 1,
            textAlign: "center",
            px: 2,
          }}
        >
          Executive Committee
        </Typography>
      </Box>

      {/* CONTENT */}
      <Box sx={{ bgcolor: T.bg, py: { xs: 4, md: 6 } }}>
        <Container
          maxWidth={false}
          sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, sm: 3, md: 4 } }}
        >
          {/* Page header card */}
          <Box
            sx={{
              textAlign: "center",
              mb: 5,
              p: { xs: 2.5, md: 3.5 },
              background:"#2f3e8f" ,
              borderRadius: "16px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 700,
                fontSize: { xs: "1.3rem", sm: "1.6rem", md: "2rem" },
                fontFamily: "'Inter', sans-serif",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              CBIP Executive Committee
            </Typography>
            <Typography
              sx={{
                color: T.accent,
                fontWeight: 500,
                mt: 0.5,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontFamily: "'Inter', sans-serif",
                opacity: 0.95,
              }}
            >
              List of Executive Members
            </Typography>
          </Box>

          {/* All category sections */}
          {categories.map((cat) => (
            <CategorySection key={cat.id} category={cat} />
          ))}
        </Container>
      </Box>
    </>
  );
}
