import React from "react";
import { Button, Stack, Typography } from "@mui/material";

interface PaginationControlProps {
    currentPage: number;
    hasNextPage: boolean;
    onNext: () => void;
    onPrev: () => void;
}


export const PaginationControl: React.FC<PaginationControlProps> = ({ currentPage, hasNextPage, onNext, onPrev }) => {

    return (
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <Button variant='contained' disabled={currentPage <= 1} onClick={onPrev}> Anterior </Button>
            <Typography>Page {currentPage}</Typography>
            <Button variant='contained' disabled={!hasNextPage} onClick={onNext}> Siguiente</Button>
        </Stack>)
}




