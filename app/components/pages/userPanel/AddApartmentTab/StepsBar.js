import React from "react";
import { Check } from "react-feather";

const StepsBarSection = ({ active }) => {
  return (
    <ul className="wizard-steps">
      <li className={`step-container step-1 ${active === 1 ? "active" : ""}`}>
        <div className="media">
          <div className="step-icon">
            <Check />
            <span>1</span>
          </div>
          <div className="media-body">
            <h5>Get started</h5>
            <h6>Apartment Information</h6>
          </div>
        </div>
      </li>
      <li className={`step-container step-2  ${active === 2 ? "active" : ""}`}>
        <div className="media">
          <div className="step-icon">
            <Check />
            <span>2</span>
          </div>
          <div className="media-body">
            <h5>Location</h5>
            <h6>Set your address</h6>
          </div>
        </div>
      </li>
      <li className={`step-container step-3  ${active === 3 ? "active" : ""}`}>
        <div className="media">
          <div className="step-icon">
            <Check />
            <span>3</span>
          </div>
          <div className="media-body">
            <h5>Additional features</h5>
            <h6>More information about Amenities</h6>
          </div>
        </div>
      </li>
      <li className={`step-container step-4  ${active === 4 ? "active" : ""}`}>
        <div className="media">
          <div className="step-icon">
            <Check />
            <span>4</span>
          </div>
          <div className="media-body">
            <h5>New Tenant specifics</h5>
            <h6>More information about the Tenant</h6>
          </div>
        </div>
      </li>
      <li className={`step-container step-4  ${active === 5 ? "active" : ""}`}>
        <div className="media">
          <div className="step-icon">
            <Check />
            <span>5</span>
          </div>
          <div className="media-body">
            <h5>Additional features</h5>
            <h6>More information about Amenities</h6>
          </div>
        </div>
      </li>
      <li className={`step-container step-3 ${active === 6 ? "active" : ""}`}>
        <div className="media">
          <div className="step-icon">
            <Check />
            <span>6</span>
          </div>
          <div className="media-body">
            <h5>Complete</h5>
            <h6>Successfully submitted</h6>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default StepsBarSection;
