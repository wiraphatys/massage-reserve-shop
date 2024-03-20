import React from 'react';

function Loading() {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-50 z-50">
            <button className="btn">
                <span className="loading loading-spinner"></span>
                Loading...
            </button>
        </div>
    );
}

export default Loading;
