function getScore(score1, score2){
    if(score1 === 1 && score2 === 0){
    return "15 - 0";
    }
    else if(score1 === 2 && score2 === 0){
    return "30 - 0";
    }
    else if(score1 === 3 && score2 === 0){
    return "40 - 0";
    }
    else if(score1 === 0 && score2 === 1){
        return "0 - 15";
        }
    return "love - love";
}
export default getScore;