// Hämta alla böcker genom en fetch mot API'et
// https://santosnr6.github.io/Data/books.json
// Rendera ut de böcker vars sidor inte är längre än 500 pages

fetch("https://santosnr6.github.io/Data/books.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(book => {
            if (book.pages <= 500) {
                console.log(book);
                const bookName = document.createElement('p');
                bookName.textContent = book.title;
                document.body.appendChild(bookName);
            }
        });
    })
    .catch(error => {
        console.log("Error: ", error);
    });

