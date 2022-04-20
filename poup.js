// document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#runCoDE').addEventListener('click', onclick, false)

    function onclick() {
        chrome.tabs.query({
                currentWindow: true,
                active: true
            },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'এই সফটওয়্যার টি বন্ধ হয়ে যাবে "Press OK"')
            }
        )
    }
// }, false)
