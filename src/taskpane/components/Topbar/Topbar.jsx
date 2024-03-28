import React from "react";
import "./Topbar.css";
// import cross from "../../../../public/Vector.png";
import refresh from "../../../../public/refresh.png";
import interState from "../../../../public/interstate.png";
import oneLab from "../../../../public/onelab.png";
import wiseSale from "../../../../public/wise.png";

const Topbar = ({ selectedOrganization }) => {
  // Determine the selected image based on the selectedOrganization prop
  let selectedImage;
  if (selectedOrganization === "Interstate Advanced Materials") {
    selectedImage = interState;
  } else if (selectedOrganization === "Wise Sales") {
    selectedImage = wiseSale;
  } else if (selectedOrganization === "Onelab Ventures") {
    selectedImage = oneLab;
  }

  //Function to handle refresh click
  const handleRefreshClick = () => {
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="contactPage-topDiv">
      <img src={selectedImage} id="interImage" alt="Topbar Image" />
      <div className="contactPage-topDiv-Child1">
      <img src={refresh} alt="Cross Icon" className="refreshImage"  onClick={handleRefreshClick}/>
        {/* <img src={cross} alt="Cross Icon" /> */}
      </div>
    </div>
  );
};
export default Topbar;
