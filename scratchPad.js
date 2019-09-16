const string =
  "\n## Login bug patch\n### 5/02/18\nAbout this\n- Password is now required to log in\n- No more one click access to everyone's account!\n#### additional info\n- this makes our app a lot safer\n- can't believe we just fixed this!";
const substring = string.slice(string.indexOf("\n##"), string.indexOf("\n#### "));
const additionalInfo = string.replace(substring, "")
console.log(substring);

console.log(additionalInfo)
