const Todo = require("../models/todoModel")

class TodosController 
{
    getAll = () => {
        return (req, res, next) => {
            res.status(200).json({
                success: true,
                method: "todo getall"
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

module.exports = new TodosController();