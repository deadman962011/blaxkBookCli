
const request = require('request')

module.exports.MainRoute = function(req,res,next){

    request.get('http://127.0.0.1:8000/api/BlaxkMain',{json: true},function(err,response,body){
        if(!err){
           
           
            var books=body.Books;
            var Catigories=body.Catigories;
            var Authors=body.Authors;


         
          res.render('MainView',{Books:books,Authors:Authors,Catigories:Catigories})

            
        }
    })
}


module.exports.BookOne = function(req,res,next){

    var bookId=req.params.bookId;

   request.get('http://127.0.0.1:8000/api/BlaxkOne/'+bookId,{json:true},function(err,respone,body){
    if(!err){

    var Book = body.Book;
    
    var Author = body.Author;
    var Catigory = body.Catigory;
    var Comment = body.Comment;
    var AuthorAll = body.AuthorAll;
    var CatigoryAll = body.CatigoryAll;
    var SameAuthor= body.SameAuthor;
    var SameCatigory = body.SameCatigory;
    
   
        res.render('BlaxkOne',{book:Book,catigory:Catigory,author:Author,Catigories:CatigoryAll,Authors:AuthorAll,SameAuthor:SameAuthor,SameCatigory:SameCatigory,Comments:Comment})

  

   
   
    }   

   })

}




module.exports.BookOnePost= function(req,res,next){
   
    
    var postData ={
        bookId:req.params.bookId,              
        reviewRate:req.body.ReviewRateI,
        reviewFullName:req.body.ReviewFullNameI,
        reviewEmail:req.body.ReviewEmailI,
        reviewDesc:req.body.ReviewDescI,
      }
  
  request.post('http://127.0.0.1:8000/api/BlaxkOne/'+req.params.bookId,{json:postData},function(err,response,body){
   res.redirect('./')
      
  })

}

module.exports.BookCatigoryGet = function(req,res,next){
       
    var CatigoryId = req.params.CatigoryId;
    request.get('http://127.0.0.1:8000/api/BlaxkCatigoryOne/'+CatigoryId,{json:true},function (err,response,body) {
        if(!err){
            console.log(body)
           res.render('CatigoryOne',{books:body});
        }
    })
}


module.exports.BookAuthorGet=function(req,res,next){

    var AuthorId = req.params.AuthorId;

    request.get('http://127.0.0.1:8000/api/BlaxkAuthorOne/'+AuthorId,{json:true},function (err,response,body) {
        if(!err){
            console.log(body)
           res.render('AuthorOne',{books:body});
        }
    })
}