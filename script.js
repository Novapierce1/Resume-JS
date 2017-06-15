function displayPosition(companyName,jobTitle,description){
    console.log(companyName+jobTitle+description)
}
function displaySkills(skill,cool){
    if (cool==true){
        console.log('check it:' + skill);
    }
    else {
        console.log(skill)
    }
}
var str = 'christopher coman';
var name = str.toUpperCase();
console.log('Name:', name);
console.log('Career: Fragrence Model / Junior Coder')
console.log('Description: Video gaming nerd')
console.log('Interests:')
console.log('* Gaming')
console.log('* Technology')
console.log('* Music')
console.log('* YouTube')
console.log('My previous experience')
console.log(displayPosition('*Parlux'+'Fragrence Model'+'Selling cologne and perfume'))
console.log(displayPosition('*fossil'+'Watch Retailer'+'Selling watches and setting up watch cases'))
console.log(displayPosition('*Appletone'+'Paraprofessional'+'Assisting children with special needs'))
console.log('My Skills:')
displaySkills('Gaming', true)
displaySkills('Drawing', true)
displaySkills('Trombone')
displaySkills('Singing')
displaySkills('painting',true)
console.log("````````````````````````````")
console.log('P.S. one of these I tooke a class to learn')