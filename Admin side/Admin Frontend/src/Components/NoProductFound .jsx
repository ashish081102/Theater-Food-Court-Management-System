import React from "react";

const NoProductFound = ({ title, description }) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        color: "red",
        fontFamily: "Arial, sans-serif",
        fontSize: "24px",
        fontWeight: "bold",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>No {title} Found</h2>
      <p style={{ lineHeight: "1.5" }}>
        We're sorry, but the {description} you are looking for is currently not
        available.
      </p>
    </div>
  );
};

export default NoProductFound;
