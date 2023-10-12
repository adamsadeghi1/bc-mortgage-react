import axios, { AxiosRequestConfig } from "axios";


const axiosInstance = axios.create({
    baseURL:'http://localhost:3005/api/mortgage',
});

class APIClient<T> {
    endpoint : string;
    constructor(endpoint:string){
        this.endpoint =endpoint;
    }

    getAll= (requestconfig?: AxiosRequestConfig)=>{
       return axiosInstance.get<T[]>(this.endpoint,requestconfig).then(res=>res.data);
    }


}

export default APIClient;