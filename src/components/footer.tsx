import React from "react";
import "./styles/footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer__section1">
        <p className="footer__section_bold">Merkury</p>
        <div className="footer__section1_icons">
          <FacebookOutlinedIcon />
          <CallOutlinedIcon />
        </div>
      </div>
      <div className="footer__section2">
        <p className="footer__section_bold">For Individuals</p>
        <div className="footer_section_options">
          <p>Merkury Swap</p>
          <p>Merkury NFT marketplace</p>
          <p>Merkury Trading</p>
        </div>
      </div>
      <div className="footer__section3">
        <p className="footer__section_bold">For Business</p>

        <div className="footer_section_options">
          <p>Merkury Swap</p>
          <p>Merkury NFT marketplace</p>
          <p>Merkury Trading</p>
        </div>
      </div>
      <div className="footer__section3">
        <p className="footer__section_bold">Customer Care</p>
        <div className="footer_section_options">
          <p>Merkury Swap</p>
          <p>Merkury NFT marketplace</p>
          <p>Merkury Trading</p>
        </div>
      </div>
      <div className="footer__section4">
        <p className="footer__section_bold">Company</p>
        <div className="footer_section_options">
          <p>Merkury Swap</p>
          <p>Merkury NFT marketplace</p>
          <p>Merkury Trading</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
