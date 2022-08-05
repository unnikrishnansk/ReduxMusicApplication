import React from 'react'
import styled from 'styled-components';
import Filtersort from '../Components/Filtersort';
import Musicrecords from './Musicrecords';

const Homepage = () => {
  return (
    <div>
        <Homepagewrapper>
        <Filtersortwrapper>
        <Filtersort />
        </Filtersortwrapper>
        <Musicrecordswrapper>
        <Musicrecords />
        </Musicrecordswrapper>
        </Homepagewrapper>
    </div>
  )
}

export default Homepage;

const Homepagewrapper = styled.div`
display : flex;
height : 100vh;
`;

const Filtersortwrapper = styled.div`
width : 200px;
border : 1px solid red;
`;

const Musicrecordswrapper = styled.div`
width : 100%;
border : 1px solid blue;
display : grid;
grid-template-columns : repeat(auto-fit,minmax(300px,max-content));
justify-content : center;
grid-gap : 10px;
`;