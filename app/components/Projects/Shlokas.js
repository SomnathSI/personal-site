import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import url from 'url';

const Shlokas = ({ data }) => (
    <div className="cell-container">
        <article className="mini-post-shlokas">
            <header>
                <h3><a href={data.link}>{data.title}</a></h3>
                <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
            </header>
            <a className="image">
                <img src={url.resolve(BASE_PATH, data.image)} alt={data.title} />
            </a>
        </article>
    </div>
);

Shlokas.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    }).isRequired,
};

export default Shlokas;
