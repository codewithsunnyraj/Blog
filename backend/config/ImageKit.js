import dotenv from "dotenv";
dotenv.config();
import ImageKit from "imagekit";

const publicKeys = process.env.IMAGEKIT_PUBLIC_KEY;
const privateKeys = process.env.IMAGEKIT_PRIVATE_KEY;
const urlEndpoints = process.env.IMAGEKIT_URL_ENDPOINT;
if (!publicKeys || !privateKeys || !urlEndpoints) {
  throw new Error(
    "ImageKit credentials are missing from environment variables."
  );
}
var imagekit = new ImageKit({
  publicKey: publicKeys,
  privateKey: privateKeys,
  urlEndpoint: urlEndpoints,
});

export default imagekit;
