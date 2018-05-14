const dateFormat = new (function () {
  const MMMMs = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const transferKeywords = {
    YYYY: d => d.getFullYear(),
    YY: d => String(d.getFullYear()).substr(2,2),
    MMMM: d => MMMMs[d.getMonth()],
    MMM: d => MMMMs[d.getMonth()].substr(0, 3),
    MM: d => String(d.getMonth() + 1).length === 2 ? d.getMonth() + 1 : '0' + String(d.getMonth() + 1),
    M: d => d.getMonth() + 1,
    DD: d => String(d.getDate()).length === 2 ? d.getDate() : '0' + d.getDate(),
    D: d => d.getDate(),
  };
  this.toString = function (v, d = new Date()) {
    let r = v;
    for (const keyword in transferKeywords) {
      const mustacheWrap = `{{${ keyword }}}`;
      if (v.search(mustacheWrap) !== -1) {
        r = r.replace(new RegExp(mustacheWrap, 'g'), transferKeywords[keyword](d));
      }
    }
    return r;
  };
})();

export default dateFormat;