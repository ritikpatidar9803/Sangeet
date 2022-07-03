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
        <button type="button" onclick="playsong(${i})" class="btn btn-outline-secondary" id="songbutton">
                <span id="simage"><img src="images/background.jpg" width="20px" height="20px"></span>
                <span id="sname">${element.name}</span>
                <span id="sduration">${audioElement.duration}</span>
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