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
};

export default new ReportsApi();