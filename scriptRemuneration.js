$(document).ready(function(){
    DFP = new Date;
    DFP = $("#DFP").val();
    DOP = new Date;
    DOP = $("#DOP").val();
    //invisibilité des divs avant le choix
    $("#SOG").hide();
    $("#OG").hide();
    $("#output").hide();
    $("#reset").hide();
    //visibilité des formulaires en fonction des choix
    $("#choiceOG").click(function(){
        $("#SOG").hide();
        $("#choice").hide();
        $("#reset").show();
        $("#OG").show();
    });
    $("#choiceSOG").click(function(){
        $("#OG").hide();
        $("#choice").hide();
        $("#reset").show();
        $("#SOG").show();
    });
    //fonction calcul différence de mois
    function getMonthDifference(startDate, endDate) {
        return (
            endDate.getMonth() -
            startDate.getMonth() +
            12 * (endDate.getFullYear() - startDate.getFullYear())
        );
    }
    //fonction qui calcul la différence d'annéees
    function getYearDifference(startDate, endDate) {
        return (
            endDate.getFullYear() - startDate.getFullYear() 
        );
    }
    //A chaque changement de champs dates, sur un des champs date on lance le calcul des mois (SOG)
    $("#DFP, #DOP, #DRE").change(function () {
        DFP = $("#DFP").val();
        DOP = $("#DOP").val();
        if(DFP > DOP){
            a = DFP;
        }else if (DFP < DOP){
            a = DOP;
        }
        var b = $("#DRESOG").val();
        $("#DE").val(getMonthDifference(new Date(a), new Date(b)));
    });
    //A chaque changement de champs dates, sur un des champs date on lance le calcul des mois (OG)
    $("#OSO, #DREOG").change(function () {
        var a = $("#OSO").val();
        var b = $("#DREOG").val();
        $("#TSE").val(getYearDifference(new Date(a), new Date(b)));
    });
    //empeche le rechargement de la page au submit
    $("#submitOG, #submitSOG").click(function (e){
        e.preventDefault();
    });
    //calcul SOG
    $("#submitSOG").click(function(){
        DL=$("#DL").val();
        DE=$("#DE").val();
        SSOG=$("#sSOG").val();
        CSOG=$("#cSOG").val();
        RSOG = SSOG*CSOG;
        RBTSOG = RSOG-(RSOG*DE/DL);
        //affichage du résultats dans la div id=results
        $("#result").text(RBTSOG).append(" €");
        $("#output").show();
    });
    //calcul OG
    $("#submitOG").click(function(){
        SOG=$("#sOG").val();
        COG=$("#cOG").val();
        COG=COG/100;
        RBTOG = SOG*COG;
        //affichage du résultats dans le p id="results"
        $("#result").text(RBTOG).append(" €");
        $("#output").show();
    });
});