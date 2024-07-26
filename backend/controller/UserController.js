import UserModel from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json({
            message: e.message,
        });
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch (e) {
        res.status(404).json({
            message: e.message,
        });
    }
}

export const saveUser = async (req, res) => {
    const user = new UserModel(req.body);
    try {
        const insertUser = await user.save();
        res.status(201).json(insertUser);
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
}

export const updateUser = async (req, res) => {
    try {
        const updateUser = await UserModel.updateOne(
            {
                _id: req.params.id
            },
            {
                $set: req.body
            });
        res.status(200).json(updateUser);
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const deleteUser = await UserModel.deleteOne(
            {
                _id: req.params.id
            });
        res.status(200).json(deleteUser);
    } catch (e) {
        res.status(400).json({
            message: e.message,
        });
    }
}