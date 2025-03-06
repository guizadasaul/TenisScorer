function getScore(score1, score2){
    if(score1 === 1 && score2 === 0){
    return "15 - love";
    }
    else if(score1 === 2 && score2 === 0){
    return "30 - love";
    }
    else if(score1 === 3 && score2 === 0){
    return "40 - love";
    }
    return "love - love";
}
export default getScore;