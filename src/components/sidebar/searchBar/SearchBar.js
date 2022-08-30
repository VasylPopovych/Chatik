import React, { useState, useContext, useEffect } from "react";
import classes from "./searchBar.module.scss";
import { Context } from "../../..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const { store } = useContext(Context);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    store.filterChats(searchData);
  }, [searchData]);

  return (
    <div className={classes.wrapper}>
      <form>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          placeholder="Search or start new chat"
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
