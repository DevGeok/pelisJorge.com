module.exports = {

catchAsync : (controller) => {
    return (req, res, next2) => {
        controller(req,res).catch((err)=>next2(err));
    }
   },
};