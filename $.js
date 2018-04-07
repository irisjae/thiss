module .exports = fn =>
	function () {
		return fn (this) .apply (this, arguments)
	}
