class StringCalculator {
    add(inputString:string): number {
        if(!inputString.length) return 0;
        let sum: number = 0;

        if(inputString.includes("\n")) 
            inputString = inputString.replace("\n", ",");

        const numbers: number[] = inputString.split(",").map(number => parseInt(number));

        for(let n of numbers) {
            sum += n;
        }
        return sum;

    }
}

export default new StringCalculator()