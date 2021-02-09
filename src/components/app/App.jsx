import React from 'react';
import CharacterList from './characters/CharacterList';

export default function App() {

  return (
    <>
      <CharacterList />
    </>
  );
}



// import React, { Component } from 'react';
// import getCharacters from '../../services/getCharacters';

// export default class App extends Component {

//   state = {
//     characters: []
//   }

//   componentDidMount() {
//     getCharacters()
//       .then(characters => this.setState({ characters }));
//   }


//   render() {
//     console.log(this.state.characters);
//     return (
//       <div>
//       Lord of the Rings Characters
//         <ul>
//           {this.state.characters.map(character => 
//             <li key={character.id}>
//               <p>
//               Character: {character.name}
//               </p>
//             </li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }
