##自動嘗試10000次老虎機。共兩台，一台勝率35%，另一台勝率65%。採取贏了就繼續，輸了就換另一台的遊戲策略。按AB鍵重置。

let Lastslot = 0
let Lastresult = 0
let random = 0
let win = 0
let game2 = 0
let slot = 0
function Lose_switch() {
    slot = 1
    game2 = 10000
    win = 0
    while (game2 != 0) {
        if (Lastresult == 1) {
            slot = Lastslot
        } else if (Lastresult == 0) {
            if (Lastslot < 2) {
                Lastslot += 1
                slot = Lastslot
            } else {
                slot = 1
            }
        }
        random = Math.randomRange(1, 100)
        if (slot == 1) {
            if (random <= 35) {
                game2 = game2 - 1
                win = win + 1
                Lastresult = 1
            } else {
                game2 = game2 - 1
                Lastresult = 0
            }
        } else if (slot == 2) {
            if (random > 35) {
                game2 = game2 - 1
                win = win + 1
                Lastresult = 1
            } else {
                game2 = game2 - 1
                Lastresult = 0
            }
        }
        Lastslot = slot
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    Lose_switch()
})
Lose_switch()
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
    }
})
