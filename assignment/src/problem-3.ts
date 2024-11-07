{
    //

    function countWordOccurrences(sentence: string, word: string) : number {
        const words = sentence.toLowerCase().split(" ");
        
        const targetWord = word.toLowerCase();

        return words.filter(item => item === targetWord).length
    }

    console.log(countWordOccurrences("I love typescript", "typescript"));

    //
}