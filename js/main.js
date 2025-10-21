/**
 * @file Contains the core JavaScript logic for the Random Content Generator.
 * @description This script handles fetching and displaying random quotes and
 *              changing the background color on user interaction.
 */

// --- 1. Data: Array of Quote Objects ---

const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
    author: "Steve Jobs"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank"
  },
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  }
];

// --- 2. DOM Element References ---

// Cache DOM elements for better performance
const quoteTextEl = document.getElementById('quote-text');
const quoteAuthorEl = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const bodyEl = document.body;


// --- 3. Helper Functions ---

/**
 * Generates a random integer up to a maximum value (exclusive).
 * @param {number} max The upper bound for the random number.
 * @returns {number} A random integer between 0 and max - 1.
 */
const getRandomNumber = (max) => Math.floor(Math.random() * max);

/**
 * Retrieves a random quote object from the main quotes array.
 * @returns {{quote: string, author: string}} An object containing a quote and its author.
 */
const getRandomQuote = () => {
  const randomIndex = getRandomNumber(quotes.length);
  return quotes[randomIndex];
};

/**
 * Generates a random hexadecimal color code.
 * @returns {string} A random hex color string in the format "#RRGGBB".
 */
const getRandomHexColor = () => {
  // Generates a random number, converts it to a hex string, and pads it to ensure 6 digits.
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  return randomColor;
};


// --- 4. Main Application Logic ---

/**
 * Updates the UI with a new quote and a new random background color.
 * This function is the primary driver of the application's visual changes.
 */
const updateUI = () => {
  const { quote, author } = getRandomQuote();
  const newColor = getRandomHexColor();

  // Update the text content of the quote and author elements
  quoteTextEl.textContent = `"${quote}"`;
  quoteAuthorEl.textContent = `- ${author}`;

  // Apply the new color to the background and the button
  // A CSS transition on these properties will make the change smooth.
  bodyEl.style.backgroundColor = newColor;
  newQuoteBtn.style.backgroundColor = newColor;

  // For better readability, you might also want to change the text color.
  // We'll keep the text color consistent (e.g., white) via CSS for simplicity.
};


// --- 5. Event Listeners ---

/**
 * Attaches event listeners once the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Ensure button exists before adding listener
  if (newQuoteBtn) {
    newQuoteBtn.addEventListener('click', updateUI);
  } else {
    console.error("Error: The 'New Quote' button with ID 'new-quote-btn' was not found.");
  }

  // Display an initial quote on page load
  updateUI();
});