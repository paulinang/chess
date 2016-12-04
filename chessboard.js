 $('.square').on('click', function(evt) {
      var square = evt.target;
      var squareId = square.dataset.chessColumn + square.parentElement.dataset.chessRow;
      // alert('Clicked ' + squareId);
      // debugger;
      if (square.id == '') {
        square.id = 'selected';
      }
      else if (square.id == 'selected') {
        square.id = '';
      }
      // debugger;
    });