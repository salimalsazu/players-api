const loadPlayer = (search) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayer(data.player));
}

const displayPlayer = players => {
    const playerContainer = document.getElementById('player-container');
    playerContainer.innerHTML = ``;
    players.forEach(player => {
        const playerId = document.createElement('Div');
        playerId.classList.add('card-box');
        playerId.innerHTML = `
        <figure><img src=" ${player.strRender ? player.strRender : 'No Image'}" alt="player"></figure>
        <div class="card-body flex flex-col justify-center items-center">
            <h2 class="card-title"> ${player.strPlayer} </h2>
            <p> Jersey Number: ${player.strNumber}</p>
            <p> Height: ${player.strHeight}</p>
            <p> Weight: ${player.strWeight}</p>
            <p>Club: ${player.strTeam}</p>
            <p>Salary: ${player.strWage}</p>
            <p> Position: ${player.strPosition}</p>
            <p>Nationality: ${player.strNationality}</p>
            <p>Birth Location: ${player.strBirthLocation}</p>
            <p> Date of Birth: ${player.dateBorn}</p>
        </div>    
            `
        playerContainer.appendChild(playerId);
    });

}



const searchOption = () => {
    const searchFiled = document.getElementById('search-player');
    const searchText = searchFiled.value;
    // console.log(searchText);
    loadPlayer(searchText);
    searchFiled.value = "";
}


loadPlayer();