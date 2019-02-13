## 老虎機模擬。總共兩個老虎機，一個中獎概率是35%，另一個是65%。共20次機會，按A選機器，按B開始。20次結束後顯示勝率。按AB重置。

let random = 0
let win = 0
let game2 = 0
let slot = 0
input.onButtonPressed(Button.A, function () {
    if (game2 != 0) {
        if (slot < 2) {
            slot += 1
            basic.showNumber(slot)
        } else {
            slot = 1
            basic.showNumber(slot)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    game2 = 20
    win = 0
    slot = 1
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showNumber(slot)
})
input.onButtonPressed(Button.B, function () {
    if (game2 != 0) {
        for (let i = 0; i < 2; i++) {
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
            basic.showLeds(`
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                `)
        }
        random = Math.randomRange(1, 100)
        if (slot == 1) {
            if (random <= 35) {
                game2 = game2 - 1
                win = win + 1
                basic.showIcon(IconNames.Happy)
            } else {
                game2 = game2 - 1
                basic.showIcon(IconNames.Sad)
            }
        } else if (slot == 2) {
            if (random > 35) {
                game2 = game2 - 1
                win = win + 1
                basic.showIcon(IconNames.Happy)
            } else {
                game2 = game2 - 1
                basic.showIcon(IconNames.Sad)
            }
        }
        basic.showNumber(win)
        basic.showNumber(slot)
    }
})
slot = 1
game2 = 20
win = 0
basic.showNumber(slot)
basic.forever(function () {
    while (game2 == 0) {
        basic.showLeds(`
            . # # . .
            . # # # .
            . # # # #
            . # . . .
            . # . . .
            `)
        basic.showNumber(win / 20)
    }
})
