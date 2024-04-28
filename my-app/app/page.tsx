"use client"
import {movieData , country , language , genres} from "@/public/movieData";

import { useState } from "react";
import Image from 'next/image'
export default function Home() {

  const [selectedCountry, setSelectedCountry] = useState('India');
  const [selectedLanguage, setSelectedLanguage] = useState('Hindi');
  const [Genres, setGenres] = useState('Drama');

  let data=movieData.filter((ele)=>{
    //gener

   return ele.moviegenres.includes(Genres)

  }).filter((ele)=>{
    // contry 
    return ele.moviecountries.includes(selectedCountry)
  }).filter((ele)=>{
    //language 
    return ele.movielanguages.includes(selectedLanguage)
  })
 
 return (
    <main >
      <div className="CardContainer" style={{ backgroundColor:"red" , width:"100vw"}}/>
      <div>
         <div style={{display:"flex" , justifyContent:"center" , padding:100 , marginTop:-100}}>
       <div style={{display:"flex" , width:"100vw", padding:20 , margin:'auto' }} >
      {/* country */}
    <select value={selectedCountry} style={{padding:20 , paddingLeft:20, paddingRight:20 , margin:10 , width:'20vw'}}  onChange={(e)=>setSelectedCountry(e.target.value)} className="imgCard">
      {country.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {/* language */}
    <select value={selectedLanguage} style={{padding:20 , paddingLeft:20, paddingRight:20 , margin:10 , width:'20vw'}} onChange={(e)=>setSelectedLanguage(e.target.value)} className="imgCard">
      {language.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <select value={Genres} style={{padding:20 , paddingLeft:20, paddingRight:20 , margin:10 , width:'20vw'}} onChange={(e)=>setGenres(e.target.value)} className="imgCard">
      {genres.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    
    </div>
   
       </div>
       </div> 
       <h1 style={{textAlign:"center" , marginBottom:50 , fontWeight:"600"}} >{data?.length} results found</h1>
    <div style={{
      /* Gap between columns */
     
    }} className="CardContainer ">
      { data?.length ? data.map((ele , index)=>{
        console.log(ele , index)
        return (
          <div key={index} style={{ margin:"auto" }} className="imgCard">
            <div>
            <div>
              { ele?.moviemainphotos &&   <Image
      src={require('../public/image.png')}
      width={500}
      height={500}
      alt="Picture of the author"
    />}
              </div>
            <div style={{display:"flex" , justifyContent:"space-between", width:500 , padding:15, marginBottom:10}}><h1>
             Tittle : {ele.movietitle}</h1>
              <h1>Language : {selectedLanguage}</h1>
              <h1>Genres : {Genres}</h1>
              </div>
            </div>
          </div>
        )
      }) : <div style={{display:"flex" , justifyContent:"center" , padding:20  , width:"100vw"}}>
        <h1 className="img" style={{width:"40vw" , textAlign:"center"}}>no data founs</h1>
        </div>}
    </div>

    </main>
  );
}
