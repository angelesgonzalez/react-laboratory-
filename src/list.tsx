import React from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = useState<MemberEntity[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchedOrg = searchParams.get('org') ?? 'lemoncode';

  const currentPage = Number(searchParams.get('page') ?? '1');

  const [userInputSearch, setUserInputSearch] = useState(searchedOrg);

  const [hasNextPage, setHasNextPage] = useState(false);


  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${searchedOrg}/members?per_page=10&page=${currentPage}`)
      .then((response) => {
        const linkHeader = response.headers.get('Link');
        setHasNextPage(linkHeader?.includes('rel="next"') ?? false);

        return response.json()
      })

      .then((json) => setMembers(json));
  }, [searchedOrg, currentPage]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ org: userInputSearch })
  }

  return (
    <>
      <h2>Hello from List page</h2>

      <form onSubmit={handleSearch}>
        <input value={userInputSearch} onChange={e => setUserInputSearch(e.target.value)}></input>
        <button type="submit">Search Organization</button>
      </form>

      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}?org=${searchedOrg}`}>{member.login}</Link>
          </React.Fragment>
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
