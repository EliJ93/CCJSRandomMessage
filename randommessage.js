const createRandomMessage = () => {
    let animalsArray = ['dog', 'cat', 'monkey', 'elephant', 'giraffe',
        'lion', 'tiger', 'gorilla', 'hippo', 'fish', 'alligator', 
        'crocodile', 'coyote', 'wolf'];
        let adjectiveArray = ['happy', 'sad', 'grumpy', 'serious',
        'okay', 'bored', 'playful', 'focused', 'timid', 'adamant',
        'jolly'];
    let messageArray = ['Leeroy Jenkins!', 'At least I have chicken',
        'Pokemon is the best', 'I love my bonshnooks', 'Red and Blue are epic',
        'My car is Sapphire', 'My scooter is Ruby', 'Shadow wadow po dado', 
        'Cutey pie dog', 'Cooteh pai dog', 'Mr. Bo Jangles',
        'Petey pop', 'Bonshnookeyookers', 'Doggy woggy po oggy'];
        //console.log(messageArray.length);
        let randomNumber1 = Math.floor(Math.random() * 14);
        let randomNumber2 = Math.floor(Math.random() * 11);
        let randomNumber3 = Math.floor(Math.random() * 14);
        let randomNumber4 = Math.floor(Math.random() * 11);
        //console.log(messageArray[randomNumber]);
        //console.log(animalsArray.length);
        //console.log(adjectiveArray.length);
        let createSentence = `The ${animalsArray[randomNumber1]} is ${adjectiveArray[randomNumber2]} because the ${animalsArray[randomNumber3]} is ${adjectiveArray[randomNumber4]}.`;
        return createSentence;
}

console.log(createRandomMessage());