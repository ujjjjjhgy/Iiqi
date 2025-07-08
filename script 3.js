document.addEventListener("DOMContentLoaded", () => {
  const joinBtn = document.createElement("button");
  joinBtn.innerText = "Join our Discord 🌀";
  joinBtn.style.position = "fixed";
  joinBtn.style.bottom = "20px";
  joinBtn.style.right = "20px";
  joinBtn.style.padding = "10px 20px";
  joinBtn.style.fontSize = "16px";
  joinBtn.style.background = "#7289DA";
  joinBtn.style.color = "white";
  joinBtn.style.border = "none";
  joinBtn.style.borderRadius = "8px";
  joinBtn.style.cursor = "pointer";
  joinBtn.onclick = () => {
    window.open("https://discord.gg/T2F7mDh5", "_blank");
  };
  document.body.appendChild(joinBtn);
});

