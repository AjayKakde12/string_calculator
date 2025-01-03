class StringCalculator {
    add(inputString:string): number {
        if(!inputString.length) return 0;
        return parseInt(inputString);

    }
}

export default new StringCalculator()