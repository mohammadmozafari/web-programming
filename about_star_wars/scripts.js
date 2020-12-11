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
}

function getShips()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            showShips(JSON.parse(this.response))
        }
    };
    xhttp.open("GET", "https://swapi.dev/api/starships", true);
    xhttp.send();
}

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
}

getShips()