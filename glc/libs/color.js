define(function() {

	function rgba(r, g, b, a) {
		var clr = Object.create(color);
		clr.setRGBA(r, g, b, a);
		return clr.toString();
	}

	function rgb(r, g, b) {
		return rgba(r, g, b, 1);
	}

	function randomRGB(min, max) {
		min = min || 0;
		max = max || 256;		
		return rgb(
			Math.floor(min + Math.random() * (max - min)), 
			Math.floor(min + Math.random() * (max - min)), 
			Math.floor(min + Math.random() * (max - min))
		);
	}

	function randomGray(min, max) {
		min = min || 0;
		max = max || 256;
		return gray(Math.floor(min + Math.random() * (max - min)));
	}

	function gray(shade) {
		return rgb(shade, shade, shade);
	}

	function num(num) {
		var red = num >> 16,
			green = num >> 8 & 0xff,
			blue = num & 0xff;
		return rgb(red, green, blue);
	}

	function randomHue(minH, maxH, s, v) {
		return hsv(minH + Math.random() * (maxH - minH), s, v);
	}

	function hsv(h, s, v) {
		var r, g, b,
			i = Math.floor(h / 60),
			f = h / 60 - i,
			p = v * (1 - s),
			q = v * (1 - f * s),
			t = v * (1 - (1 - f) * s);
		switch (i % 6) {
			case 0: r = v, g = t, b = p; break;
			case 1: r = q, g = v, b = p; break;
			case 2: r = p, g = v, b = t; break;
			case 3: r = p, g = q, b = v; break;
			case 4: r = t, g = p, b = v; break;
			case 5: r = v, g = p, b = q; break;
		}
		return rgb(
			Math.floor(r * 255),
			Math.floor(g * 255),
			Math.floor(b * 255)
		);
	}


	color = {
		r: 255,
		g: 255,
		b: 255,
		a: 1,

		setRGBA: function(r, g, b, a) {
			this.r = r;
			this.g = g;
			this.b = b;
			this.a = a;
			return this;
		},

		toString: function() {
			return "rgba(" + Math.floor(this.r) + "," + Math.floor(this.g) + "," + Math.floor(this.b) + "," + this.a + ")";
		}
	};

	return {
		rgb: rgb,
		rgba: rgba,
		randomRGB: randomRGB,
		randomGray: randomGray,
		gray: gray,
		num: num,
		hsv: hsv,
		randomHue: randomHue
	};
});