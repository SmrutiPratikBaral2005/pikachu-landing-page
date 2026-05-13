function calculateCompoundInterest(P, r, t, n) {
    const A = P * Math.pow((1 + r / n), (n * t));
    const CI = A - P;
    return CI.toFixed(2);   // return as string with 2 decimal places
}

module.exports = { calculateCompoundInterest };

// Another method
function calculateCompoundInterest(P, r, t, n) {
    const A = P * Math.pow((1 + r / n), (n * t));
    const CI = A - P;
    return CI.toFixed(2);
}

const result = calculateCompoundInterest(1000, 0.5, 10, 4);
console.log(result);