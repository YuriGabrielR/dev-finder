const formSearch = document.querySelector('#form-search');
const inputSearch = document.querySelector('#input-search');


    formSearch.addEventListener('submit', (e)=>{
        e.preventDefault();

        getData();
        

        inputSearch.value = "";
    })


 function getData(){

    fetch (`https://api.github.com/users/${inputSearch.value}`)
    .then (async response =>{
        if(!response.ok){
            throw Error (alert); 
        }  

        let data =  await response.json(); 
        console.log(data);
       
        postData(data);
    })

}


function postData(d){

    const imgProfile = document.querySelector('.img-profile');
    const nameProfile = document.querySelector('#name');
    const nameUser = document.querySelector('#name-user');
    const location = document.querySelector('#location-description');
    const followers = document.querySelector('#followers');
    const linkProfile = document.querySelector('#url-linkProfile');
    const bioDev = document.querySelector('#bio-description');
    
    imgProfile.setAttribute('src', d.avatar_url);

    nameProfile.innerText = `${d.name} /`; 
    nameUser.innerText = d.login; 
    location.innerText = d.location;
    followers.innerText = `${d.followers} Seguidores`; 

    linkProfile.setAttribute('href', d.blog); 
    linkProfile.innerText = d.blog;
    bioDev.innerText = d.bio; 

}


function showData(){


}