const interpolate = (value, session = {}, options = {}) => {
	let { leftDelimiter, rightDelimiter } = options;
	let result = value;
	// this simple solution would work if non-existent variables don't need to be replaced
	/*
	 const variableKeys = Object.keys(session);
	 variableKeys.forEach(key => {
	 const toReplace = `${leftDelimiter}${key}${rightDelimiter}`;
	 const value = session[key];
	 result = result.replace(toReplace, value);
	 })*/
	// this would work if delimiters are max. 1 character
	/*
	const delimiterIndexes = [];
	for (let i = 0; i < value.length; i++) {
		const char = value[i];
		if (char === leftDelimiter) {
			delimiterIndexes.push(i);
		} else if (char === rightDelimiter && delimiterIndexes.length) {
			const openingPos = delimiterIndexes[delimiterIndexes.length - 1];
			delimiterIndexes.pop();
			const varLength = i - 1 - openingPos;
			const variable = value.substring(openingPos + 1, varLength + openingPos + 1);
			const replacement = session[variable] || '';
			result = result.replace(`${leftDelimiter}${variable}${rightDelimiter}`, replacement);
		}
	}*/

	const regex = new RegExp(leftDelimiter + '(.*?)' + rightDelimiter, 'g');
	const matches = Array.from(new Set(value.match(regex)));
	matches.forEach(match => {
		const l = match.length;
		const variableName = match.substring(leftDelimiter.length, l - rightDelimiter.length);
		const replacement = session[variableName] || '';
		result = result.replace(match, replacement);
	});
	return result;
};

module.exports = { interpolate }