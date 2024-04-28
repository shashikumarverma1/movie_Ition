"use client";
import { movieData, country, language, genres } from "@/public/movieData";

import { useState } from "react";
import Image from "next/image";
export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");
  const [Genres, setGenres] = useState("Drama");

  let data = movieData
    .filter((ele) => {
      //gener

      return ele.moviegenres.includes(Genres);
    })
    .filter((ele) => {
      // contry
      return ele.moviecountries.includes(selectedCountry);
    })
    .filter((ele) => {
      //language
      return ele.movielanguages.includes(selectedLanguage);
    });

  return (
    <main>
      <div className="CardContainer" />
      <div>
        <div className="center pm100">
          <div className="selectBox">
            {/* country */}
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="imgCard select"
            >
              {country.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {/* language */}
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="imgCard select"
            >
              {language.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              value={Genres}
              onChange={(e) => setGenres(e.target.value)}
              className="imgCard select"
            >
              {genres.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <h1 style={{}} className="resultFound">
        {data?.length} Results Found
      </h1>
      <div
        style={
          {
            /* Gap between columns */
          }
        }
        className="CardContainer "
      >
        {data?.length ? (
          data.map((ele, index) => {
            return (
              <div key={index} style={{ margin: "auto" }} className="imgCard">
                <div>
                  <div>
                    {ele?.moviemainphotos && (
                      <Image
                        src={require("../public/image.png")}
                        // width={500}
                        // height={400}
                        className="img"
                        alt="Picture of the author"
                      />
                    )}
                  </div>
                  <div className="cardText">
                    <h1>Tittle : {ele.movietitle}</h1>
                    <h1>Language : {selectedLanguage}</h1>
                    <h1>Genres : {Genres}</h1>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{}} className="dataNotFoundContainer">
            <h1 className="img noDataText">No Data Found</h1>
          </div>
        )}
      </div>
    </main>
  );
}
