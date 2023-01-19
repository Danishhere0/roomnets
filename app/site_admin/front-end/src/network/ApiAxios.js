import axios from 'axios';
import config from "../config";

// const https = require('https');
//
// const agent = new https.Agent({
//     rejectUnauthorized: false,
// });

const instance = axios.create({
    baseURL: config.WS_BASE_URL,
});

instance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = (token ? token : '');
    config.headers.ContentType = 'application/json';
    return config;
});

export const getAll = async () => (
    await instance.post('users/all')
);

export const register = async (name, email, password, phone, agency, role) => (
    await instance.post('users/register', {name, email, password, phone, agency, role})
);

export const confirmRegister = async id => (
    await instance.post(`users/confirm/${id}`)
);

export const forgotPassword = async email => (
    await instance.post('users/forgotpassword', {email})
);

export const confirmReset = async (id, password) => (
    await instance.post(`users/resetpass/${id}`, {password})
);

export const login = async (email, password) => (
    await instance.post('users/login', {email, password})
);

export const logout = async token => (
    await instance.post('users/logout', {token})
);

export const edit = async (userID, name, email) => (
    await instance.post('/users/edit', {userID, name, email})
);ListRoomsByLocation
export const getAllRooms = async () => (
    await instance.post('ListRooms')
);
export const ListRoomsByLocation = async (location) => (
    await instance.post('ListRoomsByLocation',{location})
);

export const PostAddRooms = `${WS_BASE_URL}/PostAddRoms`;

export const ListRoomsByState = `${WS_BASE_URL}/ListRoomsByState`;

export const ListRoomsByMe = `${WS_BASE_URL}/ListRoomsByMe`;

export const deleteItemRooms = `${WS_BASE_URL}/deleteItemRooms`;

/*export const PostAddRooms = async (no_rooms,) => (
    await instance.post('PostAddRooms')
);
export const ListRoomsByState = async () => (
    await instance.post('ListRoomsByState')
);
export const ListRoomsByMe = async () => (
    await instance.post('ListRoomsByMe')
);
export const deleteItemRooms = async () => (
    await instance.post('deleteItemRooms')
);*/