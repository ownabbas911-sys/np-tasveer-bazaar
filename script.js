
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const noResults = document.getElementById("noResults");

// Search images by name
searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  cards.forEach(function (card) {
    const name = card.dataset.name.toLowerCase();
    const matches = name.includes(query);

    card.hidden = !matches;

    if (matches) {
      visibleCount++;
    }
  });

  noResults.hidden = visibleCount !== 0;
});

// WhatsApp order buttons
document.querySelectorAll(".buy-button").forEach(function (button) {
  button.addEventListener("click", function () {
    const product = button.dataset.product;
    const price = 500;

    const message =
      `Hello NP Tasveer Bazaar! I want to buy "${product}" for PKR ${price}. Please tell me how to pay and receive the image.`;

    const whatsappURL =
      "https://wa.me/923122920393?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
  });
});
const whatsappURL =
  "https://wa.me/923122920393?text=" +
  encodeURIComponent(message);