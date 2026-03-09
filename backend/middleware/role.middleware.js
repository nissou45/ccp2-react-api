import jwt from "jsonwebtoken";

export const roleMiddleware = (requiredRole) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // decoded doit contenir role si on veut filtrer par rôle
      if (!decoded.role || decoded.role !== requiredRole) {
        return res.status(403).json({ message: "Accès refusé" });
      }

      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Token invalide" });
    }
  };
};
