trueResponse = (res, message, data = null, meta = null) => {
    res.status(200).json({
        status : true,
        message: message,
        data   : data,
        meta   : meta,
        error  : []
    });
};

falseResponse = (res, message, error = null) => {
    res.status(200).json({
        status : false,
        message: message,
        data   : data,
        meta   : meta,
        error  : error
    });
};

module.exports = {
    trueResponse,
    falseResponse
}