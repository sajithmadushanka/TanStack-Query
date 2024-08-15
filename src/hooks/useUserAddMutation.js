import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {request} from  '../utils/axiosUtils'

const addHero = (newHero) => {
    console.log('news', newHero)
    return request({url:'/SuperHeros', method:'post', data:newHero});
}
// Fetching data from the server
const fetchingData = () => {
    return request({url:'/SuperHeros'});
    // return axios.get('http://localhost:4001/SuperHeros');
}

// useQuery to fetch heroes
export const useFetchingQuery= () =>{
    return useQuery({
        queryKey: ["superHero"],
        queryFn: fetchingData
    });
} 

export const useUserAddMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addHero,
        onSuccess: () => {
            console.log('Hero added successfully!');
            // Invalidate and refetch
            queryClient.invalidateQueries(["superHero"]);
        },
        onError: (error) => {
            console.error('Error adding hero:', error);
        }
    });
}