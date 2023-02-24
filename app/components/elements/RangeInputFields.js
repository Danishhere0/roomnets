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
  var [MIN, setMIN] = useState(min);
  var [MAX, setMAX] = useState(max);
  useEffect(() => {
    setMIN(min);
    setMAX(max);
  }, [max, min]);
  const STEP = 1;
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
                values={label === "Rent" ? rent : area}
                step={STEP}
                min={MIN || 40}
                max={MAX || 10000}
                onChange={(values) => {
                  setFilterValues({ ...filterValues, [`${name}`]: values });
                  dispatch({ type: label.toLowerCase(), payload: values });
                }}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                    }}>
                    <div
                      ref={props.ref}
                      style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values: label === "Rent" ? rent : area,
                          colors: ["#ccc", "var(--theme-default2)", "#ccc"],
                          min: MIN,
                          max: MAX,
                        }),
                        alignSelf: "center",
                      }}>
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div {...props}>
                    <div
                      style={{
                        height: "16px",
                        width: "8px",
                        borderRadius: "30%",
                        backgroundColor: "var(--theme-default2)",
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
