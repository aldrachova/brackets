module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0){
        return false;
    }
    let bracketsPair = '';
    let bracketsPairs = [];
    for (let i = 0; i < bracketsConfig.length; i++){
        bracketsPair = '';
        for (let j = 0; j < bracketsConfig[i].length; j++){
            bracketsPair = bracketsPair + bracketsConfig[i][j];
        }
        bracketsPairs.push(bracketsPair);
    }
    for (let i = 0; i < bracketsPairs.length; i++){
        if (str.includes(bracketsPairs[i])){
            str = str.replace(bracketsPairs[i], '');
            i = -1;
        }      
    }
    return str.length === 0;  
}
