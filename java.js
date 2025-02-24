document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded, script berjalan!");

    
    const menubtn = document.querySelector(".menubtn");
    const linkmenu = document.querySelector(".linkmenu");
//sesuain sih
    menubtn.addEventListener("click", () => {
        if (linkmenu.classList.contains("mobile-menu")) {
            linkmenu.style.maxHeight = "0"; 
            setTimeout(() => linkmenu.classList.remove("mobile-menu"), 300); 
        } else {
            linkmenu.classList.add("mobile-menu");
            linkmenu.style.maxHeight = "500px"; 
        }
        console.log("Menu toggled:", linkmenu.classList.contains("mobile-menu"));
    });

   //fadee
    const fadeElements = document.querySelectorAll(".fade-in");
    if (fadeElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    console.log("Elemen terlihat:", entry.target);
                }
            });
        }, { threshold: 0.5 });

        fadeElements.forEach((element) => observer.observe(element));
    }

   //hover?? gak ngerti
    const ctnButtons = document.querySelectorAll(".ctn");
    ctnButtons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            button.classList.add("hover");
            button.style.transition = "transform 0.2s ease-in-out";
            setTimeout(() => {
                button.style.transform = "scale(1.1)";
            }, 100);
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    //valid juga bingung
    const form = document.getElementById("kontakForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const nama = document.getElementById("nama").value.trim();
            const email = document.getElementById("email").value.trim();
            const pesan = document.getElementById("pesan").value.trim();

            const errorNama = document.getElementById("errorNama");
            const errorEmail = document.getElementById("errorEmail");
            const errorPesan = document.getElementById("errorPesan");

           
            [errorNama, errorEmail, errorPesan].forEach((el) => (el.style.display = "none"));

            let valid = true;

            if (nama.length<3) {
                errorNama.textContent = "Nama minimal 3 karakter lek!";
                errorNama.style.display = "block";
                valid = false;
            }

            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                errorEmail.textContent ="Masukkan email yang valid lek!";
                errorEmail.style.display ="block";
                valid = false;
            }

            if (pesan.length<10) {
                errorPesan.textContent ="Pesan minimal 10 karakter lek!";
                errorPesan.style.display ="block";
                valid = false;
            }

            if (valid) {
                console.log("Formulir berhasil dikirim:", { nama, email, pesan });
                form.innerHTML = "<h2 style='color: green; text-align: center;'>Pesan kamu berhasil dikirim!</h2>";
            }
        }); //work sih
    }
});


// nexttime belajar lagi sih ini jvscript kacauu