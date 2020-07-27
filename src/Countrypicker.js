import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchCountries } from './api';
import './Countrypicker.css';
const Countrypicker = ( { handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);


    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, []);



    return (
        <div>
            <FormControl className="formcontrol">
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) => <option key="i" value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    );
};

export default Countrypicker
