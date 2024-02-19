export default function loadMenu(){
    const content = document.querySelector('#content')
    const menu = document.createElement('div')

    // Appends a new div to the content
    content.appendChild(menu);
    const heading = document.createElement('h1')
    menu.appendChild(heading)
    heading.innerText = 'This is Our Menu'

    //creates and appends list of menu
    const menuList = document.createElement('ol')
    menu.appendChild(menuList);
    menuList.innerHTML =
    '<li> Menudo </li> <li> Afritada </li> <li> Adobo </li>'

    
}