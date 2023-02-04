/**
 * It takes in an array of objects and returns a row of property boxes
 * @returns A section with a container, row, and col.
 */
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { LatestForSale, Rent } from "../../constValues/constValues";
import PropertyBox from "./propertyBoxs/PropertyBox";
import Pagination from "../../layout/Pagination";
import { getData } from "../../utils/getData";

const PropertySection = ({ value, range }) => {
  const [ListRooms, setListRooms] = useState();
  const [pageNo, setpageNo] = React.useState(0);
  const [pagination, setPagination] = React.useState({ total: 0, limit: "" });
  const router = useRouter();
  //const { pageNo,  } = router.query;

  useEffect(() => {
    getData(`${process.env.API_URL}/ListRoomsByState/${state}?pageNo=${pageNo}`)
    .then((res) => {
      setListRooms(res.data.userData);

      res.data.userData &&
      res.data.userData.length > 0 &&
        setPagination({
          ...pagination,
          limit: res.data.limit,
          total: res.data.total,
        });
      res.data.userData.length > 0 && setpageNo(pageNo + 1);
    })
    .catch((error) => console.log("Error", error)); 
  }, []);    

  return (
    <section className='property-section'>
      <Container>
        <Row className='ratio_55'>
          <Col>
            <div className='title-1'>
              <span className='label label-gradient'>{Rent}</span>
              <h2>Latest Rent Listing</h2>
              <hr />
            </div>
            <Row className='property-2 column-space'>
              {ListRooms &&
                ListRooms.map((data, i) => (
                  <Col xl='4' md='6' className='wow fadeInUp' key={i}>
                    <PropertyBox data={data} />
                  </Col>
                ))}
            </Row>
            <Pagination toPage={pageNo} setToPage={setpageNo} totalPages={total}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PropertySection;
