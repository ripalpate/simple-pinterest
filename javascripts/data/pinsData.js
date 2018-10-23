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

export {loadPinsForBoard};