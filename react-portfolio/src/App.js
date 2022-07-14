import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Project from '../components/Project';

function App() {
  return (
    <div>
      <main>
        <Header></Header>
        <Navigation></Navigation>
        <Project></Project>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
