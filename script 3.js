<script>
document.addEventListener("click", () => {
  // Turn background black
  document.body.style.backgroundColor = "black";

  // Alert the user
  alert("You have been monkey’d 🐒");

  // Send joke message to your Discord webhook
  fetch("https://discord.com/api/webhooks/1392286213863379004/RoiInGFPE6DTORSI0m-vvXIq4J7omq76vDQDY1YODhjobyddP6kmase_YqUtGNET_Mx9", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: "Somebody just got monkey’d 🐒 on your website!",
      username: "Monkey Bot"
    })
  });
});
</script>
