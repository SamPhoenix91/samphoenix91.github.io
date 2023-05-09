var html = `
<div id='topbar'>
    <img src="./assets/logo.png" alt="Logo" id="logo">
    <div id="lists"> 
      <nav id='menu'>
        <script src='./js/menu.js'></script>
        <link rel="stylesheet" href="./css/topbar.css">
        <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
        <ul>
          <li><a href='index.html'>Home</a></li>
          <li><a class='dropdown-arrow' href='about.html'>About</a>
            <ul class='sub-menus'>
              <li><a href='education.html'>Education</a></li>
              <li><a href='cv.html'>CV</a></li>
            </ul>
          </li>
          <li><a href='projects.html'>Projects</a></li>
          <li><a class='dropdown-arrow'>Links</a>
            <ul class='sub-menus'>
              <li><a href='https://media.samdserver.com'>Media Server</a></li>
              <li><a href='http://mediarequests.samdserver.com'>Media Requests</a></li>
              <li><a href='about:blank'>Home Assistant</a></li>
            </ul>
          </li>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <li><a href='https://www.linkedin.com/in/sam-davis99/'><i class="fa fa-linkedin-square" style="font-size:24px"></i></a></li>
          <li><a href='mailto:sam@samdavis.uk'><i class="fa fa-envelope" style="font-size:24px;"></i></a></li>
        </ul>
    </div>
    </nav>

  </div>

`;

// inserting navbar in beginning of body
document.body.insertAdjacentHTML('afterbegin', html)
