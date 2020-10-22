//console.log("ühendatud")

var frontEnd = ["Javascript","PHP","Java","HTML","CSS","C#"]

//frontEnd.shift()
//frontEnd.pop()
//frontEnd.unshift("Angular")
//frontEnd.push("Python")
//frontEnd.splice(3,2) - kustutab elemendid alates indeksist 3, 2 tükki

frontEnd.splice(3,0,"Vue")
frontEnd.shift()

frontEnd[1] = "React"
frontEnd[1] = frontEnd[2]


frontEnd = []
//frontEnd.splice(0) asendad äa, mis seal enne oli tühjusega

document.getElementById("harj").innerHTML = frontEnd