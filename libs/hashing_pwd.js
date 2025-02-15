import argon2 from 'argon2'

export const hashPassword = async (password) => {
  try {
    const hash = await argon2.hash(password, {
      type: argon2.argon2id,
      memoryCost: 2 ** 16,
      timeCost: 5,
      paralleism: 1
    });
    return hash;
  } catch (err) {
    console.error(err)
  }
}


export const verifyHash = async (password, hash) => {
  try {
    if (await argon2.verify(hash, password)) {
      console.log('Correct!')
    } else {
      console.log('Wrong!')
    }
  } catch (err) {
      console.log(err)
  }  
}

export default { hashPassword, verifyHash };