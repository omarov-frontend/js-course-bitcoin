const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');
const go = document.querySelector('#go');

go.addEventListener('click', function() {
    if (!startDate.value || !endDate.value) return;

    const params = {
        start: startDate.value,
        end: endDate.value
    }

    fetch('https://api.coindesk.com/v1/bpi/historical/close.json' + new URLSearchParams(params))
        .then(response => response.json())
        .then(response => {
            console.log('response', response);
            
            const { bpi } = response;

            // вывести в таблицу под формой
        })
        .catch(error => {
            console.error(error);
        });
})
