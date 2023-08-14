let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let message = document.getElementById("score-message");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let cogs = document.getElementById("cogs");
let cogs1 = document.getElementById("cogs1");

/**
 * Array of Questions & Answer Options
 * (there are 50 questions in total)
 * (4 options to choose from for each)
 */
const quizArray = [
    {
        id: "0", question: "Who headlined on the Saturday at Glastonbury 2023?",
        options: ["Guns N' Roses", "Elton John", "Arctic Monkeys", "Lewis Capaldi"],
        correct: "Guns N' Roses"
    },

    {
        id: "1", question: "Thanks to Netflix's Stranger Things, Kate Bush re-entered the UK Top 40 last year with which hit?",
        options: ["Running Up That Hill", "Babooshka", "Wuthering Heights", "Cloudbusting"],
        correct: "Running Up That Hill"
    },

    {
        id: "2", question: "Which track by The Stone Roses did Aitch sample on his 2022 single: '1989'?",
        options: ["Fools Gold", "Ten Storey Love Song", "She Bangs The Drums", "Waterfall"],
        correct: "Fools Gold"
    },

    {
        id: "3", question: "Nirvana, Peal Jam, Alice in Chains and Soundgarden are all 90s Grunge Rock bands from which US city?",
        options: ["Seattle, WA", "New York, NY", "Denver, CO", "Los Angeles, CA"],
        correct: "Seattle, WA"
    },

    {
        id: "4", question: "Which Bob Dylan song did Adele cover on her first album: '19'?",
        options: ["Make You Feel My Love", "The Times They Are-A-Changin'", "Knockin' On Heaven's Door", "Blowin' in the Wind"],
        correct: "Make You Feel My Love"
    },

    {
        id: "5", question: "'The Streets' is a UK Garage project fronted by which artist?",
        options: ["Mike Skinner", "Craig David", "Jorja Smith", "Skepta"],
        correct: "Mike Skinner"
    },

    {
        id: "6", question: "Which luxury wristwatch features in the title of a song by Wiley?",
        options: ["Rolex", "Omega", "Gucci", "Breitling"],
        correct: "Rolex"
    },

    {
        id: "7", question: "In what year did Oasis: 'Roll With It' and Blur: 'Country House' battle it out for UK Number 1?",
        options: ["1994", "1995", "1996", "1997"],
        correct: "1995"
    },

    {
        id: "8", question: "How many UK number ones did The Beatles have in total?",
        options: ["10", "13", "16", "17"],
        correct: "17"
    },

    {
        id: "9", question: "Which 80s prog-rock group featuring Phil Collins, reunited in 2020?",
        options: ["Genesis", "Pink Floyd", "Yes", "Rush"],
        correct: "Genesis"
    },

    {
        id: "10", question: "Which English county do Supergrass and Radiohead have in common?",
        options: ["Oxfordshire", "Berkshire", "Hampshire", "Hertfordshire"],
        correct: "Oxfordshire"
    },

    {
        id: "11", question: "Which King Crimson song did Kanye West sample on his track: 'Power'?",
        options: ["21st Century Schizoid Man", "Epitaph", "Starless", "I Talk To The Wind"],
        correct: "21st Century Schizoid Man"
    },

    {
        id: "12", question: "Eminem's: '8 Mile' is named after a road in which US city?",
        options: ["Detroit, MI", "Chicago, IL", "Cincinnati, OH", "Milwaukee, WI"],
        correct: "Detroit, MI"
    },

    {
        id: "13", question: "ABBA made history at Eurovision, taking the win for Sweden with 'Waterloo' in which year?",
        options: ["1974", "1982", "1999", "2001"],
        correct: "1974"
    },

    {
        id: "14", question: "In what year did Oasis split up?",
        options: ["2006", "2007", "2008", "2009"],
        correct: "2009"
    },

    {
        id: "15", question: "'Big Weekend' is a festival hosted by which UK radio station?",
        options: ["BBC Radio 1", "BBC Radio 2", "Capital FM", "Kiss FM"],
        correct: "BBC Radio 1"
    },

    {
        id: "16", question: "Who won 'Group of the Year' at the BRIT Awards 2023?",
        options: ["Wet Leg", "The 1975", "Arctic Monkeys", "Muse"],
        correct: "Wet Leg"
    },

    {
        id: "17", question: "The 2011 action thriller: 'Hanna' features a soundtrack from which electronic music duo?",
        options: ["The Chemical Brothers", "Daft Punk", "Basement Jaxx", "Disclosure"],
        correct: "The Chemical Brothers"
    },

    {
        id: "18", question: "Fred Again collaborated with which EDM legend on his 2022 track: 'Rumble'?",
        options: ["Skrillex", "Martin Garrix", "David Guetta", "Eric Prydz"],
        correct: "Skrillex"
    },

    {
        id: "19", question: "Who is NOT an original member of the Wu-Tang Clan?",
        options: ["Cappadonna", "Method Man", "Ghostface Killah", "RZA"],
        correct: "Cappadonna"
    },

    {
        id: "20", question: "The Mouse Outfit are a hip hop group from which UK city?",
        options: ["Manchester", "Glasgow", "Belfast", "London"],
        correct: "Manchester",
    },

    {
        id: "21", question: "Which music video by The Backstreet Boys pays homage to Michael Jackson's: 'Thriller'?",
        options: ["Everybody (Backstreet's Back)", "I Want It That Way", "As Long As You Love Me", "Larger Than Life"],
        correct: "Everybody (Backstreet's Back)",
    },

    {
        id: "22", question: "50 Cent's album: 'Get Rich or Die Tryin' has gone platinum how many times?",
        options: ["3", "4", "7", "9"],
        correct: "9",
    },

    {
        id: "23", question: "In 'What's My Age Again?' Blink-182 say: 'Nobody likes you when you're __'",
        options: ["23", "17", "33", "19"],
        correct: "23",
    },

    {
        id: "24", question: "In 'White Room' by Cream, what colour are the curtains?",
        options: ["Black", "White", "Red", "Green"],
        correct: "Black",
    },

    {
        id: "25", question: "Fill in the blank in the lyrics to this iconic dance track by Wildchild: 'Back once again for the __ master'",
        options: ["Renegade", "Ultimate", "No. 1", "Supreme"],
        correct: "Renegade",
    },

    {
        id: "26", question: "Massive Attack pioneered the genre of trip hop. What is the name of their 1998 album?",
        options: ["Mezzanine", "Protection", "Blue Lines", "100th Window"],
        correct: "Mezzanine",
    },

    {
        id: "27", question: "Who had hit singles with 'Mr Writer' and 'Dakota'?",
        options: ["Stereophonics", "Manic Street Preachers", "The Primitives", "Pulp"],
        correct: "Stereophonics",
    },

    {
        id: "28", question: "Dua Lipa collaborated with which rapper on her single: 'Levitating'?",
        options: ["DaBaby", "Offset", "Lil Uzi Vert", "Future"],
        correct: "DaBaby",
    },

    {
        id: "29", question: "Babel was the second studio album by which folk rock group?",
        options: ["Mumford & Sons", "Of Monsters and Men", "Noah and The Whale", "The Lumineers"],
        correct: "Mumford & Sons",
    },

    {
        id: "30", question: "What is the name of Tiesto's record label?",
        options: ["Musical Freedom", "Spinnin' Records", "Armada Music", "Monstercat"],
        correct: "Musical Freedom",
    },

    {
        id: "31", question: "In which European country does EDM festival: 'Tomorrowland' take place?",
        options: ["Belgium", "The Netherlands", "Portugal", "Hungary"],
        correct: "Belgium",
    },

    {
        id: "32", question: "Aussie psych rockers: 'King Gizzard & The Lizard Wizard' hail from which AU city?",
        options: ["Melbourne", "Sydney", "Perth", "Adelaide"],
        correct: "Melbourne",
    },

    {
        id: "33", question: "Which Nu Metal band are famous for wearing masks?",
        options: ["Slipknot", "Korn", "System of a Down", "Evanescence"],
        correct: "Slipknot",
    },

    {
        id: "34", question: "Arctic Monkeys, Pulp and The Human League share which Yorkshire city in common?",
        options: ["Sheffield", "Leeds", "Doncaster", "Wakefield"],
        correct: "Sheffield",
    },

    {
        id: "35", question: "What was the first UK Garage single to reach #1 in the UK charts?",
        options: ["Sweet Like Chocolate", "Flowers", "Re-Rewind", "It's a London Thing"],
        correct: "Sweet Like Chocolate",
    },

    {
        id: "36", question: "'Breakcore', 'Liquid', 'Neurofunk' and 'Jump Up' are all subgenres of which EDM genre?",
        options: ["Drum & Bass", "Techno", "House", "Jungle"],
        correct: "Drum & Bass",
    },

    {
        id: "37", question: "Techno is most commonly produced in which time signature?",
        options: ["4/4", "3/4", "6/8", "2/4"],
        correct: "4/4",
    },

    {
        id: "38", question: "MF Doom is the stage name of which iconic rapper?",
        options: ["Daniel Dumile", "Kanye West", "Reginald Noble", "Travis Scott"],
        correct: "Daniel Dumile",
    },

    {
        id: "39", question: "Which Deftones single features in the epic soundtrack to The Matrix?",
        options: ["My Own Summer (Shove It)", "Cherry Waves", "Change (In The House of Flies)", "Be Quiet and Drive (Far Away)"],
        correct: "My Own Summer (Shove It)",
    },

    {
        id: "40", question: "What song by Toto gained new popularity in 2018 when it was covered by Weezer?",
        options: ["Africa", "Hold The Line", "Rosanna", "I'll Be Over You"],
        correct: "Africa",
    },

    {
        id: "41", question: "In which area of London was the greyhound stadium featured on the album cover of Blur's Parklife in?",
        options: ["Walthamstow", "Stratford", "Wimbledon", "Romford"],
        correct: "Walthamstow",
    },

    {
        id: "42", question: "Which Fleetwood Mac song was the classic intro to Formula 1?",
        options: ["The Chain", "Dreams", "Everywhere", "Go Your Own Way"],
        correct: "The Chain",
    },

    {
        id: "43", question: "Which singer has been awarded the most Grammys for a female artist?",
        options: ["Beyoncé", "Rihanna", "Alicia Keys", "Billie Eilish"],
        correct: "Beyoncé",
    },

    {
        id: "44", question: "Which city is often regarded as the Techno capital of Europe?",
        options: ["Berlin", "Munich", "Paris", "Madrid"],
        correct: "Berlin",
    },

    {
        id: "45", question: "The Weeknd sampled which 80s hit in his song: 'Blinding Lights'?",
        options: ["Take On Me", "Just Can't Get Enough", "Don't You Want Me", "Tainted Love"],
        correct: "Take On Me",
    },

    {
        id: "46", question: "Joy Division's original name was named after which Polish city?",
        options: ["Warsaw", "Gdansk", "Krakow", "Wroclaw"],
        correct: "Warsaw",
    },

    {
        id: "47", question: "In what year did MTV launch?",
        options: ["1981", "1989", "1980", "1994"],
        correct: "1981",
    },

    {
        id: "48", question: "Michael Omari is the real name of which UK Grime artist?",
        options: ["Stormzy", "JME", "Wiley", "Skepta"],
        correct: "Stormzy",
    },

    {
        id: "49", question: "Which crustacean is featured on the album cover of 'Fat of the Land' by The Prodigy?",
        options: ["Crab", "Lobster", "Shrimp", "Krill"],
        correct: "Crab",
    },
];

