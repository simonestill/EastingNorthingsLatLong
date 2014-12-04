//Description isn't 100% accurate
//The densley populated regions midlands South East and M62 land, central scotland are
//Are under described


var OSGridSquares
= 
	{
	"HP":{
		"Description":"Yell Shetland",
		"Easting":4,
		"Northing":12,
		"EastingMetres":400000,
		"NorthingMetres":1200000
		},
	"HT":{
		"Easting":3,
		"Northing":11,
		"EastingMetres":300000,
		"NorthingMetres":1100000,
		"Description":"Shetland"
		},
	"HU":{
		"Easting":4,
		"Northing":11,
		"EastingMetres":400000,
		"NorthingMetres":1100000,
		"Description":"Foula"
	},
	"HW":
	{
		"Easting":1,
		"Northing":10,
		"EastingMetres":100000,		
		"NorthingMetres":1000000,
		"Description":"North Rona"	
	},	
	"HX":
	{
		"Easting":2,
		"Northing":10,
		"EastingMetres":200000,
		"NorthingMetres":1000000,
		"Description":"Sule Skerry"	
	},
	"HY":{
		"Easting":3,
		"Northing":10,
		"EastingMetres":300000,
		"NorthingMetres":1000000,
		"Description":"Orkney"	
	},	
	"HZ":
		{
		"Easting":4,
		"Northing":10,
		"EastingMetres":400000,
		"NorthingMetres":1000000,
		"Description":"Fair Island"	
		},
	"NA":
		{
		"Easting":0,
		"Northing":9,
		"EastingMetres":0,
		"NorthingMetres":900000,
		"Description":"North St Kilda"	
		},
	"NB":{	
		"Easting":1,
		"Northing":9,
		"EastingMetres":100000,
		"NorthingMetres":900000,
		"Description":"Lewis, Harris"
	},
	"NC":
	{
		"Easting":2,
		"Northing":9,
		"EastingMetres":200000,
		"NorthingMetres":900000,
		"Description":"Sutherland"
	},
	"ND":
	{	
		"Easting":3,
		"Northing":9,
		"EastingMetres":300000,
		"NorthingMetres":900000,
		"Description":"Caithness, South Orkney"
	},
	"NF":
	{
		"Easting":0,
		"Northing":8,
		"EastingMetres":0,
		"NorthingMetres":800000,
		"Description":"South Outer Hebrides"
	},
	"NG":
	{	
		"Easting":1,
		"Northing":8,
		"EastingMetres":100000,
		"NorthingMetres":800000,
		"Description":"Skye, Torridon"
	},
	"NH":
	{
		"Easting":2,
		"Northing":8,
		"EastingMetres":200000,
		"NorthingMetres":800000,
		"Description":"Inverness, Northern Highlands"
	},
	"NJ":
	{		
		"Easting":3,
		"Northing":8,
		"EastingMetres":300000,
		"NorthingMetres":800000,
		"Description":"Elgin, Cairngorms"
	},
	"NK":
	{		
		"Easting":4,
		"Northing":8,
		"EastingMetres":400000,
		"NorthingMetres":800000,
		"Description":"Peterhead"
	},
	"NL":
	{	
		"Easting":0,
		"Northing":7,
		"EastingMetres":0,
		"NorthingMetres":700000,
		"Description":"Barra Outer Hebrides"
	},
	"NM":
	{
		"Easting":1,
		"Northing":7,
		"EastingMetres":100000,
		"NorthingMetres":700000,
		"Description":"Mull, Western Highlands"
	},
	"NN":{	
		"Easting":2,
		"Northing":7,
		"EastingMetres":200000,
		"NorthingMetres":700000,
		"Description":"Central Highlands"
	},
	"NO":{	
		"Easting":3,
		"Northing":7,
		"EastingMetres":300000,
		"NorthingMetres":700000,
		"Description":"Fife, Perth, Aberdeen,Dundee"
	},
	"NR":{	
		"Easting":1,
		"Northing":6,
		"EastingMetres":100000,
		"NorthingMetres":600000,
		"Description":"Jura,Kintyre"
	},
	"NS":{	
		"Easting":2,
		"Northing":6,
		"EastingMetres":200000,
		"NorthingMetres":600000,
		"Description":"Greater Glasgow, Ayrshire, Lanarkshire,Central Belt"
	},
	
	"NT":{	
		"Easting":3,
		"Northing":6,
		"EastingMetres":300000,
		"NorthingMetres":600000,
		"Description":"East Dumfrieshire, Borders, Lothians, Edinburgh"
	},
	"NU":{
		"Easting":4,
		"Northing":6,
		"EastingMetres":400000,
		"NorthingMetres":600000,
		"Description":"Northumberland Coast"
	},
	"NW":{	
		"Easting":1,
		"Northing":5,
		"EastingMetres":100000,
		"NorthingMetres":500000,
		"Description":"Stranraer (Belfast, Down and Antrim Coast)"
	},
	"NX":
	{	
		"Easting":2,
		"Northing":5,
		"EastingMetres":200000,
		"NorthingMetres":500000,
		"Description":"Galloway, West Dumfrieshire"
	},
	"NY":
	{	
		"Easting":3,
		"Northing":5,
		"EastingMetres":300000,
		"NorthingMetres":500000,
		"Description":"North Cumbria,(Cumberland,North Westmoreland),West Northumberland, West Durham"
	},
	"NZ":
	{	
		"Easting":4,
		"Northing":5,
		"EastingMetres":400000,
		"NorthingMetres":500000,
		"Description":"Newcastle,Sunderland,Teeside,East Durham"
	},
	"OV":
	{	
		"Easting":5,
		"Northing":5,
		"EastingMetres":500000,
		"NorthingMetres":500000,
		"Description":"Beast Cliff"
	},
	"SC":
	{	
		"Easting":2,
		"Northing":4,
		"EastingMetres":200000,
		"NorthingMetres":400000,
		"Description":"Isle of Man"
	},
	"SD":
	{
		"Easting":3,
		"Northing":4,
		"EastingMetres":300000,
		"NorthingMetres":400000,
		"Description":"Historic Lancashire, South Westmoreland, South Cumbria,Pennine Yorkshire"
	},
	"SE":
	{	
		"Easting":4,
		"Northing":4,
		"EastingMetres":400000,
		"NorthingMetres":400000,
		"Description":"Leeds York Goole North Yorkshire Moors"
	},
	"SH":
	{	
		"Easting":2,
		"Northing":3,
		"EastingMetres":200000,
		"NorthingMetres":300000,
		"Description":"North West Wales"
	},
	"SJ":
	{	
		"Easting":3,
		"Northing":3,
		"EastingMetres":300000,
		"NorthingMetres":300000,
		"Description":"North East Wales,Cheshire,North Shrophshire, Warrington,Staffordshire, West Derbyshire, South Greater Manchester"
	},
	"SK":
	{	
		"Easting":4,
		"Northing":3,
		"EastingMetres":400000,
		"NorthingMetres":300000,
		"Description":"Derbyshire, Nottinghamshire, South Lincolnshire, Sheffield"
	},
	"SM":
	{
		"Easting":1,
		"Northing":2,
		"EastingMetres":100000,
		"NorthingMetres":200000,
		"Description":"West Pembrokeshire"
	},
	"SN":
	{	
		"Easting":2,
		"Northing":2,
		"EastingMetres":200000,
		"NorthingMetres":200000,
		"Description":"South West Wales"
	},
	"SO":
	{	
		"Easting":3,
		"Northing":2,
		"EastingMetres":300000,
		"NorthingMetres":200000,
		"Description":"Welsh Marches,South Shrophshire, Herefordshire, West Midlands, Black Country"
	},
	"SP":
	{	
		"Easting":4,
		"Northing":2,
		"EastingMetres":400000,
		"NorthingMetres":200000,
		"Description":"Birmingham,Warwicksire,Leicestershire, Northhamptonshire, Oxfordshire,"
	},
	"SR":
	{	
		"Easting":1,
		"Northing":1,
		"EastingMetres":100000,
		"NorthingMetres":100000,
		"Description":"South West tip of Pembrokeshire"
	},
	"SS":
	{	
		"Easting":2,
		"Northing":1,
		"EastingMetres":200000,
		"NorthingMetres":100000,
		"Description":"Swansea,West Glamorgan, North Devon"
	},
	"ST":{	
		"Easting":3,
		"Northing":1,
		"EastingMetres":300000,
		"NorthingMetres":100000,
		"Description":"Cardiff, Newport,Wiltshire, Bristol,Bath,Somerset"
	},
	"SU":{	
		"Easting":4,
		"Northing":1,
		"EastingMetres":400000,
		"NorthingMetres":100000,
		"Description":"Oxfordshire,Buckhinghamshire,Berkshire,Hampshire"
	},
	"SV":
	{	
		"Easting":0,
		"Northing":0,
		"EastingMetres":0,
		"NorthingMetres":0,
		"Description":"Scilly Isles"
	},
	"SW":{	
		"Easting":1,
		"Northing":0,
		"EastingMetres":100000,		
		"NorthingMetres":0,
		"Description":"West Cornwall"
	},
	"SX":{	
		"Easting":2,
		"Northing":0,
		"EastingMetres":200000,
		"NorthingMetres":0,
		"Description":"East Cornwal, South Devon"
	},
	"SY":{	
		"Easting":3,
		"Northing":0,
		"EastingMetres":300000,
		"NorthingMetres":0,
		"Description":"Dorset Coast"
	},
	"SZ":{	
		"Easting":4,
		"Northing":0,
		"EastingMetres":400000,
		"NorthingMetres":0,
		"Description":"Bournemouth, Isle of Wight"
	},
	"TA":{	
		"Easting":5,
		"Northing":4,
		"EastingMetres":500000,
		"NorthingMetres":400000,
		"Description":"Humberside, North Lincolnshire"
	},
	"TF":{	
		"Easting":5,
		"Northing":3,
		"EastingMetres":500000,
		"NorthingMetres":300000,
		"Description":"South Lincolnshire, Fens, North West Norfolk"
	},
	"TG":{	
		"Easting":6,
		"Northing":3,
		"EastingMetres":600000,
		"NorthingMetres":300000,
		"Description":"North East Norfolk"
	},
	"TL":{	
		"Easting":5,
		"Northing":2,
		"EastingMetres":500000,
		"NorthingMetres":200000,
		"Description":"Bedfordshire, West Suffolk, Essex, Hertfordhire"
	},
	"TM":{	
		"Easting":6,
		"Northing":2,
		"EastingMetres":600000,
		"NorthingMetres":200000,
		"Description":"East Suffolk, South Norfolk"		
	},
	"TQ":{	
		"Easting":5,
		"Northing":1,
		"EastingMetres":500000,
		"NorthingMetres":100000,
		"Description":"West Kent, Surrey, Sussex, London, South Essex"
	},
	"TR":{	
		"Easting":6,
		"Northing":1,
		"EastingMetres":600000,
		"NorthingMetres":100000,
		"Description":"East Kent"		
	},
	"TV":{	
		"Easting":5,
		"Northing":0,
		"EastingMetres":500000,
		"NorthingMetres":0,
		"Description":"Beachey Head"
	}
}


