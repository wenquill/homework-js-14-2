const second = document.querySelector('.seconds');
const loadingText = document.querySelector('.loadingText');
const loading = document.querySelector('.loading');

function printSeconds (to, from, interval) {

    const intervalId = setInterval(() => {
        second.textContent = to;
        to--;

        if (to < from) {
            clearInterval(intervalId);
            loadingText.remove();

            const link = document.createElement('a');
            link.textContent = 'Redirecting to http://link.net.ua/ ...';
            link.href = 'http://link.net.ua/';
            link.classList.add('loadingText');
            loading.append(link);
        }
    }, interval);
}

printSeconds(9, 0, 1000);