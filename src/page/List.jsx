import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import { tvdbStore } from '../tvdbState';
import { NavLink, useParams } from 'react-router-dom';



function List() {
  
  const { data,fetchData,detail,selectItem,genres,movieGenres,tvGenres } = tvdbStore();

  // let pathName = window.location.pathname;
  // let id = pathName.lastIndexOf('/') + 1
  // id = pathName.substr(id);
  // console.log(id,'--------------')
  // url에서 /movie/123456 부분이 pathName 이라고 하는데 
  // 이 패스네임 부분을 알아내서, 숫자 부분을 id값 = app.js에서 변수 :id를 여기서 사용
  // tvdbState파일에서도 숫자부분을 id로 지정함

  let pathName = window.location.pathname;
  let pathParts = pathName.split('/');

  let type = pathParts[1];
  // let id = pathParts[2]; 이걸 사용했다가 하단에 리스트 클릭시 화면에 변경되어야해서 useParams를 사용함
  const { id } = useParams();
  // useParams는 url에서 동적값인 id같은 값을 가져옴, 
  // 사용한 이유는 상세리스트에서 새로운 아이템을 클릭했을 때 해당 아이템에 대한 상세 내용을 보여줘야하기 때문
  // console.log(type,id,'--------------')
  
  useEffect(()=>{
    fetchData('get');
    movieGenres('get');
    tvGenres('get');
    
    let type = pathName.includes("movie") ? "movie" : pathName.includes("tv") ? "tv" :''
    detail(type,id);
    window.scrollTo(0,0);
    // return ()=>{
      // }
    },[type,id])
    
    
    if(!selectItem || Object.keys(selectItem).length === 0) return;
    // selectItem가 아래에 데이터가 안받아진 상태라면 오류가 뜨니까, false일때 실행되지 않도록 함
    
    console.log(selectItem);

  return (
    <div className='list'>
      <div className='top'>
        <div className='bgimg' >
            <img src={`https://image.tmdb.org/t/p/original/${selectItem.backdrop_path}`}/>
          <div className='imgtex'>
            <p>
              <img src={`https://image.tmdb.org/t/p/w500/${selectItem.poster_path}`}/>
            </p>
            <div className='text'>
              <h2>{selectItem.title || selectItem.name}</h2>
              <div className='pre'>
                {
                  selectItem?.genres.map((item)=>{
                    return <span key={item.id}> {item.name} </span>
                  })
                }
              </div>
              <p> {selectItem.overview} </p>
              <div className='etc'>
                <div className='dayaver'>
                  <div className='day'>
                    <p>Date</p>
                    <span>{selectItem.release_date || selectItem.first_air_date}</span>
                  </div>
                  <div className='aver'>
                    <p>평점</p>
                    <span>{selectItem.vote_average}</span>
                  </div>
                </div>
                <div className='cast'>
                  {selectItem.casts ?
                    selectItem.casts.cast.slice(0,5).map((item)=>
                      <div  key={item.credit_id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt="" />
                        <p>{item.name}</p>
                      </div>
                    ) : 
                    selectItem.created_by.map((item)=>
                      <div  key={item.credit_id}>
                        {/* <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt="" /> */}
                        <p>{item.name}</p>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='vid'>
        {
          selectItem.videos.results.map((item)=>
            <div key={item.id} >
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.key}?si=jQ9obX2u8EKxtTs-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`} referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          )
        }
      </div>
      )

      <div className='another'>
        <h2>베스트 작품 둘러보기</h2>
        <div className='ano-mov'>
          <Swiper
          slidesPerView={6}
          spaceBetween={30}
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }} 
          className="mySwiper00"
          >
            {
            type == "movies" ? 
              data.moviesTop.map((item)=>
                <SwiperSlide className='list' key={item.id}>
                  <NavLink to={`/movies/${item.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                    <p>{item.title || item.name}</p>
                  </NavLink>
                </SwiperSlide>
              ) : 
              data.tvTop.map((item)=>
                <SwiperSlide className='list' key={item.id}>
                  <NavLink to={`/tvseries/${item.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                    <p>{item.title || item.name}</p>
                  </NavLink>
                </SwiperSlide>
              )
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default List