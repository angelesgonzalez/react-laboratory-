import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Typography, Link as MuiLink } from "@mui/material";
import { MemberEntity } from "../../../core/types";

interface MemberRowProps {
    member: MemberEntity;
    searchedOrg: string;
}


export const MemberRow: React.FC<MemberRowProps> = ({ member, searchedOrg }) => {
    return (
        <React.Fragment>
            <Avatar src={member.avatar_url} alt={member.login} />
            <Typography>{member.id}</Typography>
            <MuiLink component={Link} to={`/detail/${member.login}?org=${searchedOrg}`}>
                {member.login}
            </MuiLink>
        </React.Fragment>
    );
};
