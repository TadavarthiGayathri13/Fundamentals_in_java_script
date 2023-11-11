function CalculateBodyMassIndex( weight,height1,height2)
{
    let BodyMassIndex = (weight / height1 * height2);
    return BodyMassIndex;
}
 let weight = 500;
 let height1 =  20;
 let height2 = 20;
 

 let index = CalculateBodyMassIndex( weight,height1,height2);
 console.log(index);

