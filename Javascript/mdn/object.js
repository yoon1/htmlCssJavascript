function Person(first, last) {
    this.first = first;
    this.last = last;
}
Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
};

Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase()
};

var s = new Person("Simon", "Willison");
console.log(s.firstNameCaps());

Person.prototype.firstNameCaps = function() {
    return this.last.toUpperCase()
};

console.log(s.firstNameCaps());