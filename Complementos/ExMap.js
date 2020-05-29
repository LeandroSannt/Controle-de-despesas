const TvShows = [
    {name: 'Breaking bad', releaseYear: 2008},
    {name: 'Mr.Robot', releaseYear: 2015},
    {name: 'True Detective', releaseYear: 2014},
    {name: 'Hannibal', releaseYear: 2013},
    {name: 'Watchmen', releaseYear: 2019}

]
//estou criando no shownames um novo array dos dados releaseyear com o map
const showNames = TvShows.map ((TvShow) => TvShow.releaseYear)

console.log (showNames)