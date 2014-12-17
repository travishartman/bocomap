// define width and heigth- 
var width = 960,
    height = 900;

// define SVG to place things into
var svg = d3.select(".chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

var thedata;

// Missouri state auditor:
var ts = "Tom Schweich"
var st = "Sean O'Toole "
var rf = "Rodney Farthing"
a_audit = 
["Tom Schweich","Sean O'Toole ","Rodney Farthing"]
// US Rep District 4
var ni = "Nate Irvin "
var vh = "Vicky Hartzler "
var hy = "Herschel Young "
a_usrep4 =["Nate Irvin ","Vicky Hartzler ","Herschel Young "]
// State Rep - 44th
var tp = "Thomas Pauley "
var cr = "Caleb Rowden "
a_strep44 = ["Thomas Pauley ","Caleb Rowden "]
// State Rep - 47th
var jw = "John Wright "
var cb = "Charles (Chuck) Basye "
a_strep47 = ["John Wright ","Charles (Chuck) Basye "]
// Judicial Circuit 13, Division 5
var ks = "Kimberly Shaw "
var mw = "Michael R. Whitworth"
a_jcirc13 = ["Kimberly Shaw ","Michael R. Whitworth"]
// Presiding Commissioner
var da = "Daniel K. Atwill "
var jp = "James B. Pounds "
a_commish = ["Daniel K. Atwill ","James B. Pounds "]
// Recorder of Deeds
var nd = "Nora Dietzel "
var lb = "Lisa Ballenger "
a_deeds = ["Nora Dietzel ","Lisa Ballenger "]
// Collector of Revenue
var bm = "Brian C. McCollum"
var cr = "Cheri Toalson Reisch "
a_revenue = ["Brian C. McCollum","Cheri Toalson Reisch "]

 var id = {"Tom Schweich":01,"Sean O'Toole ":02,"Rodney Farthing":03,"Nate Irvin ":04,"Vicky Hartzler ":05,"Herschel Young ":06,"Thomas Pauley ":07,"Caleb Rowden ":08,"John Wright ":09,"Charles (Chuck) Basye ":10,"Kimberly Shaw ":11,"Michael R. Whitworth":12,"Daniel K. Atwill ":13,"James B. Pounds ":14,"Nora Dietzel ":15,"Lisa Ballenger ":16,"Brian C. McCollum":17,"Cheri Toalson Reisch ":18}

 var a_races =[

            a_audit,
            a_usrep4, 
            a_strep44,
            a_strep47,
            a_jcirc13,
            a_commish,
            a_deeds,
            a_revenue

 ];

 var races = 
        {
            audit: {}, 
            usrep4: {}, 
            strep44:{}, 
            strep47: {}, 
            jcirc13: {}, 
            commish: {}, 
            deeds: {}, 
            revenue: {}
        };

// document ready onload
$(document).ready(function() {
    // run the get data function
    getData();

});

// the get data function
function getData() {


// ***************************
// sort the data
// ***************************

d3.json('data/data.json', function(data) {
thedata = data;


// (new try)

// new array for all data
newdata = {};
results = {};
districts = {};

candidates                     =     {};
pollPlace = {}; //keep outside loop
travis = {};
// set dual level object at race level, 
racelevel = {districts:pollPlace, candidates: travis}

 
                var names                         =     {};
                var candid                        =     {};
                var votes                         =     {};

for (race in races) 
    {   // {console.log(race)
        for (x in thedata)    
            { 
                 var pp = thedata[x].polling_place;              
                 pollPlace[pp] = {};
                races[race] = racelevel;
            } // close x loop for poll place

                // iterate through a_races group array
              

           // only gets very last name of whole list in each candidates
           // candidates[a_races[group][name]] = {};


// console.log("*****************")



                // audit["results"] = 
                // audit[name][ts]["votes"]       =   thedata[x][ts];
                // audit["name"]              =     st   
                // audit.candidate2["votes2"]         =   thedata[x][st];
                // audit[rf]                         =   thedata[x][rf];
                // var usrep4  =   {};
                // usrep4[ni]  =   thedata[x][ni];
                // usrep4[vh]  =   thedata[x][vh];
                // usrep4[hy]  =   thedata[x][hy];
                // var strep44 =   {};
                // strep44[tp] =   thedata[x][tp];
                // strep44[cr] =   thedata[x][cr];
                // var strep47 =   {};
                // strep47[jw] =   thedata[x][jw];
                // strep47[cb] =   thedata[x][cb];
                // var jcirc13 =   {};
                // jcirc13[ks] =   thedata[x][ks]
                // jcirc13[mw] =   thedata[x][mw]
                // var commish =   {};
                // commish[da] =   thedata[x][da];
                // commish[jp] =   thedata[x][jp];
                // var deeds   =   {};
                // deeds[nd]   =   thedata[x][nd];
                // deeds[lb]   =   thedata[x][lb];
                // var revenue =   {};
                // revenue[bm] =   thedata[x][bm];
                // revenue[cr] =   thedata[x][cr];

  for (group in a_races)
                    {
                        // console.log(a_races)
                       // iterate through names in group - (name = number in array position of names in a_races[group])
                        for (name in a_races[group]) {

                            

                            // console.log(a_races[group][name])
                            // console.log(group[name])
                            // console.log(group)
                            // returns just position of name in array - goes through entire group of races
                            // console.log(name)
                            // returns arrays of names in gorup + undefined = due to bracket position
                            // console.log(a_races[group[name]])
                            // returns just names
                            // console.log(a_races[group][name])
                            // test = {};
                            // var travis = {};
                            var travis = a_races[group][name];
                            console.log(travis) 
                            // travis[a_races[group[name]]] = "test" + [group]
                            // console.log(travis)
                            // console.log(test  + " group: " + [group] + " name: " + [name])
                            // console.log(race2 +  race)
                            

                            // gets entire list in each candidates
                            // candidates[a_races[group][name]] = {};

                        } //end name loop

                        // travis[]
                        
                        console.log("******")
                            // console.log(a_races[group)
                            // test = a_races[group] 
//                              ["Tom Schweich", "Sean O'Toole ", "Rodney Farthing"]
  //                            ["Nate Irvin ", "Vicky Hartzler ", "Herschel Young "]
//                              ["Thomas Pauley ", "Caleb Rowden "]
//                              ["John Wright ", "Charles (Chuck) Basye "]
//                              ["Kimberly Shaw ", "Michael R. Whitworth"]
//                              ["Daniel K. Atwill ", "James B. Pounds "]
//                              ["Nora Dietzel ", "Lisa Ballenger "]
//                              ["Brian C. McCollum", "Cheri Toalson Reisch "]

                            // console.log(group[name])

                            // console.log(group)

                        // only get last of each group into "candidates"
                        // candidates[a_races[group][name]] = {};
                        // candidates[test] = {}

           } // end race group loop


    } // close first race loop




//         // set races object - set key and values-  values refer to the objects set above.
//         var races = 
//         {
//             audit: audit, 
//             usrep4: usrep4, 
//             strep44:strep44, 
//             strep47: strep47, 
//             jcirc13: jcirc13, 
//             commish: commish, 
//             deeds: deeds, 
//             revenue: revenue
//         };


        //     var races = 
        // [
        //     audit,
        //     usrep4, 
        //     strep44,
        //     strep47, 
        //     jcirc13, 
        //     commish,
        //     deeds,
        //     revenue, 
        // ];


        // set "races" variable to the pollplace
        // pollPlace[thedata[x].polling_place] = races;
        // push poll place into newdata
        // newdata.push(pollPlace);   //for arrays
        // newdata[thedata[x].polling_place] = races; 
        // newdata[races] = 
        // console.log(races)

    // } //close x iterating loop

//new thought to sovle many other problems-
// each individual part of the data i'll want to access is it's own key value pair
//probably need to srot out the party as well at some point

    // sort each race by something like this:[1A
    //                                         [audit
    //                                             [
    //                                             {candidate: candidate1, votes: 500},
    //                                             {candidate: candidate2, votes: 456},
    //                                             {candidate: candidate3, votes: 126}
    //                                             ]
    //                                         ]
    //                                         [usrep47
    //                                             [   
    //                                             {candidate: candidate1, votes: 500},
    //                                             {candidate: candidate2, votes: 456},
    //                                             {candidate: candidate3, votes: 126}
    //                                             ]
    //                                         ]

    //                                         ]

    //                                         ]








// ***************************
// color the precincts
// ***************************



// newdata[45]["4I"]["audit"] = the candidates in audit.
// for each button, loop through each race and color map.  
// start with auditor

// need to find highest number of votes in each race in each district
// d3.max
// log candidae into winner variable
// then, add all votes, divide by winner's votes to get percentage
// log percentage into winner varaible.


// *****************************
// match data to map
// *****************************


// for (objnum in newdata)
//     {
//         var dist = Object.keys(newdata[objnum])
//         for (race in newdata[objnum])
//             {
//                 for (cand in newdata[objnum][dist].audit)
//                     {
//                     candidate = newdata[objnum][dist]["audit"][cand]
//                     // console.log(dist)
//                     // console.log(cand)
//                     console.log(candidate)

//                     var winner  =   {candidate: "", percentage:0};
//                     if (newdata[objnum][dist]["audit"][ts]>newdata[objnum][dist]["audit"][st] && newdata[objnum][dist]["audit"][ts]>newdata[objnum][dist]["audit"][rf])
//                     {
//                         winner.candidate = Object.getOwnPropertyNames(newdata[objnum][dist]["audit"][ts]);
//                     } else if  (newdata[objnum][dist]["audit"][st]>newdata[objnum][dist]["audit"][rf])
//                     {
//                        winner.candidate = Object.getOwnPropertyNames(newdata[objnum][dist]["audit"][st]); 
//                     } else {
//                         winner.candidate = Object.getOwnPropertyNames(newdata[objnum][dist]["audit"][rf]); 
//                     }


//                         console.log(winner)
                    
                    
//                     }

//             }
//     }

// *****************************
// match data to map
// *****************************

    //     // create loop to find info in data. objnum is var.  newdata is data. loop finds all object numbers in data
    //     for (var objnum in newdata) 
    //         {
    //             // set up variable to find keys of objects (District ids)
    //             var dist = Object.keys(newdata[objnum])
    //             // candidate name variable (excepting the initials)
    //              candidate = newdata[objnum][dist];
    //             // selects the paths that have the id of the district
    //             el = d3.select('path#dist'+dist);
    //             // set new variable test, that has percentages and votes to feed more data into it later.
    //             var race = {percentage: 0, votes: 0};

    //             // console.log(newdata[objnum][dist])
    //             for (candName in newdata[objnum][dist]) 
    //             {
    //                 if (newdata[objnum][dist][ts] > newdata[objnum][dist][st]) 
    //                 {
    //                 race = {percentage: candidate[ts]/ (candidate[ts] + candidate[st]), votes: "testing"};
    //                     console.log(race.percentage*100)

    //                     } //close if statement
    // // console.log(candName)
    //             } //close inner for loop to find winner
    // // console.log(race.percentage)
    // el.attr('class', ts + " " +(race.percentage)*100)
    // console.log(race)

            // } //close outer for loop



        
// *****************************
// exmaple from eleciton map
// *****************************


  //  audit: function (data)
  //  {
  //     for (var fips in data.county_results) 
  //     {
  //       var fipsInfo = data.county_results[fips],
  //       el = d3.select('path#fips'+fips);
  //       var max = {candidate: "", votes: 0};
  //         for (candidateId in fipsInfo.candidates)
  //         {
  //         if (fipsInfo.candidates[candidateId].yes_votes > max.votes) 
  //             {
  //             max = {candidate: candidateId, votes: fipsInfo.candidates[candidateId].yes_votes };
  //             }    
  //         } //close inner nested for/if loop

  // el.attr('class', 'county _' + max.candidate);

  //     } //close outer for loop


  // }, //close function

//create array of polling places (outside of loop!)
// var polling_place = [];
// // loop through to create array of polling places
// for (x=1; x<thedata.length; x++) {
// polling_place.push(thedata[x].polling_place);
// } 

// console.log(polling_place);

// match polling place array to thedata
// candidates = [];
// if (thedata[1].polling_place == polling_place[0]) {
//     candidates.push(thedata[x]);
// }
    

}); //close data callback



} //close getData



// **************** 
// set map
// ***************

d3.json("data/bocomap_topo_new.json", function(bocomap99) {
    // if (error) return console.error(error);

    // console.log(bocomap99)

     svg.append("path")
      .datum(topojson.feature(bocomap99, bocomap99.objects.bocomap99));
      // .attr("d", d3.geo.path().projection(d3.geo.mercator()));

      var boco = topojson.feature(bocomap99, bocomap99.objects.bocomap99);
// var for projection also a headache-
// apparently the center is i don't know what, and the rotate is the lat/.long (it's set to the middle of the state) and the scale is fitting of the page or at least the size.  the translate is supposed to set it in the middle of the apge, but i'm not sure of that really works.  
// var projection = d3.geo.mercator()
//     .center([0, 0])
//     // lat long - geogrpahic center of missouri
//     .rotate([92.379, -38.297])
//     // .parallels([30, 40])
//     .scale(20000)
//     .translate([width / 2, height / 2]);
var projection = d3.geo.albers()
    .center([-1.5, 38.9])
    // lat long - geogrpahic center of missouri - rotate the GLOBE
    .rotate([91.3, 0, .75])
    .parallels([29.5, 25])
    .scale(73000)
    .translate([width / 2, height / 2]);

// var projection = d3.geo.mercator()
//     .scale(250)
//     .translate([width / 2, height / 2]);
    

    // this path sets the geo path and then the projection to the varialble, so away we go.
var path = d3.geo.path()
    .projection(projection);

// appends the path to the svg, and the subunits to the path as well i think
    svg.append("path")
    .datum(boco)
    .attr("d", path);

    svg.selectAll(".boco")
    .data(topojson.feature(bocomap99, bocomap99.objects.bocomap99).features)
  .enter().append("path")
    .attr("class", function(d) { return "boco"})
    .attr("id", function(d) {return "dist" + d.properties.VOTING_DIS;})
    .attr("d", path);

 svg.append("path")
    .datum(topojson.mesh(bocomap99, bocomap99.objects.bocomap99, function(a, b) { return a !== b}))
    .attr("d", path)
    .attr("class", "bocomap-edges");




});




        

