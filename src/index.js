import React from 'react';
import ReactDom from 'react-dom';
import Cards from './Cards';
import SData from './SData';
import "./index.css";

// function ncard(val){
//   return (
//     <Cards imgsrc={val.imgsrc} 
//   category={val.category}
//   title={val.title}
//   link={val.link}
// />
//   );
// }
ReactDom.render(<>
<h1 className='heading_style'> List of Cartoon Animated Films:</h1>
{/* <Cards imgsrc="https://play-lh.googleusercontent.com/nwyAuT0LWsS06vZNzstE-XsXcrwiLhWo8wp6ICMUfHwdwQbENJ5-bqhP3V96QudLIOmOWQ"  
  category="A Animated Cartoon Show" title="Bal Ganesh" link="https://youtu.be/Gvi4uUj9o18"
/>
<Cards imgsrc="https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/old_images/vertical/MOVIE/2025/1000192025/1000192025-v"
 category="A Animated Cartoon Show" title="Little Krishna" link="https://youtu.be/F5uBII7b5QI" />

 <Cards imgsrc="https://qqcdnpictest.mxplay.com/pic/34183e81058ef3d49a72ed0fb9c7dc6e/en/16x9/1920x1080/test_pic1596191437580.jpg" 
  category="A Animated Cartoon Show" title="Akbar Birbal" link="https://youtu.be/jutwF95Ljeg" />

<Cards imgsrc="https://bollyspice.com/wp-content/uploads/2021/02/LegendOfHanuman_Poster_05-612x897.jpg" 
  category="A Animated Cartoon Show" title="The Legend of Hanuman" link="https://youtu.be/2a_CDlWCt-Q"
/>

<Cards imgsrc="https://upload.wikimedia.org/wikipedia/en/e/e1/Doraemon_2015.jpg" 
  category="A Animated Cartoon Show" title="Doraemon and nobita the explorer bow bow" link="https://youtu.be/6D8Ghs1j07Y"
/> */}
{/* <Cards imgsrc={SData[0].imgsrc} 
  category={SData[0].category}
  title={SData[0].title}
  link={SData[0].link}
/>
<Cards imgsrc={SData[1].imgsrc} 
  category={SData[1].category}
  title={SData[1].title}
  link={SData[1].link}
/>
<Cards imgsrc={SData[2].imgsrc} 
  category={SData[2].category}
  title={SData[2].title}
  link={SData[2].link}
/>
<Cards imgsrc={SData[3].imgsrc} 
  category={SData[3].category}
  title={SData[3].title}
  link={SData[3].link}
/>
<Cards imgsrc={SData[4].imgsrc} 
  category={SData[4].category}
  title={SData[4].title}
  link={SData[4].link}
/> */}
{/* {SData.map(ncard)} */}
{/* {SData.map(function nacard(val){
  return(
    <Cards imgsrc={val.imgsrc} 
  category={val.category}
  title={val.title}
  link={val.link}
/>
  );
})} */}
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

