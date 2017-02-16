// Define a class like this
function Person(name, gender){

   // Add object properties like this
   this.name = name;
   this.gender = gender;
}

// Add methods like this.  All Person objects will be able to invoke this
Person.prototype.speak = function(){
    alert("Howdy, my name is" + this.name);
};

// Instantiate new objects with 'new'
//var person = new Person("Bob", "M");

// Invoke methods like this
//person.speak(); // alerts "Howdy, my name is Bob"

var g_locations =
{
	"hat":1,
	"weapon":2,
	"offhand":3,
	"chest":4,
	"gloves":5,
	"legs":6,
	"feet":7,
	"rings":8,
	"earrings":9,
	"artifact":10,
	"brooch":11,
	"necklace":12
}

var all_armor = [
"hat", "chest", "gloves", "legs", "feet"
]

var all_acc = [ 
	"rings", "earrings", "artifact", "brooch", "necklace", "belt"
]

var armor_types = [
	"plate",
	"heavy",
	"light",
	"cloth"
]

var g_types =
{
	"weapon":["longsword","longhammer"],
	"offhand":["smallshield", "largeshield", "book"],
	"hat": armor_types,
	"chest" : armor_types,
	"gloves" : armor_types,
	"legs" : armor_types,
	"feet" : armor_types,
	
}

var g_scrolls = [
{
	"name":"Immoral",
	"locations":["weapon"],
	"stats":{
		"speed":4,
		"crit":8
	},
	"prefix":true 
},
{
	"name":"Leopard",
	"locations":["weapon"],
	"stats":{
		"speed":8,
		"balance":2
	},
	"prefix":true
},
{
	"name":"Valor",
	"locations":["weapon"],
	"stats":{
		"balance":5,
		"speed":4
	},
	"prefix":false
},
{
	"name":"Judgment",
	"locations":["weapon"],
	"stats":{
		"balance":-1,
		"speed":3,
		"crit":4
	},
	"prefix":false
},
{
	"name":"Ornate",
	"locations":["weapon"],
	"types":["longhammer"],
	"stats":{
		"balance":7,
		"speed":5,
		"crit":3
	},
	"prefix":true
},
{
	"name":"Enlightenment",
	"locations":["hat", "legs"],
	"types":["light", "cloth"],
	"stats":{
		"balance":1,
		"speed":2,
		"crit":2
	},
	"prefix":true
},
{	"name":"Well-Balanced",
	"locations":all_armor ,
	"types":["light", "cloth"],
	"stats":{
		"balance":1,
		"speed":2,
		"crit":1
	},
	"prefix":true
},
{	"name":"Enthusiastic",
	"locations":all_armor ,
	"types":["light", "cloth"],
	"stats":{
		"balance":5,
		"speed":0,
		"crit":0
	},
	"prefix":false
},
{	"name":"Time's",
	"locations":["chest"] ,
	"stats":{
		"balance":-3,
		"crit":4
	},
	"prefix":true
},
{	"name":"Master",
	"locations":["chest"] ,
	"stats":{
		"balance":-1,
		"crit":5
	},
	"prefix":false
},
{	"name":"Declaration",
	"locations":["glove", "feet"] ,
	"types":["light","cloth"],
	"stats":{
		"balance":4,
		"speed":1
	},
	"prefix":false
},
{	"name":"Echo",
	"locations":["hands", "feet"] ,
	"types":["heavy","plate"],
	"stats":{
		"balance":4,
		"speed":1
	},
	"prefix":false
},
{	"name":"Remembering",
	"locations":["hat", "legs"] ,
	"types":["heavy","plate"],
	"stats":{
		"balance":1,
		"crit":2,
		"speed":2
	},
	"prefix":true
},
{	"name":"Silent",
	"locations":["gloves", "feet"] ,
	"stats":{
		"balance":2,
		"speed":2,
		"crit":1
	},
	"prefix":true
},
{	"name":"The Dead",
	"locations":["rings"] ,
	"stats":{
		"balance":5
	},
	"prefix":true
},
{	"name":"Fresh",
	"locations":["offhand"] ,
	"types":["smallshield","largeshield"],
	"stats":{
		"speed":3
	},
	"prefix":true
},
{	"name":"Tricky",
	"locations":["offhand"] ,
	"types":["smallshield","largeshield"],
	"stats":{
		"crit":1
	},
	"prefix":true
},
{	"name":"Fast",
	"locations":all_acc,
	"stats":{
		"speed":5,
		"balance":-8
	},
	"prefix":true
},
{	"name":"Significant",
	"locations":all_acc,
	"stats":{
		"speed":1
	},
	"prefix":true
},
{	"name":"Subdued",
	"locations":["belt"] ,
	"stats":{
		"speed":1,
		"crit":2
	},
	"prefix":true
}
]

