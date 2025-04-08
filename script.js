const games = [
    {
      sport: "NBA",
      teams: ["Lakers", "Warriors"],
      time: "7:30 PM ET",
      channel: "ESPN",
      available: true,
    },
    {
      sport: "NFL",
      teams: ["Jets", "Bills"],
      time: "8:15 PM ET",
      channel: "Amazon Prime",
      available: false,
    },
    {
      sport: "NHL",
      teams: ["Bruins", "Maple Leafs"],
      time: "7:00 PM ET",
      channel: "TNT",
      available: true,
    },
  ];

  const gameList = document.getElementById("game-list");

  games.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
    <h2>${game.teams[0]} vs ${game.teams[1]}</h2>
    <p><strong>Sport:</strong> ${game.sport}</p>
    <p><strong>Time:</strong> ${game.time}</p>
    <p><strong>Channel:</strong> ${game.channel}</p>
    <p class="${game.available ? "available" : "unavailable"}">
      ${game.available ? "✅ Available to You" : "❌ Not Available"}
    </p>
     `;
    gameList.appendChild(card);
    });