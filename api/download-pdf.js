import fs from 'fs'
import path from 'path'

export default async (req, res) => {
  try {
    const { fileName } = req.query
    const filePath = path.join(process.cwd(), 'public', fileName)
    const fileContent = fs.readFileSync(filePath)
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Length', fileContent.length)
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`)
    res.end(fileContent)
  } catch (error) {
    console.log(error)
  }
}