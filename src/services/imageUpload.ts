import { IMAGE_ENDPOINT } from "../../config/constants";

interface ResData {
  match: boolean;
}

export const uploadViaFetch = async (file: any, ref: string) => {
  const formData = new FormData();

  formData.append("file", {
    uri: file.uri,
    name: "file",
    type: "image/jpeg",
  });
  formData.append("ref", ref);

  try {
    const res = await fetch(`${IMAGE_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    const data: ResData = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Could not connect to server");
  }
};
