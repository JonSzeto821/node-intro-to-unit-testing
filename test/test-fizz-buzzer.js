// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  //create a test case for each returned value
  // test for 'fizz-buzz'
  it('should return "fizz-buzz" for multiples of 15', function() {
    [15, 150, 60].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });

  // test for 'buzz'
  it('should return "buzz" for multiples of 5', function() {
    [5, 50, 55].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz');
    });
  });

  // test for 'fizz'
  it('should return "fizz" for multiples of 3', function() {
    [3, 6, 9].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz');
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0], input[1]);
      }).to.throw(Error);
    });
  });
});