export const convertToBase64 = (file: File, buffer: Buffer) => {
  return `data:${file.type};base64,${buffer.toString("base64")}`;
};
