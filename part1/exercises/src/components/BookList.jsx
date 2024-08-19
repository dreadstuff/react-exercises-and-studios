export default function BookList() {
   let pageTitle = "List of AWESOME book series!";
   let book1 = "The Foundation";
   let book2 = "Red Rising";
   let book3 = "StarWars Series";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src="https://m.media-amazon.com/images/I/81J4LjdqQFL._AC_UF1000,1000_QL80_.jpg" width="200" alt="The Foundation - Book" />
         <img src="https://images.booksense.com/images/786/539/9780345539786.jpg" width="210" alt="Red Rising - Book" /><br></br>
         <img src="https://m.media-amazon.com/images/I/91P3-Xdp6kL._AC_UF1000,1000_QL80_.jpg" width="300" alt="StarWars Series - Collection" />
      </div>      
   );
}