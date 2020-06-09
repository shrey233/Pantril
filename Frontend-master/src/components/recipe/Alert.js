import React from "react";
//18706941 shrey Parekh
// code referenced from recipe search app.
// basically a constant alert created which will be used in
// recipe premium.jsx to pass the alert messages.

const Alert = ({ alert }) => {
  return (
    // create class alert for css.
    <div className="alert">
      <h3>{alert}</h3>
    </div>
  );
};
// then we export alert page
export default Alert;
