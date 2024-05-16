quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Be yourself; everyone else is already taken. ― Oscar Wilde",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The only source of knowledge is experience. - Albert Einstein",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.― Albert Einstein",
    "It is better to be hated for what you are than to be loved for what you are not.― Andre Gide, Autumn Leaves"
];

function showRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    var quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.textContent = randomQuote;
    quoteDisplay.style.display = 'block'; 
}

document.getElementById("quoteBtn").addEventListener("click", showRandomQuote);
