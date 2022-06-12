fetch("opportunities.json").then(response => response.json()).then(data => {
    console.log(data.sentence)
    document.querySelector("#debug").innerText = data.sentence
})