function detectRussianLanguge(text) {
    return /^[а-яёА-ЯЁ]+$/.test(text); // Получаем true или false
}

document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll("h1, h2");

    headers.forEach(header => {
        const words = header.textContent.split(/\s+/); // Разделяем текст на слова
        header.innerHTML = "";

        words.forEach(word => {
            const span = document.createElement("span");
            span.textContent = word + " ";
            if (detectRussianLanguge(word)) {
                span.style.fontFamily = "Arial, sans-serif"; // Шрифт для русских слов
            } else {
                span.style.fontFamily = "Times New Roman, serif"; // Шрифт для английских слов
            }
            header.appendChild(span);
        });
    });
});
