// Array erstellen
const myArray = [
    { 
        name: "See mit Eisschollen", 
        path: "./assets/img/See mit Eisschollen.jpg" 
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
        name: "Wirbelsturm von oben", 
        path: "./assets/img/Wirbelsturm von oben.jpg" 
    },
    { 
        name: "See mit schneebedekten Bergen", 
        path: "./assets/img/See mit schneebedekten Bergen.jpg" 
    },
    { 
        name: "Männliche Tafelente im Wasser", 
        path: "./assets/img/Männliche Tafelente im Wasser.jpg" 
    },
    { 
        name: "Mann und Sternenhimmel", 
        path: "./assets/img/Mann und Sternenhimmel.jpg" 
    },
    { 
        name: "Schneeammer im Winterkleid", 
        path: "./assets/img/Schneeammer im Winterkleid.jpg" 
    },
    { 
        name: "2 Schneeleoparden-Babys", 
        path: "./assets/img/2 Schneeleoparden-Babys.jpg" 
    },
    { 
        name: "Steinige Berge mit Schnee", 
        path: "./assets/img/Steinige Berge mit Schnee.jpg" 
    },
    { 
        name: "Eingeschneiter Baum", 
        path: "./assets/img/Eingeschneiter Baum.jpg" 
    }

];

const contentRef = document.getElementById('content-box');
const dialogRef = document.getElementById('myDialog');

// Boxen rendern / dynamisch erstellen
function render(event) {
    contentRef.innerHTML = "";
    for (let i = 0; i < myArray.length; i++) {
        contentRef.innerHTML += templateBoxes(i);
    }
    event.stopPropagation();
    setFocus();
}

// Dialog erstellen
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

// Dialog schließen mit ESC
document.addEventListener('keydown', function(event) {
if (event.key === 'Escape') {
    dialogRef.classList.remove('opened');
    }
});

// Button Navigation Pfeil-Links
function btnArrowLeft(i) {
    if (i == 0) {
        i = myArray.length - 1;
    } else {
        i--;
    }
    closeDialog(event);
    openDialog(i);
}

// Button Navigation Pfeil-Rechts
function btnArrowRight(i) {
    if (i == 11) {
        i = 0;
    } else {
        i++;
    }
    closeDialog(event);
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