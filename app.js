let currentPlayer = 'player-one';
let hoverColor = 'player-one-hover';
let isGameOver = false;

const topLeftTile = document.getElementById('top-left');
const topMidTile = document.getElementById('top-mid');
const topRightTile = document.getElementById('top-right');
const midLeftTile = document.getElementById('mid-left');
const midMidTile = document.getElementById('mid-mid');
const midRightTile = document.getElementById('mid-right');
const botLeftTile = document.getElementById('bot-left');
const botMidTile = document.getElementById('bot-mid');
const botRightTile = document.getElementById('bot-right');

class Player {

   static switchTurn(player) {
      if (player === 'player-one') {
         currentPlayer = 'player-two';
         hoverColor = 'player-two-hover';

         document.getElementById('player-red-box').classList.add('bg-danger');
         document.getElementById('player-red-box').classList.remove('bg-secondary');

         document.getElementById('player-blue-box').classList.add('bg-secondary');
         document.getElementById('player-blue-box').classList.remove('bg-primary');
      }

      if (player === 'player-two') {
         currentPlayer = 'player-one';
         hoverColor = 'player-one-hover';


         document.getElementById('player-red-box').classList.remove('bg-danger');
         document.getElementById('player-red-box').classList.add('bg-secondary');

         document.getElementById('player-blue-box').classList.remove('bg-secondary');
         document.getElementById('player-blue-box').classList.add('bg-primary');
      }
   }
}

class Line {
   constructor(tile1, tile2, tile3) {
      this.tile1 = tile1;
      this.tile2 = tile2;
      this.tile3 = tile3;
   }
}

class Board {
   static occupyTile(tile, player) {

      if (!(tile.classList.contains('occupied'))) {
         if (player === 'player-one') {
            tile.classList.add('player-one');
            tile.innerHTML = '<i class="fas fa-times occupied"></i>';
         }

         if (player === 'player-two') {
            tile.classList.add('player-two');
            tile.innerHTML = '<i class="far fa-circle occupied"></i>';
         }

         tile.classList.add('occupied');
         Player.switchTurn(currentPlayer);
      }
   }

