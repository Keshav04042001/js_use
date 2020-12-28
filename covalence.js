/*var name = "keshav"
var age = "20"
console.log(name);
console.log(age);

var boy = {
    'firstName': name,
    agea: age,
    'dob' : '04/04/2001',
}
boy.firstName;
boy.ag;
boy.dob;
console.log(boy) */

var array1 = ["keshav","bhupat","himashu"]
var array2 = [20,21,19]
var val1 = array1[0]+array1[1]
var val2 = array2[0]*array2[1]
console.log(val1)
console.log(val2)
array1.push("ritesh")
array2.pop()
console.log(array1)
console.log(array2)

var college = {
    name:"rajasthan Technical university,kota",

    branches:{
        cse:{
            students:380,
            block: "D Block",
            },
        ece:{
            students:240,
            block: "C Block",
            },
        it:{
            students: 430,
            block: "E Block",
            },
            }
}
console.log(college)
console.log(college.name)
console.log(college.name.branches)

var a = 5;
var b = 10;
var c = '2';
var d = a+b+c;
var e = (a+b)*c
var f = a + (b*c)
var g = a+c+b;
console.log(g)
console.log(d)
console.log(e)
console.log(f)

/* loop throuugh */

friends = ["keshav","bhupat","madhav","shrinith","vikas"]
for(var i=0;i<friends.length;i++){
    if(friends[i]=="shrinith"){
        console.log("yayy you got him")
    }
    else{
        console.log(friends[i])
    }
}
var count = 0;
while(count<friends.length){
    console.log(count)
    count++;
}
