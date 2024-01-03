import logo from './logo.svg';
// import './App.css';
// import Hero from './component/hero';
// import Main from './component/main';
// import VideoPlayer from './component/video';
// import Footer from './component/footer';
// import Howcanjoin from './component/how_can_join';
// import Review from './component/review';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Form from './component/form';
// function App() {
//   return (
//     <div className="App" style={{"backgroundColor":"rgb((255,255,204))"}}>
//  {/* <Router>
//    <Routes>
//         <Route path="/form" component={Form} />
//       </Routes>
//     </Router> */}

//     <BrowserRouter>
//       <Routes>
        
//       <Route path="/form" element={Form} />
//       </Routes>
//     </BrowserRouter>


//    <Hero/>
//    <VideoPlayer/>
//    <Howcanjoin/>
//    <Main/>
//    <Review/>
//    <Footer/>
  
   
//     </div>
//   );
// }

// export default App;

import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Form from './component/form';
import Userdet from './component/dashboard/userdet';
import Login from './component/dashboard/login'
import Join from './component/join';


function App() {
  return (
    <div className="App" style={{ "backgroundColor": "rgb((255,255,204))" }}>
      <Router>
        <Routes>

          <Route path="/form" element={<Form />} />
          <Route path='/'  element={<Home/>}/>
          <Route path='/userdet'  element={<Userdet/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/join' element ={<Join/>}/>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
