const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const mainContainer = document.getElementById('main-container');
const successContainer = document.getElementById('success-container');
const mainGif = document.getElementById('main-gif');

let yesFontSize = 1.2;
let yesPaddingY = 15;
let yesPaddingX = 40;

let noFontSize = 1.2;
let noPaddingY = 15;
let noPaddingX = 40;

const noTexts = [
    "Emin misin?",
    "Gerçekten mi?",
    "Bir daha düşün!",
    "Son kararın mı?",
    "Bunu bana yapma 😢",
    "Ağlarım ama...",
    "Lütfeeeen",
    "İnadı bırak!",
    "Kalemi kırıyorsun!",
    "Evet de geç işte",
    "Hala mı hayır?! 😭"
];

const gifs = [
    "https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-kurumi-tokisaki.gif", // Default
    "https://media.tenor.com/zXnF2tG6lRwAAAAj/peach-and-goma-peach-cat.gif", // Sad/crying
    "https://media.tenor.com/1vD7W4-lYIEAAAAj/peach-goma.gif", // Pleading
    "https://media.tenor.com/I7KdFaSka9sAAAAj/cute-bear.gif", // Begging
    "https://media.tenor.com/TKbHIf9wUxEAAAAj/peach-cat-crying.gif" // Very sad
];

let clickCount = 0;

btnNo.addEventListener('click', () => {
    // Hayır butonunun metnini değiştir
    btnNo.innerText = noTexts[clickCount % noTexts.length];
    
    // Gifi değiştir (daha üzgün olanlara doğru)
    const gifIndex = Math.min(Math.floor(clickCount / 2) + 1, gifs.length - 1);
    mainGif.src = gifs[gifIndex];

    clickCount++;

    // Evet butonunu büyüt
    yesFontSize += 0.4;
    yesPaddingY += 4;
    yesPaddingX += 8;
    
    btnYes.style.fontSize = `${yesFontSize}rem`;
    btnYes.style.padding = `${yesPaddingY}px ${yesPaddingX}px`;

    // Hayır butonunu küçült
    noFontSize -= 0.1;
    noPaddingY -= 1;
    noPaddingX -= 2;

    if (noFontSize < 0.5) noFontSize = 0.5;
    if (noPaddingY < 5) noPaddingY = 5;
    if (noPaddingX < 10) noPaddingX = 10;

    btnNo.style.fontSize = `${noFontSize}rem`;
    btnNo.style.padding = `${noPaddingY}px ${noPaddingX}px`;
});

btnYes.addEventListener('click', () => {
    // Başarı ekranına geçiş
    mainContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');
});
