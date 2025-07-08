import React, { useState } from 'react';
import CardStat from './CardStat';

const stats = [
  { label: 'Happy Customer', value: 25000, suffix: 'K' },
  { label: 'Total Rooms', value: 160, suffix: '' },
  { label: 'Award Wins', value: 25, suffix: '' },
  { label: 'Total Members', value: 200, suffix: '' }
];

const Stats = () => {
  const [reloadKey, setReloadKey] = useState(0);

  const reloadStats = () => {
    setReloadKey(prev => prev + 1); // forces remount
  };

  return (
    <section className="stats-section">
      <div className="stats-container" key={reloadKey}>
        {stats.map((item, index) => (
          <CardStat key={index} {...item} />
        ))}
      </div>
      <button className="reload-btn" onClick={reloadStats}>Reload Stats</button>
    </section>
  );
};

export default Stats;
