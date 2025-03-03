const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    console.log("Decoded User:", req.user); // Debugging line
      if (!req.user || !allowedRoles.includes(req.user.role)) {
          return res.status(403).json({ message: 'Forbidden' });
      }
      next();
  };
};

export default roleMiddleware;
