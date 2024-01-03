import UserService from "../services/user-service.js";

const userService = new UserService();

async function signUp(req, res) {
    try {
        const data = req.body;
        const response = await userService.signUp(data);
        return res.status(201).json({
            success: true,
            message: "Successfully created a user",
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while creating a user",
            data: {},
            err: error
        });
    }
}

async function signIn(req, res) {
    try {
        const data = req.body;
        const response = await userService.signIn(data);
        return res.status(201).json({
            success: true,
            message: "Successfully signin a user",
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while signin",
            data: {},
            err: error
        });
    }
}

export {
    signUp,
    signIn
}