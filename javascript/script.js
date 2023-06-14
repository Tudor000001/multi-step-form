const buttons = document.querySelectorAll('.checkboxu');
var change = document.getElementById('change');
var tabtank = document.getElementById('tank');
var pretTotal = 0;
tabtank.style.display = 'none';

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('pressed'));
        this.classList.add('pressed');
    });
});

var checkbox = document.getElementById("cecu");

const textok = document.getElementById('textugrosu');
const textok1 = document.getElementById('textugrosu1');
const textok2 = document.getElementById('textugrosu2');
const textMonth = document.getElementById('month');
const textYear = document.getElementById('year');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        textok.style.display = 'block';
        textok1.style.display = 'block';
        textok2.style.display = 'block';
        textYear.style.color = '#05254e'
        textMonth.style.color = '';

    } else {
        textok.style.display = 'none';
        textok1.style.display = 'none';
        textok2.style.display = 'none';
        textMonth.style.color = '#05254e';
        textYear.style.color = '';
    }
});

var checkboxpl = document.getElementById('cecucec');
var checkboxpl1 = document.getElementById('cecucec1');
var checkboxpl2 = document.getElementById('cecucec2');
const textService = document.getElementById('service');
const textStorage = document.getElementById('storage');
const textProfil = document.getElementById('profil');

function toggleBox() {
    var displayBox = document.getElementById('squaru');
    var displayBox1 = document.getElementById('squaru1');
    var displayBox2 = document.getElementById('squaru2');
    if (checkboxpl.checked) {
        displayBox.style.borderColor = 'mediumpurple';
        textService.style.display = 'block';
    } else {
        displayBox.style.borderColor = 'lightgray';
        textService.style.display = 'none';
    }
    if (checkboxpl1.checked) {
        displayBox1.style.borderColor = 'mediumpurple';
        textStorage.style.display = 'block';
    } else {
        displayBox1.style.borderColor = 'lightgray';
        textStorage.style.display = 'none';
    }
    if (checkboxpl2.checked) {
        displayBox2.style.borderColor = 'mediumpurple';
        textProfil.style.display = 'block';
    } else {
        displayBox2.style.borderColor = 'lightgray';
        textProfil.style.display = 'none';
    }
}

var pagina = 0;
var nextBtn = document.getElementById('nextBtn');
var prevBtn = document.getElementById('prevBtn');
var tab = document.getElementById('primu');
var tab1 = document.getElementById('doilea');
var tab2 = document.getElementById('treilea');
var tab3 = document.getElementById('patrulea');
var bul1 = document.getElementById('bulina1');
var bul2 = document.getElementById('bulina2');
var bul3 = document.getElementById('bulina3');
var bul4 = document.getElementById('bulina4');

tab.style.display = 'block';
bul1.style.backgroundColor = '#89cff0'

var conf = document.getElementById('conf');

change.addEventListener('click', function () {
    pagina = 1;
    tab3.style.display = 'none';
    conf.style.display = 'none';
    nextBtn.style.display = 'block';
    bul2.style.backgroundColor = 'transparent';
    bul4.style.backgroundColor = 'transparent';
    if (pagina == 1) {
        tab1.style.display = 'block';
        bul2.style.backgroundColor = '#89cff0';
    } else {
        tab1.style.display = 'none';
        bul2.style.backgroundColor = '';
    }
});

var field1 = document.getElementById('field1').value;
var field2 = document.getElementById('field2').value;
var field3 = document.getElementById('field3').value;

