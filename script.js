const audio = document.querySelector("audio");
const textDisplay = document.querySelector(".text");
const timer = document.querySelector(".timer");
const content = document.querySelectorAll(".content");
const btnStart = document.querySelector("button.starting");

content[0].style.display = "none";
content[1].style.display = "none";

const text = [
    "Hai Amall",
    "Selamat Ulang Tahun Yaa!",
    "Doa terbaik pokoknya buat kamuu:)",
    "Kita lost contact lumayan lama yaa?",
    "Tapiii...",
    "Aku masih suka sama kamuu:)"
];

function start() {
    content[0].style.display = "flex";
    content[1].style.display = "flex";
    content[2].style.display = "none";

    let detik = 37;
    timer.textContent = `00 : 00 : ${detik}`;
    
    for (let i = 0; i <= detik; i++) {
        setTimeout(() => {
            if (detik < 10) {
                timer.textContent = `00 : 00 : 0${detik}`;
                detik--;
            } else {
                timer.textContent = `00 : 00 : ${detik}`;
                detik--;
            }
        }, i * 1000);
    }
    
    let currentIndex = 0;
    let currentText = "";
    let letterIndex = 0;
    
    function animateText() {
        if (currentIndex < text.length) {
            currentText = text[currentIndex];
            textDisplay.textContent = currentText.slice(0, letterIndex + 1);
            letterIndex++;
    
            if (letterIndex === currentText.length) {
                currentIndex++;
                letterIndex = 0;
                setTimeout(animateText, 1500);
            } else {
                setTimeout(animateText, 100);
            }
        }
    }
    
    setTimeout(() => {
        animateText();
    }, 9200);
    
    setTimeout(() => {
        textDisplay.textContent = "";
    }, 35000);
    
    setTimeout(() => {
        textDisplay.innerHTML = `
            wkwkwk gitu aja sih<br>
        `;
    
        const btnNew = document.createElement('button');
    
        btnNew.innerHTML = "Lanjut respon?";
        content[1].appendChild(btnNew);
    
        btnNew.addEventListener("click", function() {
            openWhatsApp();
        });
    
        function openWhatsApp() {
            var phoneNumber = "+62895703181535";
            var message = "Halooo, Ariff";
            var whatsappURL = "whatsapp://send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                window.location.href = whatsappURL;
            } else {
                alert("Maaf, browser ini tidak mendukung membuka WhatsApp secara otomatis. Silakan buka WhatsApp secara manual.");
            }
        }
    }, 38000);
    
}

btnStart.onclick = () => {
    audio.play();
    start();
}


