var csvString = `1984,Reynolds,Ryan,backend,female,34282.22
1989,Janis,Brooks,frontend,male,22567.22
1985,Lorena,Calhoun,fullstack,female,29587.81
1982,Rivas,Whitley,fullstack,female,33236.32
1982,Georgina,England,fullstack,female,32893.22
2000,Eunice,Munoz,fullstack,female,38174.89
1986,Harvey,Wooten,backend,female,21832.87
1985,Bell,Middleton,fullstack,female,31446.88
1993,Lily,Cole,frontend,male,38347.26
1997,Nixon,Bowen,frontend,female,29298.52
1994,Daphne,Nash,frontend,female,21932.61
1983,Moses,Christian,fullstack,male,24327.67
1998,Dana,Bradshaw,frontend,female,36588.24
1994,Theresa,Spence,fullstack,male,21949.83
1996,Courtney,Barrera,backend,female,30035.59
1983,Lara,Gilmore,backend,female,24640.71
1996,Katy,Henderson,backend,male,39997.78
1983,Vanessa,Mooney,fullstack,male,20092.59
1989,Nona,Grant,fullstack,male,28719.41
1997,Consuelo,Jimenez,frontend,female,38533.13
1995,Cristina,Gamble,fullstack,female,33189.94
1987,Sheri,Dennis,frontend,male,20079.18
1989,Jodie,Duffy,backend,female,22172.19
1986,Selena,Bird,backend,female,38605.65
2000,Graciela,Rowland,backend,male,37723.75
1983,Mccoy,Ellison,backend,female,38679.11
1999,Gay,Holman,frontend,male,22489.87
1999,Keisha,Acosta,frontend,female,21243.75
1983,May,Deleon,backend,female,35736.54
1987,Denise,Clayton,frontend,female,29197.04
1986,Ewing,Estes,backend,female,37747.57
1996,Nielsen,Evans,backend,female,26822.58
1984,Cantrell,Hood,backend,male,32615.01
1987,Melisa,Hernandez,backend,female,22335.62
1987,Page,Horne,frontend,male,24057.2
1982,Tran,Ellis,fullstack,male,24870.86
1983,Haley,Herrera,fullstack,male,28994.36
1981,Buckner,Doyle,frontend,female,36395.51
1990,Bryan,Strickland,fullstack,female,23000.69
1981,Padilla,Owens,fullstack,female,34166.56
1994,Deborah,Pennington,fullstack,female,20826.24
1992,Jordan,Justice,backend,female,25940.33
1993,Schultz,Chambers,backend,male,24201.35
1996,Petty,Park,fullstack,male,35788.56
1995,Catherine,Porter,frontend,male,20952.88
1981,Ramos,Goodman,fullstack,male,37985.51
1989,Lyons,Saunders,frontend,male,21332.85
1981,Snow,Dalton,fullstack,female,38644.84
1997,Wong,Pickett,fullstack,male,39741.57
1993,Malinda,Atkins,frontend,female,38036.27
1999,Ana,Dunlap,backend,male,35484.33
2000,Lawrence,Dean,frontend,male,37999.54
1988,Dina,Rogers,frontend,male,32582.69
1983,Bright,Finley,frontend,female,33434.67
2000,Kerri,Dunn,fullstack,female,20384.88
1990,Donaldson,Buckley,fullstack,male,25021.03
1988,Mcmahon,Monroe,frontend,male,28811.01
1990,Bobbi,Morrow,fullstack,male,25508.21
1990,Hazel,Good,backend,female,29152.05
1984,Torres,Weeks,backend,male,24808.17
1988,Santiago,Barker,backend,male,23695.07
1981,Jennie,Wiggins,frontend,male,26535.21
1988,Bianca,Rios,fullstack,male,24004.27
1995,Berger,Potts,fullstack,female,20852.32
1987,Clayton,Stein,fullstack,male,24811.8
1988,Duke,Scott,backend,female,27138.1
1985,Amanda,Shaw,frontend,female,28423.85
1993,Frank,Johns,frontend,male,26430.98
1983,Freeman,Dominguez,fullstack,female,24253.28
1994,Holly,Osborn,frontend,male,25406.08
1997,Angel,Foley,fullstack,female,30936.36
1989,Sue,Chase,backend,female,27414.11
1987,Rosalie,Patrick,fullstack,male,25507.51
1991,Gray,Stewart,backend,female,31028.23
1993,Estes,Mays,backend,male,24200.43
1994,Becky,Mckinney,frontend,female,31465.58
1985,Lara,Wolf,frontend,male,22143.21
1988,Conner,Carpenter,fullstack,female,38628.53
1987,Kemp,Noble,backend,female,22338.07
2000,Lee,Hopkins,frontend,female,35141.85
1996,Delia,Lewis,backend,female,30699.74
1994,Russo,Moody,frontend,female,27492.69
1992,Grimes,Johnson,backend,female,30349.33
1998,Vargas,Durham,backend,male,36684.29
1981,Hoffman,Carson,backend,male,28167.74
1996,Erin,Mcmillan,frontend,female,37952.08
1987,Mitzi,Chandler,backend,male,24479.89
1984,Erika,Joyce,backend,female,27600.22
1990,Sheila,Lyons,fullstack,male,36166.6
2000,Inez,Waller,fullstack,male,30334.77
1983,Karla,Weiss,frontend,male,30710.51
1986,Gilda,Donaldson,frontend,female,27051.23
1984,Shelly,Mcclain,frontend,female,37864.02
1998,Bradford,Jackson,backend,female,34949
1997,Mitchell,Bennett,frontend,female,39063.4
1982,Mary,Velez,backend,male,31300.76
1985,Gamble,Tucker,backend,female,38832.56
1986,Kerr,Cortez,frontend,male,25740.54
1989,Maude,Carlson,backend,male,20740.33
1986,Johanna,Frost,fullstack,female,39877.96`;

