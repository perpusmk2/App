const fs = require("fs").promises;
const path = require("path");

async function clearFolder(folderPath) {
  try {
    const files = await fs.readdir(folderPath);

    if (files.length === 0) {
      console.log("Folder is empty.");
      return;
    } else {
      for (const file of files) {
        await fs.unlink(path.join(folderPath, file), (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
      console.log("Files deleted successfully.");
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = clearFolder;
