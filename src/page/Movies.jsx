import { NavLink } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { tvdbStore } from '../tvdbState';
import Card from '../component/Card';

function Movies() {
  const {fetchData,data,movieSearch,searchResults,setSelectItem,selectItem} = tvdbStore();

  const [state, setState] = useState('all')
  const [page, setPage] = useState(1)
  const [movList, setMovList] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const newData = await fetchData('moviesPopu', page);
      if(newData){
        setMovList([...movList, ...newData]);
        console.log(movList);
      }
    };
  
    getMovies();
    // window.scrollTo(0,0);
    // return ()=>{
    // }
  }, [page]);

  return (
    <div className='movie'>
      <div className='top'>
        <p>Movies</p>
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault(); // 페이지 새로고침막기
        movieSearch(e.target.search.value);
        setState('search');
      }} className='search'>
        <input type="text" placeholder='Enter Keyword' name='search'/>
        <input type="submit" value="search"/>
      </form>
      <ul className='movlist'>
        {
          state ==='all' ?
          movList.map((item)=>
            <li key={item.id} onClick={()=>{setSelectItem(item.id)}}>
              <NavLink to={`/movies/${item.id}`} >
                <Card item={item}/>
              </NavLink>
            </li>
          )
          :
          searchResults.movies.map((item)=>
            <li key={item.id} onClick={()=>{setSelectItem(item.id)}}>
              <NavLink to={`/movies/${item.id}`} >
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

export default Movies