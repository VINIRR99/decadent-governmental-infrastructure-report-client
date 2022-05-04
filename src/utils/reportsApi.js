import axios from "axios";

class ReportsApi {
    constructor () {
        this.reportsApi = axios.create({ baseURL: process.env.REACT_APP_REPORT_URL });
    };
    getAllReports = async () => {
        try {
            const { data } = await this.reportsApi.get("/reports");
            return data;
        } catch (error) {console.error(`Error on getAllReports => ${error.message}`)};
    };
    getOneReport = async reportId => {
        try {
            const { data } = await this.reportsApi.get(`/reports/${reportId}`);
            return data;
        } catch (error) {console.error(`Error on getOneReport => ${error.message}`)};
    };
    getSearchResults = async search => {
        try {
            const { data } = await this.reportsApi.get(`/reports/search/${search}`);
            return data;
        } catch (error) {console.error(`Error on getSearchResults => ${error.message}`)};
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
            const errorMessage = `Error on signup => ${error.message}`;
            console.error(errorMessage);
            return errorMessage;
        };
    };
    getUserByUsername = async username => {
        try {
            const { data } = await this.reportsApi.get(`/user/${username}`);
            return data;
        } catch (error) {console.error(`Error on getUserByUsername => ${error.message}`)};
    };
    login = async (username, password) => {
        try {
            const { data } = await this.reportsApi.post("/auth/login", {username, password});
            return data;
        } catch (error) {console.error(`Error on login => ${error.message}`)};
    };
};

export default new ReportsApi();