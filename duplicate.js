function duplicateCharecters(s){
    
   
let duplicate = '';
let str = s;

for(let i = 0; i<str.length; i++){
    if(duplicate.indexOf(str.charAt(i)) == -1){
        duplicate += str[i];
    }
    
}

return duplicate;

}

console.log(duplicateCharecters("bcaba"));