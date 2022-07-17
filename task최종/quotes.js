const quotes = [
  {
    quote:"명언1",
    author:"작가1",
  },
  {
    quote:"명언2",
    author:"작가2",
  },
  {
    quote:"명언3",
    author:"작가3",
  },
  {
    quote:"명언4",
    author:"작가4",
  },
  {
    quote:"명언5",
    author:"작가5",
  },
  {
    quote:"명언6",
    author:"작가6",
  },
  {
    quote:"명언7",
    author:"작가7",
  },
  {
    quote:"명언8",
    author:"작가8",
  },
  {
    quote:"명언9",
    author:"작가9",
  },
  {
    quote:"명언10",
    author:"작가10",
  },
]

const quote = document.querySelector("#quote span:first-child") 
const author = document.querySelector("#quote span:last-child") 

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

author.innerText = todayQuote.author;
quote.innerText = todayQuote.quote;


