const fs = require('fs');

const fsResult = async (value) => {
    try {

        const path = `public/image/${value}`;
        const result = await fs.unlinkSync(path);
        if (!result)
            // console.log(`Image deleted! `)
        return result
    } catch (error) {
        res.send('co loi')
    }
}
module.exports = fsResult;