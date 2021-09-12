const X_Class = 'x';
const O_Class = 'o';

const Winning_Combinations = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6],
[0,3,6],
[1,4,7],
[2,5,8]
]

const cellElements = document.querySelectorAll('[data-cell]');
const board= document.getElementById('board');
const Winning_Container = document.getElementById('winning-container');
const restartButton = document.getElementById('restartButton');
const Winning_Message = document.getElementById('txt')

let circleturn

startgame()
restartButton.addEventListener('click',startgame)

function startgame(){
    circleturn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_Class)
        cell.classList.remove(O_Class)
        cell.removeEventListener('click',handleClick)
        cell.addEventListener('click',handleClick,{once:true})
    })

    setBoardHover()
    Winning_Container.classList.remove('show')
}

function handleClick(e){
    const cell = e.target;
    const currentClass = circleturn ? O_Class : X_Class;
    placeMark(cell,currentClass)
    if(checkWin(currentClass)){
        endGame(false)
    }else if(isDraw()){
        endGame(true)
    }else{
        swapTurns()
        setBoardHover()
    }
}

function placeMark(cell,currentClass){
    cell.classList.add(currentClass);
}

function checkWin(currentClass){
    return Winning_Combinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

function endGame(draw){
    if(draw){
        Winning_Message.innerText = 'Draw!'
    }else{
        Winning_Message.innerText = `${circleturn ? "O": "X"} Wins!`
    }

    Winning_Container.classList.add('show')
}

function swapTurns(){
    circleturn = !circleturn
}

function setBoardHover(){
    board.classList.remove(X_Class)
    board.classList.remove(O_Class)
    if(circleturn){
        board.classList.add(O_Class)
    }else{
        board.classList.add(X_Class)
    }
}

function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_Class) || cell.classList.contains(O_Class)
    })
}