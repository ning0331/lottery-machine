input.onButtonPressed(Button.A, function () {
    中獎次數 = 0
    while (中獎號碼.length < 6) {
        開出號碼 = randint(1, 20)
        if (中獎號碼.indexOf(開出號碼) == -1) {
            中獎號碼.push(開出號碼)
            basic.showNumber(開出號碼)
            basic.pause(1000)
            if (搖獎號碼.indexOf(開出號碼) != -1) {
                中獎次數 += 1
            }
        }
    }
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    if (搖獎號碼.length < 6) {
        暫時號碼 = randint(1, 20)
        if (搖獎號碼.indexOf(暫時號碼) == -1) {
            搖獎號碼.push(暫時號碼)
            basic.showNumber(暫時號碼)
        }
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.AB, function () {
    中獎號碼 = []
    搖獎號碼 = []
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(中獎次數)
})
let 暫時號碼 = 0
let 開出號碼 = 0
let 中獎次數 = 0
let 搖獎號碼: number[] = []
let 中獎號碼: number[] = []
中獎號碼 = []
搖獎號碼 = []
basic.showIcon(IconNames.Yes)
