const audio = document.getElementById('audio')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const forward = document.getElementById('forward')
const rewind = document.getElementById('rewind')
const stop = document.getElementById('stop')

play.addEventListener('click', () => audio.play())

pause.addEventListener('click', () => pause.pause())

rewind.addEventListener('click', () => audio.currentTime())

forward.addEventListener('click', () => audio.currentTime())

stop.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
})