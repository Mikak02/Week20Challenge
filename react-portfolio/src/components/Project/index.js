import React from 'react';
import ProjectImages from '../../images/projectImages';

function Project(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{currentCategory.name}</h1>
      <p>{currentCategory.description}</p>
      <Project category={currentCategory.name} />
    </section>
  );
}
export default Project;





// import React from 'react';

// const Project = () => {
//     return(
//         <div>
//             <p>Project</p>
//         </div>
//     )
// }

// export default Project;