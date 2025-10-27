import React from 'react';
import { useLoaderData } from 'react-router';

const Services = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <div>gg</div>
        </div>
    );
};

export default Services;