import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzk4YTljOGRkMDM4MjAxODZhY2RjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTM1NTgxMCwiZXhwIjoxNjM1Nzg3ODEwfQ.7hEHCGgjzfRF3R5OBgPxtUs8ZzO8YlqaSj8sNlE8USE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
