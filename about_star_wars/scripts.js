/*
This function gets a list of starships and shows the list in html page
*/
function showShips(resp)
{
    ships = resp.results

    content = document.getElementById('starships')
    ul = document.createElement('ul')
    for (let i = 0 ; i < ships.length ; i++)
    {
        li = document.createElement('li')
        a = document.createElement('a')
        title = document.createTextNode(ships[i].name)
        
        a.href = ships[i].url
        a.onclick = (event) => getShip(event, ships[i])

        a.appendChild(title)
        li.appendChild(a)
        ul.appendChild(li)
    }
    content.appendChild(ul)

    prev = document.createElement('button')
    prev.innerHTML = 'Prev'
    prev.disabled = resp.prev == null
    prev.classList.add('prev')

    next = document.createElement('button')
    next.innerHTML = 'Next'
    next.disabled = resp.next == null
    next.classList.add('next')

    content.appendChild(prev)
    content.appendChild(next)
}

/*
This function sends a get resquest and returns calls the given function on the result
*/
function send_request(url, callback)
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(this.response))
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

/* Gets the details of one particular ships and shows it in main panel */
function getShip(event, ship)
{
    event.preventDefault()

    details = document.getElementById('details')
    details.innerHTML = ""
    
    h2 = document.createElement('h2')
    h2.innerHTML = ship.name
    details.appendChild(h2)

    ul = document.createElement('ul')
    details.appendChild(ul)

    li1 = document.createElement('li')
    li1.innerHTML = '<strong>name:</strong> ' + ship.name
    ul.appendChild(li1)

    li2 = document.createElement('li')
    li2.innerHTML = '<strong>manufacturer:</strong> ' + ship.manufacturer
    ul.appendChild(li2)

    li3 = document.createElement('li')
    li3.innerHTML = '<strong>crew:</strong> ' + ship.crew
    ul.appendChild(li3)

    li4 = document.createElement('li')
    li4.innerHTML = '<strong>passengers:</strong> ' + ship.passengers
    ul.appendChild(li4)

    li5 = document.createElement('li')
    li5.innerHTML = '<strong>films:</strong>'
    ul.appendChild(li5)
    showFilms(li5, ship.films)
}

function showFilms(container, films_urls)
{
    ol = document.createElement('ol')
    container.appendChild(ol)
    for (let i = 0 ; i < films_urls.length ; i++)
    {
        send_request(films_urls[i], (obj) => showFilm(ol, obj))
    }
}
function showFilm(container, obj)
{
    li = document.createElement('li')
    li.innerHTML = obj.title
    container.appendChild(li)
}



send_request("https://swapi.dev/api/starships", showShips)