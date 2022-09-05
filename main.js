// load quran's data from api
const loadQuran = async() => {
    const url = await `https://api.alquran.cloud/v1/quran`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    displayQuran(data.data.surahs);
};


// display quran to the UI
const displayQuran = (surahs) =>{
    // select Quran container
    const quranContainer = document.getElementById("quran-container");
    surahs.map((surah) => {
        console.log(surah);
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
                    <button onclick="loadAyahs('${surah.number}')" class="btn btn-primary">Read More</button>
                </div>
            </div>
        `;
        quranContainer.appendChild(quranDiv);
    })
}
// load individual surah
const loadAyahs = (ayahs) => {
    const url =  `https://api.alquran.cloud/v1/quran`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const result = data?.data?.surahs?.find(item => item.number == ayahs)
        console.log(result);
    })

}

loadQuran();