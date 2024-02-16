
//lager en array som heter biletter.
let biletter= [];

// lager tabellen
let ut = "<table><tr>" +
    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th>" +
    "<th>Telefonnr</th><th>Epost</th>" +
    "</tr>";


function kjop() {

    //Henter alle dataene fra inputfeltet.
    const film = document.getElementById("velgfilm").value
    const antall = document.getElementById("Antall").value
    const fornavn = document.getElementById("Fornavn").value;
    const etternavn = document.getElementById("Etternavn").value;
    const telefonnr = document.getElementById("Telefonnr").value;
    const epost = document.getElementById("Epost").value;

    //lager en boolean hvor jeg kaller for feil_sjekk
    let sjekk = false;


    //sjekke om alle inputtene ikke er tomme, hvis de er sender ut feilmelding
    if (document.getElementById("velgfilm").value ===""){
        sjekk=true;
    }
    if(document.getElementById("Antall").value === "") {
        document.getElementById("feilantall").innerHTML = "Må skrive noe inn i antall";
        sjekk = true;

    }
    if(document.getElementById("Fornavn").value === "") {
        document.getElementById("feilfornavn").innerHTML = "Må skrive noe inn i Fornavn";
        sjekk = true;

    }
    if(document.getElementById("Etternavn").value === "") {
        document.getElementById("feiletternavn").innerHTML = "Må skrive noe inn i Etternavn";
        sjekk = true;

    }
    if(document.getElementById("Telefonnr").value === "") {
        document.getElementById("feiltlf").innerHTML = "Må skrive noe inn i Telefonnr";
        sjekk= true;

    }
    if(document.getElementById("Epost").value === "") {
        document.getElementById("feilepost").innerHTML = "Må skrive noe inn i Epost ";
        sjekk = true;

    }
    // Validering av telefonnummer med regex
    const regexTlf = /^[0-9]{8}$/;
    if (!regexTlf.test(telefonnr)) {
        document.getElementById("feilvalideringtlf").innerHTML = "Telefonnummeret er ugyldig. Skriv inn et gyldig norsk telefonnummer på 8 siffer.";
        sjekk = true;
    }

    // Validering av e-post med regex
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(epost)) {
        document.getElementById("feilvalideringepost").innerHTML = "E-postadressen er ugyldig. Skriv inn en gyldig e-postadresse.";
        sjekk = true;
    }

    // Hvis det er ikke feil i input så lagre.
    if(!sjekk){
        //Lagrer biletten kjøp i en arrayet
        const bilett= {
            film: film,
            antall : antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telef: telefonnr,
            email: epost
        }
        //Legger det inn i array
        biletter.push(bilett);
        console.log(bilett);


        // Skriver ut inputene
        ut += "\n <tr> <td>" + film +  "</td><td>" + antall + "</td><td>" + fornavn+ "</td><td>"
            + etternavn + "</td><td>" + telefonnr + "</td><td>" + epost + "</td></tr>"

        //Skriver det ut i html ved hjelp av id register
        document.getElementById("register").innerHTML = ut;

        //tømmer input boksene.
        document.getElementById("Fornavn").value = "";
        document.getElementById("Etternavn").value = "";
        document.getElementById("Antall").value = "";
        document.getElementById("Epost").value = "";
        document.getElementById("Telefonnr").value="";


    }




}


function slett(){
    //setter array.lenge lik 0, det vil si at det ikke står noe
    biletter.length = 0;

    ut  = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th>" +
        "<th>Telefonnr</th><th>Epost</th>" +
        "</tr>";
    document.getElementById("register").innerHTML = ut;
}