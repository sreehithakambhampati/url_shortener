import axios from "axios"


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
    timeout: 10000,
    withCredentials: true
})


axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
             const { status, data } = error.response;
            
            switch (status) {
                case 400:
                    console.error("Bad Request:", data);
                    break;
                case 401:
                    console.error("Unauthorized:", data);
                    break;
                case 403:
                    console.error("Forbidden:", data);
                    break;
                case 404:
                    console.error("Not Found:", data);
                    break;
                case 500:
                    console.error("Server Error:", data);
                    break;
                default:
                    console.error(`Error (${status}):`, data);
            }
        } else if (error.request) {
            console.error("Network Error: No response received", error.request);
        } else {
            console.error("Error:", error.message);
        }

       
        return Promise.reject({

            message: error.response?.data?.message || error.message || "Unknown error occurred",
            status: error.response?.status,
            data: error.response?.data,
        
        });
    }
);
export default axiosInstance