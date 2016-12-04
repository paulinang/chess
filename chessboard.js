var selectedSquare;

$('.square').on('click', function(evt) {
    var square = evt.target;
    var squareId = square.dataset.chessColumn + square.parentElement.dataset.chessRow;
    // alert('Clicked ' + squareId);
    // debugger;
    if (square.id == '') {
      if (selectedSquare) {
        selectedSquare.id = '';
      }
      square.id = 'selected';
      selectedSquare = square;
    }
    else if (square.id == 'selected') {
      square.id = '';
      selectedSquare = null;
    }
    // debugger;
  });