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