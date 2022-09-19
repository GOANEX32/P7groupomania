const PostModel = require('../models/post.model');
const UserModel = require('../models/user.model');
const ObjectId = require('mongoose').Types.ObjectId;
const fs = require('fs');
const {promisify} = require('util');
const { uploadErrors } = require('../utils/errors.utils');



module.exports.readPost = (req, res) => {
    PostModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log('Erorr to get data :' + err);
    }).sort({createAt: -1})//pour afficher du plus récent au plus ancien
    
}

module.exports.createPost = async (req, res) => {

    let fileName;
    console.log(req.body.file);

    if(req.file != null) {
        try {
            if(req.file.detectedMimeType !== "image/jpg" && 
            req.file.detectedMimeType !== "image/png" && 
            req.file.detectedMimeType !== "image/jpeg")
            throw Error("invalid file");
    
            if (req.file.size > 500000) throw Error("max size");
    
    
    
        } catch (err) {
            const errors = uploadErrors(err);
            return res.status(201).json({errors});
        }
    
    
        const fileName = req.body.posterId + Date.now() + '.jpg'
        


        await pipeline(
            req.file.stream,
            fs.createWriteStream(
                `${__dirname}/../client/public/uploads/posts/${fileName}`

            )// creation de ficher dans le dossier client pubic
        )
    
    }



    const newPost = new PostModel({
        posterId: req.body.posterId,
        message: req.body.message,
        picture : req.file != null ? "./uploads/posts" + fileName : "",
        video: req.body.video,
        likers: [],
        comments: [],
    });

    try {
        const post = await newPost.save();
        return res.status(201).send(post);
    } catch (error) {
        return res.status(400).send(error);
    }

}

module.exports.updatePost = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

     const updateRecord = {
        message: req.body.message,
     };
     PostModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord },
        { new: true },
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log('Erorr update :' + err);
        }
    )


   
}


module.exports.deletePost = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    PostModel.findOneAndRemove(
        req.params.id,
        (err, docs) => {  
            if(!err) res.send(docs);
            else console.log('Erorr delete :' + err);
        }
    )  



}

module.exports.likePost = async (req, res) => {
    
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {
                $addToSet : { likers : req.body.id }
            },
            { new: true },
            (err, docs) => {
                if(err) return res.status(400).send(err);
            }

        );
        await UserModel.findByIdAndUpdate(
            req.body.id,
            {
                $addToSet : { likes : req.params.id }
            },
            { new: true },
            (err, docs) => {
                if(!err) res.send(docs);
                else return res.status(400).send(err);
            }
        );
    } catch (error) {
        return res.status(400).send(error);
    }    

}


module.exports.unlikePost = async (req, res) => {
    console.log(req.params.id,req.body.id)
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    try {
        await PostModel.findByIdAndUpdate(

            req.params.id,
            {
                $pull : { likers : req.body.id }
            },
            { new: true },
            (err, docs) => {
                
                if(err) return res.status(400).send(err);
            }

        );
        await UserModel.findByIdAndUpdate(
            req.body.id,
            {
                $pull : { likes : req.params.id }
            },
            { new: true },
            (err, docs) => {
                console.log(docs);
                if(!err) res.send(docs);
                else return res.status(400).send(err);
            }
        );
    } catch (error) {
        return res.status(400).send(error);
    }    


}



module.exports.commentPost = (req,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);


    try {
        return PostModel.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    comments:{
                        commenterId: req.body.commenterId,
                        commenterPseudo: req.body.commenterPseudo,
                        text : req.body.text,
                        timestamp: new Date().getTime()

                    }
                }
            },
            {new : true},
            (err,docs) => {
                if (!err) return res.send(docs);
                else return res.status(400).send(err)
            }
            
        )
        
    } catch (err){
        return res.status(400).send(err)
        
    }

}

module.exports.editCommentPost = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);


    try{
        return PostModel.findById(//on a identier l'ariticle par l id 
        req.params.id,
        (err,docs) =>{
            const theComment = docs.comments.find((comment) =>  
                comment._id.equals(req.body.commentId)
                //trouver le commentaire a edit
            );

            if (!theComment) return res.status(404).send('comment not found')//revoi 404 si commentaire pas trouver
            theComment.text = req.body.text; //theCommet et egal a la request.body.text quant t'aura fai passer pour edit le comment


            return docs.save((err) => {
                if (!err) return res.status(200).send(docs);
                return res.status(500).send(err);
            })


            })

    } catch (err) {
        return res.status(400).send(err)

    }
    
}


module.exports.deleteCommentPost = (req,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);


    try {
        //on a identier l'ariticle par l id 
        return PostModel.findByIdAndUpdate(
        req.params.id,
        {
            $pull:{
                comments:{
                    _id: req.body.commentId,
                }
            }
        },
        {new:true},
        (err,docs) =>{
            if(!err) return res.send(docs);
            else return res.status(400).send(err)
        }
        )

    } catch (err){
        return res.status(400).send(err)
    }
    
}
