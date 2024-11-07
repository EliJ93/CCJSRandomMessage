const createRandomMessage = () => {
    let messageArray = ['Leeroy Jenkins!', 'At least I have chicken',
        'Pokemon is the best', 'I love my bonshnooks', 'Red and Blue are epic',
        'My car is Sapphire', 'My scooter is Ruby', 'Shadow wadow po dado', 
        'Cutey pie dog', 'Cooteh pai dog', 'Mr. Bo Jangles', 'Stink buttikers',
        'Petey pop', 'Bonshnookeyookers'];
        //console.log(messageArray.length);
        let randomNumber = Math.floor(Math.random() * 14);
        console.log(messageArray[randomNumber]);
}

createRandomMessage();