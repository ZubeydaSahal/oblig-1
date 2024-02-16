
const biletter=[];

let ut="<table><tr>"+ "<th>Film</th>+<th>Antall</th>+<th>Fornavn</th>+<th>Etternavn</th>+<th>Telefonnr</th> +<th>Epost</th>"+
    "</tr>"

function kjop(){
    const antall1=document.getElementById("Antall").value;
    const fornavn=document.getElementById("Fornavn").value;
    const etternavn=document.getElementById("Etternavn").value;
    const telfonnr1= document.getElementById("Telefonnr").value;
    const epost=document.getElementById("Epost").value;

    const antall=Number(antall1);
    const telefonnr=Number(telfonnr1);

    if (!antall){
        alert("Feil inputt, prøv igjen!!!")
    }
    if (!telfonnr1){
        alert("Feil inputt, ptøv igjen!!")
    }
    else {
        document.getElementById("svar").innerHTML=ut;
    }

    const bilett={
        antall:antall,
        fornavn:fornavn,
        etternavn:etternavn,
        telfonnr:telfonnr,
        epost:epost
    };

    biletter.push(bilett);
   document.getElementById("Antall").value="";
   document.getElementById("Fornavn").value="";
   document.getElementById("Etternavn").value="";
   document.getElementById("Telefonnr").value="";
   document.getElementById("Epost").value="";

   document.getElementById("ut").innerHTML=ut;

}

