//@Author: Simon Estill
//@Created:2013-03-21
//Simple procedural library for converting (Easting,Northing) to (Latitude,Longitude) and visa versa)

function NorthEastToLatLong(Easting, Northing)
{
            //Fiddle Factors
			var Easting = Easting - 86;
            var Northing = Northing + 330;

            var a = 6377563.396; // Airy 1830 major & minor semi-axes
            var b = 6356256.91;
            var F0 = 0.9996012717;                // NatGrid scale factor on central meridian
            var lat0 = Degrees2Radians(49.0);
            var lon0 = Degrees2Radians(-2.0);
            var N0 = -100000.0;
            var E0 = 400000.0;                   // northing & easting of true origin, metres
            var e2 = 1 - ((b * b) / (a * a));      // eccentricity squared
            var n = (a - b) / (a + b);
            var n2 = n * n;
            var n3 = n * n * n;
            var phi = lat0 + ((Northing - N0) / (a * F0));
            //MsgBox(phi)

            var Ma, Mb, Mc, Md;

            var M = 0;

            Ma = (1 + n + 1.25 * n2 + 1.25 * n3) * (phi - lat0);
            Mb = (3 * n + 3 * n2 + 2.625 * n3) * Math.Sin(phi - lat0) * Math.Cos(phi + lat0);
            Mc = 1.875 * (n2 + n3) * Math.Sin(2 * (phi - lat0)) * Math.Cos(2 * (phi + lat0));
            Md = (35.0 / 24.0) * n3 * Math.Sin(3 * (phi - lat0)) * Math.Cos(3 * (phi + lat0));
            M = b * F0 * (Ma - Mb + Mc - Md);

            int count = 0;
            
            while ((n - N0 - M) >= 0.001)
            {  // ie until < 0.01mm
                phi = ((n - N0 - M) / (a * F0)) + phi;
                Ma = (1 + n + 1.25 * n2 + 1.25 * n3) * (phi - lat0);
                Mb = (3 * n + 3 * n * n + 2.625 * n3) * Math.Sin(phi - lat0) * Math.Cos(phi + lat0);
                Mc = 1.875 * (n2 + n3) * Math.Sin(2 * (phi - lat0)) * Math.Cos(2 * (phi + lat0));
                Md = (35.0 / 24.0) * n3 * Math.Sin(3 * (phi - lat0)) * Math.Cos(3 * (phi + lat0));
                M = b * F0 * (Ma - Mb + Mc - Md);
                // meridional arc
                count += 1;            
            }
            
            var cosLat = Math.cos(phi);
            //MsgBox(cosLat)
            var sinLat = Math.sin(phi);
            var nu = a * F0 / Math.sqrt(1 - e2 * sinLat * sinLat);          // transverse radius of curvature
            var rho = a * F0 * (1 - e2) / Math.pow(1 - e2 * sinLat * sinLat, 1.5);// meridional radius of curvature
            var eta2 = nu / rho - 1;

            var tanLat = Math.tan(phi);
            //MsgBox(tanLat)
            var tan2lat = tanLat * tanLat;
            var tan4lat = tan2lat * tan2lat;
            var tan6lat = tan4lat * tan2lat;
            var secLat = 1 / cosLat;
            var nu3 = nu * nu * nu;
            var nu5 = nu3 * nu * nu;
            var nu7 = nu5 * nu * nu;
            var VII = tanLat / (2 * rho * nu);
            var VIII = tanLat / (24 * rho * nu3) * (5 + 3 * tan2lat + eta2 - 9 * tan2lat * eta2);
            var IX = tanLat / (720 * rho * nu5) * (61 + 90 * tan2lat + 45 * tan4lat);
            var X = secLat / nu;
            var XI = secLat / (6 * nu3) * (nu / rho + 2 * tan2lat);
            var XII = secLat / (120 * nu5) * (5 + 28 * tan2lat + 24 * tan4lat);
            var XIIA = secLat / (5040 * nu7) * (61 + 662 * tan2lat + 1320 * tan4lat + 720 * tan6lat);

            var dE = Easting - E0;
            var dE2 = dE * dE;
            var dE3 = dE2 * dE;
            var dE4 = dE2 * dE2;
            var dE5 = dE3 * dE2;
            var dE6 = dE4 * dE2;
            var dE7 = dE5 * dE2;
            phi = phi - VII * dE2 + VIII * dE4 - IX * dE6;
            //MsgBox(phi)
            var lon = lon0 + X * dE - XI * dE3 + XII * dE5 - XIIA * dE7;

            var Latitude = Radians2Degrees(phi)
			var Longitude = Radians2Degrees(lon)
			 
            //Return hash			 
            return {"Latitude":Latitude.toFixed(6),"Longitude":Latitude.toFixed(6)};
}

 function  LatLongToNorthEast(Latitude, Longitude)
         {
            var lat = Latitude;
            var lon = Longitude;
            
			var a = Ellipsoid.AxisA;
            var b = Ellipsoid.AxisB ;        // Airy 1830 major & minor semi-axes
            var F0 = 0.9996012717 ;     // NatGrid scale factor on central meridian
            var lat0 = Degrees2Radians(49.0);
            var lon0 = Degrees2Radians(-2.0); // NatGrid true origin
            var N0 = -100000.0;
            var E0 = 400000.0 ;            // northing & easting of true origin, metres
            var e2 = Ellipsoid.E2 ;                    // eccentricity squared
            var n = (a - b) / (a + b);
            var n2 = n * n;
            var n3 = n * n * n;

            var cosLat = Math.cos(lat);
            var sinLat = Math.sin(lat);
            var nu = a * F0 / math.sqrt(1 - e2 * sinLat * sinLat)  ;           // transverse radius of curvature
            var rho = a * F0 * (1 - e2) / Math.pow(1 - e2 * sinLat * sinLat, 1.5); // meridional radius of curvature
            var eta2 = nu / rho - 1;

            var Ma = (1 + n + 1.25 * (n2 + n3)) * (lat - lat0);
            var Mb = (3 * (n + n2) + 2.625 * n3) * Math.sin(lat - lat0) * Math.cos(lat + lat0);
            //
            var Mc = 1.875 * (n2 + n3) * Math.sin(2 * (lat - lat0)) * Math.cos(2 * (lat + lat0));
            var Md = (35 / 24) * n3 * Math.sin(3 * (lat - lat0)) * Math.cos(3 * (lat + lat0));
            var M = b * F0 * (Ma - Mb + Mc - Md);            // meridional arc

            var cos3lat = cosLat * cosLat * cosLat;
            var cos5lat = cos3lat * cosLat * cosLat;
            var tan2lat = Math.tan(lat) * Math.tan(lat);
            var tan4lat = tan2lat * tan2lat;

            var I = M + N0;
            var II = (nu / 2) * sinLat * cosLat;
            var III = (nu / 24) * sinLat * cos3lat * (5 - tan2lat + 9 * eta2);
            var IIIA = (nu / 720) * sinLat * cos5lat * (61 - 58 * tan2lat + tan4lat);
            var IV = nu * cosLat;
            var V = (nu / 6) * cos3lat * (nu / rho - tan2lat);
            var VI = (nu / 120) * cos5lat * (5 - 18 * tan2lat + tan4lat + 14 * eta2 - 58 * tan2lat * eta2);

            var dLon = lon - lon0;
            var dLon2 = dLon * dLon;
            var dLon3 = dLon2 * dLon;
            var dLon4 = dLon3 * dLon;
            var dLon5 = dLon4 * dLon;
            var dLon6 = dLon5 * dLon;

            var Northing = I + II * dLon2 + III * dLon4 + IIIA * dLon6;
            var Easting = E0 + IV * dLon + V * dLon3 + VI * dLon5;

            return {"Northing":Latitude.toFixed(0),"Easting":Easting.toFixed(0)};
         }

//Trigonemetetric functions

function Degrees2Radians(var dblDegrees)
{   
	return (dblDegrees / 180.0) * Math.PI;            
}

function Radians2Degrees(var dblRadians)
{         
	return (dblRadians / Math.PI) * 180;
}

function Sec(var  dblPhi)
{
	if (dblPhi != Math.PI / 2) 
	{
		return 1 / Math.cos(dblPhi);
	}
	else
	{
		/*Not Mathematically true  we are not at north pole  but stops the program crashing*/
		return 100000000000.0;
	}
}
//
var  Ellipsoid = 
     {
        AxisA :6377563.396,
        AxisB :6356256.91,
        E2 : 1 - (AxisB * AxisB / AxisA * AxisA)
     }


