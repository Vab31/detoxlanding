import logo from './logo.svg';
import './App.css';
import Hero from './component/hero';
import Main from './component/main';
import VideoPlayer from './component/video';
import Footer from './component/footer';
import Howcanjoin from './component/how_can_join';
import Review from './component/review';
function App() {
  return (
    <div className="App" style={{"backgroundColor":"rgb((255,255,204))"}}>
   <Hero/>
   <VideoPlayer/>
   <Howcanjoin/>
   <Main/>
   <Review/>
   <Footer/>
    </div>
  );
}

export default App;
