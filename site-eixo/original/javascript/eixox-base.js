String.prototype.parseHashtag = function(preUrl) {
	return this.replace(/[#]+\w+/g, function(t) {
		var tag = t.replace("#", "");
		return t.link(preUrl + tag) + " ";
	});
};