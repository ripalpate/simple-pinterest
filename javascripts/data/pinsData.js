const loadPinsForBoard = (boardID) => {
    return new Promise((resolve, reject)=>{
        $.get('../db/pins.json')
          .done((data)=>{
              console.log(data);
            // data gives us pins array of 38. and we are filtering to match with board_id which is in pins.json file.
              const pinsForBoards = data.pins.filter(pin => pin.board_id == boardID);
            //   console.log(pinsForBoards);
              resolve(pinsForBoards);
          })
          .fail ((error)=>{
            reject(error);
          })
    })
}

const loadPinsOnBoards = (boards) => {
  return new Promise ((resolve, reject)=>{
    $.get('../db/pins.json')
    .done((data)=>{
      // var x =[1,2,3].map(num => num*2) // [2,4,6]
      const boardsWithPins = boards.map(board=>{
        const matchingPins = data.pins.filter(pin => pin.board_id === board.id);
        board.pins = matchingPins;
        return board;
      })
      resolve(boardsWithPins);
    })
    .fail ((error)=>{
      reject('error loadPinsOnBoards', error);
    })
})
}

export {loadPinsForBoard, loadPinsOnBoards};