   static listenForWinner() {
      // TOP HORIZONTAL LINE
      if (
         topLeftTile.classList.contains('player-one') &&
         topMidTile.classList.contains('player-one') &&
         topRightTile.classList.contains('player-one')
      ) {
         Board.getWinner(topMidTile);
      }

      // MIDDLE HORIZONTAL LINE
      if (
         midLeftTile.classList.contains('player-one') &&
         midMidTile.classList.contains('player-one') &&
         midRightTile.classList.contains('player-one')
      ) {
         Board.getWinner(midMidTile);
      }

      // BOTTOM HORIZONTAL LINE
      if (
         botLeftTile.classList.contains('player-one') &&
         botMidTile.classList.contains('player-one') &&
         botRightTile.classList.contains('player-one')
      ) {
         Board.getWinner(botMidTile);
      }

      // LEFT VERTICAL LINE
      if (
         topLeftTile.classList.contains('player-one') &&
         midLeftTile.classList.contains('player-one') &&
         botLeftTile.classList.contains('player-one')
      ) {
         Board.getWinner(midLeftTile);
      }

      // MIDDLE VERTICAL LINE
      if (
         topMidTile.classList.contains('player-one') &&
         midMidTile.classList.contains('player-one') &&
         botMidTile.classList.contains('player-one')
      ) {
         Board.getWinner(midMidTile);
      }

      // RIGHT VERTICAL LINE
      if (
         topRightTile.classList.contains('player-one') &&
         midRightTile.classList.contains('player-one') &&
         botRightTile.classList.contains('player-one')
      ) {
         Board.getWinner(midRightTile);
      }

      // FORWARD DIAGONAL LINE
      if (
         topRightTile.classList.contains('player-one') &&
         midMidTile.classList.contains('player-one') &&
         botLeftTile.classList.contains('player-one')
      ) {
         Board.getWinner(midMidTile);
      }

      // BACKWARD DIAGONAL LINE
      if (
         topLeftTile.classList.contains('player-one') &&
         midMidTile.classList.contains('player-one') &&
         botRightTile.classList.contains('player-one')
      ) {
         Board.getWinner(midMidTile);
      }

      // PLAYER TWO

      // TOP HORIZONTAL LINE
      if (
         topLeftTile.classList.contains('player-two') &&
         topMidTile.classList.contains('player-two') &&
         topRightTile.classList.contains('player-two')
      ) {
         Board.getWinner(topMidTile);
      }

      // MIDDLE HORIZONTAL LINE
      if (
         midLeftTile.classList.contains('player-two') &&
         midMidTile.classList.contains('player-two') &&
         midRightTile.classList.contains('player-two')
      ) {
         Board.getWinner(midMidTile);
      }

      // BOTTOM HORIZONTAL LINE
      if (
         botLeftTile.classList.contains('player-two') &&
         botMidTile.classList.contains('player-two') &&
         botRightTile.classList.contains('player-two')
      ) {
         Board.getWinner(botMidTile);
      }

      // LEFT VERTICAL LINE
      if (
         topLeftTile.classList.contains('player-two') &&
         midLeftTile.classList.contains('player-two') &&
         botLeftTile.classList.contains('player-two')
      ) {
         Board.getWinner(midLeftTile);
      }

      // MIDDLE VERTICAL LINE
      if (
         topMidTile.classList.contains('player-two') &&
         midMidTile.classList.contains('player-two') &&
         botMidTile.classList.contains('player-two')
      ) {
         Board.getWinner(midMidTile);
      }

      // RIGHT VERTICAL LINE
      if (
         topRightTile.classList.contains('player-two') &&
         midRightTile.classList.contains('player-two') &&
         botRightTile.classList.contains('player-two')
      ) {
         Board.getWinner(midRightTile);
      }

      // FORWARD DIAGONAL LINE
      if (
         topRightTile.classList.contains('player-two') &&
         midMidTile.classList.contains('player-two') &&
         botLeftTile.classList.contains('player-two')
      ) {
         Board.getWinner(midMidTile);
      }

      // BACKWARD DIAGONAL LINE
      if (
         topLeftTile.classList.contains('player-two') &&
         midMidTile.classList.contains('player-two') &&
         botRightTile.classList.contains('player-two')
      ) {
         Board.getWinner(midMidTile);
      }

      if (
         topLeftTile.classList.contains('occupied') &&
         topMidTile.classList.contains('occupied') &&
         topRightTile.classList.contains('occupied') &&
         midLeftTile.classList.contains('occupied') &&
         midMidTile.classList.contains('occupied') &&
         midRightTile.classList.contains('occupied') &&
         botLeftTile.classList.contains('occupied') &&
         botMidTile.classList.contains('occupied') &&
         botRightTile.classList.contains('occupied')
      ) {
         if (isGameOver === false) {
            $("#tieModal").modal();
         }
      }
   }

   static getWinner(tile) {
      if (tile.classList.contains('player-one')) {
         isGameOver = true;
         $("#playerOneWinnerModal").modal();
      } else {
         isGameOver = true;
         $("#playerTwoWinnerModal").modal();
      }
   }
}

document.querySelectorAll('.tile').forEach(function (tile) {

   tile.addEventListener('click', function (e) {
      if (e.target.classList.contains('tile') || e.target.parentElement.classList.contains('tile')) {
         Board.occupyTile(e.target, currentPlayer);

         Board.listenForWinner();
      }
   });

   tile.addEventListener('mouseover', function (e) {
      if (e.target.classList.contains('tile') || e.target.parentElement.classList.contains('tile')) {
         if (e.target.classList.contains('tile')) {
            e.target.classList.add(`${hoverColor}`);
         }
         if (e.target.parentElement.classList.contains('tile')) {
            e.target.parentElement.classList.add(`${hoverColor}`);
         }

      }
   });
   tile.addEventListener('mouseout', function (e) {
      if (e.target.classList.contains('tile') || e.target.parentElement.classList.contains('tile')) {
         if (e.target.classList.contains('tile')) {
            e.target.classList.remove(`${hoverColor}`);
         }
         if (e.target.parentElement.classList.contains('tile')) {
            e.target.parentElement.classList.remove(`${hoverColor}`);
         }

      }
   });
});

$(".modal").on("hidden.bs.modal", function () {
   window.location.reload();
});