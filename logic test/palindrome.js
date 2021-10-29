// tes palindrome
const Palindrome = (str) => {
  const isPalindrome = str.split("").reverse().join("").toLowerCase().charAt(0).toUpperCase() + str.slice(1);
  console.log(str == isPalindrome);
};
Palindrome("radar");
Palindrome("malam");
Palindrome("kasur ini rusak");
Palindrome("ibu ratna antar ubi");
Palindrome("malas");
Palindrome("makan nasi goreng");
Palindrome("balonku ada lima");
