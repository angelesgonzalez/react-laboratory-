import React, { useState } from "react";


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
        <form onSubmit={handleSubmit}>
            <input value={userInputSearch} onChange={e => setUserInputSearch(e.target.value)} />
            <button type="submit">Search Organization</button>
        </form>
    );

}