## 开车避障游戏 有记分 速度会随分数提高而加快
let emptyObstacleY = 0
let ticks = 0
let Score = 0
let obstacles: game.LedSprite[] = []
let index = 0
let bird: game.LedSprite = null
let empty = 0
let index3 = 0
input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.X, 1)
})
index3 = 0
empty = 0
index = 0
obstacles = []
bird = game.createSprite(0, 4)
bird.set(LedSpriteProperty.Blink, 300)
Score = 1
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.Y) == 4) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.Y, 1)
    }
    if (ticks % 1 == 0) {
        Score += 1
        emptyObstacleY = Math.randomRange(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 == emptyObstacleY) {
                obstacles.push(game.createSprite(index2, 0))
            }
        }
    }
    for (let obstacle3 of obstacles) {
        if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.setScore(Score)
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000 - Math.sqrt(Score) * 20)
})
