const string = "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3"
console.log(string.match(/\w{2}(?=\.mp3)/))