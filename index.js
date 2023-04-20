// alphabtical char code for small case - 97
const alphabetCharacter=[...Array(26).keys()].map((orderNumber)=>String.fromCharCode(97+orderNumber));

const inputString="sdefgnbvrstuvqasdijklmnop";


function diff (num1, num2) {
    if (num1 > num2) {
      return num1 - num2
    } else {
      return num2 - num1
    }
  }

let findAlpgbeticalSubstringOrder=(inputString='')=>{

    if(inputString=='') return

    const lastIndex=inputString.length-1;
    const alphabetSubstring=[];
    
    for(let i=0;i<inputString.length;i++){
        let subString="";
        for(let j=i;j<inputString.length;j++){

            const currentCharIndex=alphabetCharacter.findIndex((value)=>value==inputString.charAt(j));
            const previousCharIndex=alphabetCharacter.findIndex((value)=>value==inputString.charAt(j-1));
            const nextCharIndex=alphabetCharacter.findIndex((value)=>value==inputString.charAt(j+1));
            if((diff(currentCharIndex,previousCharIndex)==1 ||diff(currentCharIndex,nextCharIndex)==1)){
                subString += inputString.charAt(j)
                console.log(subString)
                if(lastIndex==j){
                    subString.length > 0 ? alphabetSubstring.push({subString}):''
                    i=j;
                    break; 
                }
            }else{
                subString.length > 0 ? alphabetSubstring.push({subString}):''
                i=j;
                break;
            }

        }
    }

    console.log(alphabetSubstring)
}

findAlpgbeticalSubstringOrder(inputString)
