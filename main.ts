basic.forever(function () {
    if (input.soundLevel() > 5 && input.soundLevel() < 20) {
        led.plotBarGraph(
        12,
        255
        )
        music.stopAllSounds()
    }
    if (input.soundLevel() > 20 && input.soundLevel() < 40) {
        led.plotBarGraph(
        30,
        255
        )
        music.stopAllSounds()
    }
    if (input.soundLevel() > 40 && input.soundLevel() < 60) {
        led.plotBarGraph(
        50,
        255
        )
        music.stopAllSounds()
    }
    if (input.soundLevel() > 60 && input.soundLevel() < 80) {
        led.plotBarGraph(
        70,
        255
        )
        music.stopAllSounds()
    }
    if (input.soundLevel() > 80 && input.soundLevel() < 100) {
        led.plotBarGraph(
        90,
        255
        )
        music.stopAllSounds()
    }
    if (input.soundLevel() > 100 && input.soundLevel() < 120) {
        led.plotBarGraph(
        110,
        255
        )
        music.stopAllSounds()
    }
    if (input.soundLevel() > 120 && input.soundLevel() < 140) {
        led.plotBarGraph(
        130,
        255
        )
        music.stopAllSounds()
    }
    if (input.soundLevel() > 140) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Double)), music.PlaybackMode.LoopingInBackground)
        led.plotBarGraph(
        255,
        255
        )
    }
})
