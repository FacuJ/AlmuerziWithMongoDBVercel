const stringToHTML = (s) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(s, 'text/html')

    return doc.body.firstChild
}
const renderItem = (item) => {
    const element = stringToHTML(`<li data-id="${item._id}"> ${item.name} </li>`)

    element.addEventListener('click', () => {
        const mealsList = document.getElementById('mealsList')
        Array.from(mealsList.children).forEach(x => x.classList.remove('selected'))
        element.classList.add('selected')
    })
    return element
}
window.onload = () => {
    fetch('https://almuerzi.facuj.vercel.app/api/meals')
        .then(response => response.json())
        .then(data => {
            const mealsList = document.getElementById('mealsList')
            const submit = document.getElementById('submit')
            const listItems = data.map(renderItem)
            mealsList.removeChild(mealsList.firstElementChild)
            listItems.forEach(element => mealsList.appendChild(element))
            submit.removeAttribute('disabled')
        })
}