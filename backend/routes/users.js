import express from "express";
import User, { validate } from "../moduls/user.models.js";
import bcrypt from 'bcrypt';

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (user)
            return res.status(409).send({ message: "User with given email already exists" });

        const saltRounds = Number(process.env.SALT) || 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "User created successfully" });

    } catch (error) {
        console.error("❌ Server error:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

export default router;
