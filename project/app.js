const boxes = document.getElementsByClassName('box')
const spans = document.getElementsByClassName('title')
const reloadbutton = document.querySelector('div.userbox')

let winline = document.querySelector('div.wonline')
let wintext = document.querySelector('div.winbox p')

let titlecounter = 0
let counter = 0
let mistakes = 0
const marks = ['X','O']
let tempMarkId = Math.floor(Math.random() * marks.length)
let tempArray = [marks[tempMarkId]]
let gameState = ['','','','','','','','','']

document.addEventListener('click', (element) =>
{
    if(element.target.classList.contains('box')) {handleClick(element.target)}
    if(element.target.classList.contains('box')) {mouseout(element.target)}
    if(element.target.parentElement.classList.contains('box') === true) {mouseout(element.target.parentElement)}
    if(element.target.parentElement.classList.contains('box') === true) {handleClick(element.target.parentElement)}
})
document.addEventListener('mouseover', (element) =>
{
    if(element.target.classList.contains('box')) {mouseover(element.target)}
    if(element.target.parentElement.classList.contains('box') === true) {mouseover(element.target.parentElement)}
})
document.addEventListener('mouseout', (element) =>
{
    if(element.target.classList.contains('box')) {mouseout(element.target)}
    if(element.target.parentElement.classList.contains('box') === true) {mouseout(element.target.parentElement)}
})
function mouseover(arg)
{
    let tempmark = ''
    if(tempArray[0] == 'X') {tempmark = 'O'}
    else {tempmark = 'X'}
    if(arg.classList.contains('active')) {arg.firstChild.textContent = tempmark}
    if((arg.querySelector('.title') !== 0)&&(titlecounter == 0)) {arg.querySelector('.title').style.display = 'none'}
}
function mouseout(arg)
{
    arg.firstChild.textContent = ''
    tempmark = ''
    if((arg.querySelector('.title') !== 0)&&(titlecounter == 0)) {arg.querySelector('.title').style.display = 'block'}
}

