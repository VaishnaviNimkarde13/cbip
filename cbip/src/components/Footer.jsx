import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PrintIcon from "@mui/icons-material/Print";

import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <footer className="footer">

        <div className="footer-container">

          {/* Address */}
          <div className="footer-column">
            <h2>Address</h2>

            <p className="icon-text">
              <LocationOnIcon className="footer-icon" />
              Central Board of Irrigation and Power Malcha Marg,
              Chanakyapuri, New Delhi 110021.
            </p>

            <h3>Get in Social</h3>

            <div className="social-icons">
              <span><XIcon fontSize="small" /></span>
              <span><LinkedInIcon fontSize="small" /></span>
              <span><YouTubeIcon fontSize="small" /></span>
              <span><InstagramIcon fontSize="small" /></span>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h2>Contact Details</h2>

            <p className="icon-text">
              <LocationOnIcon className="footer-icon" />
              +91-11-2611 5984, 2611 1294, 2687 6229,
              2611 6567, 2687 5017, 2410 2437
            </p>

            <p className="icon-text">
              <MailOutlineIcon className="footer-icon" />
              cbip@cbip.org <br />
              cbip.cbip@gmail.com
            </p>

            <p className="icon-text">
              <PrintIcon className="footer-icon" />
              91-11-2611 6347
            </p>
          </div>

          {/* Location */}
          <div className="footer-column">
            <h2>Location</h2>

            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Central%20Board%20of%20Irrigation%20and%20Power%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          Copyright © 2025 by Central Board Of Irrigation and Power |
          All rights reserved
        </div>
      </footer>

      <style>{`
        .footer{
          background:#273272;
          color:white;
          padding-top:20px;
          font-family:Arial;
        }

        .footer-container{
          width:90%;
          margin:auto;
          display:flex;
          justify-content:space-between;
          gap:40px;
        }

        .footer-column{
          flex:1;
        }

        .footer-column h2{
          margin-bottom:20px;
          font-size:28px;
        }

        .footer-column h3{
          margin-top:30px;
          margin-bottom:15px;
        }

        .footer-column p{
          line-height:1.6;
          font-size:16px;
        }

        .icon-text{
          display:flex;
          align-items:flex-start;
          gap:10px;
          margin-bottom:12px;
        }

        .footer-icon{
          font-size:25px;
          margin-top:3px;
        }

        .social-icons{
          display:flex;
          gap:10px;
        }

        .social-icons span{
          border:1px solid white;
          padding:8px;
          border-radius:4px;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        iframe{
          width:100%;
          height:200px;
          border:none;
        }

        .footer-bottom{
          border-top:1px solid rgba(255,255,255,0.2);
          text-align:center;
          padding:18px;
          margin-top:40px;
          font-size:14px;
        }

        @media(max-width:900px){
          .footer-container{
            flex-direction:column;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;