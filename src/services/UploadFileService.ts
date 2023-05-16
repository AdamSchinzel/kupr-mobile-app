import * as FileSystem from "expo-file-system";

import { BACKEND_ENDPOINT } from "../../config/constants";
import { ADMIN_SECRET } from "@env";

const uploadFile = async (file: any) => {
  try {
    const rusult = await FileSystem.uploadAsync(`${BACKEND_ENDPOINT}/files/upload`, file.uri, {
      uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      fieldName: "file",
      mimeType: file?.mimeType || "image/png",
      headers: {
        "x-hasura-admin-secret": ADMIN_SECRET,
      },
    });

    console.log(rusult);

    return rusult.body;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default uploadFile;
