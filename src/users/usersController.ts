import prisma from "../../config/prisma";
import { Request, Response } from "express";

export async function getUsers(req: Request, res: Response) {
  try {
    const response = await prisma.user.findMany();
    res.status(200).send({ users: response });
  } catch (error: any) {
    res.status(400).send({ error: "error GET" });
  }
}

export async function postUsers(req: Request, res: Response) {
  try {
    const response = await prisma.user.create({
      data: req.body,
    });
    res.status(200).send({ users: response });
  } catch (error: any) {
    res.status(400).send({ error: "error POST" });
  }
}
export async function putUsers(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const response = await prisma.user.update({
      where: { id },
      data: req.body,
    });
    res.status(200).send({ users: response });
  } catch (error: any) {
    res.status(400).send({ error: "error PUT" });
  }
}

export async function deleteUsers(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const response = await prisma.user.delete({
      where: { id },
    });
    res.status(200).send({ users: response });
  } catch (error: any) {
    res.status(400).send({ error: "error DELETE" });
  }
}
