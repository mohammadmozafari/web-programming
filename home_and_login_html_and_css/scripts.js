drs = document.getElementsByClassName('dr')
for (let i = 0 ; i < 2 ; i++)
{
    drs[i].onmouseover = darken_bg
    drs[i].onmouseout = lighten_bg
}

function darken_bg()
{
    el = document.getElementsByClassName('main-content')[0]
    el.style.backgroundColor = 'rgb(150, 150, 150)'
}
function lighten_bg()
{
    el = document.getElementsByClassName('main-content')[0]
    el.style.backgroundColor = 'rgb(250, 250, 250)'
}