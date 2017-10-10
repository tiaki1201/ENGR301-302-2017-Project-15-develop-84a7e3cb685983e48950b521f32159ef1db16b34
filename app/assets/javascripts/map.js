function initMap(){
  var map = new ol.Map({
    target: 'map',
    layers: [
      //Defines list of layers, this is where (I assume) we can add new layers to the projection. Layers can be of 3 types, Image, File and Vector
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    //Next we define the view of the map
    view: new ol.View({
      //Center specified in long/lat coords. + for N/E, - for S/W
      center: ol.proj.fromLonLat([174.7762, -41.2865]),
      zoom: 7
    })
    //Current single layer is based on Spherical Mercator projection. Will need to modify to apply to small scale geotiff files
  });

  // download tool
  let download = $('#download-tool');

  download.hover(function(){
    download.tooltip();
  });
  download.click(function(){
    map.once('postcompose', function(event) {
      var canvas = event.context.canvas;
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(canvas.msToBlob(), 'map.png');
      } else {
        canvas.toBlob(function(blob) {
          saveAs(blob, 'map.png');
        });
      }
    });
    map.renderSync();
  });
}

function initTools(){
  // pen
  let pen = $('#pen-tool');
  let penMenu = $('#pen-tool-menu');
  penMenu.hide();

  pen.hover(function(){
    pen.tooltip();
  });
  pen.click(function(){
    penMenu.toggle(250);
    pinMenu.hide(100);
    layersMenu.hide(100);
    colorMenu.hide(100);
  });


  // pin
  let pin = $('#pin-tool');
  let pinMenu = $('#pin-tool-menu');
  pinMenu.hide();

  pin.hover(function(){
    pen.tooltip();
  });
  pin.click(function(){
    pinMenu.toggle(250);
    penMenu.hide(100);
    layersMenu.hide(100);
    colorMenu.hide(100);
  });


  // color tool
  let color = $('#color-tool');
  let colorMenu = $('#color-tool-menu');
  colorMenu.hide();

  color.hover(function(){
    color.tooltip();
  });
  color.click(function(){
    colorMenu.toggle(250);
    penMenu.hide(100);
    pinMenu.hide(100);
    layersMenu.hide(100);
  });


  // layers tool
  let layer = $('#layers-tool');
  let layersMenu = $('#layers-tool-menu');
  layersMenu.hide();

  layer.hover(function(){
    layer.tooltip();
  });
  layer.click(function(){
    layersMenu.toggle(250);
    penMenu.hide(100);
    pinMenu.hide(100);
    colorMenu.hide(100);
  });



}

/*
var anchor_element = document.createElement('a');
anchor_element.href = '#custom_href';
anchor_element.className = 'custom_anchor';

var this_ = this;
var handleCustomControl = function (e) {
map.once('postcompose', function(event) {
var canvas = event.context.canvas;
if (navigator.msSaveBlob) {
navigator.msSaveBlob(canvas.msToBlob(), 'map.png');
} else {
canvas.toBlob(function(blob) {
saveAs(blob, 'map.png');
});
}
});
map.renderSync();
};

anchor_element.addEventListener('click', handleCustomControl, false);
anchor_element.addEventListener('touchstart', handleCustomControl, false);

var custom_element = document.createElement('div');
custom_element.className = 'myCustomControl ol-unselectable';
custom_element.appendChild(anchor_element);

myControl = new ol.control.Control({
className: 'myControl',
element: custom_element,
target: document.getElementById("myCustomControl")
});
map.addControl(myControl);
*/





// var raster = new ol.layer.Tile({
//   source: new ol.source.OSM()
// });
//
// //Layers
//
// //Base OSM layer
// var source = new ol.source.Vector({wrapX: false});
//
// //Draw tools layer
// var vector = new ol.layer.Vector({
//   source: source
// });
//
// var map = new ol.Map({
//   layers: [raster, vector],
//   target: 'map',
//   view: new ol.View({
//     center: ol.proj.fromLonLat([174.7762, -41.2865]),
//     zoom: 10.0
//   })
// });
//
//
// //Download button start
// var anchor_element = document.createElement('a');
// anchor_element.href = '#custom_href';
// anchor_element.className = 'custom_anchor';
//
// var this_ = this;
// var handleCustomControl = function (e) {
//   map.once('postcompose', function(event) {
//     var canvas = event.context.canvas;
//     if (navigator.msSaveBlob) {
//       navigator.msSaveBlob(canvas.msToBlob(), 'map.png');
//     } else {
//       canvas.toBlob(function(blob) {
//         saveAs(blob, 'map.png');
//       });
//     }
//   });
//   map.renderSync();
// };
//
// anchor_element.addEventListener('click', handleCustomControl, false);
// anchor_element.addEventListener('touchstart', handleCustomControl, false);
//
// var custom_element = document.createElement('div');
// custom_element.className = 'myCustomControl ol-unselectable';
// custom_element.appendChild(anchor_element);
//
// myControl = new ol.control.Control({
//   className: 'myControl',
//   element: custom_element,
//   target: document.getElementById("myCustomControl")
// });
// map.addControl(myControl);
// //Download button end
//
// zoomslider = new ol.control.ZoomSlider();
// map.addControl(zoomslider);
// document.addEventListener('keydown', function(evt) {
//   if (evt.which === 38) {
//     vector.setVisible(true)
//     //up arrow
//     /*radius = Math.min(radius + 5, 150);
//     map.render();
//     evt.preventDefault();*/
//   } else if (evt.which === 40) {
//     vector.setVisible(false)
//     //down arrow
//   }
// });
//
// var typeSelect = document.getElementById('type');
//
// var draw; // global so we can remove it later
// function addInteraction() {
//   var value = typeSelect.value;
//   if (value !== 'None') {
//     draw = new ol.interaction.Draw({
//       source: source,
//       type: /** @type {ol.geom.GeometryType} */ (typeSelect.value),
//       freehand: true
//     });
//     map.addInteraction(draw);
//   }
// }
//
// /**
// * Handle change event.
// */
// typeSelect.onchange = function() {
//   map.removeInteraction(draw);
//   addInteraction();
// };
//
// addInteraction();
//
