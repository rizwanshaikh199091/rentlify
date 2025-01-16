const otpCache: Map<string, string> = new Map();

export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendOTP = (phoneNumber: string): void => {
  const otp = generateOTP();
  otpCache.set(phoneNumber, otp);
  console.log(`OTP for ${phoneNumber}: ${otp}`); 
};

export const verifyOTP = (phoneNumber: string, otp: string): boolean => {
  const cachedOtp = otpCache.get(phoneNumber);
  if (cachedOtp && cachedOtp === otp) {
    otpCache.delete(phoneNumber); 
    return true;
  }
  return false;
};
