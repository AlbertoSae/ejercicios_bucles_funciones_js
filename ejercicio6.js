const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];
  
  // Añade tu código de bucle aquí
  
  const starWarsMoviesByDecades={};

  for(const starWarsMovie of starWarsMovies){
    //calcular decada
    const decade = Math.floor(starWarsMovie.releaseYear / 10) * 10;

  // no existe la clave de la década en el objeto, se inicializa como un array vacío
  if (!starWarsMoviesByDecades[decade]) {
    starWarsMoviesByDecades[decade] = [];
  }

  // Agrega la película al array correspondiente a su década
  starWarsMoviesByDecades[decade].push(starWarsMovie.title);
  }
  console.log(starWarsMoviesByDecades);

  