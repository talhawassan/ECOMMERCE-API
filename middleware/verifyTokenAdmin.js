const {verifyToken} = require('../middleware/auth')

exports.verifyTokenAndAdmin = (req, res, next) => {
      verifyToken(req, res, () => {
        if(req.user.isAdmin){
              next();
        } else {
            res.status(403).json('you are not authorized to do that')
        }
      })
}

