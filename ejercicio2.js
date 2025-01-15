const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];
  
  // Añade tu código de bucle aquí
  const before2000= [];
  const after2000=[];
for(let i=0; i < movies.length;i++){
    if(movies[i].releaseYear<2000){
        before2000.push(movies[i]);
    }else{
        after2000.push(movies[i]);
    }
}  
console.log('ANTES DEL 2000', before2000.length);
console.log('DESPUES DEL 2000', after2000.length);