const showNavbar = (toggleId, headerId, navId, bodyId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    header = document.getElementById(headerId)
    body = document.getElementById(bodyId)

    // Validate that all variables exist
    if (toggle && nav && header) {
        toggle.addEventListener('click', ()=>{
            header.style.width = "5.67%"
            body.style.width = "94.33%"
        })
    }
}

showNavbar('navbar-toggler', 'side-bar-header', 'sidebarMenu', 'main-body')