document.addEventListener('DOMContentLoaded', () => {
    console.log('Admin Dashboard Loaded');
    loadPlayers();
});

function loadPlayers() {
    const players = [
        { uid: 'u1', username: 'ShadowHunter', rank: 'Gold' },
        { uid: 'u2', username: 'DragonSlayer', rank: 'Platinum' },
        { uid: 'u3', username: 'SniperWolf', rank: 'Silver' }
    ];

    const tableBody = document.getElementById('player-table');
    tableBody.innerHTML = players.map(player => `
        <tr>
            <td>${player.uid}</td>
            <td>${player.username}</td>
            <td>${player.rank}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="suspendPlayer('${player.uid}')">Suspend</button>
                <button class="btn btn-danger btn-sm" onclick="banPlayer('${player.uid}')">Ban</button>
            </td>
        </tr>
    `).join('');
}

function suspendPlayer(uid) {
    alert(`Suspending player: ${uid}`);
}

function banPlayer(uid) {
    if (confirm(`Are you sure you want to ban player: ${uid}?`)) {
        alert(`Player ${uid} has been banned.`);
    }
}
