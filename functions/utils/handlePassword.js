import bcrypt from "bcrypt";

export const encryptPass = async (pass) => {
    const encryptedPass = await bcrypt.hash(pass, 10);
    return encryptedPass;
};


export const checkPass = async (pass, encryptedPass) => {
    const validPass = await bcrypt.compare(pass, encryptedPass)
    return validPass;
};