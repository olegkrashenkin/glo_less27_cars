'use strict'

const select = document.getElementById('select')
const text = document.getElementById('text')

const getData = fetch('./cars.json')
    .then(res => {
        if (!res.ok) {
            throw new Error('Ошибка при загрузке')
        } else {
            return res.json()
        }
    })
    .catch(err => console.log(err.message))


const addOptions = () => {
    getData.then(data => {
        data.cars.forEach(el => {
            const newOption = document.createElement('option')

            newOption.value = el['brand']
            newOption.textContent = el['brand']

            select.append(newOption)
        });
    })
        .catch(err => console.log(err.message))
}

const showCarInfo = (brand) => {
    text.innerHTML === '' ? select.options[0].disabled = true : text.innerHTML = ''

    getData.then(data => {
        data.cars.forEach(el => {
            if (brand === el['brand']) {
                const newText = document.createElement('p')

                newText.innerHTML = `Car: ${el['brand']} ${el['model']}<br>Price: ${el['price']}$`

                text.append(newText)
            }
        });
    })
}

select.addEventListener('change', (e) => {
    showCarInfo(e.target.value)
})

addOptions()