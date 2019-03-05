## 按A选题号，B确定；按A选答案，B确定；按A显示答案，A+B发送，按B进入清除模式；按A显示清除动画，按B确认。循环。
let q = ""
let index = 0
let answer = 0
let msg = ""
let i = 0
input.onButtonPressed(Button.A, function () {
    if (i == 0) {
        index += 1
        if (index == 10) {
            index = 1
        }
        basic.showNumber(index)
    } else if (i == 1) {
        answer += 1
        if (answer == 5) {
            answer = 1
        }
        if (answer == 1) {
            q = "A"
            basic.showString(q)
        } else if (answer == 2) {
            q = "B"
            basic.showString(q)
        } else if (answer == 3) {
            q = "C"
            basic.showString(q)
        } else if (answer == 4) {
            q = "D"
            basic.showString(q)
        }
    } else if (i == 2) {
        basic.showString(msg)
    } else if (i == 3) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (i < 3) {
        i += 1
    } else {
        i = 0
    }
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString(msg)
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.Happy)
})
i = 0
answer = 0
basic.forever(function () {
    msg = "" + index + q
})
