
let count = 201;

async function comicfetch(){

    
    document.getElementById('next').addEventListener('click',(e)=>{
        count =count+1;
        comicfetch();
    })

    document.getElementById('previous').addEventListener('click',(e)=>{
        count =count-1;
        comicfetch();
    })

    document.getElementById('random').addEventListener('click',(e)=>{
        count = Math.floor((Math.random() * 1000) + 1);
        comicfetch();
    })

    document.querySelector('form').addEventListener('submit',(e)=>{
        count = document.querySelector('input').value;
        comicfetch();
        e.preventDefault();
    })



    const response = await fetch( `https://xkcd.now.sh/?comic=${count}` ,{
        "method":"GET"
    })
    const resData = await response.json();
    document.querySelector('section').innerHTML = `
    <h1 class="title">${resData.title}</h1>
        <ul>
            <li><img src = "${resData.img}"></img></li>
            <div class="badges">
                <li class=" badge date">${resData.day}/${resData.month}/${resData.year}</li>
            </div>
        </ul>
        

    `
    document.querySelector('.transcript').innerHTML = `
        <div>${resData.transcript}</div>
    `
}

comicfetch();