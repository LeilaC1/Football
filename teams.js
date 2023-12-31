"use strict";

let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" }
];

const selectDropdown = document.getElementById("selectDropdown");


window.onload = function () {
    const teamsForm = document.getElementById("teamsForm"); 
    teamsForm.onsubmit = function(event) {
      event.preventDefault(); 
      onSelectTeamBtnClicked();
      return false; 
    };
    
    const selectTeamBtn = document.getElementById("selectBtn");
    selectTeamBtn.onclick = onSelectTeamBtnClicked;

    initTeamsDropdown();
};


function onSelectTeamBtnClicked(){
    const outputDisplay = document.getElementById("outputDisplay");

    if(selectDropdown.value == null){
        outputDisplay.textContent = "Select a team!";
    }
    else{
        let teamCode = selectDropdown.value;
        let selectedTeam;
        for(let team of teams){
            if(team.code == teamCode){
                selectedTeam = team;
                break;
            }
        }

        let message = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who plays in ${selectedTeam.plays}.`;
        outputDisplay.textContent = message;
    }
}

function initTeamsDropdown(){

    const selectDropdown = document.getElementById("selectDropdown");

  const selectOption = new Option("Select a team", "");
  selectDropdown.appendChild(selectOption);

  for (let team of teams) {
    const theOption = new Option(team.name, team.code);
    selectDropdown.appendChild(theOption);
  }
}

