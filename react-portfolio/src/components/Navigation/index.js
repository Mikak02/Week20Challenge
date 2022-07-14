import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;


  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">Home</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="project" href="#project" onClick={() => setContactSelected(false)}>
              Portfolio
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;





// import React from 'react';

// const Navigation = () => {
//     return(
//         <header>
//             <h2>
//                 <a href="/">
//                     <span role="img" aria-label="camera"></span>
//                 </a>
//             </h2>
//             <nav>
//                 <ul className="flex-row">
//                     <li className='mx-2'>
//                         <a href="#Projects">Projects</a>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Navigation;