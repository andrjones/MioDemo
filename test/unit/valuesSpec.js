'use strict';

describe('values', function() {

    // load the module that contains the service under test
    beforeEach(module('mioDemoApp'));

    it('getLanguages should return an empty array when no language matches the pattern',
        inject(function(supportedLanguages3) {
            var pattern = "xyz";
            var result = supportedLanguages3.findLanguage(pattern);
            expect(result.length).toBe(0);
    }));

    it('getLanguages should return an array with one language when exactly one language matches the pattern',
        inject(function(supportedLanguages3) {
            var pattern = "^P.+";
            var expected = [ {id: 3, name: 'Perl'} ];
            var result = supportedLanguages3.findLanguage(pattern);
            expect(result.length).toBe(1);
            for(var i = 0; i < result.length; i++) {
                expect(result[i]).toEqual(expected[i]);
            }
        }));

    it('getLanguages should return an array of languages when multiple languages matches the pattern',
        inject(function(supportedLanguages3) {
            var pattern = "^Ja.+";
            var expected = [ {id: 0, name: 'JavaScript'}, {id: 2, name: 'Java'}];
            var result = supportedLanguages3.findLanguage(pattern);
            expect(result.length).toBe(2);
            for(var i = 0; i < result.length; i++) {
                expect(result[i]).toEqual(expected[i]);
            }
     }));
});
