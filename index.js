fetch("https://hp-api.onrender.com/api/characters")
    .then(Response=>Response.json())
    .then(data=>{
       //* console.log(data[0].image)
       //* console.log(data[0].name)
        

       const container=document.getElementById("div")
        for(item of data){
            console.log(item.image)
            const obrazek=document.createElement("img")
            obrazek.classList.add("obrazek")
            obrazek.src=item.image
            container.append(obrazek)
            const jmena=document.createElement("h1")
            jmena.textContent=item.name
            container.append(jmena)
            
        }
    })