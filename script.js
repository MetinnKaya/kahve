// Butonlar ve yanıt metni
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const responseText = document.getElementById("response");

// Evet butonuna basıldığında yazıyı göster ve Hayır butonunu gizle
yesButton.addEventListener("click", () => {
  responseText.textContent = "O zaman Espressolab'e ne dersin?"; // Yanıt metni
  responseText.style.display = "block"; // Yanıtı görünür yap
  noButton.style.display = "none"; // Hayır butonunu gizle
});

// Hayır butonuna basıldığında veya üzerine gelindiğinde buton kaçar
noButton.addEventListener("mouseover", () => {
  const randomX = Math.random() * 80;
  const randomY = Math.random() * 80;
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}%`;
  noButton.style.top = `${randomY}%`;
});
