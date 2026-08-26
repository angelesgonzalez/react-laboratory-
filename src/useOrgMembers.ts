import { useState, useEffect } from "react";

import { MemberEntity } from "./types";


export const useOrgMembers = (searchedOrg: string, currentPage: number) => {

    const [members, setMembers] = useState<MemberEntity[]>([]);

    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        fetch(`https://api.github.com/orgs/${searchedOrg}/members?per_page=10&page=${currentPage}`)
            .then((response) => {
                const linkHeader = response.headers.get('Link');
                setHasNextPage(linkHeader?.includes('rel="next"') ?? false);

                return response.json()
            })

            .then((json) => setMembers(json));
    }, [searchedOrg, currentPage]);

    return { members, hasNextPage };
}