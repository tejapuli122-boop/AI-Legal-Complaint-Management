import express from 'express';
const router = express.Router();

// POST - Register user
router.post('/register', (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    // TODO: Validate input
    // TODO: Hash password
    // TODO: Save user to database
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Login
router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    // TODO: Validate user
    // TODO: Generate JWT token
    res.json({ token: 'jwt_token_here', user: {} });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
