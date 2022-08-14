const Contact = require("../models/contactModel")

class ContactsController 
{
    getAll = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                data: [
                    {fname: "hoang", lname: "phuong", phone: "023-144-554"},
                    {fname: "john", lname: "doe", phone: "025-124-534"},
                ]
            })
        }
    }

    create = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                
            })
        }
    }

    findById = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                
            })
        }
    }
    
    update = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                
            })
        }
    }
    
    delete = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                
            })
        }
    }
}

module.exports = new ContactsController();