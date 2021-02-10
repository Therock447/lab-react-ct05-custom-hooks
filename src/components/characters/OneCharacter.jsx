import React, { useState, useEffect } from 'react';
import getOneCharacter from '../../services/getOneCharacter';

export default function OneCharacter() {

//   const [loading, setLoading] = useState(true);
//   const [character, setCharacter] = useState([]);
  
//   useEffect(() => {
//     getOneCharacter()
//       .then(character => {
//         setCharacter(character);
//         setLoading(false);
//       });
//   }, []);

//   if(loading) return 'Loading';
  
  return (
    <div>
      <p>
        This Character
      </p>        
      <p>
        Character Details
      </p>        
    </div>
  );
}
