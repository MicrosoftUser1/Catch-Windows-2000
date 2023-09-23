sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Windows_2000.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
let Windows_2000: Sprite = null
scene.setBackgroundColor(7)
let _95_Cursor = sprites.create(img`
    . . . . f f . . . . . . . . . . 
    . . . . f 1 f . . . . . . . . . 
    . . . . f 1 1 f . . . . . . . . 
    . . . . f 1 1 1 f . . . . . . . 
    . . . . f 1 1 1 1 f . . . . . . 
    . . . . f 1 1 1 1 1 f . . . . . 
    . . . . f 1 1 1 1 1 1 f . . . . 
    . . . . f 1 1 1 1 1 1 1 f . . . 
    . . . . f 1 1 1 1 1 1 1 1 f . . 
    . . . . f 1 1 1 1 1 f f f f f . 
    . . . . f 1 1 f 1 1 f . . . . . 
    . . . . f 1 f . f 1 1 f . . . . 
    . . . . f f . . f 1 1 f . . . . 
    . . . . f . . . . f 1 1 f . . . 
    . . . . . . . . . f 1 1 f . . . 
    . . . . . . . . . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(_95_Cursor)
Windows_2000 = sprites.create(img`
    1 1 1 1 4 4 4 4 4 4 4 4 4 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 4 4 1 1 
    1 1 f 1 1 1 1 1 1 1 1 1 4 4 1 1 
    1 1 2 f 1 1 1 1 1 1 1 1 4 4 1 1 
    1 4 2 2 f f f f f 1 1 1 1 4 8 8 
    1 4 2 2 2 2 f 7 7 f 1 1 1 4 8 8 
    1 4 9 2 2 2 f 7 7 7 f 1 1 4 8 8 
    1 4 f 9 f f f f f f f 1 4 4 8 8 
    1 4 1 f 9 9 f 5 5 5 f 1 4 4 8 8 
    1 4 1 1 f 9 f 5 5 f f 1 4 4 8 8 
    5 4 1 1 1 f f f 5 f 1 1 4 4 8 8 
    5 4 1 1 1 1 1 1 f f 1 1 4 4 8 8 
    5 4 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
    5 4 4 4 4 4 4 4 4 4 4 4 4 4 8 8 
    5 5 5 5 7 7 7 7 7 7 7 8 8 8 8 8 
    1 1 1 1 1 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Enemy)
