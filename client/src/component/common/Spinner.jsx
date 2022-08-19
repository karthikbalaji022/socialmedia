import React from 'react';
import styled from 'styled-components';

import { CircularProgress } from '@mui/material';

function Spinner() {
  return (
    <Div>
    <CircularProgress size={"5rem"}/>
    
    </Div>

  )
}
const Div=styled.div`
position: absolute;
left:50%;
top:50%;
transform: translateX(-50%),translateY(-50%);
`

export default Spinner