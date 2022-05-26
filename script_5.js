const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  function rentedAtLeastOnce() {
    i = 0
    books.forEach (i => {
      if (i.rented >= 0)
        console.log("Les livres ont été au moins empruntés une fois");
    })
  }
  
  rentedAtLeastOnce();
  
  function mostRented() {
    let most = books.slice()
    most.sort((a, b) => (b.rented - a.rented))
    console.log(`Le livre le plus emprunté est ${most[0].title}`)
  }
  
  mostRented();
  
  function lessRented() {
    let less = books.slice()
    less.sort((a, b) => (a.rented - b.rented))
    console.log(`Le livre le moins emprunté est ${less[0].title}`)
  }
  
  lessRented();
  
  function findBookID() {
    books.forEach(i => {
      if(i.id ===873495) {
        console.log(i.title)
      }
    })
  }
  
  findBookID();
  
  function deleteBookID() {
    let index = books.findIndex(i => i.id === 133712)
    books.splice(index, 1)
    console.log("Livre supprimé")
    console.log(books)
  }
  
  deleteBookID();
  
  function sortBook() {
    let i 
   i = books.sort((a, b) => a.title.localeCompare(b.title))
   console.log(i)
  }
  
  console.log(sortBook());