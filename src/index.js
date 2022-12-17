import React from 'react';
import ReactDom from 'react-dom';
import Cards from './Cards';
import SData from './SData';
import "./index.css";

ReactDom.render(<>
<h1 className='heading_style'> List of Cartoon Animated Films:</h1>

{SData.map((val)=>{
  return(
    <Cards 
    key={val.id}
    imgsrc={val.imgsrc} 
  category={val.category}
  title={val.title}
  link={val.link}
/>
  );
})}
</>
, document.getElementById('root'));

