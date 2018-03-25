function stergeDuplicate(arr){//FUNCTIE PENTRU STERGEREA DUPLICATELOR DINTR-UN ARRAY
    let vectorUnic = []
    for(let i = 0;i < arr.length; i++){
        if(vectorUnic.indexOf(arr[i]) == -1){
            vectorUnic.push(arr[i])
        }
    }
    return vectorUnic
}


//ARRAY CU TOATE DATELE
var optiuni=[
  {optiuneaA :"A1",
    optiuneaB: "B1",
    optiuneaC : "C1"
  },
  {optiuneaA :"A1",
    optiuneaB: "B1",
    optiuneaC : "C2"
  },
  {optiuneaA :"A1",
    optiuneaB: "B1",
    optiuneaC : "C3"
  },
  {optiuneaA :"A1",
    optiuneaB: "B2",
    optiuneaC : "C4"
  },
  {optiuneaA :"A1",
    optiuneaB: "B2",
    optiuneaC : "C5"
  },
  {optiuneaA :"A1",
    optiuneaB: "B3",
    optiuneaC : "C6"
  },
  {optiuneaA :"A2",
    optiuneaB: "B4",
    optiuneaC : "C7"
  },
  {optiuneaA :"A2",
    optiuneaB: "B5",
    optiuneaC : "C8"
  },
  {optiuneaA :"A2",
    optiuneaB: "B5",
    optiuneaC : "C9"
  },
  {optiuneaA :"A3",
    optiuneaB: "B6",
    optiuneaC : "C10"
  }

];

