import React from 'react'

const PageButtons = ({totalPages, currentPage, setCurrentPage}) => {
    return (
        <div>
            {currentPage > 1 &&             
            <button
                  onClick={() => setCurrentPage(currentPage-1)}
            >
                Page up
            </button>}
            {Array.from({length: totalPages}, (_, index) => (
                <button
                    onClick={() => setCurrentPage(index+1)}
                >
                    {index+1}
                </button>
            ))}
            {currentPage < totalPages &&             
            <button
                  onClick={() => setCurrentPage(currentPage+1)}
            >
                Page down
            </button>}
        </div>
    )
}

export default PageButtons