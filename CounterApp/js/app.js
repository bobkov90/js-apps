const field = document.querySelector('.field')
const add = document.querySelector('.add')
const substract = document.querySelector('.substract')

let i = 0

add.addEventListener('click', () => {
	i++
	field.innerHTML = `${i}`
})

substract.addEventListener('click', () => {
	i--
	field.innerHTML = `${i}`
})