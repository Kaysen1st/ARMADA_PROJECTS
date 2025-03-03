// Task 1
let books = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    isRead: false,
};
console.log(books["title"]);
console.log(books["author"]);
console.log(books["pages"]);
console.log(books["isRead"]);
books.isRead = true;
console.log(books.isRead);
books.genre = "fantasy";
console.log(books);

// Task 2
let movie1 = {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
};
let movie2 = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
};
let movie3 = {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
};
const movies = [movie1, movie2, movie3];

movies.push({
    title: "Tenet",
    director: "Christopher Nolan",
    year: 2020,
});
movie1.year = 2023;
console.log(movies);

// Task 3
const student = {
    name: "Samuel Bayot Jr.",
    age: 27,
    subjects: ["Math", "Science", "history"],
};
console.log(student.subjects);
student.subjects.push("English");
console.log(student);

// Task 4
const recipe = {
    name: "pasta salad",
    ingredients: [
        {
            name: "pasta",
            quantity: 1,
        },
        {
            name: "tomatoes",
            quantity: 2,
        },
        {
            name: "cheese",
            quantity: 3,
        },
    ],
    isVegetarian: true,
};
recipe.ingredients.push({
    name: "olives",
    quantity: 10,
});
console.log(recipe.ingredients[1].name);
console.log(recipe);
