let awaypnts = document.getElementById("away-pnts");
let homepnts = document.getElementById("home-pnts");

var homepntsEl = 0
var awaypntsEl = 0

function home_one() {
    homepntsEl = homepntsEl + 1
    homepnts.innerText = homepntsEl
    if (homepnts.innerText >= 21) {
        alert("Home Team Wins!");
        window.location.reload();
    }
}

function home_two() {
    homepntsEl = homepntsEl + 2
    homepnts.innerText = homepntsEl
    if (homepnts.innerText >= 21) {
        alert("Home Team Wins!");
        window.location.reload();
    }
}

function home_three() {
    homepntsEl = homepntsEl + 3
    homepnts.innerText = homepntsEl
    if (homepnts.innerText >= 21) {
        alert("Home Team Wins!");
        window.location.reload();
    }
}

function away_one() {
    awaypntsEl = awaypntsEl + 1
    awaypnts.innerText = awaypntsEl
    if (awaypnts.innerText >= 21) {
        alert("Away Team Wins!");
        window.location.reload();
    }
}

function away_two() {
    awaypntsEl = awaypntsEl + 2
    awaypnts.innerText = awaypntsEl
    if (awaypnts.innerText >= 21) {
        alert("Away Team Wins!");
        window.location.reload();
    }
}

function away_three() {
    awaypntsEl = awaypntsEl + 3
    awaypnts.innerText = awaypntsEl
    if (awaypnts.innerText >= 21) {
        alert("Away Team Wins!");
        window.location.reload();
    }
}

// let awaypnts = document.getElementById("away-pnts");
// let homepnts = document.getElementById("home-pnts");

// let homepntsEl = 0;
// let awaypntsEl = 0;

// function updatePoints(team, points) {
//     if (team === 'home') {
//         homepntsEl += points;
//         homepnts.innerText = homepntsEl;
//     } else if (team === 'away') {
//         awaypntsEl += points;
//         awaypnts.innerText = awaypntsEl;
//     }

//     if (homepntsEl >= 21) {
//         alert("Home Team Wins!");
//         window.location.reload();
//     } else if (awaypntsEl >= 21) {
//         alert("Away Team Wins!");
//         window.location.reload();
//     }
// }




