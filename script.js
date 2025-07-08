await fetch("https://discord.com/api/webhooks/1392031867221311518/AUDy9JCxOdlCOCTssnzl0IaduB4O8lUU33R1RXY37urNXh9vk5TsZ9-uv3pnu_RiavcP", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ content: "Test message from Julian's site!" })
});

