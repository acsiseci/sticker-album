class Utils {
  nowDate = () => {
    //Today's date , yyyy-mm-dd
    return new Date().toISOString().split("T")[0];
  };

  isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }

  totalExperienceCalc = (entryDate) => {
    let nowDate = this.nowDate();
    let _nowDate = new Date(nowDate);
    let _entryDate = new Date(entryDate);
    let diffTime = Math.abs(_entryDate - _nowDate);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    let diffYears = diffDays / 365;

    if (diffYears < 1) {
      let isPlus = this.isFloat(diffDays / 30);
      let mount = Math.round(diffDays / 30);
      let text = mount + (isPlus ? "+" : "") + " AY";
      return text;
    } else {
      let isPlus = this.isFloat(diffDays / 365);
      let year = Math.round(diffDays / 365);
      let text = year + (isPlus ? "+" : "") + " YIL";
      return text;
    }

    return "-";
  };
}

export default new Utils();