function handleClick(arg)
{
    let clickedBox = arg
    titlecounter = 1
    for(let i = 0; i < spans.length; i++) {spans[i].style.display = 'none'}
    if(clickedBox.classList.contains('active'))
    {
        function gameStateFunction(arg) {for(let i = 0; i < boxes.length; i++) {if(clickedBox === boxes[i]) {gameState[i] = arg}}}
        if(tempArray.includes('X') == true)
        {
            clickedBox.lastChild.textContent = 'O'
            tempArray.pop()
            tempArray.push('O')
            gameStateFunction('O')
        }
        else
        {
            clickedBox.lastChild.textContent = 'X'
            tempArray.pop()
            tempArray.push('X')
            gameStateFunction('X')
        }
        function chains()
        {
            function success(a,b,c,x,wl)
            {
                a.style.background = '#C4EADA'
                b.style.background = '#C4EADA'
                c.style.background = '#C4EADA'
                for(let i = 0; i < boxes.length; i++)
                {
                    if(boxes[i].style.background != 'rgb(196, 234, 218)')
                    {
                        boxes[i].style.background = '#EF7B7B'
                        boxes[i].style.borderColor = '#FFD89C'
                    }
                    if(boxes[i].classList.contains('active')) {boxes[i].classList.replace('active','inactive')}
                }
                function changeclasses()
                {
                    if(winline.classList.contains('one')) {winline.classList.remove('one')}
                    else if(winline.classList.contains('two')) {winline.classList.remove('two')}
                    else if(winline.classList.contains('three')) {winline.classList.remove('three')}
                    else if(winline.classList.contains('four')) {winline.classList.remove('four')}
                    else if(winline.classList.contains('five')) {winline.classList.remove('five')}
                    else if(winline.classList.contains('six')) {winline.classList.remove('six')}
                    else if(winline.classList.contains('seven')) {winline.classList.remove('seven')}
                    else if(winline.classList.contains('eight')) {winline.classList.remove('eight')}
                }
                changeclasses()
                switch (wl)
                {
                    case 1: winline.classList.add('one')
                    break
                    case 2: winline.classList.add('two')
                    break
                    case 3: winline.classList.add('three')
                    break
                    case 4: winline.classList.add('four')
                    break
                    case 5: winline.classList.add('five')
                    break
                    case 6: winline.classList.add('six')
                    break
                    case 7: winline.classList.add('seven')
                    break
                    case 8: winline.classList.add('eight')
                    break
                }
                winline.style.display = 'block'
                setTimeout(() => {wintext.textContent = x + ' won!'},100)
            }
            if((gameState[0] === gameState[1])&&(gameState[1] === gameState[2])&&(gameState[2] === gameState[0])&&(gameState[0] !== '')&&(gameState[1] !== '')&&(gameState[2] !== '')) {success(boxes[0],boxes[1],boxes[2],gameState[0],1)}
            else {mistakes++}
            if((gameState[3] === gameState[4])&&(gameState[4] === gameState[5])&&(gameState[5] === gameState[3])&&(gameState[3] !== '')&&(gameState[4] !== '')&&(gameState[5] !== '')) {success(boxes[3],boxes[4],boxes[5],gameState[3],2)}
            else {mistakes++}
            if((gameState[6] === gameState[7])&&(gameState[7] === gameState[8])&&(gameState[8] === gameState[6])&&(gameState[6] !== '')&&(gameState[7] !== '')&&(gameState[8] !== '')) {success(boxes[6],boxes[7],boxes[8],gameState[6],3)}
            else {mistakes++}
            if((gameState[0] === gameState[3])&&(gameState[3] === gameState[6])&&(gameState[6] === gameState[0])&&(gameState[0] !== '')&&(gameState[3] !== '')&&(gameState[6] !== '')) {success(boxes[0],boxes[3],boxes[6],gameState[0],4)}
            else {mistakes++}
            if((gameState[1] === gameState[4])&&(gameState[4] === gameState[7])&&(gameState[7] === gameState[1])&&(gameState[1] !== '')&&(gameState[4] !== '')&&(gameState[7] !== '')) {success(boxes[1],boxes[4],boxes[7],gameState[1],5)}
            else {mistakes++}
            if((gameState[2] === gameState[5])&&(gameState[5] === gameState[8])&&(gameState[8] === gameState[2])&&(gameState[2] !== '')&&(gameState[5] !== '')&&(gameState[8] !== '')) {success(boxes[2],boxes[5],boxes[8],gameState[2],6)}
            else {mistakes++}
            if((gameState[0] === gameState[4])&&(gameState[4] === gameState[8])&&(gameState[8] === gameState[0])&&(gameState[0] !== '')&&(gameState[4] !== '')&&(gameState[8] !== '')) {success(boxes[0],boxes[4],boxes[8],gameState[0],7)}
            else {mistakes++}
            if((gameState[2] === gameState[4])&&(gameState[4] === gameState[6])&&(gameState[6] === gameState[2])&&(gameState[2] !== '')&&(gameState[4] !== '')&&(gameState[6] !== '')) {success(boxes[2],boxes[4],boxes[6],gameState[2],8)}
            else {mistakes++}
        }
        chains()
        counter++
        if((counter == 9)&&(mistakes == 8))
        {
            for(let i = 0; i < boxes.length; i++)
            {
                boxes[i].style.background = '#EF7B7B'
                boxes[i].style.borderColor = '#FFD89C'
            }
            setTimeout(() => {wintext.textContent = 'Nobody won!'},100)
        }
        mistakes = 0
        clickedBox.classList.replace('active','inactive')
    }
}

reloadbutton.addEventListener('click', () =>
{
    // window.location.reload()
    counter = 0
    mistakes = 0
    gameState = ['','','','','','','','','']
    for(let i = 0; i < boxes.length; i++)
    {
        boxes[i].lastChild.textContent = ''
        boxes[i].style.background = '#FFF'
        boxes[i].style.borderColor = '#FFBC5F'
        boxes[i].classList.replace('inactive','active')
    }
    for(let i = 0; i < spans.length; i++) {spans[i].style.display = 'block'}
    spans[0].textContent = 'TIC'
    spans[1].textContent = 'TAC'
    spans[2].textContent = 'TOE'
    wintext.textContent = ''
    winline.style.display = 'none'
    titlecounter = 0
})