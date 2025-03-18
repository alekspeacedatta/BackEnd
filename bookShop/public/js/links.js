const e = require("express");

function readNow(button) {
    const bookDiv = button.closest('.book-box');
    const boodID = button.getAttribute('data-id');
    const bookName = encodeURIComponent(bookDiv.getAttribute('data-name'));

    window.location.herf = `/books/${bookName}/${bookID}`;
}