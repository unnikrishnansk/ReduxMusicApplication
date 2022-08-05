import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Homepage from './Homepage';
import SingleMusicRecord from './SingleMusicRecord';
import EditMusicRecord from './EditMusicRecord';
import Login from './Login';
import ReqAuth from './ReqAuth';

const Mainroutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/music/:id" element={
    <ReqAuth>
    <SingleMusicRecord />
    </ReqAuth>
  } />
    <Route path="/music/:id/edit" element={<EditMusicRecord />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  )
}

export default Mainroutes;