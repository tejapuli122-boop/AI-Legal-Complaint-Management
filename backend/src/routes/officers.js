import express from 'express';
const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.json({ pendingComplaints: [] });
});

export default router;
