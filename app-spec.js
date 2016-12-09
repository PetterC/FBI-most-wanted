//example
/*describe('function addSixTo', function(){
  it('add 6 to 2', function() {
    expect(addSixTo(2)).toEqual(8);
  });
});*/


//test 1
describe('function getPersonInfo', function(){
  it('confirm index 1 is Billy Bob', function(){
    expect(getPersonInfo("Billy","Bob")).toEqual[({ Id: 1, firstName: 'Billy', lastName: 'Bob', gender: 'male', dob: '1/18/1949', height: 71, weight: 175, eyeColor: 'brown', occupation: 'programmer', parents: [  ], currentSpouse: 2 })];
  });
});
//test 2
describe('function getPersonInfo', function(){
  it('confirm index 2 is Uma Bob', function () {
    expect(getPersonInfo("Uma","Bob")).toEqual[({ Id: 2, firstName: 'Uma', lastName: 'Bob', gender: 'female', dob: '4/1/1947', height: 65, weight: 162, eyeColor: 'brown', occupation: 'assistant', parents: [  ], currentSpouse: 1 })];
  });
});
//test 3
describe('function getPersonInfo', function(){
  it('confirm index 3 is Michael Walkens', function () {
    expect(getPersonInfo("Michael","Walkens")).toEqual[({ Id: 3, firstName: 'Michael', lastName: 'Walkens', gender: 'male', dob: '5/9/1951', height: 76, weight: 250, eyeColor: 'brown', occupation: 'landscaper', parents: [  ], currentSpouse: 4 })];
  });
});
//test 4
describe('function getPersonInfo', function(){
  it('confirm index 4 is Jon Walkens', function () {
    expect(getPersonInfo("Jon","Walkens")).toEqual[({ Id: 4, firstName: 'Jon', lastName: 'Walkens', gender: 'male', dob: '9/6/1945', height: 62, weight: 115, eyeColor: 'brown', occupation: 'assistant', parents: [  ], currentSpouse: 3 })];
  });
});
//test 5
describe('function getPersonInfo', function(){
  it('confirm index 5 is Jack Pafoy', function () {
    expect(getPersonInfo("Jack","Pafoy")).toEqual[({ Id: 5, firstName: 'Jack', lastName: 'Pafoy', gender: 'male', dob: '3/16/1938', height: 70, weight: 207, eyeColor: 'black', occupation: 'nurse', parents: [  ], currentSpouse: 6 })];
  });
});
//test 6
describe('function getPersonInfo', function(){
  it('confirm index 6 is Jen Pafoy', function () {
    expect(getPersonInfo("Jen","Pafoy")).toEqual[({ Id: 6, firstName: 'Jen', lastName: 'Pafoy', gender: 'female', dob: '4/10/1940', height: 72, weight: 256, eyeColor: 'black', occupation: 'student', parents: [  ], currentSpouse: 5 })];
  });
});
//test 7
describe('function getPersonInfo', function(){
  it('confirm index 7 is Mister Potatoo', function () {
    expect(getPersonInfo("Mister","Potatoo")).toEqual[({ Id: 7, firstName: 'Mister', lastName: 'Potatoo', gender: 'male', dob: '12/18/1952', height: 66, weight: 170, eyeColor: 'hazel', occupation: 'architect', parents: [  ], currentSpouse: 8 })];
  });
});

