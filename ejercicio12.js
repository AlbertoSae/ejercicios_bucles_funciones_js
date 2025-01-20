const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' },
    { name: 'La Abeja Maya', power: 'telepathy' }
  ];
  
  function findMutantByPower(mutants, power) {
    // insert code
   
    const matchingMutants = [];

    for (let i = 0; i < mutants.length; i++) {
      if (mutants[i].power.toLowerCase() === power.toLowerCase()) {
        matchingMutants.push(mutants[i].name);
      }
    }
  
    if (matchingMutants.length > 0) {
      return `Mutantes encontrados con el poder "${power}": ${matchingMutants.join(', ')}.`;
    } else {
      return `No se encontró ningún mutante con el poder "${power}".`;
    }

  }
  console.log(findMutantByPower(mutants, 'telepathy'));

  