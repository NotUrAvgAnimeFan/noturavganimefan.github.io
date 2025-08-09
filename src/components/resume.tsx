import React from 'react';
import ResumePDF from '../assets/SD Resume 2.0.pdf'

const Resume: React.FC = () => {
    return (
        <div className='w-full h-100 sm:h-200'>
            <embed src={ResumePDF} type="application/pdf" className='w-full h-full border-0' />
        </div>
    );
};

export default Resume;