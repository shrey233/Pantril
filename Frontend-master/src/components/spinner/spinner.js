import React from "react";
import { BounceLoader } from "react-spinners";
import { Container } from "reactstrap";

const Spinner = () => {
  const [loading] = React.useState(true);

  return (
    <Container className="d-flex justify-content-center mt-5">
      <BounceLoader
        sizeUnit={"px"}
        size={60}
        color={"#008B8B"}
        loading={loading}
      />
    </Container>
  );
};

export default Spinner;
