class StringCalculator {
    add(inputString:string): number {
        if(!inputString.length) return 0;
        let sum: number = 0;
        const negativeNumbers: number[] = [];

        if(inputString.includes("\n")) 
            inputString = inputString.replace("\n", ",");

        if(inputString.startsWith("//")) {
            const delimiter: string = inputString.charAt(2);
            const find = new RegExp(delimiter, "g"); 
            inputString = inputString.substring(4, inputString.length).replace(find, ",");
        }
        const numbers: number[] = inputString.split(",").map(number => parseInt(number));

        for(let n of numbers) {
            if(n < 0) {
                negativeNumbers.push(n);
            }
            sum += n;
        }
        if(negativeNumbers.length) 
            throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
        return sum;
    }
}

export default new StringCalculator()