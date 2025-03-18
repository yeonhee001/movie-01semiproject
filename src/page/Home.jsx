import { NavLink } from 'react-router-dom'

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';

import { tvdbStore } from '../tvdbState';
import Card from '../component/Card';


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
                <img src={item.backdrop_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path}` : ""}/>
              </div>
              <div className='tximg'>
                <div className='main-img'>
                  <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : "/img/no_image2.png"}/>
                  
                </div>
                <div className='main-text'>
                  <h2>{item.title}</h2>
                  <p>{item.overview}</p>
                  <NavLink to={`/movies/${item.id}`} >상세보기</NavLink>
                  {/* <NavLink to={`/movies/${item.id}`} state={{from:"movies"}}>Watch trailer</NavLink> */}
                </div>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>

      <div className='home2'>
        <div className='title'>
          <h3>오늘의 TOP 20</h3>
          <NavLink to="/movies">view more</NavLink>
        </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }} 
        className="mySwiper01"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },  // 모바일
          480: { slidesPerView: 3, spaceBetween: 15 },  // 작은 태블릿
          768: { slidesPerView: 4, spaceBetween: 20 },  // 태블릿
          1024: { slidesPerView: 5, spaceBetween: 25 }, // 작은 데스크탑
          1280: { slidesPerView: 6, spaceBetween: 30 }, // 기본 (넓은 화면)
        }}  
        >
        {
          data.moviesPopu.map((item)=>
            <SwiperSlide className='list' key={item.id}>
              <NavLink to={`/movies/${item.id}`} >
                <Card item={item}/>
              </NavLink>
            </SwiperSlide>
        )}
        </Swiper>
      </div>

      <div className='home3'>
        <div className='title'>
          <h3>믿고 보는 영화 추천작</h3>
          <NavLink to="/movies">view more</NavLink>
        </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }} 
        className="mySwiper02"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },  // 모바일
          480: { slidesPerView: 3, spaceBetween: 15 },  // 작은 태블릿
          768: { slidesPerView: 4, spaceBetween: 20 },  // 태블릿
          1024: { slidesPerView: 5, spaceBetween: 25 }, // 작은 데스크탑
          1280: { slidesPerView: 6, spaceBetween: 30 }, // 기본 (넓은 화면)
        }}  
        >
          {
            data.moviesTop.map((item)=>
              <SwiperSlide className='list' key={item.id}>
                <NavLink to={`/movies/${item.id}`} >
                  <Card item={item}/>
                </NavLink>
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>

      <div className='home4'>
        <div className='title'>
          <h3>꼭 봐야하는 TV시리즈</h3>
          <NavLink to="/tvseries">view more</NavLink>
        </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }} 
        className="mySwiper03"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },  // 모바일
          480: { slidesPerView: 3, spaceBetween: 15 },  // 작은 태블릿
          768: { slidesPerView: 4, spaceBetween: 20 },  // 태블릿
          1024: { slidesPerView: 5, spaceBetween: 25 }, // 작은 데스크탑
          1280: { slidesPerView: 6, spaceBetween: 30 }, // 기본 (넓은 화면)
        }}  
        >
          {
            data.tvPopu.map((item)=>
              <SwiperSlide className='list' key={item.id}>
                <NavLink to={`/tvseries/${item.id}`} >
                  <Card item={item}/>
                </NavLink>
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>

      <div className='home5'>
        <div className='title'>
          <h3>이 드라마 어떠세요?</h3>
          <NavLink to="/tvseries">view more</NavLink>
        </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }} 
        className="mySwiper04"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },  // 모바일
          480: { slidesPerView: 3, spaceBetween: 15 },  // 작은 태블릿
          768: { slidesPerView: 4, spaceBetween: 20 },  // 태블릿
          1024: { slidesPerView: 5, spaceBetween: 25 }, // 작은 데스크탑
          1280: { slidesPerView: 6, spaceBetween: 30 }, // 기본 (넓은 화면)
        }}  
        >
          {
            data.tvTop.map((item)=>
              <SwiperSlide className='list' key={item.id}>
                <NavLink to={`/tvseries/${item.id}`} >
                  <Card item={item}/>
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