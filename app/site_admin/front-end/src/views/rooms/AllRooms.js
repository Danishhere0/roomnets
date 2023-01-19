import React, {useEffect, useState} from 'react';
import Header from "../../components/Headers/Header";
import {
    Card,
    CardHeader,
    Container,
    Row,
    Table,
} from "reactstrap";
import {getAllRooms} from "../../network/ApiAxios";

const RoomsTable = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const runAsync = async () => {
            const response = await getAllRooms();
            const {data} = response;
            console.log(data.rooms);
            if (data.success) {
                setRooms(data.rooms);
            }
        }
        runAsync();
    }, []);

    return (
        <>
            <Header/>
            <Container>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">All Rooms</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Street Name</th>
                                    <th scope="col">No of Rooms</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Rent</th>
                                    <th scope="col">Rent Method</th>
                                    <th scope="col">Living Rooms</th>
                                    <th scope="col">Rooms Avail Date</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                {rooms.map(user => (
                                    <tr key={rooms._id}>
                                        <th scope="row">
                                            {rooms.street_name}
                                        </th>
                                        <td>{rooms.no_rooms}</td>
                                        <td>{rooms.country}</td>
                                        <td>{rooms.rent}</td>
                                        <td>{rooms.rent_method}</td>
                                        <td>{rooms.living_rooms}</td>
                                        <td>{rooms.rooms_avail_date}</td>
                                        <td>{rooms.ad_start_date}</td>
                                        <td>{rooms.ad_end_date}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default RoomsTable;
