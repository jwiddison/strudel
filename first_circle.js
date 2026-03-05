// The First Circle - Pat Metheny
// This is just the first section of the song. Trying to figure out how Strudel works :)

setcpm(60/4)

const claps = sound("- cp cp - cp - cp cp - cp - cp - cp cp - cp cp - cp - cp").gain(0.5)

const piano_pedal = note(`
  c6 - - c6 - c6 - - c6 - c6 - c6 - - c6 - - c6 - c6 -,
  c4 - - c4 - c4 - - c4 - c4 - c4 - - c4 - - c4 - c4 -
`).sound("piano")

const guitar_pedal = note(`
  c5 - - c5 - c5 - - c5 - c5 - c5 - - c5 - - c5 - c5 -,
  c3 - - c3 - c3 - - c3 - c3 - c3 - - c3 - - c3 - c3 -
`).sound("gm_acoustic_guitar_nylon")

const section = (...voice) => stack(claps, piano_pedal, guitar_pedal, ...voice)

const oohs = (n) => note(n).sound("gm_voice_oohs")

cat(
  claps,
  claps,
  section(),
  section(),
  section(oohs("g4@2 - g4 - c4@2  - c4 - c4 - g4@2 - g4@2 - a4 - f4 -")),
  section(oohs("g4@2 - g4 - c4@3 rest@14")),
  section(oohs("g4@2 - g4 - c4@4 rest@3 g4@2 - g4@2 - a4 - f4 a4")),
  section(oohs("c5@5 rest@15 c4 d4")),
  section(oohs("e4@3 f4@2 g4@4 rest@11")),
)
