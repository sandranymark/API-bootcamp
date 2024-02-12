'use strict';

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    uppgift1();
});

async function uppgift3() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/books.json')
        if (!response.ok) {
            throw 'något gick väldigt fel'
        }
        const books = await response.json();

        console.log(books)
        const mainRef = document.querySelector('main');

        for (let book of books) {
            if (book.pages > 501) {
                const headRef = document.createElement('h2')
                headRef.textContent = book.title;
                mainRef.appendChild(headRef)
            } else {
                console.log(`Boken ${book.name} har för många sidor`);
            }
        }
    } catch (error) {

    }
}


