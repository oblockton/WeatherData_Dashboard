var HTMLnavBar = '<nav id="navbar-nav"class="navbar navbar-default"><div id="brand-container" class="navbar-nav"><div id="brand-label" class="navbar-header col-md-2 "><a id="brand-link" class="navbar-brand" href="index.html">Latitude</a></div></div><ul id="nav-list" class="navbar-nav navbar-right"><li class=" nav-item nav-li-pad dropdown"><a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Plots <span class="caret"><span><a><ul id="plot-nav-drop" class="dropdown-menu"><li class="dropdown-item"><a href="max_temperature.html">Max Temperature</a></li><li class="dropdown-item"><a href="humidity.html">Humidity</a></li><li class="dropdown-item"><a href="cloudiness.html">Cloudiness</a></li><li role="separator" class="divider"></li><li class="dropdown-item"><a href="wind_speed.html">Wind Speed</a></li></ul></li><li class="nav-li-pad nav-item"><a href="data.html">Data</a></li><li class="nav-li-pad nav-item"><a href="comparisons.html">Comparison</a></li></ul></nav>';


function buildNav() {
  $("#header").append(HTMLnavBar)
};


buildNav();

HTMLfooter = '<hr id="footer-hr"><div id="footer" class=""></div>'

function buildFooter() {
  $('#footer-loc').append(HTMLfooter)
};

buildFooter();
