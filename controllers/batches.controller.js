import { batchSchema } from '../libs/validateUserinput.js'

export const createBatch = async (req, res) => {
  const { batchName, batchCode } = req.body;
  
  try {
    const validatedData = batchSchema.parse({
      batchName,
      batchCode
    })
    res.status(200).json({ message: "Information validated", data: validatedData })
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }

}

export const getBatches = async (req, res) => { }

export const updateBatch = async (req, res) => { }

export const deleteBatch = async (req, res) => { }