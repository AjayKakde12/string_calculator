class StringCalculator {
    add(inputString:string): number {
        if(!inputString.length) return 0;
        let sum = 0;
        const numbers = inputString.split(",").map(number => parseInt(number));
        for(let n of numbers) {
            sum += n;
        }
        return sum;

    }
}

export default new StringCalculator()