var dataA = "Toate";//INITIAL A,B,C = 'TOATE'
var dataB = "Toate";
var dataC = "Toate";
var verificareA=[];
var verificareB=[];
var verificareC=[];
var length =10;
//ON CHANGE A
function A(){
  dataA= $("#typeA option:selected").text();
  $(".optionC").remove();
  $(".optionB").remove();
  $("#tableBody").remove();//STERGEM CORPUL TABELULUI
  $("#myTable").append("<tbody id='tableBody'></tbody>");//CREAM UN CORP GOL IN CARE SE VOR ADAUGA DATE MAI TARZIU
  verificareB.push(dataB);//ADAUGAM IN VECTORUL VERIFICARE B VALOAREA LUI B IN MOMENTUL SCHIMBARII SELECTIEI A
  verificareC.push(dataC);//LA FEL SI PENTRU C
  for(var i=0;i<length;i++){
    if(optiuni[i].optiuneaA=== dataA){

      verificareB.push(optiuni[i].optiuneaB);//ADAUGAM IN VERIFICARE B SI VERIFICARE C VALORILE CORESPUNZATOARE PENTRU A-UL ALES
      verificareC.push(optiuni[i].optiuneaC);
    }
  }
  verificareB = stergeDuplicate(verificareB);//STERGEM DUPLICATELE
  verificareC = stergeDuplicate(verificareC);
  if(verificareC[0]=="Toate" && verificareC.length==2)//DACA VERIFICARE C CONTINE DOAR 2 VALORI, IAR UNA DINTRE ACESTEA ESTE 'TOATE' STERGEM VALOARE 'TOATE'
  {verificareC[0]=verificareC[1];
  verificareC.pop();
  }
  if(verificareB[0]=="Toate" && verificareB.length==2)
  {verificareB[0]=verificareB[1];
  verificareB.pop();
  }


  for(i=0;i<verificareB.length;i++){
    $("#typeB").append("<option class='optionB' value='"+verificareB[i]+"'>"+verificareB[i]+"</option>");//ADAUGAM IN SELECT OPTIUNILE DIN VERIFICARE B
  }

  for(i=0;i<verificareC.length;i++){
    $("#typeC").append("<option class='optionC' value='"+verificareC[i]+"'>"+verificareC[i]+"</option>");
  }
//ADAUGAM ELEMENTE IN CORPUL TABELULUI IN FUNCTIE DE SITUATIA IN CARE NE AFLAM
  if(dataB !="Toate" && dataC!="Toate"){
    for(i=0;i<length;i++){
      if(optiuni[i].optiuneaA === dataA && optiuni[i].optiuneaB === dataB && optiuni[i].optiuneaC=== dataC){
        $("#tableBody").append("<tr>"+
        "<td>"+optiuni[i].optiuneaA+"</td>"+
        "<td>"+optiuni[i].optiuneaB+"</td>"+
        "<td>"+optiuni[i].optiuneaC+"</td>"+
        "</tr>");
      }
    }
  }
  if(dataB ==="Toate" && dataC!="Toate"){
    for(i=0;i<length;i++){
      if(optiuni[i].optiuneaA === dataA && optiuni[i].optiuneaC=== dataC){
        $("#tableBody").append("<tr>"+
        "<td>"+optiuni[i].optiuneaA+"</td>"+
        "<td>"+optiuni[i].optiuneaB+"</td>"+
        "<td>"+optiuni[i].optiuneaC+"</td>"+
        "</tr>");
      }
    }
  }
  if(dataB !="Toate" && dataC==="Toate"){
    for(i=0;i<length;i++){
      if(optiuni[i].optiuneaA === dataA && optiuni[i].optiuneaB === dataB){
        $("#tableBody").append("<tr>"+
        "<td>"+optiuni[i].optiuneaA+"</td>"+
        "<td>"+optiuni[i].optiuneaB+"</td>"+
        "<td>"+optiuni[i].optiuneaC+"</td>"+
        "</tr>");
      }
    }
  }
  if(dataB ==="Toate" && dataC==="Toate"){
    for(i=0;i<length;i++){
      if(optiuni[i].optiuneaA === dataA){
        $("#tableBody").append("<tr>"+
        "<td>"+optiuni[i].optiuneaA+"</td>"+
        "<td>"+optiuni[i].optiuneaB+"</td>"+
        "<td>"+optiuni[i].optiuneaC+"</td>"+
        "</tr>");
      }
    }
  }
  verificareB=[];//GOLIM VECTORII VERIFICARE
  verificareC=[];

}
//ON CHANGE B
function B(){
  dataB= $("#typeB option:selected").text();
  $(".optionA").remove();
  $(".optionC").remove();
  $("#tableBody").remove();
  $("#myTable").append("<tbody id='tableBody'></tbody>");
  verificareA.push(dataA);
  verificareC.push(dataC);
  for(var i=0;i<length;i++){
    if(optiuni[i].optiuneaB=== dataB){

      verificareA.push(optiuni[i].optiuneaA);
      verificareC.push(optiuni[i].optiuneaC);
    }
  }
  verificareA = stergeDuplicate(verificareA);
  verificareC = stergeDuplicate(verificareC);
  if(verificareA[0]=="Toate" && verificareA.length==2)
  {verificareA[0]=verificareA[1];
  verificareA.pop();
  }
  if(verificareC[0]=="Toate" && verificareC.length==2)
  {verificareC[0]=verificareC[1];
  verificareC.pop();
  }

  for(i=0;i<verificareA.length;i++){
    $("#typeA").append("<option class='optionA' value='"+verificareA[i]+"'>"+verificareA[i]+"</option>");
  }

  for(i=0;i<verificareC.length;i++){
    $("#typeC").append("<option class='optionC' value='"+verificareC[i]+"'>"+verificareC[i]+"</option>");
  }

  if(dataA !="Toate" && dataC!="Toate"){
    for(i=0;i<length;i++){
      if(optiuni[i].optiuneaA === dataA && optiuni[i].optiuneaB === dataB && optiuni[i].optiuneaC=== dataC){
        $("#tableBody").append("<tr>"+
        "<td>"+optiuni[i].optiuneaA+"</td>"+
        "<td>"+optiuni[i].optiuneaB+"</td>"+
        "<td>"+optiuni[i].optiuneaC+"</td>"+
        "</tr>");
      }
    }
  }
  if(dataA ==="Toate" && dataC!="Toate"){
    for(i=0;i<length;i++){
      if(optiuni[i].optiuneaB === dataB && optiuni[i].optiuneaC=== dataC){
        $("#tableBody").append("<tr>"+
        "<td>"+optiuni[i].optiuneaA+"</td>"+
        "<td>"+optiuni[i].optiuneaB+"</td>"+
        "<td>"+optiuni[i].optiuneaC+"</td>"+
        "</tr>");
      }
    }
  }
  if(dataA !="Toate" && dataC==="Toate"){
    for(i=0;i<length;i++){
      if(optiuni[i].optiuneaB === dataB && optiuni[i].optiuneaA === dataA){
        $("#tableBody").append("<tr>"+
        "<td>"+optiuni[i].optiuneaA+"</td>"+
        "<td>"+optiuni[i].optiuneaB+"</td>"+
        "<td>"+optiuni[i].optiuneaC+"</td>"+
        "</tr>");
      }
    }
  }
  if(dataA ==="Toate" && dataC==="Toate"){
    for(i=0;i<length;i++){
      if(optiuni[i].optiuneaB === dataB){
        $("#tableBody").append("<tr>"+
        "<td>"+optiuni[i].optiuneaA+"</td>"+
        "<td>"+optiuni[i].optiuneaB+"</td>"+
        "<td>"+optiuni[i].optiuneaC+"</td>"+
        "</tr>");
      }
    }
  }

  verificareA=[];
  verificareC=[];


}

