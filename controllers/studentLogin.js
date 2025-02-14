
const studentLogin = async (req, res) => {
  const { code_id, password } = req.body;

  if (code_id === 'CODE202201045') {
    if (password === 'Demo_root@030') {
      res.status(200).json({ message: 'Infomation is correct!' })
    } else {
      res.status(404).json({ message: 'Infomation is correct!' })
    }
  } else {
    res.status(404).json({ message: 'Infomation is correct!' })
  }
}


export default studentLogin;