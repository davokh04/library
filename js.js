const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push({
        'Title': book.title,
        'Author': book.author,
        'Pages': book.pages,
    });
}

const addBookButton = document.querySelector('.addBook');
const modal = document.querySelector('dialog');
const confirmButton = document.querySelector('div > button:first-child');
const selectedEl = document.querySelector('select');
const booksContainer = document.querySelector('.books-container');
const form = document.querySelector('form');
const cancel = document.querySelector('.cancel');

cancel.addEventListener('click', () => {
    modal.close();
});

addBookButton.addEventListener('click', () => {
    modal.showModal();
});

confirmButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
        const button = document.createElement('button');
        button.textContent = 'X';

        const card = document.createElement('div');
        card.classList.add('card');

        const info = document.createElement('div');

        const titleContainer = document.createElement('p');
        const bookTitle = document.querySelector('.book-title + input');
        titleContainer.textContent = bookTitle.value;

        const authorContainer = document.createElement('p');
        const author = document.querySelector('.book-author + input');
        authorContainer.textContent = author.value;

        const pagesContainer = document.createElement('p');
        const pages = document.querySelector('.book-pages + input');
        pagesContainer.textContent = pages.value + ' pages';

        const readContainer = document.createElement('p');
        readContainer.textContent = selectedEl.value;

        button.addEventListener('click', () => {
            card.remove();
        });

        if (readContainer.textContent == 'Yes') {
            readContainer.textContent = 'Read: Yes';
        } else {
            readContainer.textContent = 'Read: No';
        }

        info.appendChild(titleContainer);
        info.appendChild(authorContainer);
        info.appendChild(pagesContainer);
        info.appendChild(readContainer);

        card.appendChild(info);
        card.appendChild(button);
        booksContainer.appendChild(card);

        bookTitle.value = '';
        author.value = '';
        pages.value = '';
        modal.close();
    }
    
});

