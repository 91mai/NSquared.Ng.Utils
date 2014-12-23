module NSquared.Ng.Utils {
    export class UrlUtility {
        GetQuerystring(name: string) {
            try {
                var hash = document.location.hash;
                var match = RegExp('[?&]' + name + '=([^&]*)')
                    .exec(document.location.search);
                return match && decodeURIComponent(decodeURIComponent(match[1].replace(/\+/g, ' ')));
            }
            catch (e) {
                return null;
            }
        }

        //// Source code from 
        //// http://stackoverflow.com/questions/6953944/how-to-add-parameters-to-a-url-that-already-contains-other-parameters-and-maybe
        AppendParameter(url: string, key: string, value: string, atStart= false): string {
            var replaceDuplicates = true;

            //// Get url without hash
            var urlhash = '';
            var urlLength = url.length;
            if (url.indexOf('#') > 0) {
                urlLength = url.indexOf('#');
                urlhash = url.substring(url.indexOf('#'), url.length);
            }

            var sourceUrl = url.substring(0, urlLength);

            //// Get url search part
            var urlParts = sourceUrl.split("?");
            var newQueryString = "";

            //// Get new parameter query string
            if (urlParts.length > 1) {
                var parameters = urlParts[1].split("&");
                for (var i = 0; (i < parameters.length); i++) {
                    var parameterParts = parameters[i].split("=");
                    if (!(replaceDuplicates && parameterParts[0] == key)) {
                        if (newQueryString == "")
                            newQueryString = "?";
                        else
                            newQueryString += "&";
                        newQueryString += parameterParts[0] + "=" + (parameterParts[1] ? parameterParts[1] : '');
                    }
                }
            }
            if (newQueryString == "")
                newQueryString = "?";

            //// Append to url
            if (atStart) {
                newQueryString = '?' + key + "=" + value + (newQueryString.length > 1 ? '&' + newQueryString.substring(1) : '');
            } else {
                if (newQueryString !== "" && newQueryString != '?')
                    newQueryString += "&";
                newQueryString += key + "=" + (value ? value : '');
            }
            return urlParts[0] + newQueryString + urlhash;
        }
    }

    angular.module('NSquared.Ng.Utils')
           .factory('UrlUtility', () => new UrlUtility());
} 