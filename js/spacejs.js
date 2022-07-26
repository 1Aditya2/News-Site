

function getapi(url){
    var content=document.createElement("div")
    content.className="content"
    var container=document.getElementsByClassName("container")[0]
    container.appendChild(content)
    fetch(url).then((res)=>{return res.json()}).then((data)=>displayData(data)).catch((error)=>console.log(error))

}


function displayData(apidata){
    
   for(let i of apidata.articles){
    let im=document.createElement("a")
    let image=document.createElement("img")
    let author=document.createElement("h4")
    let title=document.createElement("a")
    let source=document.createElement("h4")
    let pub=document.createElement("h4")
    let hr=document.createElement("br")

    im.href=`${i.url}`
    im.target="_blank"
    image.src=`${i.urlToImage}`
    image.alt="Loading image..."
    im.appendChild(image)
    author.innerText=`author: ${i.author}`
    source.innerText=`source: ${i.source.name}`
    pub.innerText=`published at: ${i.publishedAt}`
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
    newsTitle.appendChild(hr)
    newsTitle.appendChild(author)
    newsTitle.appendChild(source)
    newsTitle.appendChild(pub)

    
    news.appendChild(newsImage)
    news.appendChild(newsTitle)

    document.getElementsByClassName("content")[0].appendChild(news)





   }
}
var api_url="https://github.com/1Aditya2/News-Site/blob/main/JSON/scinecejson.json"
getapi(api_url)

// if(sessionStorage.getItem("Country")=="India"){
//     api_url="https://newsapi.org/v2/top-headlines?country=in&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
//     getapi(api_url)
// }
// else if(sessionStorage.getItem("Country")=="Germany"){
//     api_url="https://newsapi.org/v2/top-headlines?country=de&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
//     getapi(api_url)
// }
// else if(sessionStorage.getItem("Country")=="Russia"){
//     api_url="https://newsapi.org/v2/top-headlines?country=ru&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
//     getapi(api_url)
// }
// else if(sessionStorage.getItem("Country")=="Canada"){
//     api_url="https://newsapi.org/v2/top-headlines?country=ca&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
//     getapi(api_url)
// }
// else if(sessionStorage.getItem("Country")=="China"){
//     api_url="https://newsapi.org/v2/top-headlines?country=cn&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
//     getapi(api_url)
// }
// else if(sessionStorage.getItem("Country")=="Australia"){
//     api_url="https://newsapi.org/v2/top-headlines?country=au&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
//     getapi(api_url)
// }
// else if(sessionStorage.getItem("Country")=="France"){
//     api_url="https://newsapi.org/v2/top-headlines?country=fr&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
//     getapi(api_url)
// }
// else if(sessionStorage.getItem("Country")=="United Kingdom"){
//     api_url="https://newsapi.org/v2/top-headlines?country=gb&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
//     getapi(api_url)
// }
// else{
//     api_url="https://newsapi.org/v2/top-headlines?country=us&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
//     getapi(api_url)
// }



//COUNTRY
function getNews(){
    let country=document.getElementById("country")
    if(country.value=="India"){
        api_url="https://newsapi.org/v2/top-headlines?country=in&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",country.value)
        country.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(country.value=="Canada"){
        api_url="https://newsapi.org/v2/top-headlines?country=ca&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",country.value)
        country.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(country.value=="Australia"){
        api_url="https://newsapi.org/v2/top-headlines?country=au&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",country.value)
        country.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(country.value=="Germany"){
        api_url="https://newsapi.org/v2/top-headlines?country=de&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",country.value)
        country.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(country.value=="China"){
        api_url="https://newsapi.org/v2/top-headlines?country=cn&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",country.value)
        country.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(country.value=="United Kingdom"){
        api_url="https://newsapi.org/v2/top-headlines?country=gb&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",country.value)
        country.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(country.value=="France"){
        api_url="https://newsapi.org/v2/top-headlines?country=fr&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",country.value)
        country.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(country.value=="United States Of America"){
        api_url="https://newsapi.org/v2/top-headlines?country=us&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",country.value)
        country.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(country.value=="Russia"){
        api_url="https://newsapi.org/v2/top-headlines?country=ru&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",country.value)
        country.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
}




//Responsive Country

function getNewss(){
    let county=document.getElementById("county")
    console.log(county.value)
    if(county.value=="India"){
        api_url="https://newsapi.org/v2/top-headlines?country=in&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",county.value)
        county.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(county.value=="Canada"){
        api_url="https://newsapi.org/v2/top-headlines?country=ca&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",county.value)
        county.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(county.value=="Australia"){
        api_url="https://newsapi.org/v2/top-headlines?country=au&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",county.value)
        county.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(county.value=="Germany"){
        api_url="https://newsapi.org/v2/top-headlines?country=de&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",county.value)
        county.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(county.value=="China"){
        api_url="https://newsapi.org/v2/top-headlines?country=cn&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",county.value)
        county.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(county.value=="United Kingdom"){
        api_url="https://newsapi.org/v2/top-headlines?country=gb&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",county.value)
        county.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(county.value=="France"){
        api_url="https://newsapi.org/v2/top-headlines?country=fr&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",county.value)
        county.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(county.value=="United States Of America"){
        api_url="https://newsapi.org/v2/top-headlines?country=us&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",county.value)
        county.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
    else if(county.value=="Russia"){
        api_url="https://newsapi.org/v2/top-headlines?country=ru&category=science&sortBy=popularity&apiKey=c595aa2808d44f65896efdc7b29781de"
        sessionStorage.setItem("Country",county.value)
        county.value=""
        var content=document.getElementsByClassName("content")[0]
        content.remove()
        getapi(api_url)
    }
}









