let runb = 0
let runa = 0
let status = 0
function reset() {
    status = 0
    runa = 0
    runb = 0
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showLeds(`
        . # # . .
        . # # # .
        . # # # #
        . # . . .
        . # . . .
        `)
    basic.clearScreen()
    basic.pause(Math.randomRange(5, 40) * 100)
    if (status == 0) {
        status = 1
        runa = input.runningTime()
        led.plot(Math.randomRange(0, 4), Math.randomRange(0, 4))
    }
}
input.onPinPressed(TouchPin.P1, function () {
    reset()
})
input.onPinPressed(TouchPin.P0, function () {
    if (status == 0) {
        status = 4
        basic.showLeds(`
            . . . . .
            # . # . .
            . # . . .
            # . # . .
            . . . . .
            `)
    } else if (status == 1) {
        runb = input.runningTime()
        status = 3
        basic.showLeds(`
            . . . . .
            # # . . .
            # # . . .
            # # . . .
            . . . . .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.showNumber((runb - runa) / 1000)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (status == 0) {
        status = 4
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . # .
            . . # . #
            . . . . .
            `)
    } else if (status == 1) {
        runb = input.runningTime()
        status = 3
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . # #
            . . . # #
            . . . . .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.showNumber((runb - runa) / 1000)
    }
})
reset()