function createLookup(arr)
{
	ret = {}
	$.each(arr, function(k,v){
		ret[v.name] = v
	})
	return ret
}

var g_scrollLookup = createLookup(g_scrolls)

var g_weapons = [
{
	"name":"Poo Longsword",
		"type":"longsword",
	"stats":{
		"speed":9,
		"crit":39,
		"balance":78
	}
},
{
	"name":"Poo Hammer",
	"type":"longhammer",
	"stats":{
		"speed":9,
		"crit":42,
		"balance":69
	}
},
{
	"name":"Poo Staff or some shit",
	"type":"staff",
	"stats":{
		"speed":4,
		"crit":500,
		"balance":69
	}
}
]

var g_weaponLookup = createLookup(g_weapons)

var g_chests = [
	{
		"name":"Silky poo",
		"type":"cloth"
	},
	{
		"name":"Light poo",
		"type":"light"
	},
	{
		"name":"Heavy poo",
		"type":"heavy"
	},
	{
		"name":"Stone poo",
		"type":"plate"
	}
]

var g_legs = [
	{
		"name":"Silky poo skirt",
		"type":"cloth"
	},
	{
		"name":"Light poo skirt",
		"type":"light"
	},
	{
		"name":"Heavy poo pants",
		"type":"heavy"
	},
	{
		"name":"Stone poo leg armor",
		"type":"plate"
	}
]

var g_feet = [
	{
		"name":"Silky poo heels",
		"type":"cloth"
	},
	{
		"name":"Light poo shoes",
		"type":"light"
	},
	{
		"name":"Heavy poo boots",
		"type":"heavy"
	},
	{
		"name":"Stone poo greaves",
		"type":"plate"
	}
]

var g_gloves = [
	{
		"name":"Silky poo gloves",
		"type":"cloth"
	},
	{
		"name":"Light poo gloves",
		"type":"light"
	},
	{
		"name":"Heavy poo gauntlets",
		"type":"heavy"
	},
	{
		"name":"Stone poo gauntlets",
		"type":"plate"
	}
]

var g_hats = [
	{
		"name":"Silky poo hat",
		"type":"cloth"
	},
	{
		"name":"Light poo hat",
		"type":"light"
	},
	{
		"name":"Heavy poo hat",
		"type":"heavy"
	},
	{
		"name":"Stone poo hat",
		"type":"plate"
	}
]

var g_rings = [
	{
		"name":"Ring of Poo"
	}
]

var g_belts = [
	{
		"name":"Belt of Poo"
	},
	{
		"name":"Belt of new Poo",
		"stats":{
			"balance":2
		}
	}
]

var g_artifacts  = [
	{
		"name":"Poo statue"
	},
	{
		"name":"Greater Poo statue"
	}
]

var g_offhands = [
	{
		"name":"Shield of Poo",
		"type":"smallshield"
	},
	{
		"name":"Dictionary of Poos",
		"type":"book"
	}
]

var g_earrings = [
	{
		"name":"Poo earring"
	},
	{
		"name":"Tears of poo",
		"stats":{
			"crit":1
		}
	}
]

