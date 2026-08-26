import React from "react";

interface PaginationControlProps {
    currentPage: number;
    hasNextPage: boolean;
    onNext: () => void;
    onPrev: () => void;
}


export const PaginationControl: React.FC<PaginationControlProps> = ({ currentPage, hasNextPage, onNext, onPrev }) => {

    return (
        <div id="pagination-control">
            <button disabled={currentPage <= 1} onClick={onPrev}> Anterior </button>
            <button disabled={!hasNextPage} onClick={onNext}> Siguiente</button>

        </div>)
}




