var html = `



<link rel="stylesheet" href="./css/navbar.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<input id="menu-toggle" type="checkbox" />
<section id="hamburger">

    <label class='menu-button' for="menu-toggle">
        <span></span>
    </label>
</section>
<img src="./assets/Logo.png" alt="Logo" id="logo">
<span id="wip">Work in Progress</span>
<nav id='menu'>
    <script src='./js/menu.js'></script>
    <ul>
        <li><a href='./index.html'>Home</a></li>
        <li><a class='dropdown-arrow'>About</a>
            <ul class='sub-menus'>
                <li><a href='./about.html'>About Me</a></li>
                <li><a href='./education.html'>Education</a></li>
                <li><a href='./cv.html'>CV</a></li>
            </ul>
        </li>
        <li><a href='./projects.html'>Projects</a></li>
        <li><a class='dropdown-arrow'>Links</a>
            <ul class='sub-menus'>
                <li><a href='https://media.samdserver.com'>Media Server</a></li>
                <li><a href='http://mediarequests.samdserver.com'>Media Requests</a></li>
                <li><a href='about:blank'>Home Assistant</a></li>
            </ul>
        </li>
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <li><a href='mailto:sam@samdavis.uk'><i class="fa fa-envelope" style="font-size:24px;"></i></a></li>
        <li><a href='https://www.linkedin.com/in/sam-davis99/' target="_blank"><i class="fa fa-linkedin-square"
                    style="font-size:24px;padding-top:0.5rem"></i></a></li>
        <li><a href='https://github.com/SamPhoenix91' target="_blank"><i class="fa fa-github"
                    style="font-size:25px;padding-top:0.55rem"></i></a></li>
    </ul>
</nav>


`;

// inserting navbar in beginning of body
document.getElementById("Navbar-Placeholder").innerHTML = html;
