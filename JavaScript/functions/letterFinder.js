// function which will be able to take a word and locate the position of a chosen letter in that given word.  
function letterFinder(word, match){
    // write a for loop with the length of word.length
    for(var i = 0; i < word.length; i++){
        if(word[i] == match){
            console.log('Found the ', '"'+ match+ '" at', i);
        }else{
            console.log('---No match found at', i);
        };
    };
};

letterFinder('test', 's');