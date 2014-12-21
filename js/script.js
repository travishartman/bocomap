// define width and heigth- 
var width = 960,
    height = 900;

// define SVG to place things into
var svg = d3.select(".chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

var thedata;
var theRaces = {};
var theCandidates = {};




// document ready onload
$(document).ready(function() {
    // run the get data function
    getData();
    setNav();
    // toolTip();


});



infoboxUpdate = {

  audit: function(d){

    // calls to div with ID  of infobox via jquery
    var infoBox = $('#infobox'),
    // deleted "fips" from the ID of the map
           dist = this.id.replace(/^dist/,''),
           // pulls the data from the currview dataset
           
           data = thedata;
           
console.log(dist)

           if (selector === "audit"){


        // preps the message:  sets the county text to a headline (and starts an unordered list)
        message = "this is a test";



  message += "this is another message";

  infoBox.html(message);


}
}
}
// the get data function
function getData() {


// ***************************
// sort the data
// ***************************

d3.json('data/data3.json', function(data) {
thedata = data;



//Create an empty object to test candidate names.

var theCandidates = {};
var mapcalc;
//Here's what that looks like populated:
var theCandidates = {
    // "polling_place": {},
    "Tom Schweich":"R",
    "Sean O'Toole ":"L",
    "Rodney Farthing":"C",
    "Nate Irvin ":"D",
    "Vicky Hartzler ":"R",
    "Herschel Young ":"L",
    "Thomas Pauley ":"D",
    "Caleb Rowden ":"R",
    "John Wright ":"D",
    "Charles (Chuck) Basye ":
    "R","Kimberly Shaw ":"D",
    "Michael R. Whitworth":"R",
    "Daniel K. Atwill ":"D",
    "James B. Pounds ":"R",
    "Nora Dietzel ":"D",
    "Lisa Ballenger ":"R",
    "Brian C. McCollum":"D",
    "Cheri Toalson Reisch ":"R"
};



//Empty object to hold our precincts
var thePrecincts = {};




//Pulled this from your script.js code.
//We'll use it to match names with races.
theRaces = {
    "audit"   : ["Tom Schweich","Sean O'Toole ","Rodney Farthing"],
    "usrep4"  : ["Nate Irvin ","Vicky Hartzler ","Herschel Young "],
    "strep44" : ["Thomas Pauley ","Caleb Rowden "],
    "strep47" : ["John Wright ","Charles (Chuck) Basye "],
    "jcirc13" : ["Kimberly Shaw ","Michael R. Whitworth"],
    "commish" : ["Daniel K. Atwill ","James B. Pounds "],
    "deeds"   : ["Nora Dietzel ","Lisa Ballenger "],
    "revenue" : ["Brian C. McCollum","Cheri Toalson Reisch "]
}

selector = "audit"

// need to make selctor = to value of button that




// var count = 0;
// var i;

// for (i in theRaces) {
//     if (theRaces.hasOwnProperty(i)) {
//         count++;
//     }
// }
// console.log(count)
//  for (a in theRaces) {console.log(a)}

// ***************************
// color the precincts
// ***************************



// thedata[45]["4I"]["audit"] = the candidates in audit.
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

 // $.each(thedata, function(i, racearray) {  
 //        $.each(racearray, function(ii, cand) {
 //            $.each(cand, function(iii, cand2) {
 //            console.log(cand2.party + cand2.cand + cand2.votes)
 //            })
 //         })
 //        // console.log(racearray)
 //    


// var mapcalc = {
//     audit: function (thedata)
//    {


       $.each(thedata, function(i, pollplace) { 
        // console.log(i)
        // console.log( "i = " + i + " " + "pollplace = " + pollplace)
            // $.each(pollplace, function(racename, racearray) {
                // console.log( "racename = " + racename + " " + "racearray = " + racearray)
        var district = thedata[i][selector];
        // console.log(racename + racearray)
        // console.log(district)
        
        el = d3.selectAll('path#dist'+[i]);
        var max = {candidate: "", votes: 0, party: "", percentage:0};
        var sum = 0;
          for (candidateId in district)

          { var candName = district[candidateId].cand
            var candVote = district[candidateId].votes
            var candParty   = district[candidateId].party
            // console.log("candidate " + candName + " " + candVote )
            sum = district[candidateId].votes + sum;

          if (district[candidateId].votes > max.votes) 
              {
              max = {candidate: district[candidateId].cand, votes: district[candidateId].votes, party: district[candidateId].party, percentage: district[candidateId].votes/sum};
              // console.log(candName)
              // console.log(district[candidateId].votes)
              // console.log("divided by")
              // console.log(sum)
              }    
              console.log(candName)
              console.log(sum)

          } //close inner nested for/if loop

      max.percentage = (max.votes/sum*100).toFixed(2);
          if (max.percentage >= 40 && max.percentage <= 45) { max.percentage = "forty-fortyfive"}
            else if (max.percentage >= 46 && max.percentage <= 50) { max.percentage = "fortysix-fifty"}
                else if (max.percentage >= 51 && max.percentage <= 55) { max.percentage = "fiftyone-fiftyfive"}
                    else if (max.percentage >= 56 && max.percentage <= 60) { max.percentage = "fiftysix-sixty"}
                        else if (max.percentage >= 61 && max.percentage <= 65) { max.percentage = "sixtyone-sixtyfive"}
                            else if (max.percentage >= 66 && max.percentage <= 70) { max.percentage = "sixtysix-seventy"}
                            else if (max.percentage >= 71 && max.percentage <= 75) { max.percentage = "seventyone-sevetnyfive"}
                                else if (max.percentage >= 76 && max.percentage <= 80) { max.percentage = "seventysix-eighty"}
                                    else if (max.percentage >= 81 && max.percentage <= 85) { max.percentage = "eightyone-eightfive"}
                                        else if (max.percentage >= 86 && max.percentage <= 90) { max.percentage = "eightysix-ninty"}

            el.attr('class', max.party + " " + max.candidate + " " + max.percentage);
//})

// message = "the winner of this place is " + max.candidate;

      }) //close outer for loop



  //} //close function

// }
// for (objnum in thedata)
//     {
//         var dist = Object.keys(thedata[objnum])
//         for (race in thedata[objnum])
//             {
//                 for (cand in thedata[objnum][dist].audit)
//                     {
//                     candidate = thedata[objnum][dist]["audit"][cand]
//                     // console.log(dist)
//                     // console.log(cand)
//                     console.log(candidate)

//                     var winner  =   {candidate: "", percentage:0};
//                     if (thedata[objnum][dist]["audit"][ts]>thedata[objnum][dist]["audit"][st] && thedata[objnum][dist]["audit"][ts]>thedata[objnum][dist]["audit"][rf])
//                     {
//                         winner.candidate = Object.getOwnPropertyNames(thedata[objnum][dist]["audit"][ts]);
//                     } else if  (thedata[objnum][dist]["audit"][st]>thedata[objnum][dist]["audit"][rf])
//                     {
//                        winner.candidate = Object.getOwnPropertyNames(thedata[objnum][dist]["audit"][st]); 
//                     } else {
//                         winner.candidate = Object.getOwnPropertyNames(thedata[objnum][dist]["audit"][rf]); 
//                     }


//                         console.log(winner)
                    
                    
//                     }

//             }
//     }

// *****************************
// match data to map
// *****************************

    //     // create loop to find info in data. objnum is var.  thedata is data. loop finds all object numbers in data
    //     for (var objnum in thedata) 
    //         {
    //             // set up variable to find keys of objects (District ids)
    //             var dist = Object.keys(thedata[objnum])
    //             // candidate name variable (excepting the initials)
    //              candidate = thedata[objnum][dist];
    //             // selects the paths that have the id of the district
    //             el = d3.select('path#dist'+dist);
    //             // set new variable test, that has percentages and votes to feed more data into it later.
    //             var race = {percentage: 0, votes: 0};

    //             // console.log(thedata[objnum][dist])
    //             for (candName in thedata[objnum][dist]) 
    //             {
    //                 if (thedata[objnum][dist][ts] > thedata[objnum][dist][st]) 
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



function update (){
console.log("test")
    $.each(thedata, function(i, pollplace) { 
        // console.log(i)
        // console.log( "i = " + i + " " + "pollplace = " + pollplace)
            // $.each(pollplace, function(racename, racearray) {
                // console.log( "racename = " + racename + " " + "racearray = " + racearray)
        var district = thedata[i][selector];
        // console.log(racename + racearray)
        // console.log(district)
        
        el = d3.selectAll('path#dist'+[i]);
        var max = {candidate: "", votes: 0, party: "", percentage:0};
        var sum = 0;
          for (candidateId in district)

          { var candName = district[candidateId].cand
            var candVote = district[candidateId].votes
            var candParty   = district[candidateId].party
            // console.log("candidate " + candName + " " + candVote )
            sum = district[candidateId].votes + sum;

                        // if (district[candidateId].votes = null)
          // if(max.votes = null) (console.log("bad bad bad"))


         if (district[candidateId].votes > max.votes) 
              {
              max = {candidate: district[candidateId].cand, votes: district[candidateId].votes, party: district[candidateId].party, percentage: district[candidateId].votes/sum};
              // console.log(candName)
              // console.log(district[candidateId].votes)
              // console.log("divided by")
              // console.log(sum)
               
              }    

          } //close inner nested for/if loop
          // if(max.party = NaN) (console.log("bad bad bad"));
          max.percentage = (max.votes/sum*100).toFixed(2);
          if (max.percentage >= 40 && max.percentage <= 45) { max.percentage = "forty-fortyfive"}
            else if (max.percentage >= 46 && max.percentage <= 50) { max.percentage = "fortysix-fifty"}
                else if (max.percentage >= 51 && max.percentage <= 55) { max.percentage = "fiftyone-fiftyfive"}
                    else if (max.percentage >= 56 && max.percentage <= 60) { max.percentage = "fiftysix-sixty"}
                        else if (max.percentage >= 61 && max.percentage <= 65) { max.percentage = "sixtyone-sixtyfive"}
                            else if (max.percentage >= 66 && max.percentage <= 70) { max.percentage = "sixtysix-seventy"}
                            else if (max.percentage >= 71 && max.percentage <= 75) { max.percentage = "seventyone-sevetnyfive"}
                                else if (max.percentage >= 76 && max.percentage <= 80) { max.percentage = "seventysix-eighty"}
                                    else if (max.percentage >= 81 && max.percentage <= 85) { max.percentage = "eightyone-eightfive"}
                                        else if (max.percentage >= 86 && max.percentage <= 90) { max.percentage = "eightysix-ninty"}

            el.attr('class', max.party + " " + max.candidate + " " + max.percentage);
            
            // console.log (max )
            // console.log(max.percentage)
//})


      })


}

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
    .scale(50000)
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
    .attr("d", path)
    // .on("mouseover",infoBoxUpdates[selector])
    // .on("mouseout",infoBoxUpdates.clear);

    

 svg.append("path")
    .datum(topojson.mesh(bocomap99, bocomap99.objects.bocomap99, function(a, b) { return a !== b}))
    .attr("d", path)
    .attr("class", "bocomap-edges");




});

function setNav () {


    $(".btn").on("click", function() {
        selector = $(this).attr("val");
        // console.log(selector)
    infoboxUpdate[selector];
    update();

    $(".btn.btn-default").removeClass("active");
    $(this).addClass("active");
})
}

        

