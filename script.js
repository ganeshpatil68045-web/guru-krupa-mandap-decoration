// ===============================
// Guru Krupa Mandap Decoration
// Booking JavaScript
// ===============================

// IMPORTANT:
// Yaha apna WhatsApp number country code ke saath likho.
// Example: 919876543210
const whatsappNumber = "917517325809 ";

const form = document.getElementById("bookingForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const date = document.getElementById("date").value;
  const event = document.getElementById("event").value;
  const bookingType = document.getElementById("bookingType").value;
  const decoration = document.getElementById("decoration").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!/^\d{10}$/.test(mobile)) {
    message.textContent = "Please enter a valid 10-digit mobile number.";
    return;
  }

  const text =
`🌸 *Guru Krupa Mandap Decoration - Booking Request*

👤 Customer Name: ${name}
📱 Mobile: ${mobile}
📅 Event Date: ${date}
🎉 Event Type: ${event}
📋 Booking Type: ${bookingType}
✨ Decoration: ${decoration}
📍 Event Address: ${address}

Please confirm my booking.`;

  if (whatsappNumber.includes("X")) {
    message.textContent = "Pehle script.js me apna WhatsApp number add karo.";
    return;
  }

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});
