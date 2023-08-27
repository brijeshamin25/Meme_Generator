function clearAll(){
    const memeClr = document.querySelector('.contMeme');
    const jokeClr = document.querySelector('.contJoke');
    const quoteClr = document.querySelector('.contQuote');
    const riddleClr = document.querySelector('.contRiddle');

    memeClr.innerHTML = '';
    jokeClr.innerHTML = '';
    quoteClr.innerHTML = '';
    riddleClr.innerHTML = '';
}

function showMeme (){
    const getMeme = getSomeData('memes');

    const meContant = document.querySelector('.contMeme');
    const newImg = document.createElement('img');
    newImg.setAttribute('src',getMeme);

    clearAll();

    meContant.appendChild(newImg);
}

function showJoke (){
    const getJoke = getSomeData('jokes');
    
    const jkContant = document.querySelector('.contJoke');
    const newP = document.createElement('p');
    newP.textContent = getJoke;

    clearAll();

    jkContant.appendChild(newP);
}

function someQuote (){
    const getQuote = getSomeData('quotes');

    const qtContent = document.querySelector('.contQuote');

    const quote = document.createElement('p');
    const author = document.createElement('p');

    quote.textContent = getQuote.quote;
    author.textContent = ' - ' + getQuote.author;

    clearAll();

    qtContent.appendChild(quote);
    qtContent.appendChild(author);
}

function someRiddle (){
    const getRiddle = getSomeData('riddles');

    const {question,answer} = getRiddle;

    const ridContent = document.querySelector('.contRiddle');

    const que = document.createElement('p');
    que.textContent = question;

    const ans = document.createElement('p');
    ans.textContent = answer;
    ans.hidden = true;
    ans.setAttribute('id','ridAnswer');

    clearAll();

    ridContent.appendChild(que);
    ridContent.appendChild(ans);
}

function revelAns (){
    const ridContent = document.querySelector('.contRiddle');

    const innerP = ridContent.querySelector('p');

    const chkAns = document.querySelector('#ridAnswer');

    if(innerP && chkAns.hidden){
        chkAns.hidden = false;
    }else if(chkAns){
        alert('The riddle answer is already reveled.')
    }else{
        alert('There is no riddle to revele the answer.')
    }
}

const memes = [
    'https://i.redd.it/a0v87gwzoge61.jpg',
    'https://i.redd.it/iij16swxjie61.jpg',
    'https://i.redd.it/vek7dm2hrge61.jpg',
    'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png',
    'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg',
];

const jokes = [
    'Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”',
    'There are only 10 kinds of people in this world: those who know binary and those who don’t.',
    'All programmers are playwrights, and all computers are lousy actors.',
    'Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.',
    'Debugging: Removing the needles from the haystack.',
];

const quotes = [
    {quote:'Programs must be written for people to read, and only incidentally for machines to execute.',
    author:'Harold Abelson'},
    {quote:'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
    author:'Rick Cook'},
    {quote:'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    author:'John Woods'},
    {quote:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author:'Martin Fowler'},
    {quote:'Truth can only be found in one place: the code.',
    author:'Robert C. Martin'},
];

const riddles = [
    {question:'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?',
    answer:'An echo'},
    {question:'You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy.',
    answer:'A Candle'},
    {question:'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?',
    answer:'A Map'},
    {question:'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?',
    answer:'The letter "R"'},
    {question:'You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?',
    answer:'All the people were married'},
];

const data = {
    memes,
    jokes,
    quotes,
    riddles,
};

function rand(len){
    return Math.floor(Math.random() * len);
}

function getSomeData(type){
    return data[type][rand(data[type].length)];
}
