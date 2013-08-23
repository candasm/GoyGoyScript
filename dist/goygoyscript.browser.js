GoyGoyScript.load = function(url, callback, options) {
  var xhr;
  if (options == null) {
    options = {};
  }
  options.sourceFiles = [url];
  xhr = window.ActiveXObject ? new window.ActiveXObject('Microsoft.XMLHTTP') : new window.XMLHttpRequest();
  xhr.open('GET', url, true);
  if ('overrideMimeType' in xhr) {
    xhr.overrideMimeType('text/plain');
  }
  xhr.onreadystatechange = function() {
    var _ref;
    if (xhr.readyState === 4) {
      if ((_ref = xhr.status) === 0 || _ref === 200) {
        GoyGoyScript.run(xhr.responseText, options);
      } else {
        throw new Error("Could not load " + url);
      }
      if (callback) {
        return callback();
      }
    }
  };
  return xhr.send(null);
};

GoyGoyScript.run = function(code, options) {
  if (options == null) {
    options = {};
  }
  options.bare = true;
  options.shiftLine = true;
  return Function(compile(code, options))();
};


if (typeof window === "undefined" || window === null) {
  return;
}

compile = function(code, options) {
  return GoyGoyScript.turkishToEnglish(code);
}

var runScripts,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

runScripts = function() {
  var goygoys, goygoytypes, execute, index, length, s, scripts;
  scripts = window.document.getElementsByTagName('script');
  goygoytypes = ['text/goygoyscript'];
  goygoys = (function() {
    var _i, _len, _ref, _results;
    _results = [];
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      s = scripts[_i];
      if (_ref = s.type, __indexOf.call(goygoytypes, _ref) >= 0) {
        _results.push(s);
      }
    }
    return _results;
  })();
  index = 0;
  length = goygoys.length;
  (execute = function() {
    var mediatype, options, script;
    script = goygoys[index++];
    mediatype = script != null ? script.type : void 0;
    if (__indexOf.call(goygoytypes, mediatype) >= 0) {
      if (script.src) {
        return GoyGoyScript.load(script.src, execute, options);
      } else {
        GoyGoyScript.run(script.innerHTML, options);
        return execute();
      }
    }
  })();
  return null;
};



if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', runScripts, false);
} else {
  window.attachEvent('onload', runScripts);
}