/**
 * Parses CSV string into array of lines/rows (each item is string)
 * 
 *  For example, the following string:
 * `
 * 1989,Maude,Carlson,backend,male,20740.33
 * 1986,Johanna,Frost,fullstack,female,39877.96
 * . . .
 * `
 * is returned as array:
 * [
 *     "1989,Maude,Carlson,backend,male,20740.33",
 *     "1986,Johanna,Frost,fullstack,female,39877.96",
 *     . . .
 * ]
 *
 * @param {string} csvString 
 * @returns {Array} Array of the CSV lines (as strings) 
 */
var parseCsvLines = function (csvString) {
    return csvString.split('\n');
}

/**
 * Parses CSV line into columns
 * 
 * For example, the following CSV lines (array):
 * [
 *     "1989,Maude,Carlson,backend,male,20740.33",
 *     "1986,Johanna,Frost,fullstack,female,39877.96",
 *     . . .
 * ]
 * 
 * is parsed into:
 * [
 *     ["1989", "Maude", "Carlson", "backend", "male", "20740.33"],
 *     ["1986", "Johanna", "Frost", "fullstack", "female", "39877.96"],
 *     . . .
 * ]
 *
 * @param {Array} csvLines 
 * @returns {Array} Array of arrays — each item (line) is parsed into array of columns
 */
var parseCsvColumns = function (csvLines) {
    return csvLines.map(function (line) {
        return line.split(',')
    });
}

/**
 * Parses CSV line into objects
 * 
 * For example, the following CSV lines (array):
 * [
 *     "1989,Maude,Carlson,backend,male,20740.33",
 *     "1986,Johanna,Frost,fullstack,female,39877.96",
 *     . . .
 * ]
 * 
 * is parsed into:
 * [
 *     {
 *         birthYear: 1989, 
 *         firstName: "Maude", 
 *         lastName: "Carlson",
 *         skill: "backend",
 *         gender: "male", 
 *         salary: 20740.33
 *     },
 *     . . .
 * ]
 *
 * @param {Array} csvLines 
 * @returns {Array} Array of objects — each item (line) is parsed into objects of columns
 */
var parseCsvLinesAsObjects = function (csvLines) {
    return csvLines.map(function (line) {
        var cols = line.split(',');
        
        return {
            birthYear: +cols[0],
            firstName: cols[1],
            lastName: cols[2],
            skill: cols[3],
            gender: cols[4],
            salary: +cols[5]
        };
    });    
}