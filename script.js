// Array erstellen
const myArray = [
    { 
        name: "See mit Eisschollen und schneebedeckte Berge", 
        path: "./assets/img/See mit Eisschollen und schneebedeckte Berge.jpg" 
    },
    { 
        name: "Anime Stadt bei Nacht", 
        path: "./assets/img/Anime Stadt bei Nacht.jpg" 
    },
    { 
        name: "Dunkle graue Wolken", 
        path: "./assets/img/Dunkle graue Wolken.jpg" 
    },
    { 
        name: "Blaumeise auf einem Zweig", 
        path: "./assets/img/Blaumeise auf einem Zweig.jpg" 
    },
    { 
        name: "Wirbelsturm aus dem Weltraum fotografiert", 
        path: "./assets/img/Wirbelsturm aus dem Weltraum fotografiert.jpg" 
    },
    { 
        name: "See mit schneebedekten Bergen dahinter", 
        path: "./assets/img/See mit schneebedekten Bergen dahinter.jpg" 
    },
    { 
        name: "Männliche Tafelente auf dem Wasser", 
        path: "./assets/img/Männliche Tafelente auf dem Wasser.jpg" 
    },
    { 
        name: "Mann leuchtet mit Taschenlampe den Sternenhimmel an", 
        path: "./assets/img/Mann leuchtet mit Taschenlampe den Sternenhimmel an.jpg" 
    },
    { 
        name: "Schneeammer im Winterkleid sitzt auf Stein", 
        path: "./assets/img/Schneeammer im Winterkleid sitzt auf Stein.jpg" 
    },
    { 
        name: "2 Schneeleoparden-Babys erkunden die Gegend", 
        path: "./assets/img/2 Schneeleoparden-Babys erkunden die Gegend.jpg" 
    },
    { 
        name: "Steinige mit Schnee bedeckte Berge", 
        path: "./assets/img/Steinige mit Schnee bedeckte Berge.jpg" 
    },
    { 
        name: "Eingeschneiter Baum in Winterlandschaft", 
        path: "./assets/img/Eingeschneiter Baum in Winterlandschaft.jpg" 
    }

];

// Boxen rendern / dynamisch erstellen
const contentRef = document.getElementById('content-box');

function render() {
    contentRef.innerHTML = "";
    for (let i = 0; i < myArray.length; i++) {
        contentRef.innerHTML += templateBoxes(i);
    }
    event.stopPropagation();
    setFocus();
}

// Dialog erstellen
const dialogRef = document.getElementById('myDialog');

function openDialog(i) {
    dialogRef.showModal();
    dialogRef.classList.add('opened');

    const h2Ref = document.getElementById('headlineDialog');
    h2Ref.innerHTML = "";
    h2Ref.innerHTML += templateDialogTitle(i);

    const xBtnRef = document.getElementById('btnDialog');
    xBtnRef.innerHTML = "";
    xBtnRef.innerHTML += templateXBtn();

    const contentRef = document.getElementById('contentDialog');
    contentRef.innerHTML = "";
    contentRef.innerHTML += templateDialogContent(i);

    const footerRef = document.getElementById('footerDialog');
    footerRef.innerHTML = "";
    footerRef.innerHTML += templateDialogFooter(i);
}

// Button Navigation Pfeil-Links
function btnArrowLeft(i) {
    if (i == 0) {
        i = myArray.length - 1;
    } else {
        i--;
    }
    closeDialog();
    openDialog(i);
}

// Button Navigation Pfeil-Rechts
function btnArrowRight(i) {
    if (i == 11) {
        i = 0;
    } else {
        i++;
    }
    closeDialog();
    openDialog(i);
}

// Dialog schließen
function closeDialog() {
    dialogRef.classList.remove('opened');
    dialogRef.close();
    event.stopPropagation();
}

// Focus setzen
function setFocus() {
    const elemRef = document.getElementById('headlineDialog');
    elemRef.focus();
}