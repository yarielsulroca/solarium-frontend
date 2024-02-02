import React from 'react';

const TextHeader = ({ text }) => {
return (
    <div>
    <h1 style={{ textAlign: 'center', color: 'blue' }}>
        {text}
    </h1>
    </div>
);
}

export default TextHeader;