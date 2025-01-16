const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
  function findOldestXMen(xMen) {
    // insert code

    /* let oldestMember= xMen[0].name;
    let oldestMemberYear=xMen[0].year;

    for(const xMens of xMen){
        if(xMen.year<oldestMemberYear){
            oldestMember= xMen.name;
            oldestMemberYear= xMen.year;
        }
    }
    console.log(`El miembro mas antiguo es ${oldestMember} que empezo en el año ${oldestMemberYear} `); */
     // Inicializamos el más antiguo como el primer miembro del array
  let oldest = xMen[0];

  // Recorremos el array para comparar los años
  for (const member of xMen) {
    if (member.year < oldest.year) {
      oldest = member;
    }
  }

  return oldest;

  }
  
//findOldestXMen(xMen);
const oldestXMen = findOldestXMen(xMen);
console.log(`El miembro más antiguo es ${oldestXMen.name}, que apareció en ${oldestXMen.year}.`);