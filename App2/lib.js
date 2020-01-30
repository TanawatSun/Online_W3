function convertToRadians(degree)
{
    return Math.PI * 180 * degree;
}

module.exports.Radians = convertToRadians;

function DollarToTHBath(dollar)
{
    return dollar*30;
}

module.exports.DollarToBath = DollarToTHBath;

function WhatIsTheMostValue(num1, num2,num3)
{
    var max = Math.max.apply(Math,[num1,num2,num3] );
    return max;
}


module.exports.TheMostValue = WhatIsTheMostValue;
