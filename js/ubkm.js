function xml2html() {
    if (window.XMLHttpRequest)
    {// codigo para IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {// codigo para IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","../xml/clientes.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML;
    document.write("<h1>Mis clientes</h1>");
    document.write("<table border=1 style='color:Black'><tr><th>Nombre</th><th>Identificación</th><th>Teléfono</th><th>Valor</th></tr>");
    var x = xmlDoc.getElementsByTagName("cliente");
    for (i=0;i<x.length;i++)
    {
        document.write("<tr><td>");
        document.write(x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("idetificacion")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("telefono")[0].childNodes[0].nodeValue);
        document.write("</td><td>");
        document.write(x[i].getElementsByTagName("valor")[0].childNodes[0].nodeValue);

        document.write("</td></tr>");
    }
    document.write("</table>");
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        window.alert("Este navegador no soporta Geolocalización");
    }
}

function showPosition(position) {
    console.log(document.getElementById("test"));
    window.alert( "Hola. Sus coordenadas geográficas decimales son: \n\n " + "Latitud: "+ position.coords.latitude + "\n Longitud: " + position.coords.longitude + "\n\n Su posición está en un radio de : " + (position.coords.accuracy/2) + " metros, a partir de las coordenadas obtenidas" );
    document.getElementById("mapatest").src="https://maps.googleapis.com/maps/api/staticmap?center="+position.coords.latitude+","+position.coords.longitude+"&zoom=15&size=400x400&key=AIzaSyAWbOt_lnJqJoEbiA40KVfJ9xQQrVA-wOc&maptype=roadmap&format=png&markers=label:C|"+position.coords.latitude+","+position.coords.longitude;
}
function initialize() {

    var mapProp = {
        center:new google.maps.LatLng(4.627904902638327, -74.06584338408885),
        zoom:15,
        mapTypeId:google.maps.MapTypeId.TERRAIN
    };
    var map=new google.maps.Map(document.getElementById("mapa"),mapProp);

    new google.maps.Marker({
        position: { lat: 4.627904902638327, lng:-74.06584338408885 },
        map,
    });
    google.maps.event.addDomListener(window, 'load', initialize);
}