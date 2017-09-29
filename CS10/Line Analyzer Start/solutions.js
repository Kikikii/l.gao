// LINE ANALYZER ASSIGNMENT SOLUTIONS
function initGlobals() {
    // These global pt variables may be used in your solutions.
    pt1 = {
        x: -5,
        y: -5
    };
    pt2 = {
        x: 5,
        y: 5
    };
    pt3 = {
        x: 0,
        y: -5
    };
    pt4 = {
        x: 10,
        y: 5
    };
}

function q1Distance() {
    // This function will execute when the #1 key is pressed.
    console.log("DISTANCE");
    var dist12 = distance(pt1, pt2);
    var dist34 = distance(pt3, pt4);
    console.log("The distance between Point 1 and Point 2 is " + round(dist12));
    console.log("The distance between Point 3 and Point 4 is " + round(dist34));
    console.log("Total length of both lines is " + round(dist12 + dist34));

}

function q2Slope() {
    // This function will execute when the #2 key is pressed.
    console.log("SLOPE");
    var slope12 = slope(pt1, pt2);
    var slope34 = slope(pt3, pt4);
    var compare = compareSlope(slope12, slope34);
    console.log("Slope of line 1 is " + slope12);
    console.log("Slope of line 2 is " + slope34);
    console.log("Line " + compareSlope(slope12, slope34) + " is the steepest line.")
}

function q3PointLocation() {
    // This function will execute when the #3 key is pressed.
    console.log("POINT LOCATION");
    var pl1 = loca(pt1);
    var pl2 = loca(pt2);
    var pl3 = loca(pt3);
    var pl4 = loca(pt4);
    console.log("Point 1:" + pl1);
    console.log("Point 2:" + pl2);
    console.log("Point 3:" + pl3);
    console.log("Point 4:" + pl4);
}

function q4Midpoint() {
    // This function will execute when the #4 key is pressed.
    console.log("MIDPOINT");
    var mp12 = midp(pt1, pt2);
    var mp34 = midp(pt3, pt4);
    var mmp12 = mmidp(pt1, pt2);
    var mmp34 = mmidp(pt3, pt4);
    console.log("Midpoint of line 1 is " + mp12);
    console.log("Midpoint of line 2 is " + mp34);
    console.log("Line 1 Midpoints:" + mmidp(pt1, pt2));
    console.log("Line 2 Midpoints:" + mmidp(pt3, pt4));
}

function q5Equation() {
    // This function will execute when the #5 key is pressed.
    console.log("EQUATION");
    var equa12 = equation(pt1, pt2);
    var equa34 = equation(pt3, pt4);
    console.log("Equation of Line 1: " + equa12);
    console.log("Equation of Line 2: " + equa34);
}









// ***** DEFINE YOUR CALCULATION FUNCTIONS BELOW... *****
function distance(ptA, ptB) {
    var distanc = sqrt(sq(ptA.x - ptB.x) + sq(ptA.y - ptB.y));
    return distanc;
}

//Slope
function slope(ptA, ptB) {
    if (ptA.x > ptB.x) {
        var slope = ((ptA.y - ptB.y) / (ptA.x - ptB.x))
    } else {
        var slope = ((ptA.y - ptB.y) / (ptA.x - ptB.x))
    }
    return slope;
}

function compareSlope(slopeAB, slopeCD) {
    if (abs(slopeAB) > abs(slopeCD)) {
        return 1;
    } else {
        return 2;
    }
}

//Point Location
function loca(ptA) {
    if (ptA.x == 0 & ptA.y == 0) {
        return origin;
    }

    if (ptA.x == 0) {
        return "y-axis";
    }

    if (ptA.y == 0) {
        return "x-axis";
    }

    if (ptA.x > 0) {
        if (ptA.y > 0) {
            return "Quadrant 1";
        } else if (ptA.y < 0) {
            return "Quadrant 4";
        }
    } else if (ptA.x < 0) {
        if (ptA.y > 0) {
            return "Quadrant 2";
        } else if (ptA.y < 0) {
            return "Quadrant 3";
        }
    }
}

//Midpoint
function midp(ptA, ptB) {
    var midpx = (ptA.x + ptB.x) / 2;
    var midpy = (ptA.y + ptB.y) / 2;
    var retStr = "(" + midpx + "," + midpy + ")";
    return retStr;
}

function mmidp(ptA, ptB) {
    var midpx1 = (ptA.x + ptB.x) / 4,
        midpx2 = (ptA.x + ptB.x) / 2,
        midpx3 = (ptA.x + ptB.x) / 4 * 3,
        midpy1 = (ptA.y + ptB.y) / 4,
        midpy2 = (ptA.y + ptB.y) / 2,
        midpy3 = (ptA.y + ptB.y) / 4 * 3;
    var retStr = "(" + midpx1 + "," + midpy1 + ") " + "(" + midpx2 + "," + midpy2 + ") " + "(" + midpx3 + "," + midpy3 + ") ";
    return retStr;
}

function equation(ptA, ptB) {
    if (ptA.x > ptB.x) {
        var slope = ((ptA.y - ptB.y) / (ptA.x - ptB.x))
    } else {
        var slope = ((ptA.y - ptB.y) / (ptA.x - ptB.x))
    };
    var b= ptA.y - (slope * ptA.x);
    if (b>=0){
        var retStr = "y="+round(slope)+"x+"+round(b);
    } else{
        var retStr = "y="+round(slope)+"x"+round(b);
    }
    return retStr;
}
