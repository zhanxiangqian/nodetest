var fortuneCookies = [
    'A',
    "B",
    "C",
    "D"
];

exports.getFortune = function()
{
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
}