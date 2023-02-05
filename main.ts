 
// on touched set up

namespace StatusBarKind {
    export const ZombieHealth = StatusBarKind.create()
}

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    let statusbar = statusbars.getStatusBarAttachedTo(25, otherSprite)
    statusbars.getStatusBarAttachedTo(StatusBarKind.ZombieHealth, otherSprite).value += -20
    sprite.destroy()
statusbars.onZero(StatusBarKind.ZombieHealth, function(status: StatusBarSprite) {
    status.spriteAttachedTo().destroy()
    info.changeScoreBy(1)
})
})

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function(sprite: Sprite, otherSprite: Sprite){

    sprite.setVelocity(0,0)
    healthBar.value = healthBar.value - 10
    pause(1650)
    if (sprite.overlapsWith(otherSprite)){

    } else {
        if (sprite == zombie){
            sprite.setVelocity(10,0)
        } else if (sprite == lftZombie) {
            sprite.setVelocity(-10,0)
        }
    }
})

statusbars.onZero(StatusBarKind.Health, function(status: StatusBarSprite) {
    game.over(false)
})

// player character and player info set up

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    lastbtnpsh = "right"
    animation.runImageAnimation(survivor,[img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f c c c c f 7 f . . . . 
    . . f f c c c c f 7 7 7 f . . . 
    . . f c c c f f c c c c f . . . 
    . . f f f f c c 7 7 7 7 c f . . 
    . . f c 7 7 7 f f f f c 7 f . . 
    . f f f f f f f c c c f f f . . 
    . f f c 4 4 e b f 4 4 c c f . . 
    . f c c 4 d 4 1 f d d c f . . . 
    . . f c c c c c d d d f . . . . 
    . . . . f e d 4 e 6 c f . . . . 
    . . . . f e 4 f e 2 6 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `, img`
    . . . . . . f f f f f f . . . . 
    . . . . f f c c c c f 7 f . . . 
    . . . f f c c c c f 7 7 7 f . . 
    . . . f c c c f f c c c c f . . 
    . . . f f f f c c 7 7 7 7 c f . 
    . . . f c 7 7 7 f f f f c 7 f . 
    . . f f f f f f f c c c f f f . 
    . . f f c 4 4 c b f 4 4 c c f . 
    . . f c c 4 d 4 1 f d d c f . . 
    . . . f c c c 4 d d d d f . . . 
    . . . . f f c c 4 4 4 c f . . . 
    . . . . . e d 4 e 2 6 2 f . . . 
    . . . . . e 4 f e 6 2 6 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f . . . .
        . . . . f f c c c c f 7 f . . .
        . . . f f c c c c f 7 7 7 f . .
        . . . f c c c f f c c c c f . .
        . . . f f f f c c 7 7 7 7 c f .
        . . . f c 7 7 7 f f f f c 7 f .
        . . f f f f f f f c c c f f f .
        . . f f c 4 4 e b f 4 4 c c f .
        . . f c c 4 d 4 1 f d d c f . .
        . . . f c c c 4 d d d d f . . .
        . . . . 4 d 4 e 6 2 6 c f . . .
        . . . . e 4 f e 2 6 2 6 f . . .
        . . . . f e e f 4 4 5 5 f f . .
        . . . . f f f f f f f f f f . .
        . . . . . f f . . . f f f . . .
    `], 100, true)
})

controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(survivor, [img`
        . . . . . .f f f f f f. . . . 
    . . . .f f c c c c f 7 f. . . 
    . . .f f c c c c f 7 7 7 f. . 
    . . .f c c c f f c c c c f. . 
    . . .f f f f c c 7 7 7 7 c f. 
    . . .f c 7 7 7 f f f f c 7 f. 
    . .f f f f f f f c c c f f f. 
    . .f f c 4 4 c b f 4 4 c c f. 
    . .f c c 4 d 4 1 f d d c f. . 
    . . .f c c c 4 d d d d f. . . 
    . . . .f f c c 4 4 4 c f. . . 
    . . . . .e d 4 e 2 6 2 f. . . 
    . . . . .e 4 f e 6 2 6 f. . . 
    . . . . .f e e f 4 5 5 f. . . 
    . . . . . .f f f f f f. . . . 
    . . . . . . .f f f. . . . . .
    `],1, false)
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    lastbtnpsh = "left"
    animation.runImageAnimation(survivor,[img`
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f . . . . . .
        . . . f 7 f c c c c f f . . . .
        . . f 7 7 7 f c c c c f f . . .
        . . f c c c c f f c c c f . . .
        . f c 7 7 7 7 c c f f f f . . .
        . f 7 c f f f f 7 7 7 c f . . .
        . f f f c c c f f f f f f f . .
        . f c c 4 4 f b c 4 4 c f f . .
        . . f c d d f 1 4 d 4 c c f . .
        . . . f d d d c c c c c f . . .
        . . . f c 6 e 4 d e f . . . . .
        . . . f 6 2 e f 4 e f . . . . .
        . . f f 5 5 f e e f f f . . . .
        . . f f f f f f f f f f . . . .
        . . . f f f . . . f f . . . . .
    `,
    img`
        . . . . f f f f f f . . . . . .
        . . . f 7 f c c c c f f . . . .
        . . f 7 7 7 f c c c c f f . . .
        . . f c c c c f f c c c f . . .
        . f c 7 7 7 7 c c f f f f . . .
        . f 7 c f f f f 7 7 7 c f . . .
        . f f f c c c f f f f f f f . .
        . f c c 4 4 f b e 4 4 c f f . .
        . . f c d d f 1 4 d 4 c c f . .
        . . . f d d d d 4 c c c f . . .
        . . . f e 4 4 4 c c f f . . . .
        . . . f 2 6 2 e 4 d e . . . . .
        . . . f 6 2 6 e f 4 e . . . . .
        . . . f 5 5 4 f e e f . . . . .
        . . . . f f f f f f . . . . . .
        . . . . . . f f f . . . . . . .
    `,
    img`
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f . . . . . .
        . . . f 7 f c c c c f f . . . .
        . . f 7 7 7 f c c c c f f . . .
        . . f c c c c f f c c c f . . .
        . f c 7 7 7 7 c c f f f f . . .
        . f 7 c f f f f 7 7 7 c f . . .
        . f f f c c c f f f f f f f . .
        . f c c 4 4 f b c 4 4 c f f . .
        . . f c d d f 1 4 d 4 c c f . .
        . . . f d d d d 4 c c c f . . .
        . . . f c 6 2 6 e 4 d e . . . .
        . . . f 6 2 6 2 e f 4 e . . . .
        . . f f 5 5 4 4 f e e f . . . .
        . . f f f f f f f f f f . . . .
        . . . f f f . . . f f . . . . .
    `],100, true)
})

controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(survivor,[img`
        . . . . f f f f f f . . . . . .
        . . . f 7 f c c c c f f . . . .
        . . f 7 7 7 f c c c c f f . . .
        . . f c c c c f f c c c f . . .
        . f c 7 7 7 7 c c f f f f . . .
        . f 7 c f f f f 7 7 7 c f . . .
        . f f f c c c f f f f f f f . .
        . f c c 4 4 f b c 4 4 c f f . .
        . . f c d d f 1 4 d 4 c c f . .
        . . . f d d d d 4 c c c f . . .
        . . . f c 4 4 4 c c f f . . . .
        . . . f 2 6 2 e 4 d e . . . . .
        . . . f 6 2 6 e f 4 e . . . . .
        . . . f 5 5 4 f e e f . . . . .
        . . . . f f f f f f . . . . . .
        . . . . . . f f f . . . . . . .
    `], 1, false)
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
shoot (null)
function shoot (bullet: any){
if (lastbtnpsh == "right"){
    bullet = sprites.createProjectileFromSprite(img`
        5 5 5 5 5 5
        5 5 5 5 5 5
    `, survivor, 80, 0)
    bullet.setFlag(SpriteFlag.AutoDestroy, true)
    if (shotcooldn == true) {
        bullet.destroy()
    }
        shotcooldn = true
} else if (lastbtnpsh == "left"){
    bullet = sprites.createProjectileFromSprite(img`
        5 5 5 5 5 5
        5 5 5 5 5 5
    `, survivor, -80, 0)
    bullet.setFlag(SpriteFlag.AutoDestroy, true)
    if (shotcooldn == true) {
        bullet.destroy()
    }
    shotcooldn = true
}
timer.after(600, function() {
    bullet.destroy()
})
timer.throttle("action", 400, function() {
    shotcooldn = false
})
}
})

tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundImage(img`
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111d1111fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11bbb1111111dfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11bdb11b11111fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11bbb11111111fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd111111ddd111fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111dbd111fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111b11ddd111fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111d11fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffeefffffffffeffffffffffffffffffffffffffffeefffffffffeffffffffffffffffffffffffffffeefffffffffeffffffffffffffffffffffffffffeefffffffffefffffffffffffffffffffffff
    feeefffffffffeefffffffffffffffffffffffeffeeefffffffffeefffffffffffffffffffffffeffeeefffffffffeefffffffffffffffffffffffeffeeefffffffffeefffffffffffffffffffffffff
    ffeffeefffeeffeeffffeeffffffffffffffffeeffeffeefffeeffeeffffeeffffffffffffffffeeffeffeefffeeffeeffffeeffffffffffffffffeeffeffeefffeeffeeffffeeffffffffffffffffff
    eeeeeeffeffeefeeffefeeffffffffffffffeeeeeeeeeeffeffeefeeffefeeffffffffffffffeeeeeeeeeeffeffeefeeffefeeffffffffffffffeeeeeeeeeeffeffeefeeffefeeffffffffffffffeeef
    ee2eefffeefeeeeefeeeefffffffffffffeeeeeeeeeeefffeefeeeeefeeeefffffffffffffeeeeeeeeeeefffeefeeeeefeeeefffffffffffffeeeeeeeeeeefffeefeeeeefeeeefffffffffffffeeeeee
    eeeeefeeeeeeeeeeeeeefffeffffffeeefffeee5eeeeefeeeeeeeeeeeeeefffeffffffeeefffeeeeeeeeefeeeeeeeeeeeeeefffeffffffeeefffeeeeeeeeefeeeeeeeeeeeeeefffeffffffeeefffeeee
    eeeeeeeeeeee2eeeeeeeeeeeffeeefffeefffeeeeeeeeeeeee4eeeeeeeeeeeeeffeeefffeefff5eeeeeeeeeeeeeeeeeeeeeeeeeeffeeefffeefffeeee2eeeeeeeeeeee5eeeeeeeeeffeeefffeefffeee
    eee5eeeeeeeeeeeee4eeeeeffeeeeeffeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeffeeeeeffeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeffeeeeeffeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeffeeeeeffeeeeeeee
    eebeeee4e5ee4eeeeeeeeeefeeee2eefeeee2eeeeebeeeeeeeeee2ee5eeeeeefeeeeeeefeeeeeeeeee2eee4eeeeeeeeeeeeeeeefeeeeeeefeeeeee2eeebeeeeeeeeeeeeeee4eeeefeeeeeeefeeeeeeee
    eebeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeebeeeeeeeeeeee5eeeeeeeeebbeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeee
    eebeeeeeeeeeeeee5eeeeeeeebbbeeeee5eeeeeeeebeeee4eeeeeeee4eeeeeeeebbbeeeee4eeeee2eebeeeeeeeeeeeeeeeeeeeeeebbbeeeeee5eeeeeeebe5eeeeeeeeeeeeeeeeeeeebbbeeeeeeeeeeee
    2ebeee5eeefbbeeeeeeeeffeebbbeeeeeeeeee4eeebeeeeeeefbbeeeeeeeeffeebbbeeeeee4eeeeeeebeee4eeefbbeeeeeeeeffeebbbeeeeeeeeeeeeeebeeeeeeefbbeeeeeeeeffeebbbeee2eeeee4ee
    eebeeeeeeffdbbeeeeeeddfeeebbeeeeeeeeeeeeeebeeeeeefffbbeeeeeefffeeebbeeeeeeeeeeeeeebeeeeeefffbbeeeeeefffeeebbeeeeeeeeeeeeeebeeeeeefffbbeeeeeefffeeebbeeeeeeeeeeee
    ebbeeedeeffddbbbefeeedffeebbee2eeeeeeeeeebbeeedeeffddbbbefeeedffeebbeeeeeeeeeeeeebbeeedeeffddbbbefeeedffeebbeeee4eeeeeeeebbeeedeeffddbbbefeeedffeebbeeeeeee5eeee
    ebbeeedfeefddfbbbffeedffeebbbeeeeeeee2eeebbeeedfeefddfbbbffeedffeebbbeeee2eee5eeebbeeedfeefddfbbbffeedffeebbbeeeeeeeeeeeebbeeedfeefddfbbbffeedffeebbbeeeeeeeeeee
    ebbeeddffffdffbbbffdddfeeeebbeeee4eeeeeeebbeeddffffdffbbbffdddfeeeebbeeeeeeeeeeeebbeeddffffdffdbbffdddfeeeebbeeeeeeeeeeeebbeeddffffdffbbbffdddfeeeebbeeeeeeeee2e
    bbbeeedffffdffbbbffddffeefdbbbeefeeeeeeebbbeeedffffdffbbbffddffeefdbbbeefeeeeeeebbbeeedffffdffdbbffddffeefdbbbeefeeee5eebbbeeedffffdffbbbffddffeefdbbbeefeeeeeee
    bbbddedffffdfffbbbfddfffffdbbbeefffeeeeebbbddedffffdfffbbbfddfffffdbbbeefffeeeeebbbddedffffdfffbbbfddfffffdbbbeefffeeeeebbbddedffffdfffbbbfddfffffdbbbeefffeeeee
    bbbddddffffdffffbbfddffffddbbbfeffeeee5ebbbddddffffdffffbbfddffffddbbbfeffeeeeeebbbddddffffdffffbbfddffffddbbbfeffeeeeeebbbbdddffffdffffbbfddffffddbbbfeffeeeeee
    bbbddddfffdfffffbbbddffffdfbbbffffeeffeebbbddddfffdfffffbbbddffffdfbbbffffeeffeebbbddddfffdfffffbbbddffffdfbbbffffeeffeebbbbdddfffdfffffbbbddffffdfbbbffffeeffee
    bbbddddfffdffffffbbddffffdfbbbbffffdfffebbbddddfffdffffffbbddffffdfbbbbffffdfffebbbddddfffdffffffbbddffffdfbbbbffffdfffebbbddddfffdffffffbbddffffdfbbbbffffdfffe
    bbfddddffddfffffffbbffffddfbbbbffffdffffbbfddddffddfffffffbbffffddfbbbbffffdffffbbfddddffddfffffffbbffffddfbbbbffffdffffbbfddddffddfffffffbbffffddfbbbbffffdffff
    bbffdddddfffffffffbbbfffdfffbbbffffdffffbbffdddddfffffffffbbbfffdfffbbbffffdffffbbffdddddfffffffffbbbfffdfffbbbffffdffffbbffdddddfffffffffbbbfffdfffbbbffffdffff
    bbffddddffffffffffdbbbbddfffbbbffffdfffbbbffddddffffffffffdbbbbddfffbbbffffdfffbbbffddddffffffffffdbbbbddfffbbbffffdfffbbbffddddffffffffffdbbbbddfffbbbffffdfffb
    bbffdddfffffffffffddbbbbffffbbbbfffdfffbbbffdddfffffffffffddbbbbffffbbbbfffdfffbbbffdddfffffffffffddbbbbffffbbbbfffdfffbbbffdddfffffffffffddbbbbffffbbbbfffdfffb
    bbffdddfffffffffffddbbbbbbffbbbbfffdfffbbbffdddfffffffffffddbbbbbbffbbbbfffdfffbbbffdddfffffffffffddbbbbbbffbbbbfffdfffbbbffdddfffffffffffddbbbbbbffbbbbfffdfffb
    bffffddffffffffffddddbbbbbbbbbbbbfffdffbbffffddffffffffffddddbbbbbbbbbbbbfffdffbbffffddffffffffffddddbbbbbbbbbbbbfffdffbbffffddffffffffffddddbbbbbbbbbbbbfffdffb
    bffffdddfffffffffddfffffbbbbbbbbbfffdffbbffffdddfffffffffddfffffbbbbbbbbbfffdffbbffffdddfffffffffddfffffbbbbbbbbbfffdffbbffffdddfffffffffddfffffbbbbbbbbbfffdffb
    bffffddddffffffffddffffffbbbbbbbbfffdfbbbffffddddffffffffddffffffbbbbbbbbfffdfbbbffffddddffffffffddffffffbbbbbbbbfffdfbbbffffddddffffffffddffffffbbbbbbbbfffdfbb
    bffffdddddffffffdddfffffffbbbbbbbfffdbbbbffffdddddffffffdddfffffffbbbbbbbfffdbbbbffffdddddffffffdddfffffffbbbbbbbfffdbbbbffffdddddffffffdddfffffffbbbbbbbfffdbbb
    ddfffffdddddffffdddfffffffffbbbbbfffbbbbddfffffdddddffffdddfffffffffbbbbbfffbbbbddfffffdddddffffdddfffffffffbbbbbfffbbbbddfffffdddddffffdddfffffffffbbbbbfffbbbb
    fdfffffdddddddfdddffffffffffbbbbbffbbbbffdfffffdddddddfdddffffffffffbbbbbffbbbbffdfffffdddddddfdddffffffffffbbbbbffbbbbffdfffffdddddddfdddffffffffffbbbbbffbbbbf
    fdffffffddddddddddffffffffffbbbbbffbbbfffdffffffddddddddddffffffffffbbbbbffbbbfffdffffffddddddddddffffffffffbbbbbffbbbfffdffffffddddddddddffffffffffbbbbbffbbbff
    fdffffffdddddddddfffffffffffbbbbbffbbffffdffffffdddddddddfffffffffffbbbbbffbbffffdffffffdddddddddfffffffffffbbbbbffbbffffdffffffdddddddddfffffffffffbbbbbffbbfff
    fddfffffdddddddfffffffffffffbbbbbffbbdfffddfffffdddddddfffffffffffffbbbbbffbbdfffddfffffdddddddfffffffffffffbbbbbffbbdfffddfffffdddddddfffffffffffffbbbbbffbbdff
    ffddffffddddddffffffffffffffbbbbbffbbdffffddffffddddddffffffffffffffbbbbbffbbdffffddffffddddddffffffffffffffbbbbbffbbdffffddffffddddddffffffffffffffbbbbbffbbdff
    ffdddfffddddddffffffffffffffbbbbbfbbbddfffdddfffddddddffffffffffffffbbbbbfbbbddfffdddfffddddddffffffffffffffbbbbbfbbbddfffdddfffddddddffffffffffffffbbbbbfbbbddf
    ffffddddddddddfffffffffffffbbbbbbfbbbfdfffffddddddddddfffffffffffffbbbbbbfbbbfdfffffddddddddddfffffffffffffbbbbbbfbbbfdfffffddddddddddfffffffffffffbbbbbbfbbbfdf
    ffffddddddddddfffffffffffffbbbbbbbbbffdfffffddddddddddfffffffffffffbbbbbbbbbffdfffffddddddddddfffffffffffffbbbbbbbbbffdfffffddddddddddfffffffffffffbbbbbbbbbffdf
    ffffffddddddddfffffffffffffbbbbbbbbbffddffffffddddddddfffffffffffffbbbbbbbbbffddffffffddddddddfffffffffffffbbbbbbbbbffddffffffddddddddfffffffffffffbbbbbbbbbffdd
    dfffffffddddddffffffffffffbbbbbbbbbffffddfffffffddddddffffffffffffbbbbbbbbbffffddfffffffddddddffffffffffffbbbbbbbbbffffddfffffffddddddffffffffffffbbbbbbbbbffffd
    ddfffffffdddddffffffffffffbbbbbbbbbfffffddfffffffdddddffffffffffffbbbbbbbbbfffffddfffffffdddddffffffffffffbbbbbbbbbfffffddfffffffdddddffffffffffffbbbbbbbbbfffff
    ddfffffffdddddffffffffffffbbbbbbbbffffffddfffffffdddddffffffffffffbbbbbbbbffffffddfffffffdddddffffffffffffbbbbbbbbffffffddfffffffdddddffffffffffffbbbbbbbbffffff
    fdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbffffff
    fdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbffffff
    fdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbffffff
    fdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbfffffffdfffffffdddddfffffffffffbbbbbbbbbffffff
    fddffffffdddddfffffffffffbbbbbbbbffffffffddffffffdddddfffffffffffbbbbbbbbffffffffddffffffdddddfffffffffffbbbbbbbbffffffffddffffffdddddfffffffffffbbbbbbbbfffffff
    fddffffffdddddfffffffffffbbbbbbbbffffffffddffffffdddddfffffffffffbbbbbbbbffffffffddffffffdddddfffffffffffbbbbbbbbffffffffddffffffdddddfffffffffffbbbbbbbbfffffff
    dddffffffdddddfffffffffffbbbbbbbbfffffffdddffffffdddddfffffffffffbbbbbbbbfffffffdddffffffdddddfffffffffffbbbbbbbbfffffffdddffffffdddddfffffffffffbbbbbbbbfffffff
    ddfffffffdddddfffffffffffbbbbbbbbfffffffddfffffffdddddfffffffffffbbbbbbbbfffffffddfffffffdddddfffffffffffbbbbbbbbfffffffddfffffffdddddfffffffffffbbbbbbbbfffffff
    ddfffffffddddddffffffffffbbbbbbbbfffffffddfffffffddddddffffffffffbbbbbbbbfffffffddfffffffddddddffffffffffbbbbbbbbfffffffddfffffffddddddffffffffffbbbbbbbbfffffff
    ddfffffffddddddffffffffffbbbbbbbbfffffffddfffffffddddddffffffffffbbbbbbbbfffffffddfffffffddddddffffffffffbbbbbbbbfffffffddfffffffddddddffffffffffbbbbbbbbfffffff
    ddfffffffddddddffffffffffbbbbbbbffffffffddfffffffddddddffffffffffbbbbbbbffffffffddfffffffddddddffffffffffbbbbbbbffffffffddfffffffddddddffffffffffbbbbbbbffffffff
    dffffffffddddddffffffffffbbbbbbbfffffffddffffffffddddddffffffffffbbbbbbbfffffffddffffffffddddddffffffffffbbbbbbbfffffffddffffffffddddddffffffffffbbbbbbbfffffffd
    dffffffffddddddffffffffffbbbbbbbffffffdddffffffffddddddffffffffffbbbbbbbffffffdddffffffffddddddffffffffffbbbbbbbffffffdddffffffffddddddffffffffffbbbbbbbffffffdd
    dffffffffddddddffffffffffbbbbbbbffffffdddffffffffddddddffffffffffbbbbbbbffffffdddffffffffddddddffffffffffbbbbbbbffffffdddffffffffddddddffffffffffbbbbbbbffffffdd
    fffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffddd
    fffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffddd
    fffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffdddfffffffffdddddddfffffffffbbbbbbbfffffddd
    fffffffffddddddddffffffffbbbbbbbffffddddfffffffffddddddddffffffffbbbbbbbffffddddfffffffffddddddddffffffffbbbbbbbffffddddfffffffffddddddddffffffffbbbbbbbffffdddd
    fffffffffddddddddffffffffbbbbbbbffffddddfffffffffddddddddffffffffbbbbbbbffffddddfffffffffddddddddffffffffbbbbbbbffffddddfffffffffddddddddffffffffbbbbbbbffffdddd
    fffffffffddddddddffffffffbbbbbbbffffdddffffffffffddddddddffffffffbbbbbbbffffdddffffffffffddddddddffffffffbbbbbbbffffdddffffffffffddddddddffffffffbbbbbbbffffddd9
    ffffffffffddddddddffffffbbbbbbbbffffdddfffffffffffddddddddffffffbbbbbbbbffffdddfffffffffffddddddddffffffbbbbbbbbffffdddfffffffffffddddddddffffffbbbbbbbbffffddd9
    dfffffffffddddddddffffffbbbbbbbbdddddddddfffffffffddddddddffffffbbbbbbbbdddddddddfffffffffddddddddffffffbbbbbbbbdddddddddfffffffffddddddddffffffbbbbbbbbdddddddd
    dddddfffffddddddddffffffbbbbbbbbbddddddddddddfffffddddddddffffffbbbbbbbbbddddddddddddfffffddddddddffffffbbbbbbbbbddddddddddddfffffddddddddffffffbbbbbbbbbddddddd
    ddddddddffdddddddddfffddbbbbbbbbbdddddddddddddddffdddddddddfffddbbbbbbbbbdddddddddddddddffdddddddddfffddbbbbbbbbbdddddddddddddddffdddddddddfffddbbbbbbbbbddddddd
    dddddddddddddddddddfddddbbbbbbbbbddddddddddddddddddddddddddfddddbbbbbbbbbddddddddddddddddddddddddddfddddbbbbbbbbbddddddddddddddddddddddddddfddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddeeeeeeeeeebbbbbbddddddddddddddddddddddddeeeeeeeeeebbbbbbddddddddddddddddddddddddeeeeeeeeeebbbbbbddddddddddddddddddddddddeeeeeeeeeebbbbbbddddd
    ddddddddddddddeeeeeeeeeeeeeeeeeeeebdddddddddddddddddddeeeeeeeeeeeeeeeeeeeebdddddddddddddddddddeeeeeeeeeeeeeeeeeeeebdddddddddddddddddddeeeeeeeeeeeeeeeeeeeebddddd
    dddddddddddeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeedddd
    ddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedd
    dddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbcdbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbcbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbccbbbbbbbbbbbbbbbcccccbbccbbbbbbbbcbbbbcbbbbbbbbbbbbbbbbbbbbbbccbbbccbbcbbbbbbbbbbbbbcbbcbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbccbbbbbbbbbbbbbbbbbbbcccbccbbbbbbbcccccbcbbbbbbbbbbbbbbbbbbbbbcbbbbbcbbcbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbcbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbcbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbdddddddbbbbcbbbbbbdddddddbbbcbbbbbbbdddddddbbbbbbbbbbbbdddddddbccbbbbbbbbbdddddddbbbbbbbbbbdddddddbcbbbcccbbbbddddddddbbcbbbbddddddddbbbbbbbddddddddbbbbbbbb
    bbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbccbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbccbbbbbcbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbccbbbbbbbbbbbbbbbbbccccbbcccccbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbccbbbcccbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
`)
let survivor = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f c c f f f . . . . 
    . . . f f f c c c c f f f . . . 
    . . f f f 7 7 7 7 7 7 f f f . . 
    . . f f 7 c c c c c c 7 7 f . . 
    . . f 7 c f f f f f f c 7 f . . 
    . . f f f f c c c c f f f f . . 
    . f f c f b f 4 4 f b f c f f . 
    . f c c 4 1 f d d f 1 4 c c f . 
    . . f c c d d d d d d c c f . . 
    . . . f c c f 4 4 f c c f . . . 
    . . e 4 f 2 6 2 6 2 6 f 4 e . . 
    . . 4 d f 6 2 6 2 6 2 f d 4 . . 
    . . f 4 f c c 5 5 c c f 4 f . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(survivor, 40, 0)
survivor.setPosition(80, 110)
survivor.setStayInScreen(true)
//scene.cameraFollowSprite(survivor)
// set up statues bars




// set up variables for most of the game
let zombie: any = null
let lastbtnpsh = "none"
let bullet: any = null
let shotcooldn = false
let lftZombie: any =  null




// start the game
startgame(3000)


let healthBar = statusbars.create(20, 4, StatusBarKind.Health)
    healthBar.setLabel("HP")
    healthBar.setPosition(20,6.5)



function startgame (cooldwn: number) {
    game.onUpdateInterval(cooldwn, function() {
        if (cooldwn > 100){ 
                cooldwn = cooldwn - Math.randomRange(50,200)
                console.log(cooldwn)
        }

let rol = Math.randomRange(1,2)
console.log(rol)
        if (rol == 1 ){
            zombie = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ..........6.........
            ......677666........
            ......617176........
            ......77ff7.........
            ......7fff7.........
            ..77...7777.........
            .7727.722776677.....
            .7677772777766777...
            ...777666777..777...
            .....7776627...7....
            ...7777..777........
            ...276.....76.......
            ..2766.....77.......
        `, SpriteKind.Enemy)
            animation.runImageAnimation(zombie, [img`
            ....................
            ....................
            ....................
            ..........6.........
            ......677666........
            ......717176........
            ......77ff7.........
            ......7fff7.........
            ..77...7777.........
            .7727.722776677.....
            .7677772777766777...
            ...777666777..777...
            .....7776627...7....
            ...7777..777........
            ...276.....76.......
            ..2766.....77.......
        `,
            img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . 7 7 7 7 . . . . .
            . . . . . . . 7 1 7 1 . . . . .
            . . 7 7 . . . 7 f f 7 . . . . .
            . . 2 6 7 . 7 7 f f f . . . . .
            . . 6 2 2 7 7 6 2 7 7 7 7 . . .
            . . . . 7 7 6 2 7 7 6 6 6 7 . .
            . . . . . 7 6 7 7 7 6 . 7 7 7 .
            . . . . . . 7 7 2 7 . . . 7 7 .
            . . . . . . . 2 6 . . . . . . .
            . . . . . . 7 6 6 7 . . . . . .
        `,
            img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . 7 7 7 . . . . . . .
            . . . . . 7 1 7 1 7 . . . . . .
            . . . . . 7 7 7 7 7 . . 7 7 . .
            . . . . . 7 f f f 7 . 7 6 7 . .
            . . . . 2 7 7 f f . 6 6 6 . . .
            . . . 7 6 7 2 7 2 7 7 2 . . . .
            . . 2 7 7 7 6 6 2 7 7 . . . . .
            . . 6 6 . 7 2 6 6 2 . . . . . .
            . . 6 . . . 7 7 7 . . . . . . .
            . . . . . 7 7 . 7 2 7 . . . . .
            . . . . 2 6 . . 7 6 2 . . . . .
            . . . 6 6 6 . . . 7 2 7 . . . .
        `], 150, true)
            zombie.setFlag(SpriteFlag.AutoDestroy, true)
            let statusbar = statusbars.create(15, 2, StatusBarKind.ZombieHealth)
            statusbar.attachToSprite(zombie)
        zombie.setPosition(-5,110)
        zombie.setVelocity(10, 0)

        } else {
            lftZombie = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ..........6.........
            ......677666........
            ......617176........
            ......77ff7.........
            ......7fff7.........
            ..77...7777.........
            .7727.722776677.....
            .7677772777766777...
            ...777666777..777...
            .....7776627...7....
            ...7777..777........
            ...276.....76.......
            ..2766.....77.......
        `, SpriteKind.Enemy)
            animation.runImageAnimation(lftZombie, [img`
            ....................
            ....................
            ....................
            ..........6.........
            ......677666........
            ......717176........
            ......77ff7.........
            ......7fff7.........
            ..77...7777.........
            .7727.722776677.....
            .7677772777766777...
            ...777666777..777...
            .....7776627...7....
            ...7777..777........
            ...276.....76.......
            ..2766.....77.......
        `,
            img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . 7 7 7 7 . . . . .
            . . . . . . . 7 1 7 1 . . . . .
            . . 7 7 . . . 7 f f 7 . . . . .
            . . 2 6 7 . 7 7 f f f . . . . .
            . . 6 2 2 7 7 6 2 7 7 7 7 . . .
            . . . . 7 7 6 2 7 7 6 6 6 7 . .
            . . . . . 7 6 7 7 7 6 . 7 7 7 .
            . . . . . . 7 7 2 7 . . . 7 7 .
            . . . . . . . 2 6 . . . . . . .
            . . . . . . 7 6 6 7 . . . . . .
        `,
            img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . 7 7 7 . . . . . . .
            . . . . . 7 1 7 1 7 . . . . . .
            . . . . . 7 7 7 7 7 . . 7 7 . .
            . . . . . 7 f f f 7 . 7 6 7 . .
            . . . . 2 7 7 f f . 6 6 6 . . .
            . . . 7 6 7 2 7 2 7 7 2 . . . .
            . . 2 7 7 7 6 6 2 7 7 . . . . .
            . . 6 6 . 7 2 6 6 2 . . . . . .
            . . 6 . . . 7 7 7 . . . . . . .
            . . . . . 7 7 . 7 2 7 . . . . .
            . . . . 2 6 . . 7 6 2 . . . . .
            . . . 6 6 6 . . . 7 2 7 . . . .
        `], 150, true)
            lftZombie.setFlag(SpriteFlag.AutoDestroy, true)
            let statusbar = statusbars.create(15, 2, StatusBarKind.ZombieHealth)
            statusbar.attachToSprite(lftZombie)
            lftZombie.setPosition(170,110)
            lftZombie.setVelocity(-10,0)
        }

    })
}
