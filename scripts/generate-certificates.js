const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const certsDir = path.join(projectRoot, 'public', 'certificates');
const outputFile = path.join(projectRoot, 'public', 'certificates.json');

function getCertificates() {
  if (!fs.existsSync(certsDir)) {
    return [];
  }

  const files = fs.readdirSync(certsDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((file) => /\.(pdf|png|jpe?g)$/i.test(file));

  return files.map((file) => ({
    name: file,
    url: `/certificates/${encodeURIComponent(file)}`,
  }));
}

fs.writeFileSync(outputFile, JSON.stringify(getCertificates(), null, 2));
