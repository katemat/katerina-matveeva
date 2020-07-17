import React from 'react';
import skillsData from '../../skillsData.js';
import './Skills.css';
import Spin from 'react-reveal/Spin';

export default function Skills() {
  let data = skillsData;
  return (
    <div className="skills-container">
      {data.map((skill, idx) => {
        return (
          <div key={idx} className="skill-wrapper">
            {skill.icon}
            <Spin>
              <p className="skill-title">{skill.title}</p>
            </Spin>
          </div>
        );
      })}
    </div>
  );
}