import bycript from "bcryptjs";
const PROFILEDATA = "profileData"
export const encryptPassword = async (password: string) => {
  const salt = await bycript.genSalt(10);
  const keyPasswd = password + PROFILEDATA;
  const passwdHash = await bycript.hash(keyPasswd, salt);
  return passwdHash;
};

export const verifyPassword = async (
  password: string,
  passwordhash: string
) => {
  try {
    const passwordSalt = password + PROFILEDATA;
    const validate = await bycript.compareSync(passwordSalt, passwordhash);
    return validate;
  } catch (error) {
    return false;
  }
};
