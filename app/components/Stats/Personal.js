import React, { Fragment, useState, useEffect } from 'react';

import Table from './Table';
import personalData from '../../data/stats';

const PersonalStats = () => {
  const [data, setData] = useState(personalData);

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1988-04-27T09:24:00');
    setData(Object.assign({}, data, {
      age: {
        label: 'Current age',
        value: ((Date.now() - birthTime) / divisor).toFixed(11),
      },
    }));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => { clearInterval(timer); };
  }, []);

  return (
    <Fragment>
      <h3>Some stats about me</h3>
      <Table data={Object.keys(data).map(key => data[key])} />
    </Fragment>
  );
};

export default PersonalStats;
