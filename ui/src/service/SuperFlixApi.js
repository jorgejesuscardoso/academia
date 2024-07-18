const type = "serie";
const imdb = "84958";
const season = "1";
const episode = "1";
SuperFlixAPIPluginJS(type, imdb, season, episode);
function SuperFlixAPIPluginJS(type, imdb, season, episode){
if (type == "filme") { season="";episode="";}else{if (season !== "") { season = "/"+season; }if (episode !== "") { episode = "/"+episode; }}
    const frame = document.getElementById('SuperFlixAPIContainerVideo');
    frame.innerHTML += '<iframe src="https://superflixapi.dev/'+type+'/'+imdb+season+episode+'" scrolling="no" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen=""></iframe>';
}