import jwt from 'jsonwebtoken';

// Function to generate a JWT and set it as an HTTP-only cookie
export const generateToken = (userId, res) => {

    // Generate a JWT token with the user's ID and a 7-day expiration
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d" // Token expires in 7 days
    });

    // Set the token as an HTTP-only cookie
    res.cookie('jwt', token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie lifespan in milliseconds (7 days)
        httpOnly: true, // Prevent access to the cookie via JavaScript (protect against XSS attacks)
        sameSite: 'strict', // Prevent cross-site requests (protect against CSRF attacks)
        secure: process.env.NODE_ENV !== "development" // Use HTTPS in production
    });

    // Return the generated token
    return token;
};
