const Books = [{
        name: "Book1",
        genre: "Fiction",
        Publish: "1992"
    },
    {
        name: "Book2",
        genre: "Non-Fiction",
        Publish: "1993"
    },
    {
        name: "Book3",
        genre: "Fiction",
        Publish: "2002"
    },
    {
        name: "Book4",
        genre: "Comic",
        Publish: "1996"
    },
    {
        name: "Book5",
        genre: "Fiction",
        Publish: "2003"
    },
    {
        name: "Book6",
        genre: "Non-Fiction",
        Publish: "2002"
    },
    {
        name: "Book7",
        genre: "Geological",
        Publish: "1992"
    },
    {
        name: "Book8",
        genre: "politics",
        Publish: "1998"
    },
    {
        name: "Book9",
        genre: "Geological",
        Publish: "1996"
    },
    {
        name: "Book10",
        genre: "Politics",
        Publish: "1998"
    }
]
let userBooks = Books.filter((bk) => bk.genre === "Fiction");
userBooks = Books.filter((bk) => { return bk.Publish >= "1995" && bk.genre === "Politics" });
console.log(userBooks);