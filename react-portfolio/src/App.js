import './App.css';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
// import Navigation from '../components/Navigation';
// import Project from '../components/Project';
import About from './components/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        {/* <Navigation></Navigation> */}
        <About></About>
        {/* <Project></Project> */}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
