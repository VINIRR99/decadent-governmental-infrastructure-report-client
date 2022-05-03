import axios from "axios";

class ReportsApi {
    constructor () {
        this.reportsApi = axios.create({ baseURL: process.env.REACT_APP_REPORT_URL });
    };
    getAllReports = async () => {
        try {
            const { data } = await this.reportsApi.get("/reports");
            return data;
        } catch (error) {throw error}
    };
    getSearchResults = async search => {
        try {
            const { data } = await this.reportsApi.get(`/reports/${search}`);
            return data;
        } catch (error) {throw error};
    };
    signup = async (name, username, password, passwordConfirmation) => {
        try {
            const { data } = await this.reportsApi.post("/auth/signup", {
                name,
                username,
                password,
                passwordConfirmation
            });
            return data;
        } catch (error) {
            throw error;
        };
    };
};

export default new ReportsApi();