import mongoose from 'mongoose';
import Joi from 'joi';

// 1. Define schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName:  { type: String, required: true },
    email:     { type: String, required: true, unique: true },
    password:  { type: String, required: true }
});

// 2. Create the User model
const User = mongoose.model("User", userSchema);

// 3. Define a validate function
export const validate = (user) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(user);
};

// 4. Export both the model and the validate function
export default User;
