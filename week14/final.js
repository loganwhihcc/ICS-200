const textElement = document.getElementById('reveal-text');
    const text = textElement.innerText;
    textElement.innerText = '';

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            textElement.innerText += text[i];
        }, 100 * i);
    }