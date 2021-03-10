/*<!-- JS file to enable the JavaScript API. You can point at the
  version on public.tableau.com, online.tableau.com, or your on-prem Server -->
<script src="https://www.example.com/javascripts/api/tableau-2.js"></script>
...
<!-- Empty div where the viz will be placed -->
<div id="tableauViz"></div> */

function initializeViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("tableauViz");
    // URL of the viz to be embedded
    var url = "https://public.tableau.com/shared/G45RKS5YB?:display_count=y&:origin=viz_share_link";
    // An object that contains options specifying how to embed the viz
    var options = {
      width: '600px',
      height: '600px',
      hideTabs: true,
      hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
  }
  