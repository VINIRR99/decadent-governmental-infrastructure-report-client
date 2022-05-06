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
        } catch (error) {console.error(`Error on getAllReports => ${error.message}`, error.response.data)};
    };
    getOneReport = async reportId => {
        try {
            const { data } = await this.reportsApi.get(`/reports/${reportId}`);
            return data;
        } catch (error) {console.error(`Error on getOneReport => ${error.message}`, error.response.data)};
    };
    getSearchResults = async search => {
        try {
            const { data } = await this.reportsApi.get(`/reports/search/${search}`);
            return data;
        } catch (error) {console.error(`Error on getSearchResults => ${error.message}`, error.response.data)};
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
            return data.user;
        } catch (error) {console.error(`Error on signup => ${error.message}`, error.response.data)};
    };
    getUserByUsername = async username => {
        try {
            const { data } = await this.reportsApi.get(`/user/${username}`);
            return data;
        } catch (error) {console.error(`Error on getUserByUsername => ${error.message}`, error.response.data)};
    };
    login = async (username, password) => {
        try {
            const { data } = await this.reportsApi.post("/auth/login", {username, password});
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            return data.user;
        } catch (error) {console.error(`Error on login => ${error.message}`, error.response.data)};
    };
    postReport = async newReport => {
        try {
            const { data } = await this.reportsApi.post("/reports", newReport);
            return data;
        } catch (error) {console.error(`Error on postReport => ${error.message}`, error.response.data)};
    };
    uploadReportImage = async (file, reportId) => {
        try {
            const imgData = new FormData();
            imgData.append("image", file);

            const { data } = await this.reportsApi.put(`/reports/upload-image/${reportId}`, imgData);
            return data;
        } catch (error) {console.error(`Error on uploadReportImage => ${error.message}`, error.response.data)};
    };
    updateReport = async (reportId, inputs) => {
        try {
            const { data } = await this.reportsApi.put(`reports/${reportId}`, inputs);
            return data;
        } catch (error) {console.error(`Error on updateReport => ${error.message}`, error.response.data)};
    };
    deleteReport = async reportId => {
        try {
            await this.reportsApi.delete(`/reports/${reportId}`);
        } catch (error) {console.error(`Error on deleteReport => ${error.message}`, error.response.data)};
    };
    postComment = async (reportId, comment) => {
        try {
            const { data } = await this.reportsApi.post(`/comment/${reportId}`, { comment });
            return data;
        } catch (error) {console.error(`Error on postComment => ${error.message}`, error.response.data)};
    };
    deleteComment = async commentId => {
        try {
            await this.reportsApi.delete(`/comment/${commentId}`);
        } catch (error) {console.error(`Error on updateReport => ${error.message}`, error.response.data)};
    };
};

export default new ReportsApi();