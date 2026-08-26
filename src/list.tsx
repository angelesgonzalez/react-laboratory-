import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useOrgMembers, SearchForm, MemberRow, PaginationControl } from "./pods/member-list";
import { Container, Typography, Stack, Link as MuiLink } from "@mui/material";


export const ListPage: React.FC = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const searchedOrg = searchParams.get('org') ?? 'lemoncode';

  const currentPage = Number(searchParams.get('page') ?? '1');

  const { members, hasNextPage } = useOrgMembers(searchedOrg, currentPage);



  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={3}>
        <Typography variant="h4" component="h2">
          {searchedOrg} members
        </Typography>

        <SearchForm initialOrg={searchedOrg} onSearch={(org) => setSearchParams({ org })} />

        <div className="list-user-list-container">
          <Typography variant='subtitle1' >Avatar</Typography >
          <Typography variant='subtitle1' >Id</Typography >
          <Typography variant='subtitle1' >Name</Typography >
          {members.map((member) => (
            <MemberRow key={member.id} member={member} searchedOrg={searchedOrg} />
          ))}
        </div>

        <PaginationControl currentPage={currentPage} hasNextPage={hasNextPage}

          onPrev={() => setSearchParams(prev => {
            prev.set('page', String(currentPage - 1));
            return prev;
          })}

          onNext={() => setSearchParams(prev => {
            prev.set('page', String(currentPage + 1));
            return prev;
          })} />

        <MuiLink component={Link} to="/detail">Navigate to detail page</MuiLink>
      </Stack>
    </Container>
  );
};
