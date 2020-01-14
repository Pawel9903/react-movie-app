import React, { useState } from "react";
import { apiKey } from '../../apiKey'
import { http } from '../../helpers/http'
import movieService from "../../services/MovieService";

const requestToApi = (search) => {
   return http.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${search}`)
};

const Home = () => {

    const [text, setText] = useState('');
    const [searchText, setSearchText] = useState('');

  return(
      <div>
          <input onChange={
             (event) => {
                 setSearchText(event.target.value)
             }
          } />
          <button onClick={() => {
              movieService.searchByName(searchText).then(result => {
                  setText(result.Search[0].Title);
              }).catch(err => console.log(err))
          }} >Search</button>
          <h1>{ text }</h1>
      </div>
  );
};

export default Home;