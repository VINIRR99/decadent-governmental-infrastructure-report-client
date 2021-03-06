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
            if (    
                (error.response.status === 401) &&
                (error.response.data.message !== "Error on login!") &&
                (error.response.data.message !== "Error while updating an user information!") &&
                (error.response.data.message !== "Error while deleting user!")
            ) {
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
            if (data.length === 0) return [{ notFound: "No reports found" }];

            return data;
        } catch (error) {
            console.error(`Error on getAllReports => ${error.message}`, error.response);
            return [{ statusText: error.response.statusText, status: error.response.status }];
        };
    };
    getOneReport = async reportId => {
        try {
            const { data } = await this.reportsApi.get(`/reports/${reportId}`);
            return data;
        } catch (error) {
            console.error(`Error on getOneReport => ${error.message}`, error.response);
            return { statusText: error.response.statusText, status: error.response.status };
        };
    };
    getSearchResults = async search => {
        try {
            const { data } = await this.reportsApi.get(`/reports/search/${search}`);
            if (data.length === 0) return [{ notFound: "No results found" }];

            return data;
        } catch (error) {
            console.error(`Error on getSearchResults => ${error.message}`, error.response);
            return [{ statusText: error.response.statusText, status: error.response.status }];
        };
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
        } catch (error) {
            console.error(`Error on signup => ${error.message}`, error.response);
            return `Error on signup => 
            status: ${error.status}
            message: ${error.response.data.message}
            error: ${error.response.data.error}`;
        };
    };
    getUserByUsername = async username => {
        try {
            const { data } = await this.reportsApi.get(`/user/${username}`);
            return data;
        } catch (error) {
            console.error(`Error on getUserByUsername => ${error.message}`, error.response);
            return { statusText: error.response.statusText, status: error.response.status };
        };
    };
    login = async (username, password) => {
        try {
            const { data } = await this.reportsApi.post("/auth/login", {username, password});
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            return data.user;
        } catch (error) {console.error(`Error on login => ${error.message}`, error.response)};
    };
    postReport = async newReport => {
        try {
            const { data } = await this.reportsApi.post("/reports", newReport);
            return data;
        } catch (error) {console.error(`Error on postReport => ${error.message}`, error.response)};
    };
    uploadReportImage = async (file, reportId) => {
        try {
            const imgData = new FormData();
            imgData.append("image", file);

            const { data } = await this.reportsApi.put(`/reports/upload-image/${reportId}`, imgData);
            return data;
        } catch (error) {console.error(`Error on uploadReportImage => ${error.message}`, error.response)};
    };
    updateReport = async (reportId, inputs) => {
        try {
            const { data } = await this.reportsApi.put(`reports/${reportId}`, inputs);
            return data;
        } catch (error) {console.error(`Error on updateReport => ${error.message}`, error.response)};
    };
    deleteReport = async reportId => {
        try {
            await this.reportsApi.delete(`/reports/${reportId}`);
        } catch (error) {console.error(`Error on deleteReport => ${error.message}`, error.response)};
    };
    postComment = async (reportId, comment) => {
        try {
            const { data } = await this.reportsApi.post(`/comment/${reportId}`, { comment });
            return data;
        } catch (error) {console.error(`Error on postComment => ${error.message}`, error.response)};
    };
    updateComment = async (commentId, comment) => {
        try {
            const { data } = this.reportsApi.put(`/comment/${commentId}`, { comment });
            return data;
        } catch (error) {console.error(`Error on updatedComment => ${error.message}`, error.response)};
    };
    deleteComment = async commentId => {
        try {
            await this.reportsApi.delete(`/comment/${commentId}`);
        } catch (error) {console.error(`Error on deleteComment => ${error.message}`, error.response)};
    };
    updateUser = async inputs => {
        try {
            const { data } = await this.reportsApi.put("/user", inputs);
            return data;
        } catch (error) {
            console.error(`Error on updateUser => ${error.message}`, error.response);
            return { errorMsg: error.response.data.error };
        };
    };
    uploadProfileImage = async file => {
        try {
            const imgData = new FormData();
            imgData.append("image", file);

            const { data } = await this.reportsApi.put("/user/upload-image", imgData);
            return data;
        } catch (error) {console.error(`Error on uploadProfileImage => ${error.message}`, error.response)};
    };
    deleteAccount = async (username, password) => {
        try {
            await this.reportsApi.delete("/user", { data: { username, password } });
            return { succesMsg: "Account successfully deleted!" };
        } catch (error) {
            console.error(`Error on deleteAccount => ${error.message}`, error.response);
            return { errorMsg: error.response.data.error };
        };
    };
};

export default new ReportsApi();