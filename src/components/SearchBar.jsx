import React from 'react'

import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  return (
    <div className="search">
      <label className="glass" htmlFor="searchInput">
        <BsSearch />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="즐겨찾는 유튜버를 검색하세요!"
        title="검색"
      />
    </div>
  )
}
export default SearchBar