// Creating variables
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
let tamilContainer = document.getElementById('tamilContainer');
let englishContainer = document.getElementById('englishContainer')

// Search form function
searchForm.addEventListener('submit', ev => {
    ev.preventDefault();
    const kuralNum = searchInput.value;
    getKural(kuralNum);

  });

// Retrieving kural
function getKural(kuralNum) {
    fetch(`https://api-thirukkural.vercel.app/api?num=${kuralNum}`)
    .then(function(response){
        return response.json()
    }).then(function(jsonData){


// Storing fetched data in variables
        const num = jsonData.number;
    // tamil version
        const line1 = jsonData.line1;
        const line2 = jsonData.line2;
        const muppalVagai = jsonData.sect_tam;
        const iyyalVagai = jsonData.chapgrp_tam;
        const athigaaram = jsonData.chap_tam;
        const porul = jsonData.tam_exp;
    // english version
        const engLine = jsonData.eng;
        const sections = jsonData.sect_eng;
        const groups = jsonData.chapgrp_eng;
        const chapter = jsonData.chap_eng;
        const explanation = jsonData.eng_exp;

// Tamil meaning Container
        tamilContainer.innerHTML = `<div class="card">
        <div class="card-body">
          <h5 class="card-title">"${line1}</h5>
          <h5 class="card-title">${line2}"</h5>
          <p class="card-text"><strong>முப்பால்</strong>: ${muppalVagai}<br>
          <strong>இயல்</strong>: ${iyyalVagai}<br>
          <strong>அதிகாரம்</strong>: ${athigaaram}<br>
          <strong>பொருள்</strong>: ${porul}</p>
        </div>
      </div>`;

// English meaning Container
        englishContainer.innerHTML = ` <div class="card">
        <div class="card-body">
          <h5 class="card-title">"${engLine}."</h5>
          <p class="card-text"><strong>Section</strong>: ${sections}<br>
          <strong>Group</strong>: ${groups}<br>
          <strong>Chapter</strong>: ${chapter}<br>
          <strong>Explanation</strong>: ${explanation}.</p>
        </div>
      </div>`;

       
    })

// Error alert
    .catch(err => {
        alert('1330 குறல்களே உள்ளன/Only 1330 Kurals are there')
    })
}