function caeser(key, text){
    let out = '';
    for(let i = 0; i < text.length; i++){
        // console.log(text.charCodeAt(i))
        out += (String.fromCharCode(text.charCodeAt(i)+key))
    }
    return out
}
console.log(caeser(3,'LAZAR'))