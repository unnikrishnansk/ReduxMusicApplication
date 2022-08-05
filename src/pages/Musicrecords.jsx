import React,{useEffect} from 'react'
import { getmusicrecords } from '../Redux/Appreducer/action';
import { useDispatch,useSelector } from 'react-redux';
import styled from 'styled-components';
import {useSearchParams ,useLocation, Link} from 'react-router-dom';

const Musicrecords = () => {

    const dispatch = useDispatch();
    const musicrecords = useSelector((store) => store.Appreducer.musicRecords);
    const [searchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
      if(location || musicrecords.length === 0)
      {
        const sortby = searchParams.get("sortby")
      const queryParams = {
        params : {
          genre : searchParams.getAll("genre"),
          _sort : sortby && "year",
          _order : sortby,
        },
      };
        dispatch(getmusicrecords(queryParams));
    }
        
    }, [location.search])

    console.log(musicrecords);

  return (
    <div>
      
      {musicrecords.length > 0 && musicrecords.map((album) => {
        return (
          <Musicrecordwrapper>
        <div key={album.id}>
          <Link to={`./music/${album.id}`}>
          <div><img src={album.img} alt="" /></div>
          <div>{album.genre}</div>
          <div>{album.year}</div>
          </Link>
          </div>
          </Musicrecordwrapper>
        )
      })}
      
    </div>
  )
}

export default Musicrecords;

const Musicrecordwrapper = styled.div`
width : 300px;
border : 1px solid black;
`