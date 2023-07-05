module.exports.responseObject = function(
    messageValue,
    dataValue,
    errorCodeValue,
    errorValue
) {
    return {
        message: messageValue,
        data: dataValue,
        errorCode: errorCodeValue,
        error: errorValue
    };
};