nextBtn.addEventListener('click', function () {
    pagina = pagina + 1;
    console.log(pagina);
    if (pagina > 3) {
        pagina = 3;
    }
    if (pagina < 0) {
        pagina = 0;
    }
    if (pagina > 0) {
        prevBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
    }
    if (pagina == 0) {
        tab.style.display = 'block';
        bul1.style.backgroundColor = '#89cff0';
        nextBtn.style.display = 'block';
    } else {
        tab.style.display = 'none';
        bul1.style.backgroundColor = '';
    }
    if (pagina == 1) {
        tab1.style.display = 'block';
        bul2.style.backgroundColor = '#89cff0';
        nextBtn.style.display = 'block';
    } else {
        tab1.style.display = 'none';
        bul2.style.backgroundColor = '';
    }
    if (pagina == 2) {
        tab2.style.display = 'block';
        bul3.style.backgroundColor = '#89cff0';
        nextBtn.style.display = 'block';
    } else {
        tab2.style.display = 'none';
        bul3.style.backgroundColor = '';
    }
    if (pagina == 3) {
        tab3.style.display = 'block';
        bul4.style.backgroundColor = '#89cff0';
        nextBtn.innerHTML = "Confirm";
        nextBtn.style.display = 'none';
        conf.style.display = 'block';
    } else {
        nextBtn.innerHTML = "Continue";
        tab3.style.display = 'none';
        bul4.style.backgroundColor = '';
    }
    if (apasat == 1) {
        pretAb.innerHTML = "$9/mo";
        if (checkbox.checked) {
            pretAb.innerHTML = "$90/yr";
        }
    } 
    if (apasat == 2) {
        pretAb.innerHTML = "$12/mo";
        if (checkbox.checked) {
            pretAb.innerHTML = "$120/yr";
        }
    }
    if (apasat == 3) {
        pretAb.innerHTML = "$15/mo";
        if (checkbox.checked) {
            pretAb.innerHTML = "$150/yr";
        }
    }
    if (apasat == 0) {
        subs.style.display = 'block';
    } else {
        subs.style.display = 'none';
    }

    if (apasat == 0) {
        subs.style.display = 'block';
    } else {
        subs.style.display = 'none';
    }
    if (subs.style.display == 'none') {
        pers.style.display = 'block';
    } else {
        pers.style.display = 'none';
    }
});

prevBtn.style.display = 'none';
prevBtn.addEventListener('click', function () {
    pagina--;
    console.log(pagina);
    if (pagina > 3) {
        pagina = 3;
    }
    if (pagina < 0) {
        pagina = 0;
    }
    if (pagina > 0) {
        prevBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
    }
    if (pagina == 0) {
        tab.style.display = 'block';
        bul1.style.backgroundColor = '#89cff0';
    } else {
        tab.style.display = 'none';
        bul1.style.backgroundColor = '';
    }
    if (pagina == 1) {
        tab1.style.display = 'block';
        bul2.style.backgroundColor = '#89cff0';
    } else {
        tab1.style.display = 'none';
        bul2.style.backgroundColor = '';
    }
    if (pagina == 2) {
        tab2.style.display = 'block';
        bul3.style.backgroundColor = '#89cff0';
        nextBtn.style.display = 'block';
        conf.style.display = 'none';
    } else {
        tab2.style.display = 'none';
        bul3.style.backgroundColor = '';
    }
    if (pagina == 3) {
        tab3.style.display = 'block';
        bul4.style.backgroundColor = '#89cff0';
    } else {
        nextBtn.innerHTML = "Continue";
        tab3.style.display = 'none';
        bul4.style.backgroundColor = '';
    }
});


var buton1form2 = document.getElementById('arcade');
var buton2form2 = document.getElementById('advanced');
var buton3form2 = document.getElementById('pro');
var textFinalTitlu = document.getElementById('finalTitlu');
var apasat = 0;

var pretAbVal = 0;
apasat = 0;

buton1form2.addEventListener('click', function () {
    apasat = 1;
    if (apasat == 1) {
        textFinalTitlu.innerHTML = "Arcade";
        if (checkbox.checked) {
            pretAb.innerHTML = ("$90/yr");
            pretAbVal = 90;
        } else {
            pretAb.innerHTML = ("$9/mo");
            pretAbVal = 9;
        }
    }
});
buton2form2.addEventListener('click', function () {
    apasat = 2;
    if (apasat == 2) {
        textFinalTitlu.innerHTML = "Advanced";
        if (checkbox.checked) {
            pretAb.innerHTML = ("$120/yr");
            pretAbVal = 120;
        } else {
            pretAb.innerHTML = ("$12/mo");
            pretAbVal = 12;
        }
    }
});
buton3form2.addEventListener('click', function () {
    apasat = 3;
    if (apasat == 3) {
        textFinalTitlu.innerHTML = "Pro";
        if (checkbox.checked) {
            pretAb.innerHTML = ("$150/yr");
            pretAbVal = 150;
        } else {
            pretAb.innerHTML = ("$15/mo");
            pretAbVal = 15;
        }
    }
});