var g_brooches = [
	{
		"name":"Shit Poo"
	},
	{
		"name":"Blue Poo brooch",
		"stats":{
			"crit":1
		}
	}
]

var g_bracelets = [
	{
		"name":"10k"
	}
]

var g_items = {
	"weapon" : g_weapons,
	"chest": g_chests,
	"gloves": g_gloves,
	"feet": g_feet,
	"rings": g_rings,
	"offhand": g_offhands,
	"hat":g_hats,
	"legs": g_legs,
	"belt": g_belts,
	"artifact": g_artifacts,
	"brooch": g_brooches,
	"earrings": g_earrings,
	"bracelet": g_bracelets
}

var g_minor_infusions = [
	
]

var g_armour_infusions = g_minor_infusions.concat([
	"Def"
])

var g_major_infusions = [
	"+2 crit",
	"+1 crit",
	"+2 balance",
	"+1 balance",
	"+1 speed",
]

var g_infusions = {
	"weapon" : g_major_infusions.concat(['att']),
	"chest": g_armour_infusions,
	"gloves": g_armour_infusions,
	"feet": g_armour_infusions,
	"rings": g_major_infusions,
	"offhand": g_major_infusions,
	"hat":g_armour_infusions,
	"legs": g_armour_infusions,
	"belt": g_major_infusions,
	"brooch": g_major_infusions,
	"earrings": g_major_infusions,
}

var g_lookups = {};
$.each(g_items, function(k,v){
	g_lookups[k] = createLookup(v)
})

function createInputBox(placeholder, width="100%", id=null)
{
	var ret= $("<input type='text' />")
	ret.css("width", width)
	ret.css("background", "rgba(255,255,255,0.5)")
	
	if(placeholder)
	{
		ret.attr("placeholder", placeholder)
	}
	
	if(id)
	{
		ret.attr("id", id)
	}
	return ret
}

function passFilter(loc, type, scr, prefix)
{
	// loc not in scroll locs
	if(-1 == $.inArray(loc,scr["locations"]))
	{
		return false;
	}
	
	// scroll has a types filter and item fails it
	if (type && "types" in scr && $.inArray(type, scr["types"]) == -1)
	{
		return false
	}
	
	if (scr["prefix"] != prefix)
	{
		return false
	}
	
	return true;
}

function formatStats(stats)
{
	if (!stats)
	{
		return ""
	}
	return txt = $.map(stats, function(k,v) { 
			if (k == 0)
			{
				return null
			}
			return v + "+" + k
		}).join(", ")
}

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

