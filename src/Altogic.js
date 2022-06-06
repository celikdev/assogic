import { createClient } from "altogic";

const baseURL = process.env.REACT_APP_ALTOGIC_BASE_URL;
const clientKey = process.env.REACT_APP_ALTOGIC_CLIENT_KEY;

const altogic = createClient(baseURL, clientKey);

export default altogic;
