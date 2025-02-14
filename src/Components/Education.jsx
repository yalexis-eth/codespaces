import React from "react";
import PropTypes from "prop-types";

const Education = ({ school, degree, graduationYear }) => {
  return (
    <div className="education">
      <h3>{school}</h3>
      <p>{degree}</p>
      <p>{graduationYear}</p>
    </div>
  );
};

Education.defaultProps = {
  school: "AUC",
  degree: "Graphic Design",
  graduationYear: "2021",
};

Education.propTypes = {
  school: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  graduationYear: PropTypes.string.isRequired,
};

export default Education;