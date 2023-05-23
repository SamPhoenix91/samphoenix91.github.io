var html = `


<link rel="stylesheet" href="/css/footer.css">
<input id="menu-toggle" type="checkbox" />

<a id="copyright" href="/Terms.html">© Sam Davis 2023</a>
    <span id="wip">Work in Progress</span>
    <a id="issuereport" href="https://github.com/SamPhoenix91/samphoenix91.github.io/issues" target="_blank"> If you see
        any
        issues, please make a issue report on github</p>

`;

// inserting navbar in end of body
document.getElementById("Footer-Placeholder").innerHTML = html;
