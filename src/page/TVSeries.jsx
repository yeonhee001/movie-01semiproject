import { NavLink } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { tvdbStore } from '../tvdbState';
import Card from '../component/Card';

function TVSeries() {
  const {fetchData,data,searchResults,tvSearch,setSelectItem,selectItem} = tvdbStore();

  const [state,setState] = useState('all');
  const [page, setPage] = useState(1)
  const [tvList, setTvList] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const newData = await fetchData('tvPopu', page);
      if(newData){
        setTvList([...tvList, ...newData]);
        console.log(tvList);
      }
    };
  
    getMovies();
    // window.scrollTo(0,0);
    // return ()=>{
    // }
  }, [page]);


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
          tvList.map((item)=>
            <li key={item.id} onClick={()=>{setSelectItem(item.id)}}>
              <NavLink to={`/tvseries/${item.id}`}>
                <Card item={item}/>
              </NavLink>
            </li>
          )
          :
          searchResults.tv.map((item)=>
            <li key={item.id} onClick={()=>{setSelectItem(item.id)}}>
              <NavLink to={`/tvseries/${item.id}`}>
                <Card item={item}/>
              </NavLink>
            </li>
          )
        }
      </ul>
      <div className='view'>
      <button onClick={()=>setPage((prevPage) => prevPage + 1)}>더보기</button>
      </div>
    </div>
  )
}

export default TVSeries