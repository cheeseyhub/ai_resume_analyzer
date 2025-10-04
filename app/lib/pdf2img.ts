import { fromPath } from "pdf2pic";
import type { FileMetaData } from "types";

export async function convertPdfToImage(file: FileMetaData) {
  const options = {
    density: 100,
    saveFilename: "converted_image",
    savePath: "images",
    format: "png",
    width: 600,
    height: 800,
  };
  const convert = fromPath(file.path, options);
  const pageToConvertAsImage = 1;

  return convert(pageToConvertAsImage, { responseType: "image" }).then(
    (resolve) => {
      return resolve;
    }
  );
}
