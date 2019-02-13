##老虎機概率測試。一台勝率35%，另一台65%，共10000次機會。採用先各玩每台機器1000次，然後比較勝率。於下8000次都只玩勝率高的那台。

let Win2 = 0
let win = 0
let Win1 = 0
let game2 = 0
let All = 0
let random = 0
let slot = 0
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    Restart()
})
function Restart() {
    slot = 1
    All = 10000
    game2 = All
    Win1 = 0
    Win2 = 0
    win = 0
    while (game2 > All * 9 / 10) {
        slot = 1
        Go2()
    }
    while (game2 > All * 8 / 10 && game2 <= All * 9 / 10) {
        slot = 2
        Go2()
    }
    while (game2 != 0 && game2 <= All * 8 / 10) {
        if (Win1 > Win2) {
            slot = 1
            Go2()
        } else if (Win1 < Win2) {
            slot = 2
            Go2()
        } else {
            slot = Math.randomRange(1, 2)
            Go2()
        }
    }
}
function Go2() {
    random = Math.randomRange(1, 100)
    if (slot == 1) {
        if (random <= 40) {
            game2 = game2 - 1
            win = win + 1
            Win1 += 1
        } else {
            game2 = game2 - 1
        }
    } else if (slot == 2) {
        if (random > 40) {
            game2 = game2 - 1
            win = win + 1
            Win2 += 1
        } else {
            game2 = game2 - 1
        }
    }
}
Restart()
basic.forever(function () {
    while (game2 == 0) {
        basic.showLeds(`
            . # # . .
            . # # # .
            . # # # #
            . # . . .
            . # . . .
            `)
        basic.showNumber(win / 10000)
        basic.showNumber(Win1)
        basic.showNumber(Win2)
    }
})
