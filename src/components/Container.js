import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='container-content' style={{
            margin: '0 auto', maxWidth: '100vw', overflow: "auto" }}>
            {children}
        </div>
    );
}

export default Container;