var pretAdVal = 0;
var pretAd1Val = 0;
var pretAd2Val = 0;
var totalu = document.getElementById('totalu');

nextBtn.addEventListener('click', function () {
    if (checkbox.checked) {
        if (checkboxpl.checked) {
            pretAdVal = 10;
        } else {
            pretAdVal = 0;
        }
        if (checkboxpl1.checked) {
            pretAd1Val = 20;
        } else {
            pretAd1Val = 0;
        }
        if (checkboxpl2.checked) {
            pretAd2Val = 20;
        } else {
            pretAd2Val = 0;
        }
    } else {
        if (checkboxpl.checked) {
            pretAdVal = 1;
        } else {
            pretAdVal = 0;
        }
        if (checkboxpl1.checked) {
            pretAd1Val = 2;
        } else {
            pretAd1Val = 0;
        }
        if (checkboxpl2.checked) {
            pretAd2Val = 2;
        } else {
            pretAd2Val = 0;
        }
    }
    console.log(pretAdVal + pretAd1Val + pretAd2Val + pretAbVal);
    pretTotal = pretAdVal + pretAd1Val + pretAd2Val + pretAbVal;
    totalu.innerHTML = pretTotal;
});

function toggleText() {
    var displayText = document.getElementById("arcadu");
    var displayText1 = document.getElementById("advancedu");
    var displayText2 = document.getElementById("prou");
    var displayText3 = document.getElementById("moni");
    var displayText4 = document.getElementById("moni1");
    var displayText5 = document.getElementById("moni2")
    var displayMoYr = document.getElementById("finalMoYr");
    var pretAb = document.getElementById('pretAb');
    var pretAd = document.getElementById('pretAd');
    var pretAd1 = document.getElementById('pretAd1');
    var pretAd2 = document.getElementById('pretAd2');
    var perwhat = document.getElementById('perwhat');
    var perwhat2 = document.getElementById('perwhattotal');

    if (checkbox.checked) {
        displayText.innerHTML = "$90/yr";
        displayText1.innerHTML = "$120/yr";
        displayText2.innerHTML = "$150/yr";
        displayText3.innerHTML = "+$10/yr";
        displayText4.innerHTML = "+$20/yr";
        displayText5.innerHTML = "+$20/yr";
        displayMoYr.innerHTML = "(Yearly)"
        pretAd.innerHTML = "+$10/yr";
        pretAd1.innerHTML = "+$20/yr";
        pretAd2.innerHTML = "+$20/yr";
        perwhat.innerHTML = "(per year)";
        perwhat2.innerHTML = "/yr";
        if (apasat == 1) {
            pretAbVal = 90;
        }
        if (apasat == 2) {
            pretAbVal = 120;
        }
        if (apasat == 3) {
            pretAbVal = 150;
        }
    } else {
        displayText.innerHTML = "$9/mo";
        displayText1.innerHTML = "$12/mo";
        displayText2.innerHTML = "$15/mo";
        displayText3.innerHTML = "+$1/mo";
        displayText4.innerHTML = "+$2/mo";
        displayText5.innerHTML = "+$2/mo";
        displayMoYr.innerHTML = "(Monthly)";
        pretAd.innerHTML = "+$1/mo";
        pretAd1.innerHTML = "+$2/mo";
        pretAd2.innerHTML = "+$2/mo";
        perwhat.innerHTML = "(per month)";
        perwhat2.innerHTML = "/mo";
        if (apasat == 1) {
            pretAbVal = 9;
        }
        if (apasat == 2) {
            pretAbVal = 12;
        }
        if (apasat == 3) {
            pretAbVal = 15;
        }
    }
}

var reg = document.getElementById('reg');
var subs = document.getElementById('subs');
var pers = document.getElementById('pers');
reg.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (pagina == 3)
        if (apasat == 1 || apasat == 2 || apasat == 3) {
            tab3.style.display = 'none';
            tabtank.style.display = 'block';
            prevBtn.style.display = 'none';
            conf.style.display = 'none';
        }
    if (apasat == 0) {
        subs.style.display = 'block';
    } else {
        subs.style.display = 'none';
    }
    if (subs.style.display == 'none') {
        pers.style.display = 'block';
    } else {
        pers.style.display = 'none';
    }
});