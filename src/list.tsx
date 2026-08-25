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

  // const [searchedOrg, setSearchedOrg] = useState('lemoncode')

  const [userInputSearch, setUserInputSearch] = useState('lemoncode');




  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${searchedOrg}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [searchedOrg]);

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
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
