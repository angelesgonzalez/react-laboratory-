import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

interface SearchFormProps {
    initialOrg: string;
    onSearch: (org: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ initialOrg, onSearch }) => {

    const [userInputSearch, setUserInputSearch] = useState(initialOrg);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(userInputSearch);
    };

    return (
        <Stack component="form" direction="row" spacing={2} onSubmit={handleSubmit}>
            <TextField
                label="GitHub organization"
                size="small"
                fullWidth
                value={userInputSearch}
                onChange={e => setUserInputSearch(e.target.value)}
            />
            <Button type="submit" variant="contained">Search</Button>
        </Stack>
    );

}