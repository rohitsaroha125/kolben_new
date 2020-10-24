(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 460,
	height: 380,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.tapbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("AgfAfQgNgNAAgSQAAgSANgNQAOgNARAAQASAAANANQAOAOAAARQAAASgOANQgNAOgSAAQgRAAgOgOg");
	this.shape.setTransform(360,346.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BFBFBF").s().p("AgvAwQgVgUAAgcQAAgbAVgVQATgUAcAAQAcAAAVAUQAUAVAAAbQAAAcgUAUQgVAVgcAAQgcAAgTgVg");
	this.shape_1.setTransform(85.4,281.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFBFBF").s().p("AhoANIAAgZIDRAAIAAAZg");
	this.shape_2.setTransform(107,284.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BFBFBF").s().p("AiVANIAAgZIErAAIAAAZg");
	this.shape_3.setTransform(111.4,278.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFBFBF").s().p("AgvAwQgVgUAAgcQAAgbAVgVQATgUAcAAQAcAAAVAUQAUAVAAAbQAAAcgUAUQgVAVgcAAQgcAAgTgVg");
	this.shape_4.setTransform(16.4,281.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BFBFBF").s().p("AjVCCIAAkDIGrAAIAAEDg");
	this.shape_5.setTransform(30.9,237.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B6B6B").s().p("AgnAoIAAhPIBPAAIAABPg");
	this.shape_6.setTransform(187.6,344.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B6B6B").s().p("Ag7ANIAAgZIB3AAIAAAZg");
	this.shape_7.setTransform(111.9,343.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B6B6B").s().p("Ag7ANIAAgZIB3AAIAAAZg");
	this.shape_8.setTransform(92.4,343.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6B6B6B").s().p("AheANIAAgZIC9AAIAAAZg");
	this.shape_9.setTransform(19,346.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BFBFBF").s().p("Ai+AXIAAgtIF9AAIAAAtg");
	this.shape_10.setTransform(172.5,280.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BFBFBF").s().p("AibANIAAgZIE3AAIAAAZg");
	this.shape_11.setTransform(169,306.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BFBFBF").s().p("AibANIAAgZIE3AAIAAAZg");
	this.shape_12.setTransform(169,298.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BFBFBF").s().p("AibANIAAgZIE3AAIAAAZg");
	this.shape_13.setTransform(169,290.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BFBFBF").s().p("Ai+AXIAAgtIF9AAIAAAtg");
	this.shape_14.setTransform(172.5,251.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BFBFBF").s().p("Ah2ANIAAgZIDtAAIAAAZg");
	this.shape_15.setTransform(165.3,261.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BFBFBF").s().p("Ai+AXIAAgtIF9AAIAAAtg");
	this.shape_16.setTransform(172.5,227.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BFBFBF").s().p("Ap6AXIAAgtIT1AAIAAAtg");
	this.shape_17.setTransform(73,304.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BFBFBF").s().p("AkBAXIAAgtIIDAAIAAAtg");
	this.shape_18.setTransform(88.2,227.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BFBFBF").s().p("AhpANIAAgZIDTAAIAAAZg");
	this.shape_19.setTransform(38,284.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BFBFBF").s().p("AiVANIAAgZIErAAIAAAZg");
	this.shape_20.setTransform(42.4,278.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BFBFBF").s().p("AhpANIAAgZIDTAAIAAAZg");
	this.shape_21.setTransform(125.9,254.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BFBFBF").s().p("AjiANIAAgZIHFAAIAAAZg");
	this.shape_22.setTransform(85.1,254.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BFBFBF").s().p("AiVANIAAgZIErAAIAAAZg");
	this.shape_23.setTransform(114.1,245.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BFBFBF").s().p("Ah2ANIAAgZIDtAAIAAAZg");
	this.shape_24.setTransform(165.3,237.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BFBFBF").s().p("AiVANIAAgZIErAAIAAAZg");
	this.shape_25.setTransform(77.4,245.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BFBFBF").s().p("AlyANIAAgZILkAAIAAAZg");
	this.shape_26.setTransform(99.5,237.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6B6B6B").s().p("AifANIAAgZIE/AAIAAAZg");
	this.shape_27.setTransform(25.5,340.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6B6B6B").s().p("Ag8ANIAAgZIB5AAIAAAZg");
	this.shape_28.setTransform(72.4,343.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#444444").s().p("Ag/AHIAAgNIB/AAIAAANg");
	this.shape_29.setTransform(302.2,354.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#444444").s().p("Ag/AHIAAgNIB/AAIAAANg");
	this.shape_30.setTransform(322.1,354.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#444444").s().p("Ag/AHIAAgNIB/AAIAAANg");
	this.shape_31.setTransform(341.3,354.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1A1A1A").s().p("AgocIQg5AAgogoQgpgoAAg5QAAgrAZgjQAXgiAmgQIC4hYIEqAAIAAg/IhzAAIAAgQIkCAAIgRg/Ig5AAQgGAAgEgEQgEgFAAgFQAAgGAEgEQAEgEAGAAIAxAAIgUhHIBslNIorrtIov2kQg4gFgigoQgWgZgPguQgmgcgTggIiOhvQgUAHgTAAQgpAAgdgdQgdgdAAgqQAAgpAdgdQAdgdApAAQAnAAAdAaQAcAaADAmICEAkIC9hUIA/AnQA+AvgCAnQAAAGgCAFIADgDICOBxQAmAJAOAeIACAFIRSN4IASgUICdB4IgOAOIFUEJIAOgQIAqAiIAAAMIAKAAIAoAkIATgWIAKALIgKAZIBpBXQAXgPAeAAQAqAAAfAfQAfAcgBArQABAtggAeIAANTICpAAIAAAtQALABAIAIQAIAJAAALIAAD+QAAAMgIAIQgIAJgLAAIAAAfIoGAAIAAAQIiJAAIAAA/IDQAAIDuBYQAnAQAXAiQAYAjAAArQAAA5goAoQgpAog4AAgAAeSdIESAAIAAgnIi+jngAEEP+IAsA2IAAhgIBBAAIgBgPIhVgTgAD1PrIASg9IhSgTgATlCcIAAM4IApAAIAAtLQgTAOgWAFgAR+O9IAAAXIA5AAIAArdIgvgOImYKsQADAHABAHIAAAxIEIAAIAAgXgAGrK+IgzBHIBVAAIAXDPIBEAAIAAgxQABgJAFgIIh/jXgAFoOuIgrhmIgDAAIgaBXIBIAPgACBNbIAhAoIBrAXIAZhSIifAAgAKoOJIAZAAIAqhGIhEhvgAJpMwQAFAFAAAIIAABMIAoAAIAAimQAAgmgbgRIgdgKIhbAAQgUAAgWAGIBwC8IAAgnQAAgIAGgFQAFgGAHAAQAIAAAGAGgACAi8QAMAIAIAMQAKAQADARIJQPBIGbqzQgRgPgLgUQgKgWAAgYQAAgPAFgOIiniCIAAgPIgQAIIgrgkIARgVIlTkPIgQARIiPiCIAQgTIw2tjgABhMzIAPguIAEAAIAXg6IiPgjgAFUMFIANAAIA8hUIAJgGIlMotgAEiMFIgDgKIgUAKIAXAAgACIMFIBaAAIAzgaIh4gcgAEQLXIg6iZIgyCAIBsAZgAgDKVICUAkIA7iVIgDgHgAJeKQIANACQAOAEAMAHInksTQgEAagUAPIAlA5IgLA0IAfBBIAHAYQABAegdAYIEjHoQAXgHAcAAgAgbKIIACAEIDYh+IiigbgAgpJ3IAziHIisgdgAC8H6IhRjQIhHC3ICYAZgAiyG9IDDAhIBRjNIgDgHgAjCGoIBNjBIj4glgAisGkID0ihIiqgZgABWDzIhbjyIhWDXICxAbgAl6CtIEMAoIBfjrIgHgSgAnKAlIAZBAIAqA6IFrjZIgVg0Igmg8gAnQATIFvjNIgCgDIkFgwgAnbgCIBhjvIjLglgABbidQgFAFAAAIQAAAHAFAFQAFAFAIAAQAHAAAGgFQAEgFABgHQgBgIgEgFQgGgFgHAAQgIAAgFAFgAqk1tIgWAbIg/AwILqSTIAzgjIAagLQAegKAWAFIsCznQACAcgWAggAhxjTIiej4IhSDMIDwAsgApQkwIADAGIDaAoIBWjYgApIlJIEjiiIjUgwgApalOIBPjRIiwgogAkyoBIiDjNIg9ChIDAAsgAq/pbIC6AqIBDivgArIprID+iFIgHgLIitgjgArSqDIBCifIiKgcgAnesRIhkicIg0B+ICYAegAsjtTIABABICZAfIA5iKgAsjtoIDJhlIiTgcgAsxt3IAyh2IhngUgApkvhIhUiFIguBrICCAagAtvwWIABABIB2AXIAzh3gAtJykQgHAIAAALQAAALAHAHQAJAIALAAQAKAAAIgIQAIgHAAgLQAAgLgIgIQgIgIgKAAQgLAAgJAIgAuvy9IAEAKICRhNIgGgJgAuW1BQgGAFAAAIQAAAIAGAGQAFAFAIAAQAIAAAGgFQAFgGAAgIQAAgIgFgFQgGgGgIAAQgIAAgFAGgArg24QgHAGAAAKQAAAJAHAHQAGAHALAAQAJAAAHgHQAGgHAAgJQAAgKgGgGQgHgHgJAAQgKAAgHAHgAuS4RIA3BWQBCgiAOgGQAUgIAcACIiAhnQgKAugtARgA2C6vQgFAFABAGQgBAHAFAFQAFAFAGAAQAIAAAEgFQAFgFAAgHQAAgGgFgFQgFgFgHAAQgGAAgFAFg");
	this.shape_32.setTransform(238.3,180.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EAEAEA").s().p("AvHJKQgPgBgMgKQgLgLAAgQIAAxHQAAgPALgLQAMgLAPAAIePAAQAPAAAMALQALALAAAPIAARHQAAAQgLALQgLAKgQABg");
	this.shape_33.setTransform(100.6,267.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1A1A1A").s().p("AvHCpQgPAAgMgLQgLgLAAgQIAAkFQAAgPALgMQAMgLAPAAIePAAQAQAAALALQALAMAAAPIAAEFQAAAQgLALQgLALgQAAg");
	this.shape_34.setTransform(100.6,343.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,388.3,360.2);


(lib.tap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1A1A").s().p("Ag/J7QglgbgDgoQgCgZAJgPQAFgIAGgDQAEgCAEADQAEABABAGQAEAkAfAZQAdAWAZgDQAVgCARgOQASgPAEgSQADgMgFgQQgEgQgLgNQgTgZgXgBQgtAAgLgPQgMgQAAgWQgBgJAEgfIgMAAIhKjiIBbhwIAAq9IAbAAIAAK1IAoAxIAArkIAJAAIAALvIACACIBNAAIgKBjQgWByg7BHIgJAAIAAAmIAFAAQAYAAAWAMQAWAMASAWQASAYAIAcQAHAcgGAZQgHAigfAaQgfAbgnAEIgNABQgngBgigZgAguD4IB2AAQAHgIAHglIAFgkIiZAAg");
	this.shape.setTransform(13.4,66.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.9,132.2);


(lib.header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag7ANIAAgZIB3AAIAAAZg");
	this.shape.setTransform(142.6,37.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7ANIAAgZIB3AAIAAAZg");
	this.shape_1.setTransform(94.4,37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8ANIAAgZIB5AAIAAAZg");
	this.shape_2.setTransform(118.4,37.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah4ANIAAgZIDxAAIAAAZg");
	this.shape_3.setTransform(40.1,40.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AirAQIAAggIFXAAIAAAgg");
	this.shape_4.setTransform(45.3,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSATQgIgJAAgKQAAgJAIgJQAIgHAKAAQALAAAIAHQAIAJAAAJQAAAKgIAJQgIAHgLABQgJgBgJgHg");
	this.shape_5.setTransform(189.5,37.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSATQgIgJAAgKQAAgJAIgJQAJgHAJAAQALAAAHAHQAJAJgBAJQABAKgJAJQgHAHgLABQgJgBgJgHg");
	this.shape_6.setTransform(178.3,37.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguAuQgTgTAAgbQAAgaATgTQAUgUAaAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgaAAgUgUg");
	this.shape_7.setTransform(16.1,35.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3853D8").s().p("AvHCpQgPAAgMgLQgLgLAAgQIAAkFQAAgPALgMQAMgLAPAAIePAAQAQAAALALQALAMAAAPIAAEFQAAAQgLALQgLALgQAAg");
	this.shape_8.setTransform(100.6,37);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1A1A1A").s().p("APJBpIvZjHIu4DHIgBAAQgEAAgBgEQgBgEAFgBIO5jIIACAAIPaDIQAFABgBAEQgBAEgEAAIgBAAg");
	this.shape_9.setTransform(100.8,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.3,54);


// stage content:
(lib.construction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ÐšÐ°Ñ€ÐºÐ°Ñ_1
	this.ikNode_2 = new lib.header();
	this.ikNode_2.setTransform(147.6,176.7,0.999,0.999,0,0,0,100.9,27.2);

	this.ikNode_1 = new lib.tap();
	this.ikNode_1.setTransform(146.8,20.4,0.999,0.999,0.4,0,0,13.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.8,rotation:0.4,x:146.8,y:20.4}},{t:this.ikNode_2,p:{rotation:0,x:147.6,y:176.7,regY:27.2,regX:100.9}}]}).to({state:[{t:this.ikNode_1,p:{regX:13.9,regY:0.9,rotation:1.2,x:146.9,y:20.6}},{t:this.ikNode_2,p:{rotation:1.7,x:145.3,y:176.6,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:2,x:146.8,y:20.6}},{t:this.ikNode_2,p:{rotation:3.4,x:143.1,y:176.6,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:2.8,x:146.8,y:20.6}},{t:this.ikNode_2,p:{rotation:5.1,x:140.9,y:176.7,regY:27.3,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:3.7,x:146.7,y:20.6}},{t:this.ikNode_2,p:{rotation:6.7,x:138.7,y:176.4,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:4.5,x:146.8,y:20.5}},{t:this.ikNode_2,p:{rotation:8.4,x:136.5,y:176.3,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:5.3,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:10.1,x:134.4,y:176.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:6.1,x:146.8,y:20.5}},{t:this.ikNode_2,p:{rotation:11.7,x:132.1,y:176,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:6.9,x:146.8,y:20.5}},{t:this.ikNode_2,p:{rotation:13.4,x:129.9,y:175.7,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:7.7,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:15.1,x:127.8,y:175.5,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:1,rotation:8.5,x:146.7,y:20.6}},{t:this.ikNode_2,p:{rotation:16.8,x:125.5,y:175.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:9.3,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:18.4,x:123.4,y:174.9,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.9,regY:0.9,rotation:10.1,x:146.9,y:20.6}},{t:this.ikNode_2,p:{rotation:20.1,x:121.3,y:174.6,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.9,regY:0.9,rotation:10.9,x:146.9,y:20.5}},{t:this.ikNode_2,p:{rotation:21.8,x:119.1,y:174.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:11.7,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:23,x:117,y:173.8,regY:27.2,regX:101}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:1,rotation:12.5,x:146.7,y:20.6}},{t:this.ikNode_2,p:{rotation:24.2,x:114.6,y:173.3,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:1,rotation:13.4,x:146.6,y:20.6}},{t:this.ikNode_2,p:{rotation:25.4,x:112.5,y:172.9,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:14.2,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:26.6,x:110.2,y:172.3,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.8,rotation:15,x:146.7,y:20.4}},{t:this.ikNode_2,p:{rotation:27.8,x:108,y:171.8,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.8,rotation:15.9,x:146.7,y:20.4}},{t:this.ikNode_2,p:{rotation:29,x:105.8,y:171.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:16.7,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:30.2,x:103.6,y:170.7,regY:27.3,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:17.5,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:31.4,x:101.4,y:170,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:18.3,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:32.7,x:99.3,y:169.3,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:18,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:31.5,x:100.1,y:169.6,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.9,regY:0.9,rotation:17.6,x:146.8,y:20.5}},{t:this.ikNode_2,p:{rotation:30.3,x:101,y:169.9,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:17.3,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:29,x:101.9,y:170.1,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.8,rotation:17,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:27.8,x:102.9,y:170.4,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:16.6,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:26.6,x:103.8,y:170.6,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.8,rotation:16.3,x:146.7,y:20.4}},{t:this.ikNode_2,p:{rotation:25.4,x:104.6,y:170.9,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:15.9,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:24.2,x:105.6,y:171.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:15.6,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:23,x:106.4,y:171.3,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.8,rotation:15.2,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:21.8,x:107.4,y:171.7,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:14.9,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:20.6,x:108.2,y:171.8,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:13.8,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:19,x:111.2,y:172.6,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:12.6,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:17.4,x:114.2,y:173.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:11.5,x:146.5,y:20.6}},{t:this.ikNode_2,p:{rotation:15.7,x:117.2,y:173.8,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:1,rotation:10.4,x:146.5,y:20.7}},{t:this.ikNode_2,p:{rotation:14.1,x:120.2,y:174.3,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:9.3,x:146.5,y:20.5}},{t:this.ikNode_2,p:{rotation:12.5,x:123.2,y:174.8,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:8.2,x:146.5,y:20.5}},{t:this.ikNode_2,p:{rotation:10.8,x:126.3,y:175.3,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:7,x:146.6,y:20.6}},{t:this.ikNode_2,p:{rotation:9.2,x:129.3,y:175.8,regY:27.3,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:5.9,x:146.5,y:20.5}},{t:this.ikNode_2,p:{rotation:7.6,x:132.3,y:175.9,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.9,regY:0.9,rotation:4.8,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:5.9,x:135.5,y:176.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:3.7,x:146.6,y:20.6}},{t:this.ikNode_2,p:{rotation:4.3,x:138.5,y:176.4,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:2.5,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:2.7,x:141.6,y:176.5,regY:27.2,regX:101}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.9,regY:0.9,rotation:1.4,x:146.7,y:20.6}},{t:this.ikNode_2,p:{rotation:1.1,x:144.5,y:176.6,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:0.3,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:-0.6,x:147.7,y:176.5,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-0.8,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:-2.2,x:150.7,y:176.5,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.9,regY:0.9,rotation:-2,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:-3.8,x:153.8,y:176.4,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-3.1,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-5.5,x:157,y:176.2,regY:27.2,regX:101}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-4.2,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:-7.1,x:159.9,y:176,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.9,regY:0.9,rotation:-5.3,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:-8.7,x:162.9,y:175.6,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-6.5,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:-10.4,x:166,y:175.3,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-7.6,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:-12,x:169,y:174.9,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.9,regY:0.9,rotation:-8.7,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:-13.6,x:172,y:174.5,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-9.8,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:-15.2,x:175,y:174,regY:27.3,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:1,rotation:-10.9,x:146.7,y:20.6}},{t:this.ikNode_2,p:{rotation:-16.9,x:178.1,y:173.3,regY:27.2,regX:101}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-12.1,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:-18.5,x:181,y:172.7,regY:27.3,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:1,rotation:-13.2,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:-20.1,x:184,y:172,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-14.3,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:-21.8,x:187,y:171.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-15.1,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-22.7,x:189,y:170.6,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.8,rotation:-15.9,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-23.5,x:191.1,y:170,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-16.7,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:-24.4,x:193.1,y:169.4,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.8,rotation:-17.5,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-25.3,x:195.1,y:168.7,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-18.2,x:146.7,y:20.4}},{t:this.ikNode_2,p:{rotation:-26.2,x:197.1,y:168,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-19,x:146.7,y:20.4}},{t:this.ikNode_2,p:{rotation:-27.1,x:199.1,y:167.4,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:1,rotation:-19.8,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:-28,x:201.2,y:166.6,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-20.6,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-28.9,x:203.1,y:165.8,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:1,rotation:-21.4,x:146.7,y:20.6}},{t:this.ikNode_2,p:{rotation:-29.8,x:205.2,y:165,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-22.1,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:-30.6,x:207.1,y:164.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-21.6,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:-29.9,x:205.8,y:164.8,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-21.1,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:-29.2,x:204.7,y:165.2,regY:27.2,regX:101}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-20.6,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:-28.5,x:203.4,y:165.8,regY:27.3,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-20.1,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-27.8,x:202,y:166.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-19.6,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-27.1,x:200.8,y:166.7,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:1,rotation:-19.1,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:-26.4,x:199.4,y:167.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-18.6,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-25.7,x:198.2,y:167.7,regY:27.3,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-18.1,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-25,x:196.8,y:168.1,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-17.6,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-24.3,x:195.7,y:168.5,regY:27.2,regX:101}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-17.1,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-23.6,x:194.3,y:168.9,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-16.6,x:146.6,y:20.3}},{t:this.ikNode_2,p:{rotation:-22.9,x:193,y:169.5,regY:27.3,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-15.8,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-21.8,x:190.8,y:170,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-15,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-20.7,x:188.9,y:170.5,regY:27.2,regX:101}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.8,rotation:-14.2,x:146.5,y:20.2}},{t:this.ikNode_2,p:{rotation:-19.7,x:186.6,y:171.1,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.8,rotation:-13.4,x:146.5,y:20.3}},{t:this.ikNode_2,p:{rotation:-18.6,x:184.6,y:171.7,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:1,rotation:-12.6,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:-17.5,x:182.4,y:172.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:1,rotation:-11.8,x:146.6,y:20.5}},{t:this.ikNode_2,p:{rotation:-16.4,x:180.3,y:172.7,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-11,x:146.6,y:20.3}},{t:this.ikNode_2,p:{rotation:-15.3,x:178.1,y:173.1,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-10.2,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-14.2,x:176,y:173.6,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-9.4,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-13.1,x:173.8,y:173.9,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.9,regY:1,rotation:-8.6,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:-12,x:171.7,y:174.4,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-7.8,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-10.9,x:169.5,y:174.7,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-7,x:146.5,y:20.3}},{t:this.ikNode_2,p:{rotation:-9.9,x:167.4,y:175,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-6.2,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-8.8,x:165.2,y:175.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.9,regY:0.9,rotation:-5.4,x:146.7,y:20.4}},{t:this.ikNode_2,p:{rotation:-7.7,x:163.2,y:175.6,regY:27.3,regX:101}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-4.6,x:146.5,y:20.4}},{t:this.ikNode_2,p:{rotation:-6.6,x:160.9,y:175.7,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-3.8,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-5.5,x:158.6,y:175.9,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-3,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-4.4,x:156.5,y:176,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.9,regY:1,rotation:-2.2,x:146.7,y:20.5}},{t:this.ikNode_2,p:{rotation:-3.3,x:154.3,y:176.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-1.4,x:146.5,y:20.4}},{t:this.ikNode_2,p:{rotation:-2.2,x:152.1,y:176.2,regY:27.2,regX:100.9}}]},1).to({state:[{t:this.ikNode_1,p:{regX:13.8,regY:0.9,rotation:-0.6,x:146.6,y:20.4}},{t:this.ikNode_2,p:{rotation:-1.1,x:150,y:176.5,regY:27.3,regX:100.9}}]},1).wait(1));

	// tap-body.svg
	this.instance = new lib.tapbody();
	this.instance.setTransform(242.3,186.3,1,1,0,0,0,194.1,180.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(276.7,196.2,389.8,360.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;