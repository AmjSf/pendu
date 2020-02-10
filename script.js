const WORD = ['B','O','N','J','O','U','R']
let word= WORD.join('')
let hiddenWord = Array.from('_'.repeat(WORD.length))
let wonnered=false


function guessLetter(input){
    
    if(word.includes(input)){
        word.replace(input,'')
        for(elem in WORD){
            if(input==WORD[elem]){
                hiddenWord[elem]=input
                
            }   
        }
    }
    console.log(hiddenWord)
}

while(!wonnered){
    
    ins=prompt('Make a guess!')
    ins.trim()
    ins=ins.toUpperCase()
    guessLetter(ins)
    if(hiddenWord.join('')==WORD.join('')){
        wonnered=true
        alert('GG WP You won!')
    }
}

