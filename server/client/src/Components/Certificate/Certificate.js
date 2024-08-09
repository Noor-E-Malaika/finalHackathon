import React, { useState, useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import './Certificate.css';
 import program from '../../assets/program.png';

const Certificate = () => {
  const ref = useRef(null);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div>
      <input
        type='text'
        placeholder='ENTER NAME'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='ENTER COURSE'
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <div className='container' ref={ref}>
        <img src={program} alt="Certificate" height={400} /> 
        
        <div className='content'>
          <h1>{name}</h1>
          <p>{course}</p>
        </div>
      </div>
      <button onClick={onButtonClick}>Download</button>
    </div>
  );
};

export default Certificate;