const today = new Date();
const currentDay = today.getDate(); // works for February



function openDay(day, page) {
  const msg = document.getElementById("unlockMessage");

  if (currentDay < day) {
    msg.innerHTML = `⏳ This surprise unlocks on <b>${day} February</b> 💖`;
    msg.classList.remove("hidden");
    return;
  }

  msg.classList.add("hidden");
  window.location.href = page;
}
function textDate() {
  const date = document.getElementById("nextDate").value;
  if (!date) {
    alert("Pick a date first 💖");
    return;
  }

  const phoneNumber = "917902611971"; // <-- YOUR number
  const message = `Our next date is on ${date} `;

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}
function goHome() {
  window.location.href = "index.html";
}