//test 8 Error
describe('function getPersonInfo', function(){
  it('confirm index 8 is Missuz Potatoo', function () {
    expect(getPersonInfo("Missuz","Potatoo")).toEqual[({ Id: 8, firstName: 'Missuz', lastName: 'Potatoo', gender: 'female', dob: '10/28/1948', height: 59, weight: 137, eyeColor: 'blue', occupation: 'architect', parents: [  ], currentSpouse: 7 })];
  });
});
//test 9
describe('function getPersonInfo', function(){
  it('confirm index 8 is Joy Madden', function () {
    expect(getPersonInfo("Joy","Madden")).toEqual[({ Id: 9, firstName: 'Joy', lastName: 'Madden', gender: 'female', dob: '4/20/1939', height: 69, weight: 199, eyeColor: 'hazel', occupation: 'doctor', parents: [  ], currentSpouse: null })];
  });
});
//test 10
describe('function getPersonInfo', function(){
  it('confirm index 9 is Mader Madden', function () {
    expect(getPersonInfo("Mader","Madden")).toEqual[({ Id: 10, firstName: 'Mader', lastName: 'Madden', gender: 'male', dob: '5/6/1937', height: 76, weight: 205, eyeColor: 'black', occupation: 'landscaper', parents: [  ], currentSpouse: null })];
  });
});
//test 11
describe('function getPersonInfo', function(){
  it('confirm index 10 is Jill Pafoy', function () {
    expect(getPersonInfo("Jill","Pafoy")).toEqual[({ Id: 11, firstName: 'Jill', lastName: 'Pafoy', gender: 'female', dob: '2/8/1972', height: 74, weight: 118, eyeColor: 'brown', occupation: 'programmer', parents: [  ], currentSpouse: null })];
  });
});
//test 12
describe('function getPersonInfo', function(){
  it('confirm index 11 is Ralph Bob', function () {
    expect(getPersonInfo("Ralph","Bob")).toEqual[({ Id: 12, firstName: 'Ralph', lastName: 'Bob', gender: 'male', dob: '12/23/1969', height: 66, weight: 179, eyeColor: 'blue', occupation: 'nurse', parents: [ 2,1 ], currentSpouse: 13 })];
  });
});
//test 13
describe('function getPersonInfo', function(){
  it('confirm index 13 is Jasmine Bob', function () {
    expect(getPersonInfo("Jasmine","Bob")).toEqual[({ Id: 13, firstName: 'Jasmine', lastName: 'Bob', gender: 'female', dob: '12/18/1969', height: 58, weight: 156, eyeColor: 'blue', occupation: 'assistant', parents: [ 4,3 ], currentSpouse: 12 })];
  });
});
//test 14
describe('function getPersonInfo', function(){
  it('confirm index 14 is Annie Pafoy', function () {
    expect(getPersonInfo("Annie","Pafoy")).toEqual[({ Id: 14, firstName: 'Annie', lastName: 'Pafoy', gender: 'female', dob: '11/4/1970', height: 62, weight: 235, eyeColor: 'hazel', occupation: 'landscaper', parents: [ 5.6 ], currentSpouse: null })];
  });
});
//test 15
describe('function getPersonInfo', function(){
  it('confirm index 15 is Dave Pafoy', function () {
    expect(getPersonInfo("Dave","Pafoy")).toEqual[({ Id: 15, firstName: 'Dave', lastName: 'Pafoy', gender: 'male', dob: '8/5/1967', height: 61, weight: 112, eyeColor: 'green', occupation: 'doctor', parents: [ 5,6 ], currentSpouse: 11 })];
  });
});
//test 16
describe('function getPersonInfo', function(){
  it('confirm index 16 is Amii Pafoy', function () {
    expect(getPersonInfo("Amii","Pafoy")).toEqual[({ Id: 16, firstName: 'Amii', lastName: 'Pafoy', gender: 'female', dob: '3/13/1963', height: 74, weight: 184, eyeColor: 'brown', occupation: 'landscaper', parents: [ 5,6 ], currentSpouse: null })];
  });
});
//test 17
describe('function getPersonInfo', function(){
  it('confirm index 17 is Regina Madden', function () {
    expect(getPersonInfo("Regina","Madden")).toEqual[({ Id: 17, firstName: 'Regina', lastName: 'Madden', gender: 'female', dob: '7/26/1959', height: 71, weight: 249, eyeColor: 'brown', occupation: 'nurse', parents: [ 9,10 ], currentSpouse: null })];
  });
});
//test 18
describe('function getPersonInfo', function(){
  it('confirm index 18 is Hana Madden', function () {
    expect(getPersonInfo("Hana","Madden")).toEqual[({ Id: 18, firstName: 'Hana', lastName: 'Madden', gender: 'female', dob: '10/7/1953', height: 70, weight: 187, eyeColor: 'brown', occupation: 'politician', parents: [ 9,10 ], currentSpouse: null })];
  });
});
//test 19
describe('function getPersonInfo', function(){
  it('confirm index 19 is Eloise Madden', function () {
    expect(getPersonInfo("Eloise","Madden")).toEqual[({ Id: 19, firstName: 'Eloise', lastName: 'Madden', gender: 'female', dob: '12/11/1961', height: 63, weight: 241, eyeColor: 'brown', occupation: 'assistant', parents: [ 9,10 ], currentSpouse: null })];
  });
});
//test 20
describe('function getPersonInfo', function(){
  it('confirm index 20 is Mattias Madden', function () {
    expect(getPersonInfo("Mattias","Madden")).toEqual[({ Id: 20, firstName: 'Mattias', lastName: 'Madden', gender: 'male', dob: '2/19/1966', height: 70, weight: 110, eyeColor: 'blue', occupation: 'assistant', parents: [ 9,10 ], currentSpouse: 21 })];
  });
});
