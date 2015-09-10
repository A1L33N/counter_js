describe('counter', function() {
  it('will take two numbers and add multiples of the first number until the second is reached', function() {
    expect(counter(30, 5)).to.equal('5, 10, 15, 20, 25, 30');
  });

  it('will take two numbers and add multiples of the first number until the second is reached', function() {
    expect(counter(28, 4)).to.equal('4, 8, 12, 16, 20, 24, 28');
  });
});
