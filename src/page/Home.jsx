import { NavLink } from 'react-router-dom'

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';

import { tvdbStore } from '../tvdbState';


function Home() {
  const {fetchData,data} = tvdbStore();
  
  useEffect(()=>{
    fetchData('moviesPopu');
    fetchData('moviesTop');
    fetchData('tvPopu');
    fetchData('tvTop');

    window.scrollTo(0,0);
    // return ()=>{
      // }
  },[])
  
  return (
    <div className='home'>
      <Swiper 
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }} 
      className="mySwiper0">
        {
          data.moviesPopu.map((item) =>
            <SwiperSlide className='home1' key={item.id}>
              <div className='bgimg'>
                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
              </div>
              <div className='tximg'>
                <div className='main-text'>
                  <h2>{item.title}</h2>
                  <p>{item.overview}</p>
                  <NavLink to={`/movies/${item.id}`} >상세보기</NavLink>
                  {/* <NavLink to={`/movies/${item.id}`} state={{from:"movies"}}>Watch trailer</NavLink> */}
                </div>
                <div className='main-img'>
                  <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                </div>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>

      <div className='home2'>
        <div className='title'>
          <h3>Trending Movies</h3>
          <NavLink to="/movies">view more</NavLink>
        </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }} 
        className="mySwiper01"
        >
          {
            data.moviesPopu.map((item)=>
              <SwiperSlide className='list' key={item.id}>
                <NavLink to={`/movies/${item.id}`} >
                  <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                  <p>{item.title}</p>
                  <span>{item.release_date}</span>
                  <span>평점 {item.vote_average}</span>
                </NavLink>
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>

      <div className='home3'>
        <div className='title'>
          <h3>Top Rated Movies</h3>
          <NavLink to="/movies">view more</NavLink>
        </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }} 
        className="mySwiper02"
        >
          {
            data.moviesTop.map((item)=>
              <SwiperSlide className='list' key={item.id}>
                <NavLink to={`/movies/${item.id}`} >
                  <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                  <p>{item.title}</p>
                  <span>{item.release_date}</span>
                  <span>평점 {item.vote_average}</span>
                </NavLink>
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>

      <div className='home4'>
        <div className='title'>
          <h3>Trending TV</h3>
          <NavLink to="/tvseries">view more</NavLink>
        </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }} 
        className="mySwiper03"
        >
          {
            data.tvPopu.map((item)=>
              <SwiperSlide className='list' key={item.id}>
                <NavLink to={`/tvseries/${item.id}`} >
                  <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                  <p>{item.name}</p>
                  <span>{item.first_air_date}</span>
                  <span>평점 {item.vote_average}</span>
                </NavLink>
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>

      <div className='home5'>
        <div className='title'>
          <h3>Top Rated TV</h3>
          <NavLink to="/tvseries">view more</NavLink>
        </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }} 
        className="mySwiper04"
        >
          {
            data.tvTop.map((item)=>
              <SwiperSlide className='list' key={item.id}>
                <NavLink to={`/tvseries/${item.id}`} >
                  <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                  <p>{item.name}</p>
                  <span>{item.first_air_date}</span>
                  <span>평점 {item.vote_average}</span>
                </NavLink>
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Home