import React from 'react';
import './Timeline.css';

function Timeline() {
  return (
    <ul className="timeline">
      <li className="timeline__item timeline__title_type_stages">
        <h4 className="timeline__title timeline__title_type_backend">1 неделя</h4>
        <p className="timeline__caption">Back-end</p>
      </li>
      <li className="timeline__item timeline__title_type_weeks">
        <h4 className="timeline__title timeline__title_type_frontend">4 недели</h4>
        <p className="timeline__caption">Front-end</p>
      </li>
    </ul>
  );
}

export default Timeline;
