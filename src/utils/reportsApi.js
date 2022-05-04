import axios from "axios";

class ReportsApi {
    constructor () {
        this.reportsApi = axios.create({ baseURL: process.env.REACT_APP_REPORT_URL });
        this.reportsApi.interceptors.request.use(config => {
            const token = localStorage.getItem("token");
            if (token) config.headers = { "Authorization": `Bearer ${token}` };
            return config;
        }, error => {console.error(error)});
        this.reportsApi.interceptors.response.use(config => config, error => {
            if (error.response.status === 401) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location = "/";
            };
            throw error;
        })
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
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
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
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            return data.user;
        } catch (error) {console.error(`Error on login => ${error.message}`)};
    };
};

export default new ReportsApi();