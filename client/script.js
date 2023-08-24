import '/public/js/functs.js';
$(() => {
    const url = '';

    function getAppTitle() {
        switch (window.location.pathname) {
            case '/auth':
                url = 'Accounts';
                break;
            default:
                url = 'Artificial Intelligent Assistant Chatbot';
                break;
        }
        return updateAppTitle(url);
    }

});