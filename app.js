// ====== Hamburger menyu ======
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// link bosilganda menyu yopilishi
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// ====== Formni Telegram bot orqali yuborish ======
const form = document.getElementById('myForm');
const BOT_TOKEN = '8266251473:AAFQ3_k5PHdSbV2gat8P4yTQbE-oCak4Isc';
const CHAT_ID = '7498261631';

if(form){
  form.addEventListener('submit', function(e){
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const message = `Yangi xabar:\nIsm: ${data.name}\nEmail: ${data.number}\nXabar: ${data.message}`;

      fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              chat_id: CHAT_ID,
              text: message
          })
      })
      .then(response => response.json())
      .then(result => {
          if(result.ok){
              alert('✅ Xabar muvaffaqiyatli yuborildi!');
              form.reset();
          } else {
              alert('❌ Xabar yuborilmadi. Iltimos, qayta urinib ko‘ring.');
          }
      })
      .catch(err => {
          console.log(err);
          alert('❌ Xabar yuborishda xatolik yuz berdi.');
      });
  });
}
