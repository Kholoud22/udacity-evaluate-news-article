// based on specific regex we validate on the url if it's valid or not
const urlValidator = url => {
    // the regex ref is https://stackoverflow.com/questions/20674528/regex-pattern-for-url-in-javascript
    return new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi).test(url)
}
export { urlValidator }
