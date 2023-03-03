import React from 'react';
import FormCreateEmployee from '../components/FormCreateEmployee';

function Home(props) {
  return (
    <div className='home'>
      <h1 className='title'>Create Employee</h1>
      <div className='home__containerForm'>
        <FormCreateEmployee />
      </div>
    </div>
  );
}

export default Home;