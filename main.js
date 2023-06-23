//Bộ đếm ngược
function updateCountdown(targetDate) {
    let now = new Date();
    let diff = targetDate - now;
  
    if (diff <= 0) {
      document.querySelector("#countdown").innerHTML = "Tải ngay";
      return;
    }
  
    let days = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(diff / 1000 / 60) % 60;
    let seconds = Math.floor(diff / 1000) % 60;
  
    document.querySelector("#day").innerHTML = ` ${days}`;
    document.querySelector("#hour").innerHTML = ` ${hours}`;
    document.querySelector("#minute").innerHTML = ` ${minutes}`;
  
  
  }
  
  let targetDate = new Date(2023, 08, 01, 0, 0, 0);
  updateCountdown(targetDate);
  setInterval(() => {
    updateCountdown(targetDate);
  }, 1000);
  
  //Faqs
  const faqs = document.querySelectorAll('.faq')
  
  
    faqs.forEach(faq => {
      faq.addEventListener('click' , () => {
        faq.classList.toggle('open');
      })
      }) 
  
  
  