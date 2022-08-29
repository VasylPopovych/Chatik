import React, { useState, useContext, useEffect } from "react";
import classes from "./searchBar.module.scss";
import { Context } from "../../..";

const SearchBar = () => {
  const { store } = useContext(Context);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    store.filterChats(searchData);
  }, [searchData]);

  return (
    <div className={classes.wrapper}>
      <form>
        <button type="button">search</button>
        <input
          type="text"
          value={searchData}
          onInput={(e) => {
            setSearchData(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
