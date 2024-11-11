{
    function sumArray(num:number[]):number{
        let sum = num.reduce((acc, num) => acc + num, 0);
        return sum;
    }
    // console.log(sumArray([1, 2, 3, 4, 5]));
}