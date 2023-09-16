import React, { useState, useEffect } from'react';
const fetchAllSuperHero = async (searchText) => {
    let url = `https://superheroapi.com/api.php/3382114452106328/search/${searchText}`;
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      if (responseData.response === 'success') {
        setAllData(responseData.results);
        // Use the imported showSearchList function
        showSearchList(responseData.results);
      }
    } catch (error) {
      console.log(error);
    }
  };
export const showSearchList = (data, setSearchText, allData, setSelectedData, clearSearchList) => {
    
    const searchList = document.querySelector('.search-list');
    if (searchList) {
      clearSearchList();
      data.forEach((dataItem) => {
        const divElem = document.createElement('div');
        divElem.classList.add('search-list-item');
        divElem.innerHTML = `
          <img src="${dataItem.image.url ? dataItem.image.url : ''}" alt="">
          <p data-id="${dataItem.id}">${dataItem.name}</p>
        `;
        divElem.addEventListener('click', handleSearchResultClick); // Add click listener
        searchList.appendChild(divElem);
      });
    }
  };
  
  const clearSearchList = () => {
    const searchList = document.querySelector('.search-list');
    if (searchList) {
      searchList.innerHTML = '';
    }
  };
  
  const handleSearchResultClick = (e) => {

    clearSearchList();
    setSearchText('');
  
    const searchId = e.target.dataset.id;
    const singleData = allData.find((data) => searchId === data.id.toString());
    setSelectedData(singleData);
    console.log(singleData);
  
    if (singleData) {
      // Update the details as needed
    }
  };

  