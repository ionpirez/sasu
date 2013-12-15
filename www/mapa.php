<?
// ------------------------------------------------------------------------
// *** GRABA ESTE FICHERO CAMBIANDO LA EXTENSION .txt POR .PHP  y LISTO
// ------------------------------------------------------------------------
//
// mapas_marker.php: CALCULO/POSICIONAMIENTO DE UN MARCADOR EN UN MAPA DE GOOGLE
// USA LA V3 DEL API DE GOOGLE 
//
// EL MARCADOR SE PUEDE CAMBIAR DE POSICION DE ALGUNA DE ESTAS FORMAS
//
// 	- Arrastrando el marcador que hay en el mapa
//	- Haciendo click en cualquier parte del mapa
//	- Introduciendo LON/LAT y pulsando al bot¢n IR/GO 
//	- Introduciendo una direcci¢n y pulsando el bot¢n IR/GO
//  
// EL BOTON PROCESAR LLAMA A LA RUTINA mapas_marker_procesa
//
// PARAMETROS DE ENTRADA (E_GET)/
//
// lon:  	LONGITUD DONDE POSICIONAR EL MARCADOR INICALMENTE
// lat:   	LATITUD DONDE POSICIONAR EL MARCADOR INICALMENTE
// zoom:      	ZOOM ( Por defecto 9)
// tipo:        TIPO de mapa: ROADMAP, SATELLITE, HYBRID o TERRAIN  (Defecto HYBRID)
// dir: 	DIRECCION DEL MARCADOR INICiAL CON URL ENCODE(si esta dir entonces lat/ no se tiene en cuenta)
//
// SALIDA ($_POST) AL PULSAR EL BOTON  PROCESA se llama a mapas_maracador_procesa
//  
// POR DEFECTO EL MARCADOR SE POSICIONA EN QUINTO (longitud="-0.49647219999997105", latitud= "41.4235091", Zoom= 17)
//
// AUTOR:      MPS MULT Modif Sept. 2012
// 	   	 
// ------------------------------------------------------------------------

// INICIALIZO LAS VARIABLES 
$latitud= "19.437588";
$longitud="-99.133739";
$zoom= "17";
$tipo_mapa = "HYBRID";
$direccion = "";

// COMPRUEBO QUE EL TIPO ES UNO DE LOS QUE ACEPTA GOOGLE
if ($tipo_mapa == "SATELLITE") $error=0;
else
  if ($tipo_mapa == "ROADMAP") $error=0;
  else 	
    if ($tipo_mapa == "TERRAIN")$error=0;
    else $tipo_mapa = "HYBRID";



?>

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false">
</script>
<script type="text/javascript">

// VARIABLES GLOBALES JAVASCRIPT
var geocoder;
var marker;
var latLng;
var latLng2;
var map;

// INICiALIZACION DE MAPA
function initialize() {
  geocoder = new google.maps.Geocoder();	
  latLng = new google.maps.LatLng(<?echo $latitud;?> ,<?echo $longitud;?>);
  map = new google.maps.Map(document.getElementById('mapCanvas'), {
    zoom:<?echo $zoom;?>,
    center: latLng,
    mapTypeId: google.maps.MapTypeId.<?echo $tipo_mapa;?>
  });


// CREACION DEL MARCADOR  
    marker = new google.maps.Marker({
    position: latLng,
    title: 'Arrastra el marcador si quieres moverlo',
    map: map,
    draggable: true
  });
 
 

 
// Escucho el CLICK sobre el mama y si se produce actualizo la posicion del marcador 
     google.maps.event.addListener(map, 'click', function(event) {
     updateMarker(event.latLng);
   });
  
  // Inicializo los datos del marcador
  //    updateMarkerPosition(latLng);
     
      geocodePosition(latLng);
 
  // Permito los eventos drag/drop sobre el marcador
  google.maps.event.addListener(marker, 'dragstart', function() {
    updateMarkerAddress('Arrastrando...');
  });
 
  google.maps.event.addListener(marker, 'drag', function() {
    updateMarkerStatus('Arrastrando...');
    updateMarkerPosition(marker.getPosition());
  });
 
  google.maps.event.addListener(marker, 'dragend', function() {
    updateMarkerStatus('Arrastre finalizado');
    geocodePosition(marker.getPosition());
  });
  

 
}


// Permito la gesti¢n de los eventos DOM
google.maps.event.addDomListener(window, 'load', initialize);

// ESTA FUNCION OBTIENE LA DIRECCION A PARTIR DE LAS COORDENADAS POS
function geocodePosition(pos) {
  geocoder.geocode({
    latLng: pos
  }, function(responses) {
    if (responses && responses.length > 0) {
      updateMarkerAddress(responses[0].formatted_address);
    } else {
      updateMarkerAddress('No puedo encontrar esta direccion.');
    }
  });
}

// OBTIENE LA DIRECCION A PARTIR DEL LAT y LON DEL FORMULARIO
function codeLatLon() { 
      str= document.form_mapa.longitud.value+" , "+document.form_mapa.latitud.value;
      latLng2 = new google.maps.LatLng(document.form_mapa.latitud.value ,document.form_mapa.longitud.value);
      marker.setPosition(latLng2);
      map.setCenter(latLng2);
      geocodePosition (latLng2);
      // document.form_mapa.direccion.value = str+" OK";
}

// OBTIENE LAS COORDENADAS DESDE lA DIRECCION EN LA CAJA DEL FORMULARIO
function codeAddress() {
        var address = document.form_mapa.direccion.value;
          geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
             updateMarkerPosition(results[0].geometry.location);
             marker.setPosition(results[0].geometry.location);
             map.setCenter(results[0].geometry.location);
           } else {
            alert('ERROR : ' + status);
          }
        });
      }

// OBTIENE LAS COORDENADAS DESDE lA DIRECCION EN LA CAJA DEL FORMULARIO
function codeAddress2 (address) {
          
          geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
             updateMarkerPosition(results[0].geometry.location);
             marker.setPosition(results[0].geometry.location);
             map.setCenter(results[0].geometry.location);
             document.form_mapa.direccion.value = address;
           } else {
            alert('ERROR : ' + status);
          }
        });
      }

function updateMarkerStatus(str) {
  document.form_mapa.direccion.value = str;
}

// RECUPERO LOS DATOS LON LAT Y DIRECCION Y LOS PONGO EN EL FORMULARIO
function updateMarkerPosition (latLng) {
  document.form_mapa.longitud.value =latLng.lng();
  document.form_mapa.latitud.value = latLng.lat();
}

function updateMarkerAddress(str) {
  document.form_mapa.direccion.value = str;
}

// ACTUALIZO LA POSICION DEL MARCADOR
function updateMarker(location) {
        marker.setPosition(location);
        updateMarkerPosition(location);
        geocodePosition(location);
      }





</script>

</script>
</head>
<body  <? if ($direccion != "") { ?> onload=" codeAddress2('<? echo $direccion; ?>')" <? } ?> >
 
 

<style type="text/css">
  html { height: 100% }
  body { height: 80%; margin: 10px; padding: 0px }
  #mapCanvas { height: 100%; width: 500px; }
</style> 


 
<div id="mapCanvas"></div>

</body>
</html>