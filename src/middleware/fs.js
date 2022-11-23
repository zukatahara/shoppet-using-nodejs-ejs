const fs = require('fs');

const deleteImage = async (value) => {
    const path = `public/image/${value}`;
    if (fs.existsSync(path)) {
        await fs.unlinkSync(path);
    }
}
module.exports = deleteImage;