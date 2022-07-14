// import React, { useState } from 'react';
// import Navigation from './components/Navigation';
// import About from './components/About';
// import Project from './components/Project';
// // import ContactForm from './components/Contact';
// import Notetaker from './images/projectImages/notetaker.png';
// import PasswordGenerator from './images/projectImages/passwordgenerator.png';
// import BudgetTraker from './images/productImages/budgettracker.png';
// import ProfileGenerator from './images/projectImages/profilegenerator.png';
// import CodeRefractor from './images/projectImages/coderefractor.png';
// import ReadmeGenerator from './images/projectImages/readmegenerator.png';

// function App() {
//   const [categories] = useState([
//     {
//       "id": 1,
//       "name": "Notetaker",
//       "image": Notetaker,
//       "github": "https://github.com/Mikak02/Week11Challenge.git",
//       "deploy": "https://github.com/Mikak02/Week11Challenge.git"
//   },
//   {
//       "id": 2,
//       "name": "PasswordGenerator",
//       "image": PasswordGenerator,
//       "github": "https://github.com/Mikak02/week3challenge.git",
//       "deploy": "https://mikak02.github.io/week3challenge/"
//   },
//   {
//       "id": 3,
//       "name": "BudgetTaker",
//       "image": BudgetTraker,
//       "github": "https://github.com/Mikak02/Week19Challenge.git",
//       "deploy": "https://voyage-chaise-99114.herokuapp.com/"
//   },
//   {
//       "id": 4,
//       "name": "ProfileGenerator",
//       "image": ProfileGenerator,
//       "github": "https://github.com/Mikak02/Week10Challenge.git",
//       "deploy": "https://drive.google.com/file/d/1gJZscx8GQ6hlA7u0IDdLQjVODU9w76Vb/view"
//   },
//   {
//       "id": 5,
//       "name": "Code Refractor",
//       "image": CodeRefractor,
//       "github": "https://github.com/Mikak02/Week1Challenge.git",
//       "deploy": "https://mikak02.github.io/Week1Challenge/"
//   },
//   {
//       "id": 6,
//       "name": "ReadmeGenerator",
//       "image": ReadmeGenerator,
//       "github": "https://github.com/Mikak02/Week9Challenge.git",
//       "deploy": "https://drive.google.com/file/d/1nV7wWVd3YW4p2-YLiErfkP_y6h4lm73n/view"
//   }
//   ]);

//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   const [contactSelected, setContactSelected] = useState(false);

//   return (
//     <div>
//       <Navigation
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//       ></Navigation>
//       <main>
//         {!contactSelected ? (
//           <>
//             <Gallery currentCategory={currentCategory}></Gallery>
//             <About></About>
//           </>
//         ) : (
//           <ContactForm></ContactForm>
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;


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
