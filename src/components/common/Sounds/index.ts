import * as Tone from 'tone'

function addOrganicVariant() {
    return ((Math.random() - 0.5) * 4)
}

const player = new Tone.Player(`sounds/camera_depart.wav`).toDestination();
player.playbackRate = 0.8
player.volume.value = -20

const filter = new Tone.Filter(1200, "highpass");

const synth = new Tone.MonoSynth({
    envelope: {
        attack: 0,
        decay: 0.9,
        sustain: 0.3,
        release: 0.2,
    }
})

synth.oscillator.type = 'triangle2'
// synth.volume.value = -6
synth.chain(filter, Tone.Destination)
    

export const playInspectSound = (nodeType: string) => {
    let pitch = 550

    // switch (nodeType) {
    //     case 'show':
    //         pitch = 130
    //         break;
    //     case 'episode':
    //         pitch = 150
    //         break;
    //     case 'clip':
    //         pitch = 180
    //         break;
    //     case 'guest':
    //         pitch = 200
    //         break;
    //     default:
    //         pitch = 130
    // }

    pitch += addOrganicVariant()

    synth.triggerAttackRelease(pitch, 0.001)
    
};


export const playArriveSound = () => {
    // const sound = new Howl({
    //     src: [`sounds/inspect.wav`],
    //     autoplay: false,
    //     loop: false,
    //     volume: 0.5,
    //     // onend: () => {
    //     //   console.log('Finished!');
    //     // }
    // });
    
    // sound.play();
    
};

export const playDepartSound = () => {
    let rate = 0.8
    rate += addOrganicVariant() / 10
    if (rate > 0) {
        player.playbackRate = rate    
    }
    player.start()
};
