
const user = async (req, res) => {
  const { code_id, role } = req.params

  if (role === "lectuter") {
    if (code_id === "guest") {
      res.status(200).json({ message: "CODE staff" })
    }
  } else if (role === "student") {
    if (code_id === "code202201045")
      res.status(200).json({ message: "Abdullah" })
  }
}

export default user