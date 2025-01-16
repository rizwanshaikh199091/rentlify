import { User } from "../model/user.model";


export const findUserByPhoneNumber = async (phoneNumber: string) => {
  return await User.findOne({ phoneNumber });
};

export const createUser = async (phoneNumber: string) => {
  return await User.create({ phoneNumber });
};

export const verifyUser = async (phoneNumber: string) => {
  return await User.findOneAndUpdate(
    { phoneNumber },
    { isVerified: true },
    { new: true }
  );
};
