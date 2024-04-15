let title = ["Countries" , "Programming" , "Music" , "Movies" , "Animals" , "Sports"]

let choosenWord = {
    0: ["EGYPT" , "SAUDI" , "ENGLAND" , "FRANCE" , "SPAIN" , 'GERMAN' , "CHINA" , "MOROCCO" , "ALGERIA" , "BRAZIL" , "AMERICA" , "CANADA" , "INDIA" , "IRAN" , "JAPAN" , "KOREA" , "KUWAIT" , "NIGER" , "TURKEY"],
    1: ["PYTHON" , "PHP" , "C" , "JAVASCRIPT" , "HTML" , 'CSS' , "R" , "JAVA" , "RUBY" , "KOTLIN" , "DART" , "SQL"],
    2: ["RAP" , "ROCK" , "METAL" , "POP" , "HIPHOP" , 'PUNK' , "JAZZ"],
    3: ["GODFATHER" , "DARKNIGHT" , "SPIDERMAN" , "ANGRYMEN" , "FIGHTCLUB" , 'INCEPTION' , "STARWARS" , "MATRIX", 'INTERSTELLAR' , "GREENMILE" , "SPIDERMAN"],
    4: ["LION" , "BEAR" , "ELEPHANT" , "TIGER" , "FOX" , 'GIRAFEE' , "WOLF" , "GORILLA", 'BAT' , "CAMEL" , "MONKEY" , "RABBIT" , "OWL" , "PANDA"],
    5: ["SOCCER" , "BASEBALL" , "TENNIS" , "BASKETBALL" , "GOLF" , 'VOLLYBALL' , "SWIMMING" , "BOXING", 'FOOTBALL' , "KARATE" , "JUDO" , "KICKBOX" , "SQUASH" , "HANDBALL"],
}

let selectedWordIndex = Math.floor(Math.random() * title.length)

let span = document.querySelector("nav .container .nav-content span")
let p = document.createElement("p")
let pWord = document.createTextNode(`${title[selectedWordIndex]}`)
p.appendChild(pWord)
span.appendChild(p)



let hint = document.querySelectorAll(".hint-playagain .container button")[0]

let playagain = document.querySelectorAll(".hint-playagain .container button")[1]

let word = choosenWord[selectedWordIndex][Math.floor(Math.random() * (choosenWord[selectedWordIndex]).length)]

let hangMan = document.querySelectorAll(".row .container .content .hang-man div")

let letters = document.querySelector(".row .container .content .letters .content")

let chars = document.querySelectorAll(".row .container .content .letters .content span")

let result = ""

let counter = 0

let uniqueLetters = word.split("")

let win = document.querySelector(".winner .container")

let loseContainer = document.querySelector(".looser .container")

let lose = document.querySelector(".looser .container p")
let t = document.createTextNode(`Game Over, The Word Is ${word}`)
lose.appendChild(t)

for (let i = 0; i < word.length; i++) {

    let div = document.createElement("div")
    let answerWords = document.querySelector(".answer .container .answer-content")
    answerWords.appendChild(div)
    let choosenDiv =  document.querySelectorAll(".answer .container .answer-content div")

    letters.onclick = function(e) {
        e.target.classList.add("choosen")
        if (word.includes(`${e.target.id}`)) {
            for(let j = 0; j < word.length; j++) {
                if (word[j] === e.target.id) {
                    let text = document.createTextNode(`${word[j]}`)
                    choosenDiv[j].appendChild(text)
                    result += word[j]
                    if (result.split("").sort().join("") === word.split("").sort().join("")) {
                        win.style.cssText = "display:flex;"
                        for(let k = 0; k < 26; k++) {
                            chars[k].style.cssText = "z-index: -1"
                        }
                    }
                }
            }
        } else {
            counter += 1
            switch (counter) {
                case 1:
                    hangMan[0].style.cssText ="visibility:visible;"
                    hint.style.cssText ="background-color: #E91E63;"
                    break
                case 2:
                    hangMan[1].style.cssText ="visibility:visible;"
                    break
                case 3:
                    hangMan[2].style.cssText ="visibility:visible;"
                    break
                case 4:
                    hangMan[3].style.cssText ="visibility:visible;"
                    break
                case 5:
                    hangMan[4].style.cssText ="visibility:visible;"
                    break
                case 6:
                    hangMan[5].style.cssText ="visibility:visible;"
                    break
                case 7:
                    hangMan[6].style.cssText ="visibility:visible;"
                    break
                case 8:
                    hangMan[7].style.cssText ="visibility:visible;"
                    for(let k = 0; k < 26; k++) {
                        chars[k].style.cssText = "z-index: -1"
                    }
                    loseContainer.style.cssText = "display:flex;"
                    break
            }
        }
        for (let t = 0; t < uniqueLetters.length; t++) {
            if(result.includes(uniqueLetters[t])) {
                uniqueLetters.splice(t , 1)
            } 
        }
        console.log(uniqueLetters)
        hint.onclick = function (e) {
            hint.style.cssText ="background-color: #d1d1d1;"
            let hintLetter = uniqueLetters[Math.floor(Math.random()*uniqueLetters.length)]
            for (let l = 0; l < word.length; l++) {
                if (word[l] === hintLetter) {
                    let text = document.createTextNode(`${word[l]}`)
                    choosenDiv[l].appendChild(text)
                    result += word[l]
                    if (result.split("").sort().join("") === word.split("").sort().join("")) {
                        win.style.cssText = "display:flex;"
                        for(let k = 0; k < 26; k++) {
                            chars[k].style.cssText = "z-index: -1"
                        }
                    }
                    uniqueLetters = ""
                }
            }
            for (let r = 0; r < 26; r++) {
                if(chars[r].id === hintLetter) {
                    chars[r].classList.add("choosen")
                }
            }
        }
    }
}

playagain.onclick = function () {
    location.reload()
}

console.log(word)