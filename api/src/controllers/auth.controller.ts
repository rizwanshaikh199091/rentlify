import { Request, Response } from 'express';
import { createUser, findUserByPhoneNumber, verifyUser } from '../dao/user.dao';
import { sendOTP, verifyOTP } from '../lib/otpService';


export const signup = async (req: Request, res: Response) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    return res.status(400).json({ message: 'Phone number is required.' });
  }

  let user = await findUserByPhoneNumber(phoneNumber);

  if (!user) {
    user = await createUser(phoneNumber);
  }

  sendOTP(phoneNumber);
  return res.status(200).json({ message: 'OTP sent successfully.', user });
};



export const login = async (req: Request, res: Response) => {
  const { phoneNumber } = req.body;

  if (!phoneNumber) {
    return res.status(400).json({ message: 'Phone number is required.' });
  }

  const user = await findUserByPhoneNumber(phoneNumber);

  if (!user) {
    return res.status(404).json({ message: 'User not found. Please sign up first.' });
  }

  sendOTP(phoneNumber);
  return res.status(200).json({ message: 'OTP sent successfully.', user });
};



export const verify = async (req: Request, res: Response) => {
  const { phoneNumber, otp } = req.body;

  if (!phoneNumber || !otp) {
    return res.status(400).json({ message: 'Phone number and OTP are required.' });
  }

  const isValid = verifyOTP(phoneNumber, otp);

  if (!isValid) {
    return res.status(400).json({ message: 'Invalid OTP.' });
  }

  const user = await verifyUser(phoneNumber);

  return res.status(200).json({ message: 'Phone number verified successfully.', user });
};
