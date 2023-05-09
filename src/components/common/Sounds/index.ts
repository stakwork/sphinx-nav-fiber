import * as Tone from 'tone'

const highPassFilter = new Tone.Filter(900, 'highpass')

const effectsBus = new Tone.Volume(-6)

effectsBus.chain(highPassFilter, Tone.Destination)

const reverb = new Tone.Reverb(3).connect(effectsBus)

const monoSynth = new Tone.MonoSynth({
  envelope: {
    attack: 0,
    decay: 0.9,
    sustain: 0.2,
    release: 0.1,
  },
})

monoSynth.oscillator.type = 'triangle2'
monoSynth.volume.value = -6
monoSynth.chain(highPassFilter, Tone.Destination)

const monoSynth2 = new Tone.MonoSynth({
  envelope: {
    attack: 0.4,
    decay: 0.9,
    sustain: 0.7,
    release: 0.6,
  },
}).connect(reverb)

monoSynth2.oscillator.type = 'triangle'
monoSynth2.volume.value = -6
monoSynth2.chain(highPassFilter, Tone.Destination)

function addOrganicVariant() {
  return Math.floor((Math.random() - 0.5) * 20)
}

export const playInspectSound = (distance = 0) => {
  if (distance > 2000) {
    monoSynth2.triggerAttackRelease(60, 0.3)
  } else if (distance > 1000) {
    let pitch = 310

    pitch += addOrganicVariant()

    monoSynth.triggerAttackRelease(pitch, 0.001)
  }
}
