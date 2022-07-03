let songs=[
    {
        "name": "Mast Magan",
        "item": "songs/mastmagan.mp3"
    },
    {
        "name": "Bulleya",
        "item":"songs/bulleya.mp3"
    },
    {
        "name": "Ek dil ek jaan",
        "item":"songs/ekdilekjaan.mp3"
    },
    {
        "name": "Tera Chehra",
        "item": "songs/terachehra.mp3"
    },
    {
        "name": "Sajda",
        "item":"songs/sajda.mp3"
    },
    {
        "name": "Hamari Adhuri Kahani ",
        "item":"songs/hamariadhurikahani.mp3"
    },
    {
        "name": "Sanu Ek Pal Chain",
        "item": "songs/sanuEkpalchain.mp3"
    },
    {
        "name": "Kinna Sona ",
        "item":"songs/kinnaSona.mp3"
    },
    {
        "name": "Ae Dil Hai Mushkil",
        "item":"songs/aeDilHaiMushkil.mp3"
    },
    {
        "name": "Moh Moh Ke Dhaage",
        "item": "songs/mohMohKeDhaage.mp3"
    },
    {
        "name": "Dil Jaaniye",
        "item":"songs/dilJaaniye.mp3"
    },
    {
        "name": "Duniyaa ",
        "item":"songs/duniyaa .mp3"
    },
    {
        "name": "Naino Ne Baandhi",
        "item": "songs/nainoNeBaandhi.mp3"
    },
    {
        "name": "Dil Ko Karaar Aaya",
        "item":"songs/dilKoKaraarAaya.mp3"
    },
    {
        "name": "Ishq Sufiyana",
        "item":"songs/ishqSufiyana.mp3"
    },
    {
        "name": "Hawayein",
        "item": "songs/hawayein.mp3"
    },
    {
        "name": "Kesariya",
        "item":"songs/kesariya.mp3"
    },
    {
        "name": "Lut Gaye",
        "item":"songs/lutGaye.mp3"
    },
    {
        "name": "Mere Wali Sardarni",
        "item": "songs/mereWaliSardarni.mp3"
    },
    {
        "name": "Phir Bhi Tumko Chahunga",
        "item":"songs/phirbhitumkochahunga.mp3"
    },
    {
        "name": "Saiyyan",
        "item":"songs/saiyyan.mp3"
    },
    {
        "name": "Piya O Re Piya",
        "item": "songs/piyaORePiya.mp3"
    },
    {
        "name": "Rabba Main Toh",
        "item":"songs/rabbaMainToh.mp3"
    },
    {
        "name": "Sab Tera",
        "item":"songs/sabTera.mp3"
    },
    {
        "name": "Sanu Aaj Kal Shisha",
        "item": "songs/sanuAajKalShisha.mp3"
    },
    {
        "name": "Sawan Aaya Hai",
        "item":"songs/sawanAayaHaibulleya.mp3"
    },
    {
        "name": "Tera Ban Jaunga",
        "item":"songs/teraBanJaunga.mp3"
    },
    {
        "name": "Teri Deewani",
        "item": "songs/teriDeewani.mp3"
    },
    {
        "name": "Tu Chahiye",
        "item":"songs/tuChahiye.mp3"
    },
    {
        "name": "Tera Fitoor",
        "item":"songs/teraFitoor.mp3"
    },
    {
        "name": "Jag Ghoomeya",
        "item": "songs/jagGhoomeya.mp3"
    },
    {
        "name": "Pee Loon",
        "item":"songs/peeLoon.mp3"
    },
    {
        "name": "Ye Tune Kya Kiya",
        "item":"songs/yeTuneKyaKiya.mp3"
    },
    {
        "name": "Samjhawan",
        "item": "songs/samjhawan.mp3"
    },
    {
        "name": "Agar Tum Saath Ho",
        "item":"songs/agarTumSaathHo.mp3"
    },
    {
        "name": "Arziyaan",
        "item":"songs/arziyaan.mp3"
    },
    {
        "name": "Baarish",
        "item": "songs/baarish.mp3"
    }
]

let songIndex = 0;
let index = 0;
let audioElement = new Audio(songs[index].item);
const masterPlay = document.getElementById('masterPlay');
const backwardPlay = document.getElementById('backwardPlay');
const forwardPlay = document.getElementById('forwardPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = document.getElementById("songs");

//print all songs
let songHTML = "";
songs.forEach((element) =>{
        audioElement = new Audio(element.item);
        console.log(audioElement.duration);
        let i = songIndex++;
        songHTML += `
        <button type="button" onclick="playsong(${i})" class="btn btn-outline-secondary glow-on-hover" id="songbutton">
                <span id="simage"><img src="Images/background.jpg" width="20px" height="20px"></span>
                <span id="sname">${element.name}</span>
                <span class="s${i}" id="splaying"><img src="Images/pause.gif" width="20px" height="20px"></span>
        </button>`;
        songItems.innerHTML = songHTML;
})




//play that song which is clicked
function playsong(ind){
    index = ind;
    audioElement.pause();
    audioElement = new Audio(songs[index].item);
    playpause();
    audioElement.addEventListener('timeupdate', ()=>{
        //update myprogressbar
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value = progress;    
        if(progress == 100){
            index += 1;
            playsong(index);
        }
    });

    myProgressBar.addEventListener('change', ()=> {
        audioElement.currentTime = myProgressBar.value * audioElement.duration /100;
    });
    

}

//displaysongname
function displaysong(){
    let songNameDisplay = document.getElementById("songname");
    let songnameHTML = "";
    songnameHTML += `<span>${songs[index].name}</span>`;
    songNameDisplay.innerHTML = songnameHTML;


}

//function for play pause
function playpause(){
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        displaysong();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1 ;
    }
    else{
        audioElement.pause();        
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0 ;
    }

}

//backword button
backwardPlay.addEventListener('click', () => {
    playsong(index-1);
});

//forward button
forwardPlay.addEventListener('click', () => {
    playsong(index+1);
});


//Paused and play button
masterPlay.addEventListener('click', () => {
    playpause();
});

//update progressbar line
audioElement.addEventListener('timeupdate', ()=>{
    //update myprogressbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;    
});


//play according to progressbar
myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100;
});
























// var count=1;
// function showSongs(song) {
//     let songContainer = document.getElementById("songs");
//     let songHTML = "";
//     song.forEach(songData => {
//         songitem = songData.item;
//         songname = songData.name;
//         songtime = songData.time;
//         songHTML += `
//         <button type="button" onclick=playSong(${songitem},${songname},${songtime}) class="btn btn-outline-secondary" id="songbutton">
//           <div class="container" >
//             <div class="row">
//               <div class="col">
//                 <img src="images/background.jpg" width="30px" height="30px">
//               </div>
//               <div class="col -8">
//                 ${songname}
//               </div>
//               <div class="col">
//               ${songtime}
//               </div>
//             </div>
//           </div>
//         </button>`
//     });
//     songContainer.innerHTML = songHTML;
// }


// fetchData().then(data => {
//     showSongs(data);
// });

// function playSong(sitem,sname,stime){
//     let songPlayer = document.getElementById("player");
//     let songHTML = "";
//     songHTML += `
//     <audio src="${sitem}" controls autoplay />`
//     songPlayer.innerHTML = songHTML;

// }