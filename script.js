// const games = [
//     {
//       sport: "NBA",
//       teams: ["Lakers", "Warriors"],
//       time: "7:30 PM ET",
//       channel: "ESPN",
//       available: true,
//     },
//     {
//       sport: "NFL",
//       teams: ["Jets", "Bills"],
//       time: "8:15 PM ET",
//       channel: "Amazon Prime",
//       available: false,
//     },
//     {
//       sport: "NHL",
//       teams: ["Bruins", "Maple Leafs"],
//       time: "7:00 PM ET",
//       channel: "TNT",
//       available: true,
//     },
//   ];

  const gameList = document.getElementById("game-list");


  // fetch("https://www.thesportsdb.com/api/v1/json/3/all_countries.php")
  // .then(response => response.json())
  // .then(data => {
  //   const games = data.events;
  //   games.forEach(game => {
  //     const card = document.createElement("div");
  //     card.className = "game-card";
  //     card.innerHTML = `
  //       <h2>${game.strHomeTeam} vs ${game.strAwayTeam}</h2>
  //       <p><strong>Sport:</strong> ${game.strSport}</p>
  //       <p><strong>Time:</strong> ${game.strTime}</p>
  //       <p><strong>Channel:</strong> ${game.strTV}</p>
  //       <p class="${game.intHomeScore > game.intAwayScore ? "available" : "unavailable"}">
  //         ${game.intHomeScore > game.intAwayScore ? "✅ Available to You" : "❌ Not Available"}
  //       </p>
  //     `;
  //     gameList.appendChild(card);
  //   });
  // })
  // .catch(error => {
  //   console.error(error);
  //   gameList.innerHTML = "<p>Error fetching games. Please try again later.</p>";
  // });

  fetch("https://www.thesportsdb.com/api/v1/json/3/all_countries.php")
  .then(response => response.json())
  .then(data => {
    const games = data.countries;
    games.forEach(game => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `
        <h2>${game.name_en}</h2>
      `;
      gameList.appendChild(card);
    });
  })


