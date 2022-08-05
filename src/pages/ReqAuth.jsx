import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ReqAuth = ({children}) => {

    const auth = useSelector((store) => store.Authreducer.isAuth);

  if(!auth)
  {
    return <Navigate to="/login" replace />
  }
  return children;
}

export default ReqAuth;