const textFactory = require('../index');
describe('Login',function() {

    it("should respond with hello world", function(done) {
        const text = textFactory.makeText({name: 'luis'});    

        expect(text).toEqual("name: luis");
        done();
    });
});