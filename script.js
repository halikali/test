const googleDatabase = [
    "cats.com",
    "souprecipes.com",
    "flowers.com",
    "animals.com",
    "myfavoruitescats.com",
];

const googleSearch = (searchInput) => {
    const matches = googleDatabase.filter((website) => {
        return website.includes(searchInput);
    });

    return matches.length > 3 ? matches.slice(0, 3) : matches;

};

// console.log(googleSearch("cats.com"));

module.exports = googleSearch;