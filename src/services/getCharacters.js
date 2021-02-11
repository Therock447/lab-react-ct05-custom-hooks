const myHeaders = new Headers();
myHeaders.append('Authorization', 'Bearer BWUBwlGUT1U_6ml5fhMS');

const getCharacters = async() => {
  return await fetch('https://the-one-api.dev/v2/character?limit=20', {
    method: 'GET',
    headers: myHeaders
  })
    .then((res) => res.json())
    .then((characters) => characters.docs.map(character => ({
      id: character._id,
      name: character.name,
      species: character.race
    })));
};

export default getCharacters;
