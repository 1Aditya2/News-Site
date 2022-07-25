function pokemon(){
    setTimeout(loader,5000)
}
function loader(){
    document.querySelector(".animecontainer").style.display="none"
    document.querySelector(".container").style.display="block"
    document.querySelector("footer").style.display="block"
    document.querySelector("body").style.background="linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)"
}


var container=document.getElementsByClassName("container")[0]
function getapi(url,i){
    fetch(url).then((res)=>{return res.json()}).then((data)=>displayData(data,i)).catch((error)=>console.log(error))

}


function displayData(apidata,k){
    let j=1;
   for(let i of apidata.articles){
    if(j<=5){
    let im=document.createElement("a")
    let image=document.createElement("img")
    let title=document.createElement("a")
    let hr=document.createElement("hr")

    im.href=`${i.url}`
    im.target="_blank"
    image.src=`${i.urlToImage}`
    image.alt="Loading image..."
    im.appendChild(image)
    title.href=`${i.url}`
    title.text=`${i.title}`
    title.target="_blank"


    let news=document.createElement("div")
    news.className="news"
    let newsImage=document.createElement("div")
    newsImage.className="newsImage"
    newsImage.appendChild(im)
    let newsTitle=document.createElement("div")
    newsTitle.className="newsTitle"
    newsTitle.appendChild(title)

    
    news.appendChild(newsImage)
    news.appendChild(hr)
    news.appendChild(newsTitle)

    document.getElementsByClassName("content")[k].appendChild(news)
    j++;
    }
   }
}


var api_url;


for(let i=0;i<4;i++){
    if(i==0){
        api_url="https://newsapi.org/v2/top-headlines?country=us&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        let content=document.createElement("div")
        content.className="content"
        let section=document.createElement("h4")
        section.className="section"
        section.innerText="Popular Science News Today!"
        container.appendChild(section)
        container.appendChild(content)
        let hr=document.createElement("hr")
        container.appendChild(hr)
        getapi(api_url,i)
    }
    else if(i==1){
        api_url="https://newsapi.org/v2/top-headlines?country=us&category=technology&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        let content=document.createElement("div")
        content.className="content"
        let section=document.createElement("h4")
        section.className="section"
        section.innerText="Stuff For Techies Here!"
        container.appendChild(section)
        container.appendChild(content)
        let hr=document.createElement("hr")
        container.appendChild(hr)
        getapi(api_url,i)
    }
    else if(i==2){
        api_url="https://newsapi.org/v2/top-headlines?country=us&category=business&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        let content=document.createElement("div")
        content.className="content"
        let section=document.createElement("h4")
        section.className="section"
        section.innerText="B For Business!"
        container.appendChild(section)
        container.appendChild(content)
        let hr=document.createElement("hr")
        container.appendChild(hr)
        getapi(api_url,i)
    }
    else if(i==3){
        api_url="https://newsapi.org/v2/top-headlines?country=us&category=entertainment&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        let content=document.createElement("div")
        content.className="content"
        let section=document.createElement("h4")
        section.className="section"
        section.innerText="For An Entertainment Spree!"
        container.appendChild(section)
        container.appendChild(content)
        let hr=document.createElement("hr")
        container.appendChild(hr)
        getapi(api_url,i)
    }
}
