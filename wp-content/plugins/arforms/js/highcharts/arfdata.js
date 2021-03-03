(function(x){"object"===typeof module&&module.exports?module.exports=x:x(Highcharts)})(function(x){(function(h){var x=h.win.document,t=h.each,C=h.objectEach,D=h.pick,z=h.inArray,A=h.isNumber,E=h.splat,F=h.fireEvent,B,r;B=Array.prototype.some?function(a,b,c){Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var f=0,e=a.length;f<e&&!0!==b.call(c,a[f],f,a);f++);};var y=function(a,b){this.init(a,b)};h.extend(y.prototype,{init:function(a,b){this.options=a;this.chartOptions=b;this.columns=a.columns||this.rowsToColumns(a.rows)||[];this.firstRowAsNames=D(a.firstRowAsNames,!0);this.decimalRegex=a.decimalPoint&&new RegExp("^(-?[0-9]+)"+a.decimalPoint+"([0-9]+)$");this.rawColumns=[];this.columns.length?this.dataFound():(this.parseCSV(),this.parseTable(),this.parseGoogleSpreadsheet())},getColumnDistribution:function(){var a=this.chartOptions,b=this.options,c=[],f=function(a){return(h.seriesTypes[a||"line"].prototype.pointArrayMap||[0]).length},e=a&&a.chart&&a.chart.type,d=[],g=[],n=0,k;t(a&&a.series||[],function(a){d.push(f(a.type||e))});t(b&&b.seriesMapping||[],function(a){c.push(a.x||0)});0===c.length&&c.push(0);t(b&&b.seriesMapping||[],function(b){var c=new r,w=d[n]||f(e),q=h.seriesTypes[((a&&a.series||[])[n]||{}).type||e||"line"].prototype.pointArrayMap||["y"];c.addColumnReader(b.x,"x");C(b,function(a,b){"x"!==b&&c.addColumnReader(a,b)});for(k=0;k<w;k++)c.hasReader(q[k])||c.addColumnReader(void 0,q[k]);g.push(c);n++});b=h.seriesTypes[e||"line"].prototype.pointArrayMap;void 0===b&&(b=["y"]);this.valueCount={global:f(e),xColumns:c,individual:d,seriesBuilders:g,globalPointArrayMap:b}},dataFound:function(){this.options.switchRowsAndColumns&&(this.columns=this.rowsToColumns(this.columns));this.getColumnDistribution();this.parseTypes();!1!==this.parsed()&&this.complete()},parseCSV:function(a){function b(a,b,d,c){function e(b){g=a[b];l=a[b-1];m=a[b+1]}function f(a){p.length<v+1&&p.push([a]);p[v][p[v].length-1]!==a&&p[v].push(a)}function k(){G>v||v>H||(!isNaN(parseFloat(h))&&isFinite(h)?(h=parseFloat(h),f("number")):isNaN(Date.parse(h))?f("string"):(h=h.replace(/\//g,"-"),f("date")),n.length<v+1&&n.push([]),d||n[v].push(h),h="",++v)}b=0;var g="",l="",m="",h="",v=0;if(a.trim().length&&"#"!==a.trim()[0]){for(;b<a.length;b++){e(b);if("#"===g)return;if('"'===g)for(e(++b);b<a.length&&('"'!==g||'"'===l||'"'===m);){if('"'!==g||'"'===g&&'"'!==l)h+=g;e(++b)}else c&&c[g]?c[g](g,h)&&k():g===w?k():h+=g}k();if(v<n.length&&!d)for(c=v;c<n.length;c++)n[c].push(0)}}function c(a){var c=0,f=0,g=!1,g=function(a,b){","===a&&f++;"."===a&&c++;if("undefined"!==typeof u[a]&&(isNaN(parseFloat(b))||!isFinite(b))&&!isNaN(Date.parse(b)))return u[a]++,!0},k={";":g,",":g,"\t":g};B(a,function(a,d){if(13<d)return!0;b(a,d,!0,k)});g=u[";"]>u[","]?";":",";d.decimalPoint||(d.decimalPoint=c>f?".":",",e.decimalRegex=new RegExp("^(-?[0-9]+)"+d.decimalPoint+"([0-9]+)$"));return g}function f(a,b){var c,f,g=0,k=!1,n=[],m=[],l;if(!b||b>a.length)b=a.length;for(;g<b;g++)if("undefined"!==typeof a[g]&&a[g]&&a[g].length)for(c=a[g].trim().replace(/\//g," ").replace(/\-/g," ").split(" "),f=["","",""],l=0;l<c.length;l++)l<f.length&&(c[l]=parseInt(c[l],10),c[l]&&(m[l]=!m[l]||m[l]<c[l]?c[l]:m[l],"undefined"!==typeof n[l]?n[l]!==c[l]&&(n[l]=!1):n[l]=c[l],31<c[l]?f[l]=100>c[l]?"YY":"YYYY":12<c[l]&&31>=c[l]?(f[l]="dd",k=!0):f[l].length||(f[l]="mm")));if(k){for(l=0;l<n.length;l++)!1!==n[l]?12<m[l]&&"YY"!==f[l]&&"YYYY"!==f[l]&&(f[l]="YY"):12<m[l]&&"mm"===f[l]&&(f[l]="dd");a=f.join("/");return(d.dateFormats||e.dateFormats)[a]?a:(F("invalidDateFormat"),h.error("Could not deduce date format"),"YYYY-mm-dd")}return"YYYY-mm-dd"}var e=this,d=this.options||a,g=d.csv,n;a=d.startRow||0;var k=d.endRow||Number.MAX_VALUE,G=d.startColumn||0,H=d.endColumn||Number.MAX_VALUE,w,q=0,p=[],u={",":0,";":0,"\t":0};n=this.columns=this.columns||[];if(g){g=g.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split(d.lineDelimiter||"\n");if(!a||0>a)a=0;if(!k||k>g.length)k=g.length;d.itemDelimiter?w=d.itemDelimiter:(w=null,w=c(g));for(q=a;q<k;q++)b(g[q],q);d.columnTypes&&0!==d.columnTypes.length||!p.length||!p[0].length||"date"!==p[0][1]||d.dateFormat||(d.dateFormat=f(n[0]));this.dataFound()}return n},parseTable:function(){var a=this.options,b=a.table,c=this.columns,f=a.startRow||0,e=a.endRow||Number.MAX_VALUE,d=a.startColumn||0,g=a.endColumn||Number.MAX_VALUE;b&&("string"===typeof b&&(b=x.getElementById(b)),t(b.getElementsByTagName("tr"),function(a,b){b>=f&&b<=e&&t(a.children,function(a,e){("TD"===a.tagName||"TH"===a.tagName)&&e>=d&&e<=g&&(c[e-d]||(c[e-d]=[]),c[e-d][b-f]=a.innerHTML)})}),this.dataFound())},parseGoogleSpreadsheet:function(){var a=this,b=this.options,c=b.googleSpreadsheetKey,f=this.columns,e=b.startRow||0,d=b.endRow||Number.MAX_VALUE,g=b.startColumn||0,n=b.endColumn||Number.MAX_VALUE,k,h;c&&jQuery.ajax({dataType:"json",url:"https://spreadsheets.google.com/feeds/cells/"+c+"/"+(b.googleSpreadsheetWorksheet||"od6")+"/public/values?alt\x3djson-in-script\x26callback\x3d?",error:b.error,success:function(b){b=b.feed.entry;var c,q=b.length,p=0,u=0,m;for(m=0;m<q;m++)c=b[m],p=Math.max(p,c.gs$cell.col),u=Math.max(u,c.gs$cell.row);for(m=0;m<p;m++)m>=g&&m<=n&&(f[m-g]=[],f[m-g].length=Math.min(u,d-e));for(m=0;m<q;m++)c=b[m],k=c.gs$cell.row-1,h=c.gs$cell.col-1,h>=g&&h<=n&&k>=e&&k<=d&&(f[h-g][k-e]=c.content.$t);t(f,function(a){for(m=0;m<a.length;m++)void 0===a[m]&&(a[m]=null)});a.dataFound()}})},trim:function(a,b){"string"===typeof a&&(a=a.replace(/^\s+|\s+$/g,""),b&&/^[0-9\s]+$/.test(a)&&(a=a.replace(/\s/g,"")),this.decimalRegex&&(a=a.replace(this.decimalRegex,"$1.$2")));return a},parseTypes:function(){for(var a=this.columns,b=a.length;b--;)this.parseColumn(a[b],b)},parseColumn:function(a,b){var c=this.rawColumns,f=this.columns,e=a.length,d,g,h,k,t=this.firstRowAsNames,r=-1!==z(b,this.valueCount.xColumns),w=[],q=this.chartOptions,p,u=(this.options.columnTypes||[])[b],q=r&&(q&&q.xAxis&&"category"===E(q.xAxis)[0].type||"string"===u);for(c[b]||(c[b]=[]);e--;)d=w[e]||a[e],h=this.trim(d),k=this.trim(d,!0),g=parseFloat(k),void 0===c[b][e]&&(c[b][e]=h),q||0===e&&t?a[e]=""+h:+k===g?(a[e]=g,31536E6<g&&"float"!==u?a.isDatetime=!0:a.isNumeric=!0,void 0!==a[e+1]&&(p=g>a[e+1])):(g=this.parseDate(d),r&&A(g)&&"float"!==u?(w[e]=d,a[e]=g,a.isDatetime=!0,void 0!==a[e+1]&&(d=g>a[e+1],d!==p&&void 0!==p&&(this.alternativeFormat?(this.dateFormat=this.alternativeFormat,e=a.length,this.alternativeFormat=this.dateFormats[this.dateFormat].alternative):a.unsorted=!0),p=d)):(a[e]=""===h?null:h,0!==e&&(a.isDatetime||a.isNumeric)&&(a.mixed=!0)));r&&a.mixed&&(f[b]=c[b]);if(r&&p&&this.options.sort)for(b=0;b<f.length;b++)f[b].reverse(),t&&f[b].unshift(f[b].pop())},dateFormats:{"YYYY-mm-dd":{regex:/^([0-9]{4})[\-\/\.]([0-9]{2})[\-\/\.]([0-9]{2})$/,parser:function(a){return Date.UTC(+a[1],a[2]-1,+a[3])}},"YYYY/mm/dd":{regex:/^([0-9]{4})[\-\/\.]([0-9]{2})[\-\/\.]([0-9]{2})$/,parser:function(a){return Date.UTC(+a[1],a[2]-1,+a[3])}},"dd/mm/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(a){return Date.UTC(+a[3],a[2]-1,+a[1])},alternative:"mm/dd/YYYY"},"mm/dd/YYYY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,parser:function(a){return Date.UTC(+a[3],a[1]-1,+a[2])}},"dd/mm/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(a){var b=+a[3],b=b>(new Date).getFullYear()-2E3?b+1900:b+2E3;return Date.UTC(b,a[2]-1,+a[1])},alternative:"mm/dd/YY"},"mm/dd/YY":{regex:/^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/,parser:function(a){return Date.UTC(+a[3]+2E3,a[1]-1,+a[2])}}},parseDate:function(a){var b=this.options.parseDate,c,f,e=this.options.dateFormat||this.dateFormat,d;if(b)c=b(a);else if("string"===typeof a){if(e)(b=this.dateFormats[e])||(b=this.dateFormats["YYYY-mm-dd"]),(d=a.match(b.regex))&&(c=b.parser(d));else for(f in this.dateFormats)if(b=this.dateFormats[f],d=a.match(b.regex)){this.dateFormat=f;this.alternativeFormat=b.alternative;c=b.parser(d);break}d||(d=Date.parse(a),"object"===typeof d&&null!==d&&d.getTime?c=d.getTime()-6E4*d.getTimezoneOffset():A(d)&&(c=d-6E4*(new Date(d)).getTimezoneOffset()))}return c},rowsToColumns:function(a){var b,c,f,e,d;if(a)for(d=[],c=a.length,b=0;b<c;b++)for(e=a[b].length,f=0;f<e;f++)d[f]||(d[f]=[]),d[f][b]=a[b][f];return d},parsed:function(){if(this.options.parsed)return this.options.parsed.call(this,this.columns)},getFreeIndexes:function(a,b){var c,f=[],e=[],d;for(c=0;c<a;c+=1)f.push(!0);for(a=0;a<b.length;a+=1)for(d=b[a].getReferencedColumnIndexes(),c=0;c<d.length;c+=1)f[d[c]]=!1;for(c=0;c<f.length;c+=1)f[c]&&e.push(c);return e},complete:function(){var a=this.columns,b,c=this.options,f,e,d,g,h=[],k;if(c.complete||c.afterComplete){for(d=0;d<a.length;d++)this.firstRowAsNames&&(a[d].name=a[d].shift());f=[];e=this.getFreeIndexes(a.length,this.valueCount.seriesBuilders);for(d=0;d<this.valueCount.seriesBuilders.length;d++)k=this.valueCount.seriesBuilders[d],k.populateColumns(e)&&h.push(k);for(;0<e.length;){k=new r;k.addColumnReader(0,"x");d=z(0,e);-1!==d&&e.splice(d,1);for(d=0;d<this.valueCount.global;d++)k.addColumnReader(void 0,this.valueCount.globalPointArrayMap[d]);k.populateColumns(e)&&h.push(k)}0<h.length&&0<h[0].readers.length&&(k=a[h[0].readers[0].columnIndex],void 0!==k&&(k.isDatetime?b="datetime":k.isNumeric||(b="category")));if("category"===b)for(d=0;d<h.length;d++)for(k=h[d],e=0;e<k.readers.length;e++)"x"===k.readers[e].configName&&(k.readers[e].configName="name");for(d=0;d<h.length;d++){k=h[d];e=[];for(g=0;g<a[0].length;g++)e[g]=k.read(a,g);f[d]={data:e};k.name&&(f[d].name=k.name);"category"===b&&(f[d].turboThreshold=0)}a={series:f};b&&(a.xAxis={type:b},"category"===b&&(a.xAxis.uniqueNames=!1));c.complete&&c.complete(a);c.afterComplete&&c.afterComplete(a)}},update:function(a,b){var c=this.chart;a&&(a.afterComplete=function(a){c.update(a,b)},h.data(a))}});h.Data=y;h.data=function(a,b){return new y(a,b)};h.wrap(h.Chart.prototype,"init",function(a,b,c){var f=this;b&&b.data?(f.data=new y(h.extend(b.data,{afterComplete:function(e){var d,g;if(b.hasOwnProperty("series"))if("object"===typeof b.series)for(d=Math.max(b.series.length,e.series.length);d--;)g=b.series[d]||{},b.series[d]=h.merge(g,e.series[d]);else delete b.series;b=h.merge(e,b);a.call(f,b,c)}}),b),f.data.chart=f):a.call(f,b,c)});r=function(){this.readers=[];this.pointIsArray=!0};r.prototype.populateColumns=function(a){var b=!0;t(this.readers,function(b){void 0===b.columnIndex&&(b.columnIndex=a.shift())});t(this.readers,function(a){void 0===a.columnIndex&&(b=!1)});return b};r.prototype.read=function(a,b){var c=this.pointIsArray,f=c?[]:{},e;t(this.readers,function(d){var e=a[d.columnIndex][b];c?f.push(e):f[d.configName]=e});void 0===this.name&&2<=this.readers.length&&(e=this.getReferencedColumnIndexes(),2<=e.length&&(e.shift(),e.sort(),this.name=a[e.shift()].name));return f};r.prototype.addColumnReader=function(a,b){this.readers.push({columnIndex:a,configName:b});"x"!==b&&"y"!==b&&void 0!==b&&(this.pointIsArray=!1)};r.prototype.getReferencedColumnIndexes=function(){var a,b=[],c;for(a=0;a<this.readers.length;a+=1)c=this.readers[a],void 0!==c.columnIndex&&b.push(c.columnIndex);return b};r.prototype.hasReader=function(a){var b,c;for(b=0;b<this.readers.length;b+=1)if(c=this.readers[b],c.configName===a)return!0}})(x)});