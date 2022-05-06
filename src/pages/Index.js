import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Notebook</Link></h2>
          <p>A collection of interesting things written using the <a href="https://reactjs.org/">React</a> Framework.</p>
        </div>
      </header>
      <p> I was born in the late 80s and grew up in the 90s in Ranchi, India.
      </p>
    </article>
  </Main>
);

export default Index;
