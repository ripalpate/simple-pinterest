const loadBoards = ()=>{
    return new Promise((resolve, reject)=>{
        $.get('../db/boards.json')
          .done((data)=>{
            // returns array of boards object
            // console.log(data.boards);
              resolve(data.boards);
          })
          .fail((error)=>{
              reject(error);
          })
    });
}

export{loadBoards};