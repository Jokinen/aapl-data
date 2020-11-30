import { Request, Response } from "express";

import AlphaVantageService from "./AlphaVantageService";

function validateRequest(req: Request) {
  // pass
}

async function appleController(req: Request, res: Response) {
  try {
    validateRequest(req);
    const { data } = await AlphaVantageService.getAppleData();

    return res.json(data);
  } catch (e) {
    return res.sendStatus(401);
  }
}

export default appleController;
