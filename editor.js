var html = document.getElementById("html");
var css = document.getElementById("css");
var csssrc = document.getElementById("csssrc");
var js = document.getElementById("js");
var jssrc = document.getElementById("jssrc");
var code = document.getElementById("code").contentWindow.document;
document.body.onkeyup = function() {
  code.open();
  code.writeln("<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width, initial-scale=1'><meta charset='utf-8'><link href='" + csssrc.value + "' rel='stylesheet'><style>" + css.value + "</style></head><body>" + html.value + "</body><script src='" + jssrc.value +"'>" + js.value + "</script></html>");
  code.close();
};
var textAreas = document.getElementsByTagName("textarea");
for(var i = 0; i < textAreas.length; i++) {
	textAreas[i].addEventListener("keydown", function(event) {
		if(event.key === 'Tab') {
			event.preventDefault();
			var start = this.selectionStart;
			var end = this.selectionEnd;
			this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
			this.selectionStart = this.selectionEnd = start + 4;
		}
	});
}
