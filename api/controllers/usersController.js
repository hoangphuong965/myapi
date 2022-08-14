const User = require("../models/userMode")

class UsersController 
{
    signup = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                method: "user signup"
            })
        }
    }

    login = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                method: "user login"
            })
        }
    }

    update = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                method: "user update"
            })
        }
    }
    
    loggedInUser = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                method: "user loggedInUser"
            })
        }
    }
    
}

module.exports = new UsersController();