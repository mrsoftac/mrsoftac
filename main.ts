input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("stop")
})
function stop () {
    servos.P1.stop()
    servos.P2.stop()
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("turn_left")
})
function backward (num: number) {
    servos.P1.run(0 - num)
    servos.P2.run(num)
}
function turn_left (num: number) {
    servos.P1.stop()
    basic.pause(200)
    servos.P1.run(num / 2)
    basic.pause(200)
    servos.P1.run(num)
}
input.onButtonPressed(Button.AB, function () {
    radio.sendString("forward")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "forward" || receivedString == "backward") {
        if (mode == 0) {
            forward(100)
            mode = 1
        } else {
            backward(100)
            mode = 0
        }
    } else if (receivedString == "turn_right") {
        turn_right(100)
    } else if (receivedString == "turn_left") {
        turn_left(100)
    } else if (receivedString == "stop") {
        stop()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("turn_right")
})
function forward (num: number) {
    servos.P1.run(num)
    servos.P2.run(0 - num)
}
function turn_right (num: number) {
    servos.P2.stop()
    basic.pause(200)
    servos.P2.run(0 - num / 2)
    basic.pause(200)
    servos.P2.run(0 - num)
}
let mode = 0
stop()
mode = 0
radio.setGroup(1)
