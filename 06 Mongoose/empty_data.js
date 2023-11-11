const {userModel}=require('./server');



 const Deletedata=async()=>{

    let data=await userModel.deleteMany();
    console.log(data);


 }

 module.exports={Deletedata};