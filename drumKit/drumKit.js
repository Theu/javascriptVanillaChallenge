const validKeys = [65, 83, 68, 70, 71, 72, 74, 75, 76];
const listOfDrumsByKey = Array.from(document.getElementsByClassName('key'))
const listOfSoundsByKey = Array.from(document.getElementsByTagName('audio'));

const toggleClass = (eventType, target) => {
    if (eventType === 'keydown') {
        listOfDrumsByKey.forEach(keyTarget => {
            parseInt(keyTarget.dataset.key) === target && keyTarget.classList.add('playing')
        });
    } else if (eventType === 'keyup') {
        listOfDrumsByKey.forEach(keyTarget => {
            parseInt(keyTarget.dataset.key) === target && keyTarget.classList.remove('playing')
        });
    }
}

const play = (eventType, target) => {
    listOfSoundsByKey.forEach(keyTarget => {
        parseInt(keyTarget.dataset.key) === target && (keyTarget.currentTime = 0, keyTarget.play())
    })
    toggleClass(eventType, target)
}

const listenToKey = () => {
  window.addEventListener("keydown", event => {
    validKeys.includes(event.which) && play(event.type, event.which);
  });
  window.addEventListener("keyup", event => {
    validKeys.includes(event.which) && toggleClass(event.type, event.which);
  });
};

listenToKey();
