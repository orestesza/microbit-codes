#按A显示当前温度，摄氏和华氏。按B显示当前方向。按A+B传送文本。讲授数值型变量和文本型变量

let ftemp = 0
let msg2 = ""
let msg1 = ""
let direction = 0
let msg3 = ""
let temp = 0
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.A, function () {
    basic.showString(msg1)
})
input.onButtonPressed(Button.B, function () {
    basic.showString(msg2)
})
input.onButtonPressed(Button.AB, function () {
    msg3 = "" + msg1 + "  " + msg2
    radio.sendString(msg3)
})
radio.setTransmitPower(7)
basic.forever(function () {
    temp = input.temperature()
    direction = input.compassHeading()
    ftemp = Math.trunc(temp * 1.8 + 32)
    msg1 = "" + temp + "C" + ("" + ftemp + "F")
    msg2 = "D" + direction
})
