async function getUserInfo() {
  try {
    const res = await fetch("https://ipinfo.io/json?token=beeb9a0c6e4807");
    const data = await res.json();

    const info = {
      ip: data.ip,
      city: data.city,
      region: data.region,
      country: data.country,
      org: data.org,
      loc: data.loc,
      browser: navigator.userAgent
    };

    alert(`Hey there!\nYou're visiting from ${info.city}, ${info.region}, ${info.country}\nYour IP is ${info.ip}`);

    // Send to Discord webhook
    await fetch("https://discord.com/api/webhooks/1392246043793690724/MNsNpBt02GADS36K90673sWQ2faYZSriP91fDsTyNJ6iMA1ikJ0Xb_hnjM_gYIfIkK05", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Visitor Logger",
        embeds: [{
          title: "New Visitor",
          color: 5814783,
          fields: [
            { name: "IP", value: info.ip },
            { name: "Location", value: `${info.city}, ${info.region}, ${info.country}` },
            { name: "ISP / Org", value: info.org },
            { name: "Coordinates", value: info.loc },
            { name: "Browser", value: info.browser }
          ],
          footer: { text: "Julian's Space Visitor Log" },
          timestamp: new Date().toISOString()
        }]
      })
    });

  } catch (e) {
    console.error("Error getting user info", e);
    alert("Something went wrong while collecting your info.");
  }
}
