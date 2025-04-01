export const limitNumbers = (num, low=0.01, high=0.5) => {
    if (num < low) {
        num = low;
    } else if (num > high) {
        num = high;
    }
    return num;
}

export const formatString = (str) => {
    // Split the string by underscores
    const words = str.split("_");
  
    if (words.length === 0) {
      return ""; // Handle empty input
    }
  
    // Capitalize the first letter of the first word
    const firstWord = words[0];
    const capitalizedFirstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase();
  
    // Join the modified first word with the rest of the words (lowercase) using spaces
    const remainingWords = words.slice(1).map(word => word.toLowerCase());
    const formattedString = [capitalizedFirstWord, ...remainingWords].join(" ");
  
    return formattedString;
  }

export const formatNumber = (number) => {
    const num = parseFloat(number);
    if (isNaN(num)) {
      return 'Invalid Number';
    }
    if (num == 0) {
        return 'no charge'
    }
  
    const absNum = Math.abs(num);
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    const index = Math.floor(Math.log10(absNum) / 3);
  
    if (index >= suffixes.length) {
      return num.toPrecision(3).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + suffixes[suffixes.length - 1];
    }
  
    const value = absNum / Math.pow(10, index * 3);
    const formattedValue = value.toPrecision(3).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1');
  
    return '$'+(num < 0 ? '-' : '') + formattedValue + suffixes[index];
  }