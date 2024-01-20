export const registerUser = async (req, res) => {
    try {
        const { name, email, age, password } = req.body;
        console.log({ name, email, age, password })
        console.log(req.files.photo);
        res.status(201).json({
            success: true,
            message: "User created successfully."
        })
    } catch (error) {
        console.log(error);
    }
}