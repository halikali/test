const googleSearch = require("./script");

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
];


describe('googleSearch', () => {
    it('is a test', () => {
        expect('hello').toBe('hello');
    });
    
    it('is searching google', () => {
        expect(googleSearch(dbMock)).toEqual([]);
        expect(googleSearch('dog')).toEqual([]);
    });
    
    it('does not return more than 3 matches' , () => {
        expect(googleSearch(".com").length).toEqual(3)
    });
});