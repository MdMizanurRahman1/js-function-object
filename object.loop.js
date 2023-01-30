var title = {
    name: 'mizan',
    job: 'tacobell',
    work: 'monthly',
    money: 1700,
    place: 'itis'
}
var keys = Object.keys(title);
console.log(keys);

var values = Object.values(title);
console.log(values);

for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = title[propertyName];
    console.log(propertyName, propertyValue)
}