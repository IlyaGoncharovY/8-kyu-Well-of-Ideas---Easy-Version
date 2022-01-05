# 8-kyu-Well-of-Ideas---Easy-Version
//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
//If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
//If there are no good ideas, as is often the case, return 'Fail!'.

solution:
function well(x) {
    let num = 0;
    for (let i = 0; i < x.length; i++) {
        x[i] === 'good' ? num++ : num;
    }
    if (num > 2) {
        return 'I smell a series!';
    } else if (num >= 1 && num <= 2) {
        return 'Publish!';
    } else {
        return 'Fail!';
    }
}
