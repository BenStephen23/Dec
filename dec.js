// Decision Making
// Leap year function

function leapYear(year) {
    // Leap years are divisible by 4, but not by 100 and they are also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(leapYear(2016));

// Outfit decider function

function convertFahrenheitToCelsius(temperature) {
    return (temperature - 32) * 5 / 9;
}

function clothingAdviser(temperatureCelsius, isRaining) {
    if (temperatureCelsius < 10) {
        return "It's cold. Wear a heavy jacket, gloves, and a hat.";
    } else if (temperatureCelsius >= 10 && temperatureCelsius < 20) {
        return "It's cool. Wear a sweater or a light jacket.";
    } else {
        if (isRaining) {
            return "It's warm and raining. Wear a waterproof jacket and bring an umbrella.";
        } else {
            return "It's warm and not raining. Wear light clothes.";
        }
    }
}

// Prompt user for temperature in Fahrenheit
const temperatureFahrenheit = parseFloat(prompt("What is the current temperature? (in Fahrenheit)"));

// Convert Fahrenheit to Celsius
const temperatureCelsius = convertFahrenheitToCelsius(temperatureFahrenheit);

// Ask if it's raining
const isRaining = confirm("Is it raining? (OK for yes, Cancel for no)");

// Get clothing advice based on temperature and rain
const advice = clothingAdviser(temperatureCelsius, isRaining);
alert(advice);


// Recursion

// Palindrome function
function isPalindromeRecursive(str) {
    // Remove spaces and punctuation and convert to lowercase
    const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();

    // Base case: if length is 0 or 1, it's a palindrome
    if (cleanedStr.length === 0 || cleanedStr.length === 1) {
        return true;
    }

    // Compare first and last characters
    if (cleanedStr[0] === cleanedStr[cleanedStr.length - 1]) {
        // Recursively check substring excluding first and last characters
        return isPalindromeRecursive(cleanedStr.substring(1, cleanedStr.length - 1));
    } else {
        return false;
    }
}


// Power factor function

function power(base, exponent) {
    // Base case is 0
    if (exponent === 0) {
        return 1;
    }
    // Base case is 1
    if (exponent === 1) {
        return base;
    }
    // Recursive case: multiply base by power of (exponent - 1)
    return base * power(base, exponent - 1);
}



