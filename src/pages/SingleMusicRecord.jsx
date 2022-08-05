import React, {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getmusicrecords } from '../Redux/Appreducer/action';

const SingleMusicRecord = () => {

  const dispatch = useDispatch();
  const musicrecords = useSelector((store) => store.Appreducer.musicRecords);

  const {id} = useParams();
  const [currentmusicalbum, setcurrentmusicalbum] = useState({});

  useEffect(() => {
    dispatch(getmusicrecords());
  }, [dispatch]);

  useEffect(() => {
    
    if(id)
    {
      const currentmusicalbum = musicrecords.find(
        (album) => album.id === id
      );
      currentmusicalbum && setcurrentmusicalbum(currentmusicalbum )
    }
  }, [id,musicrecords]);

  console.log(currentmusicalbum)

  return (
    <div>
      <h1>{currentmusicalbum.name}</h1>
      <img src={currentmusicalbum.img} alt="" />
      <h3>{currentmusicalbum.artist}</h3>
      <h3>{currentmusicalbum.year}</h3>

      <div>
        <Link to={`/music/${id}/edit`}>Edit</Link>
      </div>
    </div>
  )
}

export default SingleMusicRecord;