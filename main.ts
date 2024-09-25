let sender_id = 0
radio.setGroup(42)
basic.forever(function () {
    sender_id = 4
    radio.setGroup(sender_id)
    basic.showNumber(sender_id)
})
