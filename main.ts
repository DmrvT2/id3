/**
 * アイドル（伴奏B）
 */
/**
 * 休符（1拍）
 */
/**
 * 休符（1/2拍）
 */
input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(0, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
