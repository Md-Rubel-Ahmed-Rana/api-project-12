// load quran's data from api
const loadQuran = async() => {
    const url = await `https://api.alquran.cloud/v1/quran`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data.surahs);
};



loadQuran();