import React from 'react';
import {education as data} from '../assets/data/data'

const Education = () => {
  console.log(data);
  
  return (
    <div id='education' className='md:overflow-visible overflow-hidden w-full relative'>
      <div className='w-full text-center mb-16 text-4xl text-white title'>
        <h1>Education</h1>
      </div>
      <div className='w-full rounded-3xl edu-line relative h-full'>
        
        {/* Timeline Logos */}
        <div>
          <img className='clg-logo logo-1' src={data[0].image} alt="" />
        </div>  
        <div>
          <img className='clg-logo logo-2' src={data[1].image} alt="" />
        </div>
        <div>
          <img className='clg-logo logo-3' src={data[2].image} alt="" />
        </div>

        {/* Education Card 1 - Left Side */}
        <div className='edu edu-1 lefttoright rounded-2xl'>
          <div className='edu-header'>
            <img className='edu-card-logo' src={data[0].image} alt="" />
            <div className='edu-header-content'>
              <h3 className='edu-institution'>{data[0].institution}</h3>
              <p className='edu-degree'>{data[0].degree}</p>
              <p className='edu-field'>{data[0].field}</p>
              <p className='edu-year'>{data[0].year}</p>
            </div>
          </div>
          <div className='edu-grade'>Grade: <span className='edu-grade-value'>{data[0].gpa}</span></div>
          <div className='edu-description'>{data[0].description}</div>
        </div>

        {/* Education Card 2 - Right Side */}
        <div className='edu edu-2 righttoleft rounded-2xl'>
          <div className='edu-header'>
            <img className='edu-card-logo' src={data[1].image} alt="" />
            <div className='edu-header-content'>
              <h3 className='edu-institution'>{data[1].institution}</h3>
              <p className='edu-degree'>{data[1].degree}</p>
              <p className='edu-field'>{data[1].field}</p>
              <p className='edu-year'>{data[1].year}</p>
            </div>
          </div>
          <div className='edu-grade'>Grade: <span className='edu-grade-value'>{data[1].gpa}</span></div>
          <div className='edu-description'>{data[1].description}</div>
        </div>

        {/* Education Card 3 - Left Side */}
        <div className='edu edu-3 lefttoright rounded-2xl'>
          <div className='edu-header'>
            <img className='edu-card-logo' src={data[2].image} alt="" />
            <div className='edu-header-content'>
              <h3 className='edu-institution'>{data[2].institution}</h3>
              <p className='edu-degree'>{data[2].degree}</p>
              <p className='edu-field'>{data[2].field}</p>
              <p className='edu-year'>{data[2].year}</p>
            </div>
          </div>
          <div className='edu-grade'>Grade: <span className='edu-grade-value'>{data[2].gpa}</span></div>
          <div className='edu-description'>{data[2].description}</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
