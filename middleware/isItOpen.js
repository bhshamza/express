const isItOpen = (req,res,next) => {
    console.log("available during working hours (Monday to Friday,  from 9 to 17)");
    let isopen=false;
    let d = new Date();
    let hr = d.getHours();
    let n = d.getDay();
    ((n>0&&n<6)&&(hr>8&&hr<18))?isopen=true:console.log("we're closed");
    req.isItOpen = [d.getDay(),d.getHours(),isopen];

   
    next();
};
module.exports= isItOpen;