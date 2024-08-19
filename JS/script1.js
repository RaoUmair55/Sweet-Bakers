// login
const bg = document.querySelector('.bg')




const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}


const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
label.innerHTML = label.innerText
.split('')
.map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
.join('')

})

