
fetch('opportunities.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {
    var mainContainer = document.getElementById("card-body");
    // var node = document.getElementById('node-id');

    var h2 = document.createElement("h2");
    h2.innerHTML = data[0].Opportunity.tostring;
    // const currenth2 = document.getElementById("class-title");

    mainContainer.appendChild(h2);

    var p = document.createElement("p");
    p.innerHTML = data[0].ShortDescription;
    // const currentp = document.getElementById("class-text");

    // div.innerHTML = 'Name: ' + data[1].ShortDescription + ' ' + data[1].Description;

    mainContainer.appendChild(p);
    // add the newly created element and its content into the DOM

}