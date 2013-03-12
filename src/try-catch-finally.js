define(function defineTryCatchFinally() {

	function TryCatch(tryBlock) {

		var errorToHandle;

		try {
			tryBlock();
		}
		catch (e) {
			errorToHandle = e;
		}

		this['catch'] = function (errorType, handleError) {
			if (errorNotHandled() && arguments.length > 0) {
				if (isUndefined(handleError)) {
					handleError = errorType;
					errorType = undefined;
					handleError(errorToHandle);
					setErrorHandled();
				}
				else if (errorToBeHandledIsType(errorType)) {
					handleError(errorToHandle);
					setErrorHandled();
				}
			}
			return this;
		};

		this['finally'] = function (callback) {
			if(callback) callback();
			if (errorNotHandled()) throw errorToHandle;
		};

		function setErrorHandled() { errorToHandle = undefined; }

		function isUndefined(subject) { return typeof subject === 'undefined'; }

		function errorNotHandled() { return !isUndefined(errorToHandle); }

		function errorToBeHandledIsType(errorType) {

			if (typeof errorType === 'string') {
				return errorToHandle.constructor.name === errorType
					|| new RegExp('^\\s*function ' + errorType + '()').test(errorToHandle.constructor.toString()); // for IE
			}

			return errorToHandle instanceof errorType
				|| errorToHandle.constructor.name === errorType.name;

		}
		
	}

	return function _try(tryBlock) {
		return new TryCatch(tryBlock);
	};

});