function GridRefToEastingNorthing(gridref)
{
	precision = (gridref.length -2)/2;
	gridsquare = gridref.substring(0,2).toUpperCase();	
	easting = OSGridSquares[gridsquare].Easting + gridref.substring(2,2 + precision) + Array(6-precision).join("0") ;
	northing = OSGridSquares[gridsquare].Northing + gridref.substring(precision + 2) + Array(6-precision).join("0");
	
	return [easting,northing]
}

function EastingNorthingToGridRef(easting,northing)
{
	var Easting = null;
	var Northing = null;		
	var GridSquare = null;
	var GridRef = "";	
    for(var key in OSGridSquares)
	{		
		//alert(key);
		if(OSGridSquares[key].Easting.toString()  == easting.substring(0,1) &&
        	OSGridSquares[key].Northing.toString() == northing.substring(0,1))
		{
		   Easting = OSGridSquares[key].Easting;
		   Northing = OSGridSquares[key].Northing;
		   
		   EastingMetres = OSGridSquares[key].EastingMetres;
		   NorthingMetres = OSGridSquares[key].NorthingMetres;
		   
		   GridRefEast =  (parseInt(easting) - EastingMetres).toString();
		   GridRefNorthing =  (parseInt(northing) - NorthingMetres).toString();		   
		   GridSquare = key + GridRefEast + GridRefNorthing;
		   break;
		}
	}
	
	return(GridSquare)
}


function GetGridSquareDetails(GridSquare)
{
   return OSGridSquares[GridSquare]
}


