import React,{useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

const EditMusicRecord = () => {

  const {id} = useParams();
  const [currentmusicalbum, setcurrentmusicalbum] = useState({});
  const [musicname, setmusicname] = useState("");
  const [artistname, setartistname] = useState("")
  const musicrecords = useSelector((store)=>store.Appreducer.musicRecords);

  useEffect(() => {
   if(id)
   {
    const currentmusic = musicrecords.find((album) => album.id === id);

    if(currentmusic)
    {
      setmusicname(currentmusic.name)
      setartistname(currentmusic.artist)
    }
   }
  }, [id,musicrecords]);
  console.log(musicname,artistname);

  return (
    <div>
      <h1>edit page</h1>

      <div>
        <label>edit artist name</label>
        <input type="text" value={artistname} onChange={(e)=> setartistname(e.target.value)}/>
      </div>

      <div>
        <label>edit music name</label>
        <input type="text" value={musicname} onChange={(e)=> setmusicname(e.target.value)}/>
      </div>

    </div>
  )
}

export default EditMusicRecord;