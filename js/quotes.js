const quotes = [
    {
        quote: "The struggles you endure today will be the ‘good old days’ you’ll laugh about tomorrow.",
        author: "Aaron Lauritsen",
    },
    {
        quote: "The journey is the reward.",
        author: "Steve Jobs",
    },
    {
        quote: "Always bear in mind that your own resolution to succeed is more important than any other.",
        author: "Abraham Lincoln",
    },
    {
        quote: "The only thing worse than starting something and failing … is not starting something.",
        author: "Seth Godin",
    },
    {
        quote: "We are healed of a suffering only by experiencing it to the full.",
        author: "Marcel Proust",
    },
    {
        quote: "Never stop just because you feel defeated. The journey to the other side is attainable only after great suffering.",
        author: "Santosh Kalwar",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;