import React from "react";
import { Row } from "reactstrap";

const DetailsProperty = (props) => {
  return (
    <div className='details-property'>
      <Row>
        { props.body }
      </Row>
    </div>
  );
};

export default DetailsProperty;
