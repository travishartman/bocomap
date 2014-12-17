

//Create an empty object to test candidate names.
var theCandidates = {};

//Here's what that looks like populated:
// var theCandidates = {
//     "polling_place": {},
//     "Tom Schweich": {},
//     "Sean O'Toole ": {},
//     "Rodney Farthing": {},
//     "Nate Irvin ": {},
//     "Vicky Hartzler ": {},
//     "Herschel Young ": {},
//     "Thomas Pauley ": {},
//     "Caleb Rowden ": {},
//     "John Wright ": {},
//     "Charles (Chuck) Basye ": {},
//     "Kimberly Shaw ": {},
//     "Michael R. Whitworth": {},
//     "Daniel K. Atwill ": {},
//     "James B. Pounds ": {},
//     "Nora Dietzel ": {},
//     "Lisa Ballenger ": {},
//     "Brian C. McCollum": {},
//     "Cheri Toalson Reisch ": {}
// };



//Empty object to hold our precincts
var thePrecincts = {};




//Pulled this from your script.js code.
//We'll use it to match names with races.
var theRaces = {
    "audit" : ["Tom Schweich","Sean O'Toole ","Rodney Farthing"],
    "usrep4" :["Nate Irvin ","Vicky Hartzler ","Herschel Young "],
    "strep44" : ["Thomas Pauley ","Caleb Rowden "],
    "strep47" : ["John Wright ","Charles (Chuck) Basye"],
    "jcirc13" : ["Kimberly Shaw ","Michael R. Whitworth"],
    "commish" : ["Daniel K. Atwill ","James B. Pounds "],
    "deeds" : ["Nora Dietzel ","Lisa Ballenger "],
    "revenue" : ["Brian C. McCollum","Cheri Toalson Reisch "]
}











d3.json('data/data.json', function(data) {


    /* ------ First, validate the names ---------- */

    //We're making sure the names and spellings are consistent throughout the data.
    //I noticed trailing spaces, middle initials and (Chuck)...
    //We want to be sure the names aren't in there multiple ways
    //So we loop through the data. If theCandidates[name] doensn't exist, we create it.
    //If it does exist, we move on. 
    //The end result is that theCandidates contains our finine universe of names.
    //This has no bearing on the data building below. We just want to make sure our data is consistent.
    //Good news, it is!

    $.each(data, function(i, item) {
        if (!theCandidates[item]) {
            theCandidates[item] = {};
        }
    });







    /* ------ Now, build the data ---------- */

    // We'll nest several loops. Which is ugly, but fine.
    // Each object in our array is a precinct. So we'll create a new object for each item keyed off the precinct id.

    $.each(data, function(i, item) {

        //Here.
        thePrecincts[item.polling_place] = {};

        //Next we loop through our theRaces object, which gives us the candidates in each race
        //We're doing this bc the main data doesn't do it. It's just a list of names.
        //We need to know which group they belong to.
        $.each(theRaces, function(race, cands) {

            //The race in each precinct will be an array bc D3 will want it that way.
            //And bc we'd like to sort the candidates, most votes to least.
            thePrecincts[item.polling_place][race] = [];

            $.each(cands, function(ii, name) {

                //Now, we're getting into some real Inception bullshit.
                //The name is the candidate name, from our candidate name array nested in each race.
                //And the votes comes from our data. To find it, we want to look up the candidate in this precinct by name.
                //We do that by using the name as a key value within our parent item, named "item".
                //And just for good measure, we'll make that a number with the javaScript parseInt() method.

                var candObj = {
                    cand : name,
                    votes : parseInt(item[name])
                }

                //Finally, we push the candidate object into the race array for the current precinct.
                thePrecincts[item.polling_place][race].push(candObj);
            });

        });

        //... End of the loop, on to the next precinct.

    });

    



    //That was a lot of work. What if we don't want to do all of that each time the browser loads the page?
    //We could just save this out as a new json object. To do it, just convert the thePrecincts object to json...
    //...and send it to the console window. Then, cut and paste that into a new json file. Now you don't have to worry about it in your script.
    console.log(JSON.stringify(thePrecincts));


});