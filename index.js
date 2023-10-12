function switchSrc(item, src1, src2) {
    if (item.classList.contains('white')) {
        item.src = src2;
        item.classList.remove('white');
    } else {
        item.src = src1;
        item.classList.add('white');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let stars = document.querySelectorAll('.starIcon');
    let forks = document.querySelectorAll('.forkIcon');
    let eyes = document.querySelectorAll('.eyeIcon');

    stars.forEach((item) => {
        item.addEventListener('click', () => {
            switchSrc(item, './material/white star.svg', './material/yellow star.svg');
        })
    })

    forks.forEach((item) => {
        item.addEventListener('click', () => {
            switchSrc(item, './material/white fork.svg', './material/blue fork.svg');
        })
    })

    eyes.forEach((item) => {
        item.addEventListener('click', () => {
            switchSrc(item, './material/white eye.svg', './material/pink eye.svg')
        })
    })
})