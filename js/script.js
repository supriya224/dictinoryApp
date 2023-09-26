const url="https://api.dictionaryapi.dev/api/v2/entries/en/"
const result=document.getElementById('result');
const sound=document.getElementById("sound");
const btn= document.getElementById("btn");

btn-addEventListener("click", ()=>{
    let inpWord= document.getElementById( "inp-word").value;
    
    fetch(`${url}${inpWord}`)
    .then((response)=>response.json())
    .then((data)=>{ 
        console.log(data)
        result.innerHTML=`
        <div class="word" id="word">
                <h3>${inpWord}</h3>
                <button onClick="playSound()"><i class="fa-solid fa-volume-up"></i></button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetics}/</p>
            </div>

            <p class="word-meaning">${data[0].meanings[0].definitions[0]. definition}</p>
            <p class="word-example">${data[0].meanings[0].definitions[0]. example || ""}</p>
        `;
        sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        console.log()
    })
   
    .catch(()=>{
        result.innerHTML=`<h3 class="error">couldn't Find The Word</h3>`
    })
});

function playSound(){
    sound.play()
}