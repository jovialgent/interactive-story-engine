var _ = require('underscore');

var helpers = {};


helpers.hasNull = function(args){
	var testNull = _.reduce(args, function(memo, val){ 
		return memo || (_.isNull(val) || _.isUndefined(val));
	}, false);

	return testNull;

}



module.exports = helpers;