import  axios  from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2U3MzJmMjBlODI1ZTI1MTgyNTEwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTI5MDY0MiwiZXhwIjoxNjU5NTQ5ODQyfQ.Hvtz-td0dMm5CM3gHFOqL49jh0ZM1Zo5CQyp9V3-_8g";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