/**
 * Restart Button
 */
restart.addEventListener("click", () => {
    location.reload(); //Goes back to start screen
});

/**
 * Next Button
 */
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount by 1 each time
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide displayContainer and show scoreContainer
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //show userScore and message
            userScore.innerHTML =
                "You scored " + scoreCount + " / " + questionCount + "!";
        } else {
            //show questionCount
            countOfQuestion.innerHTML = questionCount + 1;
            //show quiz
            quizDisplay(questionCount);
        }

        if (scoreCount === 50) {
            userScore.style.color = "#004400"; //Turns Text Dark Green
            message.innerHTML = 
            `Wowzers, <span class="text-capitalize">${obj[key]}</span>!
            Perfect Score! You really know your music!`;

        } else if (scoreCount >= 40 && scoreCount <= 50) {
            userScore.style.color = "#006000"; //Turns Text Green
            message.innerHTML =
                `Impressive stuff, <span class="text-capitalize">${obj[key]}</span>!`;

        } else if (scoreCount >= 30 && scoreCount < 40) {
            userScore.style.color = "#BF5000"; //Turns Text Light Orange
            message.innerHTML =
                `Nice one, <span class="text-capitalize">${obj[key]}</span>!`;

        } else if (scoreCount >= 20 && scoreCount < 30) {
            userScore.style.color = "#9D3F00"; //Turns Text Orange
            message.innerHTML =
                `Not too shabby, <span class="text-capitalize">${obj[key]}</span>`;

        } else if (scoreCount >= 10 && scoreCount < 20) {
            userScore.style.color = "#7B3100"; //Turns Text Brown
            message.innerHTML =
                `Not bad, <span class="text-capitalize">${obj[key]}</span>, could do better`;

        } else {
            userScore.style.color = "#980000"; //Turns Text Red
            message.innerHTML =
                `Better luck next time, <span class="text-capitalize">${obj[key]}</span>`
        }
    })
);

/**
 * Display Quiz
 */
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

/**
 * Quiz Creation
 */
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1;
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        `;
        container.appendChild(div);
    }
}

/**
 * Checker Function to check if option is correct or not
 */
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        //increment score
        scoreCount++;
    } else { //for marking the incorrect option
        userOption.classList.add("incorrect");
        //for marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }
}

/**
 * Initial Set-up
 */
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    quizCreator();
    quizDisplay(questionCount);
}

/**
 * Hide Quiz & Display Start Screen when Window Loads
 */
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
    cogs.classList.add("hide");
    cogs1.classList.add("hide");
}
//when user clicks on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    cogs.classList.remove("hide");
    cogs1.classList.remove("hide");
    initial();
});