function createSquare(id, loc, cb, scrolls=true)
{	
	var target = $("#"+id)
	var box = $("<div />")
	box.css("height", "8em")
	box.css("width", "8em")
	box.css("border-style", "solid")
	box.css("background-image", "url('resource/poo.png')")
	box.css("background-size", "cover")
	target.append(box)
	   
	if (!loc || !(loc in g_items))
	{
		var overlay = $("<div />")
		overlay.css("background-color", "rgba(0,0,0,0.5)")
		overlay.css("height", "100%")
		overlay.css("weight", "100%")
		box.append(overlay)
		return box
	}
	
	var prefix = createInputBox('Prefix')
	var suffix = createInputBox('Suffix')
	var item = createInputBox(toTitleCase(loc))
	var inf = createInputBox('Infusion')
	
	var display = $("<div />")
	display.css("background-color",'white')
	
	var update = function ()
	{
		var p = box.data("prefix")
		var s = box.data("suffix")
		var w = box.data("item")
		var i = box.data("inf")

		var stats = {"bal":0, "crit":0, "speed": 0}
		
		$.each([p,s,w,i], function(k,x)
		{
			if(x && x.stats)
			{
				stats.bal += x.stats.balance || 0
				stats.crit += x.stats.crit || 0 
				stats.speed += x.stats.speed|| 0
			}
		})
		box.data("stats", stats)
		var txt = formatStats(stats)
		$("#console").html(txt)
		
		cb(box)
		return true
	}
	
	// arrayOfItems should be g_scrolls or g_items[loc]
	var propSet = function(key, arrayOfItems)
	{
		return function(){
			var name = $(this).val().toLowerCase()
			$.each(arrayOfItems, function(k,v)
			{
				if (v.name.toLowerCase() == name)
				{
					box.data(key, v)
					return false 
				}
			})
			update()
		}
	}

	var scrollSource = function (prefix){
	return function(state, cb){
			var term = $.ui.autocomplete.escapeRegex(state.term)
			var re = new RegExp(term, "i")
			var ret = []
			var item = box.data("item") || {"type":null}
			var type = item["type"]
			$.each(g_scrolls, function(k,v)
			{
				if ( passFilter(loc, type, v, prefix) )
				{
					if (-1 != v["name"].search(re))
					{
						ret.push(v["name"])
					}
				}
			})
			cb(ret)
		}
	}
	
	var openCb = function(lookupMap){
		return function(e,ui) {			
			var x = $(".ui-menu-item-wrapper")
			$.each(x, function(k,v){
				var data = lookupMap[v.innerHTML]
				if(data)
				{
					$(v).attr("title", formatStats(data.stats))
					$(v).tooltip()
				}
			})
        }
	}
	
	var sharedOpts = {
		delay: 100,
		minLength: 0,
		position: {my:"left center", at :"right center"},		
		messages: {
			noResults: '',
			results: function() {}
		}
	}
	
	var setOpenOnFocus = function(el)
	{
		el.on("focus", function(){	$(this).autocomplete("search", $(this).val())})
	}
	
	prefix.autocomplete($.extend({},sharedOpts,
	{
		source: scrollSource(true),
		change: propSet("prefix", g_scrolls),
		"close": propSet("prefix", g_scrolls),
		"open": openCb(g_scrollLookup)
	}))
	setOpenOnFocus(prefix)
	
	suffix.autocomplete($.extend({},sharedOpts,
	{
		source: scrollSource(false),
		change: propSet("suffix", g_scrolls),
		"close": propSet("suffix", g_scrolls),
		"open": openCb(g_scrollLookup)
	}))
	
	setOpenOnFocus(suffix)
	
	var src = $.map(g_items[loc], function(k,v) {
		return k.name
	})

	item.autocomplete($.extend({},sharedOpts,
	{
		source:src, 
		"close": propSet("item", g_items[loc]),
		"change": propSet("item", g_items[loc]),
		"open": openCb(g_lookups[loc])
	}))
	setOpenOnFocus(item)
	
	var statPat = /[+-]?(\d)\s*(.*)/;
	var updateInf = function()
	{
		var val = $(this).val()
		var match = statPat.exec(val);
		var num = parseInt(match[1])
		var stat = match[2]
		var s = {}
		s[stat] = num
		box.data("inf", {"name":val, "stats":s})
		update()
	}
	
	inf.autocomplete($.extend({},sharedOpts,
	{
		source: g_infusions[loc], 
		"close":updateInf, 
		"change":updateInf
	}))
	
	setOpenOnFocus(inf)
	
	box.append(prefix)
	box.append(suffix)
	if(!scrolls)
	{
		prefix.attr("disabled","disabled")
		prefix.css("background-color","gray")
		suffix.attr("disabled","disabled")
		suffix.css("background-color","gray")
	}
	box.append(item)
	
	if(loc in g_infusions)
	{
		box.append(inf)
	}
	//box.append(display)
	
	
	return box
}

function accumulateBoxes(boxes)
{
	var stats = {"bal":0, "crit":0, "speed":0}
	$.each(boxes, function(k,v){
		var boxStats = v.data("stats")
		if(boxStats)
		{
			stats.bal += boxStats.bal||0
			stats.crit += boxStats.crit||0
			stats.speed += boxStats.speed||0
		}
	})
	return stats
}

