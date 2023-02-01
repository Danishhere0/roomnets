import { NextRequest } from 'next/server';

const curLatitude = () => {
    const server = NextRequest();
    console.log("Latitude" + server.geo.latitude);
    return server.geo.latitude;
}

const curLongitude = () => {
    const server = NextRequest();
    console.log("Longitude" + server.geo.longitude);
    return server.geo.longtitude;
}

export default curLatitude;
