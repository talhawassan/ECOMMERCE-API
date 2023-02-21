exports.testRouter = async (req,res) => {
       try {
        const {username} = req.body
        console.log(username)
        res.status(200).json({
            status: true,
            message: 'router working',
            username
        })
       } catch (error) {
        
       }
}