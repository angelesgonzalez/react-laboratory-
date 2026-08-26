import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useOrgMembers } from "./useOrgMembers";
import { SearchForm } from "./SearchForm";
import { MemberRow } from "./MemberRow";


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

      <div id="pagination-buttons">
        <button disabled={currentPage <= 1} onClick={() => setSearchParams(prev => {
          prev.set('page', String(currentPage - 1));
          return prev;
        })}> Anterior </button>

        <button disabled={!hasNextPage} onClick={() => setSearchParams(prev => {
          prev.set('page', String(currentPage + 1));
          return prev;
        })}> Siguiente</button> </div>

      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