//ON CHANGE C
function C(){
  dataC= $("#typeC option:selected").text();
  $(".optionA").remove();
  $(".optionB").remove();
  $("#tableBody").remove();
  $("#myTable").append("<tbody id='tableBody'></tbody>");
  verificareA.push(dataA);
  verificareB.push(dataB);
  for(var i=0;i<length;i++){
    if(optiuni[i].optiuneaC=== dataC){

      verificareA.push(optiuni[i].optiuneaA);
      verificareB.push(optiuni[i].optiuneaB);
    }
  }
  verificareA = stergeDuplicate(verificareA);
  verificareB = stergeDuplicate(verificareB);
  if(verificareA[0]=="Toate" && verificareA.length==2)
  {verificareA[0]=verificareA[1];
  verificareA.pop();
  }
  if(verificareB[0]=="Toate" && verificareB.length==2)
  {verificareB[0]=verificareB[1];
  verificareB.pop();
  }

  for(i=0;i<verificareA.length;i++){
    $("#typeA").append("<option class='optionA' value='"+verificareA[i]+"'>"+verificareA[i]+"</option>");
  }

  for(i=0;i<verificareB.length;i++){
    $("#typeB").append("<option class='optionB' value='"+verificareB[i]+"'>"+verificareB[i]+"</option>");
  }

  if(dataB !="Toate" && dataA!="Toate"){
    for(i=0;i<length;i++){
      if(optiuni[i].optiuneaA === dataA && optiuni[i].optiuneaB === dataB && optiuni[i].optiuneaC=== dataC){
        $("#tableBody").append("<tr>"+
        "<td>"+optiuni[i].optiuneaA+"</td>"+
        "<td>"+optiuni[i].optiuneaB+"</td>"+
        "<td>"+optiuni[i].optiuneaC+"</td>"+
        "</tr>");
      }
    }
  }
  if(dataB ==="Toate" && dataA!="Toate"){
    for(i=0;i<length;i++){
      if(optiuni[i].optiuneaA === dataA && optiuni[i].optiuneaC=== dataC){
        $("#tableBody").append("<tr>"+
        "<td>"+optiuni[i].optiuneaA+"</td>"+
        "<td>"+optiuni[i].optiuneaB+"</td>"+
        "<td>"+optiuni[i].optiuneaC+"</td>"+
        "</tr>");
      }
    }
  }
  if(dataB !="Toate" && dataA==="Toate"){
    for(i=0;i<length;i++){
      if(optiuni[i].optiuneaC === dataC && optiuni[i].optiuneaB === dataB){
        $("#tableBody").append("<tr>"+
        "<td>"+optiuni[i].optiuneaA+"</td>"+
        "<td>"+optiuni[i].optiuneaB+"</td>"+
        "<td>"+optiuni[i].optiuneaC+"</td>"+
        "</tr>");
      }
    }
  }
  if(dataB ==="Toate" && dataA==="Toate"){
    for(i=0;i<length;i++){
      if(optiuni[i].optiuneaC === dataC){
        $("#tableBody").append("<tr>"+
        "<td>"+optiuni[i].optiuneaA+"</td>"+
        "<td>"+optiuni[i].optiuneaB+"</td>"+
        "<td>"+optiuni[i].optiuneaC+"</td>"+
        "</tr>");
      }
    }
  }

  verificareA=[];
  verificareB=[];


}
