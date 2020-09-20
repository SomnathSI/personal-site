import { Chart } from "react-google-charts";
import React from 'react';
import Main from "../layouts/Main";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import GOOGLE_MAP_TOKEN from "../../.secrets";

const options = {
    region: 'IN',
    displayMode: 'regions',
    resolution: 'provinces',
    // width: 640,
    // height: 480
};
var columns = [
    {'District' : 'Population'}
];
const options_jh = {
    region: 'BD',
    displayMode: 'markers',
    dataMode: 'Markers'
    // resolution: 'metros',
    // width: 640,
    // height: 480
};

const Visualization = () => (
    <Main>
        <Helmet title="Data Visualization" />
        <article className="post" id="visualization">
            <header>
                <div className="title">
                    <h2><Link to="/visualization">Data Visualization</Link></h2>
                    <p>Data visualizations examples</p>
                </div>
            </header>
            <Chart
                // width={'500px'}
                // height={'300px'}
                chartType="GeoChart"
                data={[
                    ['State', 'Population'],
                    ['Uttar Pradesh', 199581477],
                    ['Maharashtra', 112372972],
                    ['Bihar', 103804637],
                    ['West Bengal', 91347736],
                    ['Madhya Pradesh', 72597565],
                    ['Tamil Nadu', 72138958],
                    ['Rajasthan', 68621012],
                    ['Karnataka', 61130704],
                    ['Gujarat', 60383628],
                    ['Andhra Pradesh', 49386799],
                    ['Odisha', 41947358],
                    ['Telangana', 35286757],
                    ['Kerala', 33387677],
                    ['Jharkhand', 32966238],
                    ['Assam', 31169272],
                    ['Punjab', 27704236],
                    ['Chhattisgarh', 25540196],
                    ['Haryana', 25353081],
                    ['Jammu and Kashmir', 12548926],
                    ['Uttarakhand', 10116752],
                    ['Himachal Pradesh', 6856509],
                    ['Tripura', 3671032],
                    ['Meghalaya', 2964007],
                    ['Manipur', 2721756],
                    ['Nagaland', 1980602],
                    ['Goa', 1457723],
                    ['Arunachal Pradesh', 1382611],
                    ['Mizoram', 1091014],
                    ['Sikkim', 607688],
                    ['Delhi', 16753235],
                    ['Puducherry', 1244464],
                    ['Chandigarh', 1054686],
                    ['Andaman and Nicobar Islands', 379944],
                    ['Dadra and Nagar Haveli', 342853],
                    ['Daman and Diu', 242911],
                    ['Lakshadweep', 64429]
                ]}
                options={options}
                // Note: you will need to get a mapsApiKey for your project.
                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                mapsApiKey={{GOOGLE_MAP_TOKEN}}
                rootProps={{ 'data-testid': '1' }}
            />
            <Chart
                // width={'500px'}
                // height={'300px'}
                chartType="GeoChart"
                data={[
                    ['District', 'Population'],
                    ['Faridpur', 100],
                    ['Dhaka', 200],
                    ['Barishal', 50],
                    ['Mymenshingh', 300]
                ]}
                columns={columns}
                options={options_jh}
                // Note: you will need to get a mapsApiKey for your project.
                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                mapsApiKey={{GOOGLE_MAP_TOKEN}}
                rootProps={{ 'data-testid': '2' }}
            />
        </article>
    </Main>
);

export default Visualization;