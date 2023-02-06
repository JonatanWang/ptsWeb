import axios, { AxiosError, AxiosResponse } from "axios";
import { QueryClient, useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { Application } from "../types/application";

const useFetchApplications = () => {
    return useQuery<Application[], AxiosError>("applications", () =>
    axios.get(`${config.baseApiUrl}/applications`).then((resp) => resp.data));
}

const useFetchApplication = (id: number) => {
    return useQuery<Application, AxiosError>(["applications", id], () =>
    axios.get(`${config.baseApiUrl}/application/${id}`).then((resp) => resp.data));
}

const useAddApplication = () => {

    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, Application>(
        (a) => axios.post(`${config.baseApiUrl}/applications`, a),
        {
            onSuccess : () => {
                queryClient.invalidateQueries("applications");
                nav("/application/success")
            }
        }
    );
}

export default useFetchApplications;
export {useFetchApplication, useAddApplication};
