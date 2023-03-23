// code your solution here
function superbowlWin(record){
    let result = record.find(match => match.result === "W");
    return (result)?result.year:undefined;
}