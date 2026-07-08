function templateBoxes(i) {
    return /*html*/ `
        <div id="box${i}" onclick="openDialog(${i})">
            <img src="${myArray[i].path}" alt="${myArray[i].name}" onclick="openDialog(${i})">
        </div>
        `;
}

function templateDialogTitle(i) {
    return /*html*/ `
        <h2>${myArray[i].name}</h2>
    `;
}

function templateXBtn() {
    return /*html*/ `
        <img src="./assets/icons/x_default.png" alt="Schließen" onclick="closeDialog(event)">
    `;
}

function templateDialogContent(i) {
    return /*html*/ `
        <img src="${myArray[i].path}" alt="${myArray[i].name}">
    `;
}

function templateDialogFooter(i) {
    return /*html*/ `
        <button onclick="btnArrowLeft(${i})">
            <img src="./assets/icons/arrow_left.png" alt="Vorheriges Bild">
        </button>
        <p>${i + 1}/${myArray.length}</p>
        <button onclick="btnArrowRight(${i})">
            <img src="./assets/icons/arrow_right.png" alt="Nächstes Bild">
        </button>
    `;
}