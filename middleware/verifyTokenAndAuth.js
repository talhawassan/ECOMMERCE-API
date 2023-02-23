const {verifyToken} = require('../middleware/auth')

exports.verifyTokenAndAuthorization = (req, res, next) => {
      verifyToken(req, res, () => {
        if(req.user._id === req.params.id || req.user.isAdmin){
              next();
        } else {
            res.status(403).json('you are not authorized to do that')
        }
      })
}

