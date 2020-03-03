import User from '../models/User';

export default async (req, res, next) => {
  const isAdmin = await User.findOne({
    where: { id: req.userId, role: 'admin' },
  });

  if (!isAdmin) {
    return res
      .status(401)
      .json({ error: 'You are not allowed to perform this task' });
  }

  return next();
};
