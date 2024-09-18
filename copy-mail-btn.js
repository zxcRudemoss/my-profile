document.getElementById('copy-button').addEventListener('click', function() {

    var textToCopy = document.getElementById('myEmail-address').textContent;
    
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // Для мобільних пристроїв

    document.execCommand('copy');

    document.body.removeChild(tempTextArea);

    // повідомлення про успішне копіювання
    alert('Текст скопійовано: ' + textToCopy);
});
