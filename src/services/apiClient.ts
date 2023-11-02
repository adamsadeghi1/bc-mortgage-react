import axios, { AxiosRequestConfig } from "axios";


const axiosInstance = axios.create({
    baseURL:'http://localhost:5036/api/',
});

class APIClient<Tres,Vreq> {
    endpoint : string;
    constructor(endpoint:string){
        this.endpoint =endpoint;
    }


    post = (data?:Vreq,requestconfig?: AxiosRequestConfig)=>{
        return axiosInstance.post<Tres>(this.endpoint, data,requestconfig)
        .then(res=>res.data)
        .catch(error=>Promise.reject(error))
    }


}

export default APIClient;