import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchCountries } from './api';
const Countrypicker = () => {

    const [fetchedCountries, setFetchedCountries] = useState([]);


    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries);


    return (
        <div>
            <FormControl>
                <NativeSelect>
                    <option value="global">Global</option>
    {fetchedCountries.map((country,i) => <option key="i" value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Countrypicker
