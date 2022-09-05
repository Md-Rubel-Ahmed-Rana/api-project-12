// load quran's data from api
const loadQuran = async() => {
    const url = await `https://api.alquran.cloud/v1/quran`;
    const res = await fetch(url);
    const data = await res.json();
    displayQuran(data.data.surahs);
};


// display quran to the UI
const displayQuran = async (surahs) =>{
    // select Quran container
    const quranContainer = document.getElementById("quran-container");
    surahs.map((surah) => {
        const quranDiv = document.createElement("div");
        quranDiv.classList.add("col");
        quranDiv.innerHTML = `
            <div class="card">
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold">Name: ${surah.name} </h5>
                    <div class="d-flex justify-content-around">
                        <p class="card-text"><b>Serial: ${surah.number}</b></p>
                        <p class="card-text"><b>Ayah: ${surah.ayahs.length}</b></p>
                    </div>
                </div>
            </div>
        `;
        quranContainer.appendChild(quranDiv);
    })
}


loadQuran();