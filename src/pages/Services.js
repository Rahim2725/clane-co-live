import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Services = () => {
    const [service, setService] = useState();
    useEffect(() => {
        axios()
    }, [])

    return (
        <div>
            <h1>this services</h1>
        </div>
    );
};

export default Services;