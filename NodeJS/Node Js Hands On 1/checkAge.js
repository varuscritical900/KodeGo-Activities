function checkAge(isLegalAge){
    if(isLegalAge >= 18){
        return true;
    }
    else{
        return false;
    }
    // let isLegalAge = age >= 18 ? true : false;
}

module.exports = checkAge;