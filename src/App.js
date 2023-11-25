import logo from './logo.svg';
import './App.css';
import Hero from './component/hero';
import Main from './component/main';
import VideoPlayer from './component/video';
import Footer from './component/footer';
function App() {
  return (
    <div className="App" style={{"backgroundColor":"rgb(113,166,210)"}}>
   <Hero/>
   <VideoPlayer/>
   <Main/>
   <Footer/>
    </div>
  );
}

export default App;
