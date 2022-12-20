function addRow(state, crime, danger) {
    $("table tr:last").after("<tr><td id='stateE'>" + state + "</td><td id='crimeE'>" + crime + 
        "</td><td id='dangerE'>" + danger + "</td></tr>");
}