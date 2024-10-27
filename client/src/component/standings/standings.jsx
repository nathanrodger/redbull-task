import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../table/table';

const Standings = () => {
    const [driverData, setDriverData] = useState({});

    const fetchApi = async () => {
        const origin = import.meta.env.VITE_ORIGIN;
        const port = import.meta.env.VITE_SERVER_PORT;
        const apiPath = import.meta.env.VITE_API_ENDPOINT;

        const response = (await axios.get(`${origin}:${port}${apiPath}`)).data.map((driver, index) => ({
            position: index + 1,
            name: `${ driver.first_name } ${ driver.last_name }`,
            constructor: driver.season_team_name,
            points: driver.season_points
        }));
        setDriverData(response);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    const columnHeadings = [
        'Pos',
        'Driver',
        'Car',
        'Pts'
    ]

    return (
        <>
            <h2>2023 Driver Standings</h2>
            <Table headings={ columnHeadings } data={ driverData } />
        </>
    )
}

export default Standings;
