import express from 'express';
const router = express.Router();

router.get('/:complaintId', (req, res) => {
  res.json({ status: 'submitted', timeline: [] });
});

export default router;
