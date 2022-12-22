// // import React from 'react'

// // export const App = () => {
// //   return (
// //     <div>
// //     Hello world 
// //     </div>
// //   )
// // }

// // export default App

// import React from 'react';

// // function App(){
// //   return <h1> Hello World </h1>
// // }


// /** This is the modern approach **/


// // const App= ()=>{
// //   return (
// //   <div>
// //     <h1>
// //       Hello World
// //     </h1>
// //   </div>
// //   );
// // };


// const App= ()=>{
//   return(
//     <>
//       <MyName/> 
//       <h1> Hello World</h1>
//       <div> You are Awesome </div>
//     </>
//   );
// };


// const MyName = ()=>{
//   return <h3> Lakshmi Narasimha </h3>
// };



// /** This is the Previous or older approach  ***/
// // const App= ()=>{
// //   return React.createElement("div",{},
// //   React.createElement("h1",{},"Hello World"));
// // }

// import React from 'react'
// const App= ()=>{
//   return(
//     <div>
//       <h1> Hello World</h1>
//     </div>
//   );
// };
// export default App;


// export default App;

// import React from 'react';
// import Restaurant  from './component/basics/restaurant';

// const App= ()=>{
//   return (
//     <div>
//     <Restaurant/>
//     </div>
//   );
// };
// export default App;

import React from 'react'
import Restaurant from './component/basics/restaurant.js';


const App = () => {
  return (
    <div> 
    <Restaurant/>
    </div>
  )
}

export default App;