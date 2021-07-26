class weatherWidget{
    constructor(){
        this.createInputCity();
        this.addEventListener();
    }

    addEventListener(){
        let input = document.querySelector('#weather__input')
        if(!input) return 

        input.addEventListener('keyup',(event)=>{
            if(event.code.includes('Enter')){
                this.getData(event.target.value)
            }
        })
    }

    createInputCity(){
        let div = document.createElement('div'),
            inputHtml = `<input type="text" id="weather__input">`

        div.classList.add('weatherWidget')
        div.innerHTML=inputHtml
        document.body.appendChild(div)
    }

    getData = async function (cityName) {
        let url = `http://api.weatherapi.com/v1/current.json?key=f54258a919394f98945170916212607&q=${cityName}&lang=ru`
        let response = await fetch(url)
        let data = await response.json()
        this.show(data)
    }

    show(data){
        console.log(data)
        let widget = document.querySelector('.widget')
        if(!widget){
            widget = document.createElement('div')  
            widget.classList.add('widget')
        }
        let widgetHTML = `<p>${data.current.condition.text}</p>
                          <img src="https:${data.current.condition.icon}">
                          <p><strong>${data.current.temp_c}</strong>&deg</p>`
        
        widget.innerHTML = widgetHTML
        document.body.appendChild(widget)
    }
}

window.addEventListener('load',()=>{
    let widget = new weatherWidget()
})