const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
      if (!req.body || !allowedRoles.includes(req.body.role)) {
          return res.status(403).json({ message: 'Forbidden' });
      }
      next();
  };
};

export default roleMiddleware;
