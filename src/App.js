import './App.css';
import Headers from './component/header';
import Footer from './component/footer';
import Body from './component/body';

function App() {
  return (
    <div className="App font-mono m-0 p-0 bg-gradient-to-r from-indigo-300 to-blue-100 ">
      <Headers/>
      
      <Body/>
      
      <Footer/>

    </div>
  );
};

export default App;
