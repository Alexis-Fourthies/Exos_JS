const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  function bornSeventies() {
    a = []
    entrepreneurs.forEach(i => {
      if (i.year.toString().includes("197")) {
        a.push(i)
      }
    })
    return a;
  }
  
  console.log(bornSeventies());
  
  function nameBusinessman() {
    let fullName = []
    entrepreneurs.forEach(i => {
      fullName.push(i.first + " " + i.last)
    })
    return fullName
  }
  
  console.log(nameBusinessman());
  
  function countAge() {
    let age = []
    entrepreneurs.forEach(i => {
      age.push(2022 - i.year)
    })
    return age
  }
  
  console.log(countAge());
  
  function nameSort(entrepreneur) {
    let i 
   i = entrepreneur.sort((a, b) => a.last.localeCompare(b.last))
   console.log(i)
  }
  
  console.log(nameSort(entrepreneurs));