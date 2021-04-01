import { Request, Response } from 'express'
import userModel from '../models/userModels'
import dotenv from 'dotenv'
import md5 from 'md5'

dotenv.config()

async function getAll(req: Request, res: Response) {
  try {
    const data = await userModel.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function register(req: Request, res: Response) {
  try {
    await userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.SECRET as string & { asBytes: true }),
    })

    return res.status(201).send({ message: 'Registered with Success!!!' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function update(req: Request, res: Response) {
  try {
    await userModel.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password, process.env.SECRET as string & { asBytes: true }),
      },
    })

    return res.status(201).json({ message: 'Update realized Successfuly!' })
  } catch (error) {
    return res.status(400).json(error)
  }
}

async function deleteUm(req: Request, res: Response) {
  try {
    await userModel.findByIdAndRemove(req.params.id)

    return res.status(200).send({ message: 'Tudo Apagado!!' })
  } catch (error) {
    return res.status(400).send(error)
  }
}

export default { getAll, register, deleteUm, update }
