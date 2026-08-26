import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useOrgMembers, SearchForm, MemberRow, PaginationControl } from "./pods/member-list";


export const ListPage: React.FC = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const searchedOrg = searchParams.get('org') ?? 'lemoncode';

  const currentPage = Number(searchParams.get('page') ?? '1');

  const { members, hasNextPage } = useOrgMembers(searchedOrg, currentPage);



  return (
    <>
      <h2>Hello from List page</h2>

      <SearchForm initialOrg={searchedOrg} onSearch={(org) => setSearchParams({ org })} />

      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
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

      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
