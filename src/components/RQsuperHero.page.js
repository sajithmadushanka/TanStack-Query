import React, { useState } from "react";
import Navbar from "./navbar";
import { useFetchingQuery, useUserAddMutation } from "../hooks/useUserAddMutation";

const RQsuperHeroPage = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    const { isLoading, data, isError, error } = useFetchingQuery()

   const {mutate}= useUserAddMutation()
    // Handle form submission
    const handleAddUser = () => {
        console.log('----------------', name, city)
       mutate({ name, city });
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <Navbar />
            <h1>Super Heroes</h1>
            {data?.data.map(hero => (
                <div key={hero.id}>{hero.name}</div>
            ))}

            <input 
                name="name" 
                onChange={(e) => setName(e.target.value)} 
                value={name} 
                placeholder="Name" 
            />
            <input 
                name="city" 
                onChange={(e) => setCity(e.target.value)} 
                value={city} 
                placeholder="City" 
            />
            <button onClick={handleAddUser}>Add</button>
        </div>
    );
};

export default RQsuperHeroPage;
