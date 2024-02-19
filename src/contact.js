export default function loadContact() {
    const content = document.querySelector('#content')
    const contact = document.createElement('div')

    //append contact div to content
    content.appendChild(contact);
    
    // Append heading
    const h1 = document.createElement('h1');
    contact.appendChild(h1)
    h1.innerText='You may reach us on'

    // append details
    const contactlist = document.createElement('ol')
    contact.appendChild(contactlist);
    contactlist.innerHTML= '<li> contact number: 09952558976</li> <li> email: wilverzxc@gmail.com </li> <li> facebook: Wilver Georpe </li>'
}