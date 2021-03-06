/* Jison generated parser */
var parser = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"statements":4,"EOF":5,"statement":6,"selector":7,"declaration":8,"SEP_SPACE":9,"LITERAL":10,"selector_part":11,"SEP_DOT":12,"selector_prop":13,"SEP_GT":14,"selector_unit":15,"ID":16,"OBJ_BEGIN":17,"OBJ_END":18,"selector_obj":19,"ARR_BEGIN":20,"ARR_END":21,"ANY":22,"NUMBER":23,"QUOTE":24,"content":25,"selector_obj_unit":26,"EQ":27,"WHITESPACE":28,"CONTENT":29,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"SEP_SPACE",10:"LITERAL",12:"SEP_DOT",14:"SEP_GT",16:"ID",17:"OBJ_BEGIN",18:"OBJ_END",20:"ARR_BEGIN",21:"ARR_END",22:"ANY",23:"NUMBER",24:"QUOTE",27:"EQ",28:"WHITESPACE",29:"CONTENT"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,2],[6,4],[7,3],[7,1],[11,3],[11,3],[11,1],[13,1],[15,2],[15,3],[15,2],[15,1],[15,1],[15,2],[15,3],[19,1],[19,3],[26,1],[26,3],[8,2],[8,3],[25,1],[25,2]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
    walkerParse.result = this.$;
  
break;
case 2: this.$ = $$[$0-1].concat([$$[$0]]); 
break;
case 3: this.$ = [$$[$0]]; 
break;
case 4: this.$ = { selector: $$[$0] }; 
break;
case 5: this.$ = { selector: $$[$0-1], declaration: $$[$0] }; 
break;
case 6:
    this.$ = { selector: $$[$0-3], declaration: $$[$0], literal: true };
  
break;
case 7:
    this.$ = $$[$0-2].concat([$$[$0]]);
  
break;
case 8: this.$ = [$$[$0]]; 
break;
case 9:
    this.$ = { sep: '.', lhs: $$[$0-2], rhs: $$[$0] };
  
break;
case 10:
    this.$ = { sep: '>', lhs: $$[$0-2], rhs: $$[$0] };
  
break;
case 11: this.$ = { sep: '', unit: $$[$0] }; 
break;
case 13: this.$ = { type: 'any_object' }; 
break;
case 14: this.$ = { type: 'object', filters: $$[$0-1] }; 
break;
case 15: this.$ = { type: 'any_array' }; 
break;
case 16: this.$ = { type: 'any' }; 
break;
case 17: this.$ = { type: 'any_number' }; 
break;
case 18: this.$ = { type: 'any_string' }; 
break;
case 19: this.$ = { type: 'string', content: $$[$0-1] }; 
break;
case 20: this.$ = [$$[$0]]; 
break;
case 21: this.$ = $$[$0-2].concat([$$[$0]]); 
break;
case 22: this.$ = { type: 'has', id: $$[$0] }; 
break;
case 23: this.$ = { type: 'eq', lhs: $$[$0-2], rhs: $$[$0] }; 
break;
case 24: walkerParse.whitespace = $$[$0-1].length - 1; this.$ = $$[$0]; 
break;
case 25:
    if ($$[$0-1].length - 1 < walkerParse.whitespace) {
      throw new Error('Not enough whitespace');
    }
    this.$ = $$[$0-2] + '\n' + $$[$0-1].substr(1, $$[$0-1].length - walkerParse.whitespace - 1) + $$[$0];
  