// id is a col
function createStatsSheet(id, stats)
{
	// base stats
	
	var valOf = function(el)
	{
		var ret = parseInt(el.val())
		if (isNaN(ret))
		{
			return 0
		}
		return ret
	}
	var statsDiv = $("<div class='col-xs-6'/>")
	var critInputs = []
	$.each(['Crit (mastery, wil)', '(ein, numa)'], function(k,v)
	{
		var critRow = $("<div class='row'/>")
		for (var i = 0; i < 2; ++i)
		{
			var ci = createInputBox("crit", "30%")
			ci.css("margin-right", "0.2em")
			ci.css("text-align", "center")
			critRow.append(ci)
			critInputs.push(ci)
		}
		statsDiv
		.append($("<div class='row'><span>"+v+"</span></div>"))
		.append(critRow)
	})
	
	// oh god
	critInputs[0].val(28)
	critInputs[1].val(15)
	critInputs[2].val(3)
	critInputs[3].val(5)
	
	var balLabel = $("<div class='row'>Balance (ein)</div>")
	var balRow = $("<div class='row' > </div>")
	var balInput = createInputBox("bal", "30%")
	balRow.append(balInput)
	balInput.val(5)
	balInput.css("text-align", "center")
	var speedLabel = $("<div class='row'>Speed (other)</div>")
	var speedRow = $("<div class='row' />")
	var speedInput = createInputBox("speed", "30%")
	speedRow.append(speedInput)
	speedInput.css("text-align", "center")
	speedInput.val(0)
	
	// TODO: Formatting on these
	statsDiv
	.append(balLabel)
	.append(balRow)
	.append(speedLabel)
	.append(speedRow)
	
	var statRowString = "<div class='row m-top-bot' />"
	var target = $("#"+id)
	target.html("")
	target.css("background-color","#aaaaaa")
	
	//target.css("height", "30em")
	//sheet.css("width", "100%")
	target.css("border-style", "solid")
	var nameRow = $("<div class='row' />")
	nameRow.html("A poo")
	nameRow.css("text-align", "center")
	nameRow.css("font-size", "2em")
	target.append(nameRow)
	
	// row for picture and title?
	var row = $(statRowString)
	var picdiv = $("<div class='col-xs-6'/>")
	var pic = $("<div />")
	pic.css("background-image", "url('resource/a_cute_poo.png')")
	pic.css("background-size", "cover")
	pic.css("background-position", "10%")
	pic.css("background-color", "pink")

	pic.css("width", "100%")
	pic.css("display", "block")
	pic.css("padding-top", "100%")
	
	pic.css("border-style", "solid")
	
	
	picdiv.append(pic)
	row.append(picdiv)
	row.append(statsDiv)
	
	
	target.append(row)
	
	var statsWrap = $("<div class='col-xs-12'/>")
	target.append(statsWrap)
	
	var writeStats = function(stats)
	{
		statsWrap.html(" ")
		row = $(statRowString)
		var statCol = $("<div class='col-xs-6'/>")
		statCol.html("Bal: " + (stats.bal + valOf(balInput)))
		row.append(statCol)
		statsWrap.append(row)
		
		row = $(statRowString)
		statCol = $("<div class='col-xs-6'/>")
		
		var addlCrit = 3 + critInputs.reduce(function(total, e){ return total + valOf(e) }, 0)
		
		statCol.html("Crit: " + (stats.crit + addlCrit ))
		row.append(statCol)
		statsWrap.append(row)
		
		row = $(statRowString)
		statCol = $("<div class='col-xs-6'/>")
		statCol.html("Speed: " + (stats.speed + valOf(speedInput)))
		row.append(statCol)
		statsWrap.append(row)
		target.data('stats',stats)
	}
	writeStats(stats)
	target.data('update', writeStats)
	
	$.each([balInput,speedInput].concat(critInputs), function(k,v){
		v.on('change', function(){
			writeStats(target.data('stats'))
		})
	})
	
	return target	
}
