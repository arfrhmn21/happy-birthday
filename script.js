const audio = document.querySelector("audio");
const textDisplay = document.querySelector(".text");
const timer = document.querySelector(".timer");
const content = document.querySelectorAll(".content");
const btnStart = document.querySelector("button.starting");
const wrapper = document.querySelector(".wrapper");

content[0].style.display = "none";
content[1].style.display = "none";

const text = [
    "Haloo Teh Fahiraa👋",
    "Ada yang spesial yaa hari ini?",
    "Selamat ulang tahun🥳",
    "Semoga lancar kuliahnyaa",
    "Selalu dikelilingi orang baikk",
    "Sehat selalu yaa Tehh :)"
];

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
if (day === 30 && month === 4) {
    btnStart.onclick = () => {
        audio.play();
        start();
    };
} else {
    const overlayStart = document.querySelector(".overlay-start");
    overlayStart.innerHTML = `
        <p class="locked-message">Hanya bisa diakses<br>pada tanggal 30 April.</p>
    `;
}

function start() {
    content[0].style.display = "flex";
    content[1].style.display = "flex";
    content[2].style.display = "none";

    let detik = 38;
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
            currentText = Array.from(text[currentIndex]);
            textDisplay.textContent = currentText.slice(0, letterIndex + 1).join('');
            letterIndex++;
    
            if (letterIndex === currentText.length) {
                currentIndex++;
                letterIndex = 0;
                setTimeout(animateText, 1830);
            } else {
                setTimeout(animateText, 100);
            }
        }
    }

    function bintang() {
        const btg = document.createElement("div");
        btg.classList.add("star");
        wrapper.appendChild(btg);
    
        btg.style.left = Math.random() * innerWidth + "px";   
    
        setTimeout(() => {
            wrapper.removeChild(btg);
        }, 5000);
    }
    
    setInterval(() => {
        bintang()
    }, 100);
    
    setTimeout(() => {
        animateText();
    }, 9200);
    
    setTimeout(() => {
        textDisplay.textContent = "";
    }, 35000);
    
    setTimeout(() => {
        textDisplay.style.display = "none";
        const btnNew = document.createElement('button');
    
        btnNew.innerHTML = "Lanjut";
        content[1].appendChild(btnNew);
    
        btnNew.addEventListener("click", function() {
            openWhatsApp();
        });
    
        function openWhatsApp() {
            var phoneNumber = "+62895703181535";
            var message = "Halo Ariff";
            var whatsappURL = "whatsapp://send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                window.location.href = whatsappURL;
            } else {
                alert("Maaf, browser ini tidak mendukung membuka WhatsApp secara otomatis. Silakan buka WhatsApp secara manual.");
            }
        }
    }, 38000);
}