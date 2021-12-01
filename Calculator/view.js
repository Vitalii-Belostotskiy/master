export function back() {
    let exp = output.innerHTML;
    output.innerHTML = exp.substring(0, exp.length - 1);
};