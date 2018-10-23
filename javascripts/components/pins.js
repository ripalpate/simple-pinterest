import { loadPinsForBoard } from "../data/pinsData.js";

const shortenLink = (full_url) => {
    // console.log(new URL(full_url));
    const hostname = new URL(full_url).hostname;
    return hostname;
}

const bindEvents = () => {
    $('#toBoardsBtn').click (()=>{
        $('#boards-page').show();
        $('#pins-page').hide();
    })

}

const writePins = (pins) => {
    let domString = '';
    pins.forEach(pin =>{
        domString += `
        <div id=' ${pin.id}' class="pcard pin-card align-self-start p-2">
            <img class="card-img-top" src="${pin.image_url}">
            <a href='${pin.link}' target= '_blank' class='p-2'>
                <button type="button" class="btn btn-light">${shortenLink(pin.link)}</button>
            </a>
        </div>
        `
    })
    $('#pins-on-board').html(domString);
}

const initialPinView = (boardID)=> {
    // console.log('pins page', boardID);
    loadPinsForBoard(boardID)
    .then(data => {
        writePins(data);
        bindEvents();

    })
    .catch(error => {
        console.error('things messed up in pins', error);
    });
}



export {initialPinView};