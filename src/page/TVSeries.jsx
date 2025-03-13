import { NavLink } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { tvdbStore } from '../tvdbState';

function TVSeries() {
  const {fetchData,data,searchResults,tvSearch,setSelectItem,selectItem} = tvdbStore();

  const [state,setState] = useState('all');
    const [page, setPage] = useState(1)

  useEffect(()=>{
      fetchData('tvPopu',page);
      
      window.scrollTo(0,0);
    // return ()=>{
      // }
    },[page])
    // console.log(selectItem);


  return (
    <div className='tv'>
      <div className='top'>
        <p>TV Series</p>
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault(); // 페이지 새로고침막기
        tvSearch(e.target.search.value);
        setState('search');
      }} className='search'>
        <input type="text" placeholder='Enter Keyword' name='search'/>
        <input type="submit" value="search"/>
      </form>
      <ul className='tvlist'>
        {
          state ==='all' ?
          data.tvPopu.map((item)=>
            <li key={item.id} onClick={()=>{setSelectItem(item.id)}}>
              <NavLink to={`/tvseries/${item.id}`}>
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
                <p>{item.name}</p>
                <span>방영일 {item.first_air_date}</span>
                <span>평점 {item.vote_average}</span>
              </NavLink>
            </li>
          )
          :
          searchResults.tv.map((item)=>
            <li key={item.id} onClick={()=>{setSelectItem(item.id)}}>
              <NavLink to={`/tvseries/${item.id}`}>
                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
                <p>{item.name}</p>
                <span>방영일 {item.first_air_date}</span>
                <span>평점 {item.vote_average}</span>
              </NavLink>
            </li>
          )
        }
      </ul>
      <div className='view'>
        <button onClick={()=>setPage((prevPage) => prevPage - 1)} disabled={page === 1}>이전</button>
        <button onClick={()=>setPage((prevPage) => prevPage + 1)}>이후</button>
        {/* prevPage 이전 상태의 값, disabled={page === 1}을 사용하여 true일때 값을 변경할 수 없게 막음. 버튼 비활성화 */}
      </div>
    </div>
  )
}

export default TVSeries