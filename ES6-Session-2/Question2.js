let str = "abad";
let ans = "";
const mymap = new Map();
function permutation(str, ans) {
    if (str.length == 0) {
        if (!mymap.has(ans)) mymap.set(ans, 1);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        let rstr = str.substring(0, i) + str.substring(i + 1);
        permutation(rstr, ans + str[i]);
    }


}
permutation(str, ans);
console.log(mymap);
