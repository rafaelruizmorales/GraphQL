import React, { useState } from 'react';

import ShowsResultQuery from './ShowsResultQuery'

const SearchShow = () => {

  const [searchInput, setSearchInput] = useState('');

  return (
    <div>
      <input
        value={searchInput}
        placeholder="Your favorite show name"
        onChange={e => setSearchInput(e.target.value)}
        autoFocus={true}
      />
      {searchInput !== '' && <ShowsResultQuery searchInput={searchInput} />}
    </div>
  );
}

export default SearchShow;
