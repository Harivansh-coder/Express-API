import { Request, Response, NextFunction } from "express";

const validateRequest =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
      });

      next();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

export default validateRequest;
