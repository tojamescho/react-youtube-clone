import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    onSearch(inputRef.current.value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src='/images/logo.png' alt='logo' />
        <h1 className={styles.channelTitle}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type='Search'
        placeholer='Search..'
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img
          className={styles.buttonImg}
          src='/images/search.png'
          alt='search'
        />
      </button>
    </header>
  );
};

export default SearchHeader;
