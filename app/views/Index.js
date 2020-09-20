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
      <p> When all the desires that cling to the heart fall away, then a mortal becomes immortal and realizes
        Brahman in this very life. <i>Katha Upanishad Part 2 Chapter 3</i>
      </p>
      <p> Source available <a href="https://github.com/SomnathSI/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
