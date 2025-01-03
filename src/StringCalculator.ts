class StringCalculator {
    add(inputString:string): number {
        if(!inputString.length) return 0;
        let sum: number = 0;

        if(inputString.includes("\n")) 
            inputString = inputString.replace("\n", ",");

        if(inputString.startsWith("//")) {
            const delimiter: string = inputString.charAt(2);
            const find = new RegExp(delimiter, "g"); 
            inputString = inputString.substring(4, inputString.length).replace(find, ",");
        }
        const numbers: number[] = inputString.split(",").map(number => parseInt(number));

        for(let n of numbers) {
            sum += n;
        }
        return sum;

    }
}

export default new StringCalculator()