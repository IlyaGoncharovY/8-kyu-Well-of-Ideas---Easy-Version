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
