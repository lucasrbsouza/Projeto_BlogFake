// https://jsonplaceholder.typicode.com/posts

async function redPost(){
    let postArea = document.querySelector(".posts");
    postArea.innerHTML = 'carregando....';

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if(json.length > 0){
        postArea.innerHTML='';

        for(let i in json){
            let postHtml= `<div><h1>${json[i].title}</h1>${json[i]}<hr/></div>`
            postArea.innerHTML += postHtml;
        }
    }else{
        postArea.innerHTML = 'Nenhum post para exibir'
    }
}

async function addNewPost(title, body){
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
            
        }
    );
    document.querySelector('#titleField').value ='';
    body = document.querySelector('#bodyField').value='';
    redPost();
}

document.querySelector('#insertBotao').addEventListener('click', ()=>{
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if (title && body) {
        addNewPost();
        
    } else {
        alert('Preencha todos os campos')
    }
})
redPost();