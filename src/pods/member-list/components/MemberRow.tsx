import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "../../../core/types";

interface MemberRowProps {
    member: MemberEntity;
    searchedOrg: string;
}


export const MemberRow: React.FC<MemberRowProps> = ({ member, searchedOrg }) => {
    return (
        <React.Fragment>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}?org=${searchedOrg}`}>{member.login}</Link>
        </React.Fragment>
    );
};
