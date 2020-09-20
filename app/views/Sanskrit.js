import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from '../layouts/Main';

import Shlokas from '../components/Projects/Shlokas';
import data from '../data/shlokas';

const Sanskrit = () => (
    <Main>
        <Helmet title="Sanskrit" />
        <article className="post" id="sanskrit">
            <header>
                <div className="title">
                    <h2><Link to="/sanskrit">Sanskrit</Link></h2>
                    <p>संस्कृतम्</p>
                </div>
            </header>
            {data.map((shlokas) => (
                <Shlokas
                    data={shlokas}
                    key={shlokas.title}
                />
            ))}
        </article>
    </Main>
);

export default Sanskrit;
