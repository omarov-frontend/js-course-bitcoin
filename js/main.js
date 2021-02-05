const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');
const go = document.querySelector('#go');
const tableWrapper = document.querySelector('#table-wrapper');

go.addEventListener('click', function() {
    if (!startDate.value || !endDate.value) return;

    // параметры для запроса
    const params = {
        start: startDate.value,
        end: endDate.value
    }

    // получаем данные о биткоине
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json' + new URLSearchParams(params))
        .then(response => response.json())
        .then(response => {
            console.log('response', response);

            // получили данные
            const { bpi } = response;

            // надо вывести данные
            renderBitcoinDate(bpi, tableWrapper);

        })
        .catch(error => {
            console.error(error);
        });
})

function renderBitcoinDate(tableDate, element) {
    let result = 
        `<table>
            <tr>
                <th>Дата</th>
                <th>Цена</th>
            </tr>
        `
    ;

    for (let item in tableDate) {
        result += 
        `
            <tr>
                <td> ${ item } </td>
                <td> ${ tableDate[item] } </td>
            </tr>
        `
    }

    result += '</table>';

    element.innerHTML = result;
}
