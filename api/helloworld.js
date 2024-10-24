// api/helloworld.js

module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json({
            status: 'ok',
            message: 'helloworld'
        });
    } else {
        res.status(405).json({
            status: 'error',
            message: 'Method Not Allowed'
        });
    }
};
