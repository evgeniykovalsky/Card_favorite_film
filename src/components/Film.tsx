import React, { useState } from 'react';
import {Ifilm} from '../models'


interface FilmProps{
    films:Ifilm
}

export function Film(props:FilmProps){
 const[description,setDescription]= useState(false)
   
    return(
    <div className="conteiner">
        <div className="head">{props.films.filmName}</div>
        <div className="mainBody">
            <div className="picture"> <img src={props.films.image}/></div>
            <div className="description">
                <p><span>Год выпуска:</span> {props.films.year}</p>
                <p><span>Страна:</span> {props.films.country}</p>
                <p><span>Жанр:</span> {props.films.janr}</p>
                <p><span>Режисер:</span> {props.films.rejuser}</p>
                <p><span>Прододжительность:</span> {props.films.duration}</p>
                <p><span>Актеры:</span> {props.films.actors}</p>
                <p className="lsDesc">{props.films.description}</p>
               
            </div>
        </div>
        <div className="footer">
            <button 
                onClick={()=>setDescription(prev =>!prev)}
                >{description? 'Cкрыть':'Подробнее..'}</button>
                {description && <p>{props.films.allDescription}</p>}
        </div>
        
     </div>
  
    )
}