break;
case 27: this.$ = $$[$0-1] + $$[$0]; 
break;
}
},
table: [{3:1,4:2,6:3,7:4,11:5,15:6,17:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{1:[3]},{5:[1,12],6:13,7:4,11:5,15:6,17:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{5:[2,3],17:[2,3],20:[2,3],22:[2,3],23:[2,3],24:[2,3]},{5:[2,4],8:14,9:[1,15],17:[2,4],20:[2,4],22:[2,4],23:[2,4],24:[2,4],28:[1,16]},{5:[2,8],9:[2,8],12:[1,17],14:[1,18],17:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8],28:[2,8]},{5:[2,11],9:[2,11],12:[2,11],14:[2,11],17:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11],28:[2,11]},{16:[1,22],18:[1,19],19:20,26:21},{21:[1,23]},{5:[2,16],9:[2,16],12:[2,16],14:[2,16],17:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16],28:[2,16]},{5:[2,17],9:[2,17],12:[2,17],14:[2,17],17:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17],28:[2,17]},{24:[1,24],25:25,29:[1,26]},{1:[2,1]},{5:[2,2],17:[2,2],20:[2,2],22:[2,2],23:[2,2],24:[2,2]},{5:[2,5],17:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5],28:[1,27]},{10:[1,28],11:29,15:6,17:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{25:30,29:[1,26]},{13:31,16:[1,32]},{15:33,17:[1,7],20:[1,8],22:[1,9],23:[1,10],24:[1,11]},{5:[2,13],9:[2,13],12:[2,13],14:[2,13],17:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13],28:[2,13]},{9:[1,35],18:[1,34]},{9:[2,20],18:[2,20]},{9:[2,22],18:[2,22],27:[1,36]},{5:[2,15],9:[2,15],12:[2,15],14:[2,15],17:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15],28:[2,15]},{5:[2,18],9:[2,18],12:[2,18],14:[2,18],17:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18],28:[2,18]},{24:[1,37],29:[1,38]},{5:[2,26],17:[2,26],20:[2,26],22:[2,26],23:[2,26],24:[2,26],28:[2,26],29:[2,26]},{25:39,29:[1,26]},{8:40,28:[1,16]},{5:[2,7],9:[2,7],12:[1,17],14:[1,18],17:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7],28:[2,7]},{5:[2,24],17:[2,24],20:[2,24],22:[2,24],23:[2,24],24:[2,24],28:[2,24],29:[1,38]},{5:[2,9],9:[2,9],12:[2,9],14:[2,9],17:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9],28:[2,9]},{5:[2,12],9:[2,12],12:[2,12],14:[2,12],17:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12],28:[2,12]},{5:[2,10],9:[2,10],12:[2,10],14:[2,10],17:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10],28:[2,10]},{5:[2,14],9:[2,14],12:[2,14],14:[2,14],17:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14],28:[2,14]},{16:[1,22],26:41},{16:[1,42]},{5:[2,19],9:[2,19],12:[2,19],14:[2,19],17:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19],28:[2,19]},{5:[2,27],17:[2,27],20:[2,27],22:[2,27],23:[2,27],24:[2,27],28:[2,27],29:[2,27]},{5:[2,25],17:[2,25],20:[2,25],22:[2,25],23:[2,25],24:[2,25],28:[2,25],29:[1,38]},{5:[2,6],17:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6],28:[1,27]},{9:[2,21],18:[2,21]},{9:[2,23],18:[2,23]}],
defaultActions: {12:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};

var walkerParse = (function(parser) {
  return function(str) {
    parser.parse(str);
    return walkerParse.result;
  };
})(parser);

if (typeof exports == 'object') {
  exports.mparse = walkerParse;
}

if (typeof window == 'object') {
  window.walkerParse = walkerParse;
}
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0: this.popState(); return 16; 
break;
case 1: return 28; 
break;
case 2: return 29; 
break;
case 3: this.popState(); 
break;
case 4: this.popState(); return 5; 
break;
case 5: return 29; 
break;
case 6: this.popState(); return 24; 
break;
case 7: return 29; 
break;
case 8: this.popState(); return 24; 
break;
case 9: this.begin('decl'); return 28; 
break;
case 10: return 10; 
break;
case 11: return 16; 
break;
case 12: return 23; 
break;
case 13: return 22; 
break;
case 14: return 17; 
break;
case 15: return 18; 
break;
case 16: return 20; 
break;
case 17: return 21; 
break;
case 18: return 27; 
break;
case 19: this.begin('quote'); return 24; 
break;
case 20: this.begin('squote'); return 24; 
break;
case 21: return 14; 
break;
case 22: return 9; 
break;
case 23: return 12; 
break;
case 24:
break;
case 25: return 5; 
break;
}
};
lexer.rules = [/^(?:\n[a-zA-Z0-9_$-]+)/,/^(?:\n[ \t]+)/,/^(?:[^\x00\n]+)/,/^(?:\n+)/,/^(?:$)/,/^(?:[^\x00\n'])/,/^(?:')/,/^(?:[^\x00\n"])/,/^(?:")/,/^(?:\n[ \t]+)/,/^(?:literal\b)/,/^(?:[a-zA-Z0-9_$-]+)/,/^(?:number\b)/,/^(?:\*)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:=)/,/^(?:")/,/^(?:')/,/^(?:[ \t]*>[ \t]*)/,/^(?:[ \t]+)/,/^(?:\.)/,/^(?:\n+)/,/^(?:$)/];
lexer.conditions = {"decl":{"rules":[0,1,2,3,4],"inclusive":false},"quote":{"rules":[7,8],"inclusive":false},"squote":{"rules":[5,6],"inclusive":false},"INITIAL":{"rules":[9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}