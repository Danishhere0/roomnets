import React, { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { useDispatch } from "react-redux";
import { Col, FormGroup, Label } from "reactstrap";
import { useSelector } from "react-redux";
import NoSsr from "../../utils/NoSsr";

const RangeInputFields = ({ label, name, filterValues, setFilterValues, min, max, sm, lg }) => {
  const { propertyStatus, propertyType, maxRooms, bed, bath, agencies, rent, area, sortBy } = useSelector((state) => state.inputsReducer);

  const { symbol, currencyValue } = useSelector((state) => state.currencyReducer);
  const dispatch = useDispatch();
 // var [MIN, setMIN] = useState(min);
 // var [MAX, setMAX] = useState(max);
  useEffect(() => {
    setMIN(min);
    setMAX(max);
  }, [max, min]);
  const [values, setValues] = React.useState([50]);
  //const STEP = 1;
  const STEP = 0.1;
const MIN = 0;
const MAX = 100;
  return (
    <Col lg={lg || 12} sm={sm || 12}>
      <NoSsr>
        <FormGroup>
          <div className="price-range">
            <Label>
              {label} : {label === "Rent" && `${symbol}`} {(label === "Area" ? area : rent * currencyValue)} - {label === "Rent" && `${symbol}`}{" "}
              {(label === "Area" ? area : rent * currencyValue)} {label === "Area" && "sq ft"}
            </Label>
            <div id={label === "Rent" ? "slider-1" : "slider-2"} className="theme-range-3">
            <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}

        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%'
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#548BF4', '#ccc'],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              borderRadius: '4px',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA'
            }}
          >
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? '#548BF4' : '#CCC'
              }}
            />
          </div>
        )}
      />
            </div>
          </div>
        </FormGroup>
      </NoSsr>
    </Col>
  );
};

export default RangeInputFields;
