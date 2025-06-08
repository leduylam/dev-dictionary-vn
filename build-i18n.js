const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "core");
const outputDirs = {
  en: path.join(__dirname, "en"),
  vi: path.join(__dirname, "vi"),
};

// Tạo thư mục đích nếu chưa có
for (const lang in outputDirs) {
  if (!fs.existsSync(outputDirs[lang])) {
    fs.mkdirSync(outputDirs[lang], { recursive: true });
  }
}

// Đọc tất cả file JSON đầu vào
const files = fs
  .readdirSync(inputDir)
  .filter((f) => f.endsWith(".json") && !["build-i18n.js"].includes(f));

// Hàm format tên file
const getOutputFileName = (fileName) => {
  return (
    fileName
      .replace("-labels", "") // action-labels → action
      .replace("-messages", "") // toast-messages → toast
      .replace(".json", "") + ".json"
  );
};

files.forEach((file) => {
  const raw = JSON.parse(fs.readFileSync(path.join(inputDir, file), "utf-8"));
  const enData = {};
  const viData = {};

  for (const key in raw) {
    enData[key] = raw[key].en;
    viData[key] = raw[key].vi;
  }

  const outputFileName = getOutputFileName(file);

  fs.writeFileSync(
    path.join(outputDirs.en, outputFileName),
    JSON.stringify(enData, null, 2)
  );
  fs.writeFileSync(
    path.join(outputDirs.vi, outputFileName),
    JSON.stringify(viData, null, 2)
  );

  console.log(
    `✅ Đã tách ${file} thành en/${outputFileName} và vi/${outputFileName}`
  );
});
