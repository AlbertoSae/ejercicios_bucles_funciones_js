const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  
  // Añade tu código de bucle aquí

  const playList={};
  for(const track of tracks){
        const{ genre, title}=track; 

        /* igual que: 
            const genre = track.genre;
            const title = track.title; */

        if(!playList[genre]){
            playList[genre]=[];
        }

        playList[genre].push(title);
  }
  console.log(playList);
  