import { useState } from 'react';
import data from './../data.json';

export default function MyProjects() {
    const [index, setIndex] = useState(0);

    let projectData = data.hobbyImport;
    let project = projectData[index];
 
    function handleClick() {
        if (index < data.hobbyImport.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }



    return (
        <div>
        <button onClick={handleClick}>
            Next
        </button>
        <h2>{project.exampleOf} with {project.gameExample}
        </h2>
        <img src={project.photoUrl} width="200" alt={project.alt} />
        </div>
    );

    // return (
    //     <div>
    //       <button onClick={handleClick}>
    //         Next
    //       </button>
    //       <h2>{project.canvas} by {project.designer}
    //       </h2>
    //       <img src={project.photoUrl} alt={project.alt} />
    //     </div>
    //   );

}